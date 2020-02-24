declare module "aerospike" {
  type Dictionary<T = any> = { [key: string | number]: T }
  class Key {
    public constructor(ns: string, set: string, key: string | number | Buffer)
  }

  class ApplyPolicy {
    public constructor(prop: Dictionary);
    public readonly commitLevel: number;
    public readonly compress: boolean;
    public readonly durableDelete: boolean;
    public readonly gen: number;
    public readonly key: number;
    public readonly maxRetries: number;
    public readonly predexp: Array<Client['apply'] | Client['batchExists'] | Client['batchGet'] | Client['batchRead'] | Client['batchSelect'] | Client['exists'] | Client['get'] | Client['operate'] | Client['put'] | Client['remove'] | Client['select']>;
    public readonly socketTimeout: number;
    public readonly totalTimeout: number;
    public readonly ttl: number;
  }

  class Config {
    // TODO: map auth mode from
    public readonly authMode: number;
    public readonly clusterName: string;
    public readonly connTimeoutMs: number
    public readonly hosts: Array<Object> | string;
    public readonly log: Object;
    public readonly loginTimeoutMs: number;
    public readonly maxConnsPerNode: number;
    public readonly modlua: Object;
    public readonly password: string;
    public readonly policies: Object;
    public readonly port: number;
    public readonly rackAware: boolean;
    public readonly rackId: number;
    public readonly sharedMemory: Object;
    public readonly tenderInterval: number;
    public readonly tls: Object;
    public readonly useAlternateAccessAddress: boolean;
    public readonly user: string;

    public constructor(config: Dictionary);
    public setDefaultPolicies(one: Object): void;
  }

  class Client {
    public readonly captureStackTraces: boolean;
    public readonly config: Config;

    public constructor(config: Config);

    public addSeedHost(hostname: string, port?: number): Promise<void>
    public apply(key: Key, udfArgs: { module: string; funcname: string; arg: Array<number | string> }, policy: ApplyPolicy): Promise<any>
    /**
     * @deprecated
     * @param keys
     */
    public batchExists(keys: Key[, policy][, callback])
    public batchGet(keys[, policy][, callback])
    public batchRead(records[, policy][, callback])
    public batchSelect(keys, bins[, policy][, callback])
    public close([releaseEventLoop])
    public connect([callback])
    public createGeo2DSphereIndex(options[, policy][, callback])
    public createIndex(options[, policy][, callback])
    public createIntegerIndex(options[, policy][, callback])
    public createStringIndex(options[, policy][, callback])
    public exists(key[, policy][, callback])
    public get(key[, policy][, callback])
    public getNodes()
    public incr(key, bins[, metadata][, policy][, callback])
    public indexRemove(namespace, index[, policy][, callback])
    public info(request, host[, policy][, callback])
    public infoAll([request][, policy][, callback])
    public infoAny([request][, policy][, callback])
    public infoNode(request, node[, policy][, callback])
    public isConnected([checkTenderErrors])
    public operate(key, operations[, metadata][, policy][, callback])
    public put(key, bins[, meta][, policy], callback)
    public query(ns, set[, options])
    public remove(key[, policy], callback)
    public removeSeedHost(hostname[, port])
    public scan(ns, set[, options])
    public select(key, bins[, policy][, callback])
    public stats()
    public truncate(ns, set, before_nanos[, policy], callback)
    public udfRegister(path[, udfType][, policy], callback)
    public udfRemove(udfModule[, policy], callback)
  }
}