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

export interface ApiResponseBase {
  data: object;
  pagination?: PaginationData;
  message?: string;
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

export interface DataWithMessage {
  message: string;
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
 * @title Piertwo Staking API
 * @version 1.0
 * @contact
 *
 * The Piertwo Staking API Docs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
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
}
