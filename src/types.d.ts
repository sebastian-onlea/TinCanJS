declare namespace TinCan {
    interface Agent {
        name?: string;
        mbox?: string;
        mbox_sha1sum?: string;
        openid?: string;
        account?: TinCan.AgentAccount;
        degraded: boolean;
        objectType: "Agent";
        LOG_SRC: "Agent";
        log: TinCan.prototype.log;
        init: (cfg: unknown) => void;
    }
}

declare interface TinCanOptions {
    url?: string; // URL for determining launch provided configuration options
    recordStores?: Array<unknown> // list of pre-configured LRSes
    actor?: TinCan.Agent | unknown; // default actor
    activity?: TinCan.Activity | unknown; // default activity
    registration?: string; // default registration
    // context?: TinCan.Activity | unknown; // default context
}

declare interface RequestOptions {
        url: string;
        method?: string | undefined;
        params?: any;
        data?: string | ArrayBuffer | undefined;
        headers?: any;
        callback?: function | undefined;
}

declare interface LRSOptions {
    endpoint: string|null;
    version: string|null;
    auth: string|null;
    allowFail: boolean|null;
    extended: object|null;
}

declare interface RequestResultSync {
    err: number;
    xhr: XMLHttpRequest;
}
declare interface RequestCompleteControl {
    finished: boolean;
    fakeStatus: number | null;
}

declare type RequestResultAsync = XMLHttpRequest;
declare type RequestHeaders = Record<string, string>;

declare type RequestFn = (fullUrl: string, headers: RequestHeaders, cfg: RequestOptions) => typeof cfg extends {callback: function} ? RequestResultAsync : RequestResultSync;

declare interface TincanLocalMessage {
    _tincan: "request" | "response";
}

declare interface TincanLocalRequest extends TincanLocalMessage {
    _tincan: "request";
    url: string;
    method: string | undefined;
    headers: RequestHeaders;
    params: any;
}

declare interface TincanLocalResponse extends TincanLocalMessage {
    _tincan: "response";
}
