import { Api } from "./PierTwoStakingApiBase";

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
  MAINNET: '', //TODO: add deployed mainnet url
  TESTNET: '' //TODO: add deployed testnet url
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
          const stake = await networkModule.getStake(args.stakeId);

          console.log(stake)
          const allStatusesMatch = stake.data?.validators.every(v => {
            v.status === args.desiredStatus
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
    }
  }
}