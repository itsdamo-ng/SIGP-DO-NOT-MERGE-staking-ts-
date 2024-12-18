/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

type UtilRequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export interface PaginationData {
  totalCount: number;
  pageSize: number;
  pageNumber: number;
}

export interface PaginatedApiResponseBase {
  data: object;
  message?: string;
  pagination: PaginationData;
}

export interface SolanaStakeAccount {
  customerId: number;
  stakePubkey: string;
  fromPubkey: string;
  stakeAuthority: string;
  withdrawAuthority: string;
  initialLamports: string;
  rentExemptionAmount: string;
  lamports: string;
  inactiveStake: string;
  status: string;
  reference: string;
  label: string;
  creationLastValidBlockHeight: number;
  activationEpoch: number;
  lastStatusSyncEpoch: number;
  performanceTotal: string;
  performance30d: string;
  performance7d: string;
}

export interface ApiResponseBase {
  data: object;
  message?: string;
}

export interface SolanaTransactionSignature {
  pubKey: string;
  /** secret key of signer, only present for stake creation where keypair is ephemeral */
  secretKey?: string;
  signature: string;
}

export interface BuildTransactionPayloadResponseDto {
  /**
   * serialized transaction
   * @example "800200080ac6f91611c...080900040200000000"
   */
  serialized: string;
  /**
   * pubkey of stake account
   * @example "8Htve3nXPsvXk88WrJHH6nQBQCjw4bSCJLuEpT6ArfMY"
   */
  stakePubkey?: string;
  /**
   * additional signatures to apply to transaction before submitting
   * @example [{"pubKey":"6V2Lfg1jvanitWUKWRDLTrWvbHvsMMbRuhQ3CTKY1FAq","signature":"2bfb03d5ce6263ba0f...7a24b6d00c4682c04"}]
   */
  signatures: SolanaTransactionSignature[];
}

export interface StakeInstructionWithInputs {
  type: string;
  input: object;
}

export interface BuildTransactionPayloadRequestDto {
  /** @example "ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8" */
  feePayer: string;
  /**
   * target stake account to which this operation relates
   * @example "8Htve3nXPsvXk88WrJHH6nQBQCjw4bSCJLuEpT6ArfMY"
   */
  stakePubkey: string;
  /** @example [{"type":"createAndDelegate","input":{"fromPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","stakeAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","withdrawAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","reference":"Fund 1","label":"SOL stake 1","lamports":1000000000}},{"type":"create","input":{"fromPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","stakeAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","withdrawAuthority":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","reference":"Fund 1","label":"SOL stake 1","lamports":1000000000}},{"type":"delegate","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8"}},{"type":"undelegate","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8"}},{"type":"withdraw","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","toPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","lamports":1000000000}},{"type":"merge","input":{"authorizedPubkey":"ADGZiJfmQMAYRNKGUL9phNaJaZYtFTK7xjJ2yjV3yQV8","sourceStakePubkey":"2niBr5ra1jswrGRkxVG42GC63fTQ7TtE6uTiNeuJTu67"}}] */
  instructions: StakeInstructionWithInputs[];
}

export interface StakingPerformanceSummary {
  inflationRewardsTotal: string;
  inflationRewards7d: string;
  inflationRewards30d: string;
  mevRewardsTotal: string;
  mevRewards7d: string;
  mevRewards30d: string;
}

export interface SolanaStakeAccountRewards {
  stakePubkey: string;
  dayStart: number;
  epoch: number;
  inflationRewardAmount: string;
  effectiveSlot: number;
  postBalance: string;
  mevRewardAmount: string;
  solPrice: number;
}

export interface StakingRewardsChartData {
  inflationRewards: string;
  mevRewards: string;
  periodStart: number;
  periodEnd: number;
  price: number;
}

export interface StakingNetworkInfo {
  currentEpoch: number;
  avgInflationRewardRate: number;
  slotIndex: number;
  slotsInEpoch: number;
}

export interface GetAccountResponse {
  /** @example "Pierre Toosen" */
  customerName: string;
  /** @example "Pier Two" */
  companyName: string;
  /** @example "staking@piertwo.com" */
  emailAddress: string;
  /**
   * Status of your automatically generated mnemonic. This status must be ACTIVE before you can request a validator
   * @example "ACTIVE"
   */
  mnemonicStatus: string;
  /**
   * Status of the accounts KYC/KYB application
   * @example "KYC_PENDING"
   */
  kycStatus: string;
  /**
   * Details of agreed terms and conditions
   * @example {"applicableTerms":"general","agreedTerms":{"29-05-2024":"2024-08-19T22:35:52.622Z"}}
   */
  termsAndConditions: object;
}

export interface GetApiKeyDto {
  /** @example "Default API Key" */
  name: string;
  /** @example "0b381d39-43b4-480f-b3c9-f3ff3d19cb0a" */
  key: string;
}

export interface StakeDetails {
  stakeId: number;
  customerId: number;
  reference: string;
  label: string;
  withdrawalAddress: string;
  suggestedFeeRecipient: string;
  validatorCount: number;
  status: string;
  message: string;
}

export interface CreateStakeResponse {
  stake: StakeDetails;
}

export interface CreateStakeDto {
  /**
   * nominated withdrawal address
   * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
   */
  withdrawalAddress: string;
  /**
   * nominated fee recipient address
   * @example "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
   */
  suggestedFeeRecipient: string;
  /** @example 2 */
  validatorCount: number;
  /**
   * an arbitrary reference used to identify/group the stake
   * @example "customer-id-1403"
   */
  reference: string;
  /**
   * an arbitrary label/memo
   * @example "Stake for 2 vallies"
   */
  label: string;
}

export interface Validator {
  pubkey: string;
  withdrawal_credentials: string;
  amount: number;
  signature: string;
  deposit_message_root: string;
  deposit_data_root: string;
  fork_version: string;
  network_name: string;
  deposit_cli_version: string;
  status: string;
  suggestedFeeRecipient: string;
  validatorIndex: number;
}

export interface StakeDetailsWithValidators {
  stakeId: number;
  customerId: number;
  reference: string;
  label: string;
  withdrawalAddress: string;
  suggestedFeeRecipient: string;
  validatorCount: number;
  status: string;
  message: string;
  validators: Validator[];
}

export interface CreateStakeV2Response {
  stake: StakeDetailsWithValidators;
}

export interface DataWithMessage {
  message: string;
}

export interface ValidatorDepositJson {
  pubkey: string;
  withdrawal_credentials: string;
  amount: number;
  signature: string;
  deposit_message_root: string;
  deposit_data_root: string;
  fork_version: string;
  network_name: string;
  deposit_cli_version: string;
}

export interface ValidatorStatusCounts {
  ACTIVE: number;
  ACTIVE_EXITING: number;
  EXITED: number;
  PENDING_ACTIVATION: number;
  WAITING_DEPOSIT: number;
  WAITING_PREGEN: number;
  WAITING_REQUEST: number;
  WAITING_KEYGEN: number;
  WAITING_VC_DEPLOYMENT: number;
  ABANDONED: number;
}

export interface StakeWithValidatorStatusCounts {
  stakeId: number;
  reference: string;
  validatorStatusCounts: ValidatorStatusCounts;
}

export interface ValidatorWithStakeDetails {
  pubkey: string;
  withdrawal_credentials: string;
  amount: number;
  signature: string;
  deposit_message_root: string;
  deposit_data_root: string;
  fork_version: string;
  network_name: string;
  deposit_cli_version: string;
  status: string;
  suggestedFeeRecipient: string;
  validatorIndex: number;
  withdrawalAddress: string;
  reference: string;
  label: string;
}

export interface Message {
  epoch: string;
  validator_index: string;
}

export interface ValidatorExitMessage {
  message: Message;
  signature: string;
}

export interface ValidatorExitMessageResp {
  pubkey: string;
  exitMessage: ValidatorExitMessage;
}

export interface GenPresignedExitMsgDto {
  /** @example "["a20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03"]" */
  pubkeys: string[];
}

export interface BeaconNodeVoluntaryExitResponse {
  code: number;
  message: string;
}

export interface BulkWithdrawError {
  pubkey: string;
  message: string;
}

export interface ValidatorDeposit {
  pubkey: string;
  amountGwei: string;
}

export interface GenerateDepositDataDto {
  /** @example [{"pubkey":"a20d2ba70419cb3922985488e339736ab32e6184f11708d2333f65b14f70cf47365b538c32eff237cdaf293ea2bcfb03","amountGwei":"1000000000"}] */
  deposits: ValidatorDeposit[];
}

export interface QueueStats {
  /** @example "2 days" */
  entryWaitingTime: string;
  entryWaitingTimeSeconds: number;
  /** @example "34 minutes" */
  exitWaitingTime: string;
  exitWaitingTimeSeconds: number;
  avgApr7d: number;
  avgApr31d: number;
  apr: number;
  activeValidators: number;
  exitingValidators: number;
  enteringValidators: number;
}

export interface ValidatorInfo {
  pubKey: string;
  index: string;
  name: string;
  status: string;
  depositTime: number;
}

export interface ValidatorStat {
  index: number;
  day: number;
  dayStart: number;
  consensusRewards: string;
  executionRewards: string;
  ethPrice: number;
}

export interface ValidatorPerformance {
  index: number;
  el1H: string;
  cl1H: string;
  el1D: string;
  cl1D: string;
  el7D: string;
  cl7D: string;
  el31D: string;
  cl31D: string;
  el1Y: string;
  cl1Y: string;
  elTotal: string;
  clTotal: string;
}

export interface ValidatorDailyPerformanceStat {
  consensusRewards: string;
  executionRewards: string;
  periodStart: number;
  periodEnd: number;
  price: number;
}

export interface CustomerDashboardSummary {
  totalValidators: number;
  totalStakes: number;
  performanceTotal: string;
  numAccounts: number;
  validatorStatusCounts: ValidatorStatusCounts;
}

export interface CustomerDashboardAccount {
  totalValidators: number;
  totalStakes: number;
  performanceTotal: string;
  name: string;
  performance7D: string;
  validatorStatusCounts: ValidatorStatusCounts;
}

export interface CustomerDashboard {
  summary: CustomerDashboardSummary;
  accounts: CustomerDashboardAccount[];
}

export interface CustomerAccountStake {
  stakeId: number;
  name: string;
  withdrawalAddress: string;
  totalValidators: number;
  performanceTotal: string;
  performance7D: string;
  validatorStatusCounts: ValidatorStatusCounts;
}

export interface CustomerAccount {
  name: string;
  performanceTotal: string;
  performance7D: string;
  totalValidators: number;
  validatorStatusCounts: ValidatorStatusCounts;
  stakes: CustomerAccountStake[];
}

export interface WebsiteDataPrices {
  solPrice: number;
  ethPrice: number;
  nearPrice: number;
  tonPrice: number;
  polPrice: number;
  eigenPrice: number;
}

export interface WebsiteDataAssetsUnderStake {
  sol: number;
  eth: number;
  near: number;
  ton: number;
  pol: number;
  eigen: number;
}

export interface WebsiteData {
  prices: WebsiteDataPrices;
  assetsUnderStake: WebsiteDataAssetsUnderStake;
}

export interface PierTwoEthereumInfo {
  batchDepositContractAddress: string;
}

export interface PierTwoSolanaInfo {
  voteAccountAddress: string;
}

export interface PierTwoInfo {
  ethereum: PierTwoEthereumInfo;
  solana: PierTwoSolanaInfo;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title Pier Two Staking API
 * @version 1.0
 * @contact
 *
 * The Pier Two Staking API Docs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  solana = {
    /**
     * @description Fetch solana staking accounts associated to your account.
     *
     * @tags solana
     * @name GetStakes
     * @request GET:/solana/stakes
     */
    getStakes: (
      query?: {
        pageNumber?: number;
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<PaginatedApiResponseBase, "data"> & {
          data: SolanaStakeAccount[];
        },
        any
      >({
        path: `/solana/stakes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate a stake transaction payload containing one or more instructions. Possible instruction types and inputs are described below: This returns a serialized transaction which can be deserialized, signed and submitted to the network. See [@solana/web.js](https://solana-labs.github.io/solana-web3.js/index.html) docs for deserializing [Versioned Messages](https://solana-labs.github.io/solana-web3.js/variables/VersionedMessage-1.html) and working with [Versioned Transactions](https://solana-labs.github.io/solana-web3.js/classes/VersionedTransaction.html) ***N.B any instructions operating on an existing stake account must specify target stakePubkey in the request body seperate to the instructions*** ***Create and delegate new stake account*** ~~~ { type: 'createAndDelegate' input: { fromPubkey: pubkey of funding address, stakeAuthority: address authorized to delegate and undelegate stake, withdrawAuthority: address authorized to withdraw stake, lamports: amount of lamports to stake (1 sol = 1000000000 lamports), reference: an arbitrary reference used to identify/group the stake within the Pier Two platform, label: an arbitrary label/memo for use within the Pier Two platform } } ~~~ ***Create a new stake account (same input data as 'createAndDelegate')*** ~~~ { type: 'create' input: { fromPubkey: pubkey of funding address, stakeAuthority: address authorized to delegate and undelegate stake, withdrawAuthority: address authorized to withdraw stake, lamports: amount of lamports to stake (1 sol = 1000000000 lamports), reference: an arbitrary reference used to identify/group the stake within the Pier Two platform, label: an arbitrary label/memo for use within the Pier Two platform } } ~~~ ***Delegate an existing stake account*** ~~~ { type: 'delegate' input: { authorizedPubkey: address authorized to delegate and undelegate stake } } ~~~ ***Undelegate (deactivate) an existing stake account*** ~~~ { type: 'undelegate' input: { authorizedPubkey: address authorized to delegate and undelegate stake } } ~~~ ***Withdraw inactive stake (deactivated stake balance or any other excess SOL held by account)*** ~~~ { type: 'withdraw' input: { toPubkey: recipient of withdrawn funds, authorizedPubkey: address authorized to withdraw stake, lamports: amount of lamports to withdraw (1 sol = 1000000000 lamports), } } ~~~ ***Merge an eligible stake account into target stake account*** An eligible stake account must have the same stakeAuthority and withdrawAuthority and have been active for an entire epoch and earned rewards ~~~ { type: 'merge' input: { sourceStakePubkey: address of stake account to merge (this account will be dissolved/closed onchain), authorizedPubkey: address authorized to delegate and undelegate } } ~~~
     *
     * @tags solana
     * @name BuildTransactionPayload
     * @request POST:/solana/stake/buildTransaction
     */
    buildTransactionPayload: (data: BuildTransactionPayloadRequestDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BuildTransactionPayloadResponseDto;
        },
        any
      >({
        path: `/solana/stake/buildTransaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags solana
     * @name GetPerformanceSummary
     * @summary Returns performance breakdown summary
     * @request GET:/solana/stake/performanceSummary
     */
    getPerformanceSummary: (
      query?: {
        /** comma seperated list of stake account pubkeys, will return data for all active stake accounts if none are provided */
        stakePubkey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakingPerformanceSummary;
        },
        any
      >({
        path: `/solana/stake/performanceSummary`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags solana
     * @name GetStakeAccoutDailyRewards
     * @summary Returns daily rewards stats of specified stake accounts
     * @request GET:/solana/stake/dailyRewards
     */
    getStakeAccoutDailyRewards: (
      query: {
        /** comma seperated list of stake account pubkeys */
        stakePubkey: string;
        /** fiat currency for ethereum pricing */
        currency?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: SolanaStakeAccountRewards[];
        },
        any
      >({
        path: `/solana/stake/dailyRewards`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags solana
     * @name GetStakeRewardsChartData
     * @summary Retrieve summarized staking rewards chart data
     * @request GET:/solana/stake/rewardsChartData
     */
    getStakeRewardsChartData: (
      query?: {
        /** comma seperated list of stake pubkeys, will return all rewards if none are specified */
        stakePubkeys?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
        /** number of datapoints to return, defaults to 30 */
        datapoints?: number;
        /** currency used for price data */
        currency?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakingRewardsChartData[];
        },
        any
      >({
        path: `/solana/stake/rewardsChartData`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns current epoch staking reward info
     *
     * @tags solana
     * @name GetNetworkStakingInfo
     * @request GET:/solana/stake/networkInfo
     */
    getNetworkStakingInfo: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakingNetworkInfo;
        },
        any
      >({
        path: `/solana/stake/networkInfo`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  account = {
    /**
     * @description Fetch basic account details
     *
     * @tags account
     * @name GetAccount
     * @request GET:/account
     */
    getAccount: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetAccountResponse;
        },
        any
      >({
        path: `/account`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch api keys for your account
     *
     * @tags account
     * @name GetApiKeys
     * @request GET:/account/apikeys
     */
    getApiKeys: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetApiKeyDto[];
        },
        any
      >({
        path: `/account/apikeys`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new user from a valid JWT
     *
     * @tags account
     * @name Signup
     * @request POST:/account/signup
     */
    signup: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: GetAccountResponse;
        },
        any
      >({
        path: `/account/signup`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  ethereum = {
    /**
     * @description Request one or more new validators
     *
     * @tags ethereum
     * @name CreateStake
     * @request POST:/ethereum/stake
     */
    createStake: (data: CreateStakeDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CreateStakeResponse;
        },
        any
      >({
        path: `/ethereum/stake`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Request one or more new validators, returning the individual validators in the response
     *
     * @tags ethereum
     * @name CreateStakeV2
     * @request POST:/ethereum/stakeV2
     */
    createStakeV2: (data: CreateStakeDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CreateStakeV2Response;
        },
        any
      >({
        path: `/ethereum/stakeV2`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Abandon stake request and all associated validators
     *
     * @tags ethereum
     * @name AbandonStake
     * @request PUT:/ethereum/stake/{stakeId}/abandon
     */
    abandonStake: (stakeId: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: DataWithMessage;
        },
        any
      >({
        path: `/ethereum/stake/${stakeId}/abandon`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch a single staking request by stakeId
     *
     * @tags ethereum
     * @name GetStake
     * @request GET:/ethereum/stake/{stakeId}
     */
    getStake: (stakeId: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakeDetailsWithValidators;
        },
        any
      >({
        path: `/ethereum/stake/${stakeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch deposit data for all validators in stake request
     *
     * @tags ethereum
     * @name GetDepositDataForStake
     * @request GET:/ethereum/stake/{stakeId}/depositdata
     */
    getDepositDataForStake: (stakeId: string, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorDepositJson[];
        },
        any
      >({
        path: `/ethereum/stake/${stakeId}/depositdata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch all staking requests for your account
     *
     * @tags ethereum
     * @name GetStakes
     * @request GET:/ethereum/stakes
     */
    getStakes: (
      query?: {
        reference?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakeDetailsWithValidators[];
        },
        any
      >({
        path: `/ethereum/stakes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch all staking requests with validator status counts
     *
     * @tags ethereum
     * @name GetStakesWithValidatorStatusCounts
     * @request GET:/ethereum/stakesWithValidatorStatusCounts
     */
    getStakesWithValidatorStatusCounts: (
      query?: {
        reference?: string;
        withdrawalAddress?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: StakeWithValidatorStatusCounts[];
        },
        any
      >({
        path: `/ethereum/stakesWithValidatorStatusCounts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch validators for your account, in order of initial request
     *
     * @tags ethereum
     * @name GetOrderedValidators
     * @summary Fetch validators for your account
     * @request GET:/ethereum/orderedValidators
     */
    getOrderedValidators: (
      query?: {
        reference?: string;
        withdrawalAddress?: string;
        /** defaults to 100 */
        count?: string;
        status?: string;
        skip?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorWithStakeDetails[];
        },
        any
      >({
        path: `/ethereum/orderedValidators`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate one or more pre-signed exit messages for a specified list of public keys
     *
     * @tags ethereum
     * @name GenPresignedExitMsg
     * @request POST:/ethereum/genPresignedExitMsg
     */
    genPresignedExitMsg: (data: GenPresignedExitMsgDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorExitMessageResp[];
        },
        any
      >({
        path: `/ethereum/genPresignedExitMsg`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Broadcast a pre-signed exit message to the beacon chain
     *
     * @tags ethereum
     * @name BroadcastPresignedExitMessage
     * @request POST:/ethereum/broadcastPresignedExitMsg
     */
    broadcastPresignedExitMessage: (data: ValidatorExitMessage, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BeaconNodeVoluntaryExitResponse;
        },
        any
      >({
        path: `/ethereum/broadcastPresignedExitMsg`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Generate one or more pre-signed exit messages for a specified list of public keys and broadcast the message to a beacon node
     *
     * @tags ethereum
     * @name BulkWithdraw
     * @request POST:/ethereum/bulkWithdrawValidators
     */
    bulkWithdraw: (data: GenPresignedExitMsgDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: BulkWithdrawError[];
        },
        any
      >({
        path: `/ethereum/bulkWithdrawValidators`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description By default, validator records are populated with deposit transaction data suitable for deposits of 32ETH. This endpoint can be used in situations where you want to perform deposits of amounts other than 32ETH. This will generate the deposit transaction data for one or more validators corresponding to the amount(s) specified in the request body. ***Note that this will not replace nor invalidate the deposit data that is stored on the validator records themselves*** This endpoint will return an error in the following situations: - an invalid amount is specified (<= 0 or > 32000000000) - one or more of the specified validators is not in a WAITING_DEPOSIT state - one or more validators is not associated your account - the list of specified validators contains duplicate pubkeys
     *
     * @tags ethereum
     * @name GenerateDepositData
     * @summary Generate deposit data with arbitrary ETH amounts for specified validator pubkeys
     * @request POST:/ethereum/validators/generateDepositData
     */
    generateDepositData: (data: GenerateDepositDataDto, params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorDepositJson[];
        },
        any
      >({
        path: `/ethereum/validators/generateDepositData`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the estimated wait times and other queue stats for entering and exiting validators.
     *
     * @tags ethereum
     * @name GetValidatorQueueStats
     * @request GET:/ethereum/validators/queueStats
     */
    getValidatorQueueStats: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: QueueStats;
        },
        any
      >({
        path: `/ethereum/validators/queueStats`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ethereum
     * @name GetValidatorInfo
     * @summary Fetch information of validators, returns info for all active validators if none are specified
     * @request GET:/ethereum/validators/info
     */
    getValidatorInfo: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIndex?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorInfo[];
        },
        any
      >({
        path: `/ethereum/validators/info`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ethereum
     * @name GetValidatorDailyRewards
     * @summary Returns daily rewards stats of validators, returns stats for all active validators if none are specified
     * @request GET:/ethereum/validators/dailyRewards
     */
    getValidatorDailyRewards: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIndex?: string;
        /** fiat currency for ethereum pricing */
        currency?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorStat[];
        },
        any
      >({
        path: `/ethereum/validators/dailyRewards`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ethereum
     * @name GetValidatorDailyPerformance
     * @summary Returns daily performance stats of validators, returns stats for all active validators if none are specified
     * @request GET:/ethereum/validators/performance
     */
    getValidatorDailyPerformance: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIndex?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorPerformance[];
        },
        any
      >({
        path: `/ethereum/validators/performance`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ethereum
     * @name GetValidatorRewardsChartData
     * @summary Retrieve summarized validator rewards chart data
     * @request GET:/ethereum/validators/rewardsChartData
     */
    getValidatorRewardsChartData: (
      query?: {
        /** comma seperated list of validator indexes */
        validatorIds?: string;
        /** unix timestamp of starting date from */
        dateFrom?: number;
        /** unix timestamp of ending date to */
        dateTo?: number;
        /** account reference to use as filter */
        account?: string;
        /** number of datapoints to return */
        datapoints?: number;
        /** currency used for price data */
        currency?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: ValidatorDailyPerformanceStat[];
        },
        any
      >({
        path: `/ethereum/validators/rewardsChartData`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the dashboard summary. Individual stakes are flattened
     *
     * @tags ethereum
     * @name GetValidatorDashboardSummary
     * @request GET:/ethereum/validators/dashboard
     */
    getValidatorDashboardSummary: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CustomerDashboard;
        },
        any
      >({
        path: `/ethereum/validators/dashboard`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the accounts summary. Individual stakes are not flattened
     *
     * @tags ethereum
     * @name GetValidatorAccountsSummary
     * @request GET:/ethereum/validators/accounts
     */
    getValidatorAccountsSummary: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: CustomerAccount[];
        },
        any
      >({
        path: `/ethereum/validators/accounts`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  public = {
    /**
     * @description get data for rendering network statistics (asset prices, assets UAM, etc)
     *
     * @tags public
     * @name GetWebsiteData
     * @request GET:/public/websiteData
     */
    getWebsiteData: (
      query?: {
        /** currency used for price data (`usd` by default) */
        currency?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: WebsiteData;
        },
        any
      >({
        path: `/public/websiteData`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description get static network config such as contract addresses and validator addresses
     *
     * @tags public
     * @name NetworkConfig
     * @request GET:/public/networkConfig
     */
    networkConfig: (params: RequestParams = {}) =>
      this.request<
        UtilRequiredKeys<ApiResponseBase, "data"> & {
          data: PierTwoInfo;
        },
        any
      >({
        path: `/public/networkConfig`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
