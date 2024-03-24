import { encodeFunctionData } from 'viem'

import { Api, ValidatorDepositJson } from "./PierTwoStakingApiBase";
import { ethereumBatchDeposit } from "../abi/ethereumBatchDeposit";

export enum EthereumValidatorStatus {
  WAITING_DEPOSIT_DATA_RETRIEVAL = 'WAITING_DEPOSIT_DATA_RETRIEVAL',
  WAITING_KEYGEN = 'WAITING_KEYGEN',
  WAITING_DEPOSIT = 'WAITING_DEPOSIT',
  WAITING_VC_DEPLOYMENT = 'WAITING_VC_DEPLOYMENT',
  PENDING_ACTIVATION = 'PENDING_ACTIVATION',
  ACTIVE = 'ACTIVE',
  ACTIVE_EXITING = 'ACTIVE_EXITING',
  EXITED = 'EXITED',
}

export enum SupportedNetworks {
  ethereum = 'ethereum'
}

export enum MnemonicStatus {
  ACTIVE = 'ACTIVE'
}

export const URL = {
  MAINNET: 'https://gw-1.api.test.piertwo.io', //TODO: add deployed mainnet url
  TESTNET: 'https://gw-1.api.test.piertwo.io' //TODO: add deployed testnet url
}

export const BATCH_DEPOSIT_CONTRACT_ADDRESS = {
  ETHEREUM_MAINNET: '0x12EB6257b03Bc63F9b0121FEc484150A6aDb0De7',
  ETHEREUM_TESNET: 'TODO'
}

export const ABI = {
  ETHEREUM_BATCH_DEPOSIT: ethereumBatchDeposit
}

const DEFAULT_CHECK_INTERVAL = 5000;

export type ConstructorArgs = ConstructorParameters<typeof Api<null>>[0] & {
  apiKey: string;
}

export class PierTwoStakingApi extends Api<null> {

  constructor(args: ConstructorArgs) {

    if(!args.apiKey) {
      throw new Error('apiKey is required')
    }

    if(!args.baseUrl) {
      throw new Error('baseUrl is required')
    }
    
    super({
      ...(args ? args : {}),
      baseApiParams: {
        ...(args?.baseApiParams ? args.baseApiParams : {}),
        headers: {
          ...(args?.baseApiParams?.headers ? args.baseApiParams.headers : {}),
          'api-key': args.apiKey
        }
      }
    });
  }

  utils = {
    /**
     * @description a promise that resolves when your mnemonic status is ACTIVE
     *
     * @tags utils
     */
    waitForActiveMnemonic: (args?: ({ interval?: number })) => {

      return new Promise(resolve => {

        const check = async () => {
          const account = await this.account.getAccount();
          if(account.data?.mnemonicStatus === MnemonicStatus.ACTIVE) {
            resolve(null);
            return;
          }

          await new Promise(resolveTimeout => setTimeout(resolveTimeout, args?.interval || DEFAULT_CHECK_INTERVAL));

          check();
        }

        check();
      })
    },

    /**
     * @description a promise that resolves when all validators associated to `stakeId`
     * reach `desiredStatus`
     *
     * @tags utils
     */
    waitForValidatorStatus: (args: {
      network: SupportedNetworks,
      desiredStatus: EthereumValidatorStatus
      stakeId: string,
      interval?: number
    }) => {

      const networkModule = this[args.network];

      return new Promise(resolve => {

        const check = async () => {
          const { data } = await networkModule.getStake(args.stakeId);

          const allStatusesMatch = data.validators.every(v => {
            return v.status === args.desiredStatus
          })

          if(allStatusesMatch){
            resolve(null);
            return;
          }

          await new Promise(resolveTimeout => setTimeout(resolveTimeout, args?.interval || DEFAULT_CHECK_INTERVAL));

          check();
        }

        check();
      })
    },

    /**
     * @description generate call data for a batch validator deposit
     * the data field returned from `ethereum.getDepositDataForStake` can be 
     * passed to this function
     *
     * @tags utils
     */
    generateBatchDepositCallData(args: {
      depositData: ValidatorDepositJson[]
    }) {
      const pubkeys: `0x${string}`[] = [];
      const withdrawalCredentials: `0x${string}`[] = [];
      const signatures: `0x${string}`[] = [];
      const depositDataRoots: `0x${string}`[] = [];

      for(const data of args.depositData) {
        pubkeys.push(`0x${data.pubkey}`);
        withdrawalCredentials.push(`0x${data.withdrawal_credentials}`);
        signatures.push(`0x${data.signature}`);
        depositDataRoots.push(`0x${data.deposit_data_root}`);
      }

      return encodeFunctionData({
        abi: ethereumBatchDeposit,
        functionName: 'batchDeposit',
        args: [pubkeys, withdrawalCredentials, signatures, depositDataRoots]
      })
    }
  }
}