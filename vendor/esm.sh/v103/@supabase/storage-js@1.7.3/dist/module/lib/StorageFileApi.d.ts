/// <reference path="https://esm.sh/v103/node.ns.d.ts" />
import { Fetch, FetchParameters } from './fetch.d.ts';
import { FileObject, FileOptions, SearchOptions } from './types.d.ts';
export declare class StorageFileApi {
    protected url: string;
    protected headers: {
        [key: string]: string;
    };
    protected bucketId?: string;
    protected fetch: Fetch;
    constructor(url: string, headers?: {
        [key: string]: string;
    }, bucketId?: string, fetch?: Fetch);
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */
    private uploadOrUpdate;
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */
    upload(path: string, fileBody: ArrayBuffer | ArrayBufferView | Blob | Buffer | File | FormData | NodeJS.ReadableStream | ReadableStream<Uint8Array> | URLSearchParams | string, fileOptions?: FileOptions): Promise<{
        data: {
            Key: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     * @param fileOptions HTTP headers.
     * `cacheControl`: string, the `Cache-Control: max-age=<seconds>` seconds value.
     * `contentType`: string, the `Content-Type` header value. Should be specified if using a `fileBody` that is neither `Blob` nor `File` nor `FormData`, otherwise will default to `text/plain;charset=UTF-8`.
     * `upsert`: boolean, whether to perform an upsert.
     */
    update(path: string, fileBody: ArrayBuffer | ArrayBufferView | Blob | Buffer | File | FormData | NodeJS.ReadableStream | ReadableStream<Uint8Array> | URLSearchParams | string, fileOptions?: FileOptions): Promise<{
        data: {
            Key: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Moves an existing file.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     */
    move(fromPath: string, toPath: string): Promise<{
        data: {
            message: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Copies an existing file.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     */
    copy(fromPath: string, toPath: string): Promise<{
        data: {
            message: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Create signed URL to download file without requiring permissions. This URL can be valid for a set number of seconds.
     *
     * @param path The file path to be downloaded, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     */
    createSignedUrl(path: string, expiresIn: number): Promise<{
        data: {
            signedURL: string;
        } | null;
        error: Error | null;
        signedURL: string | null;
    }>;
    /**
     * Create signed URLs to download files without requiring permissions. These URLs can be valid for a set number of seconds.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     */
    createSignedUrls(paths: string[], expiresIn: number): Promise<{
        data: {
            error: string | null;
            path: string | null;
            signedURL: string;
        }[] | null;
        error: Error | null;
    }>;
    /**
     * Downloads a file.
     *
     * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
     */
    download(path: string): Promise<{
        data: Blob | null;
        error: Error | null;
    }>;
    /**
     * Retrieve URLs for assets in public buckets
     *
     * @param path The file path to be downloaded, including the path and file name. For example `folder/image.png`.
     */
    getPublicUrl(path: string): {
        data: {
            publicURL: string;
        } | null;
        error: Error | null;
        publicURL: string | null;
    };
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to be deleted, including the path and file name. For example [`folder/image.png`].
     */
    remove(paths: string[]): Promise<{
        data: FileObject[] | null;
        error: Error | null;
    }>;
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     * @param options Search options, including `limit`, `offset`, `sortBy`, and `search`.
     * @param parameters Fetch parameters, currently only supports `signal`, which is an AbortController's signal
     */
    list(path?: string, options?: SearchOptions, parameters?: FetchParameters): Promise<{
        data: FileObject[] | null;
        error: Error | null;
    }>;
    _getFinalPath(path: string): string;
    _removeEmptyFolders(path: string): string;
}
//# sourceMappingURL=StorageFileApi.d.ts.map
