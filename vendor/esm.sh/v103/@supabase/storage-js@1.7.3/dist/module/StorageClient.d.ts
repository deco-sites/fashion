import { StorageBucketApi, StorageFileApi } from "./lib/index.d.ts";
import { Fetch } from "./lib/fetch.d.ts";
export declare class StorageClient extends StorageBucketApi {
  constructor(url: string, headers?: {
    [key: string]: string;
  }, fetch?: Fetch);
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(id: string): StorageFileApi;
}
//# sourceMappingURL=StorageClient.d.ts.map
