import {
  ImageKitOptions,
  UploadOptions,
  UploadResponse,
  UrlOptions,
} from "./interfaces/index.d.ts";
import IKResponse from "./interfaces/IKResponse.d.ts";
declare class ImageKit {
  options: ImageKitOptions;
  constructor(opts: Omit<ImageKitOptions, "sdkVersion">);
  /**
   * You can add multiple origins in the same ImageKit.io account.
   * URL endpoints allow you to configure which origins are accessible through your account and set their preference order as well.
   *
   * @see {@link https://github.com/imagekit-developer/imagekit-nodejs#url-generation}
   * @see {@link https://docs.imagekit.io/integration/url-endpoints}
   *
   * @param urlOptions
   */
  url(urlOptions: UrlOptions): string;
  /**
   * You can upload files to ImageKit.io media library from your server-side using private API key authentication.
   *
   * File size limit
   * The maximum upload file size is limited to 25MB.
   *
   * @see {@link https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload}
   *
   * @param uploadOptions
   */
  upload(
    uploadOptions: UploadOptions,
    options?: Partial<ImageKitOptions>,
  ): Promise<IKResponse<UploadResponse>>;
  upload(
    uploadOptions: UploadOptions,
    callback: (
      err: Error | null,
      response: IKResponse<UploadResponse> | null,
    ) => void,
    options?: Partial<ImageKitOptions>,
  ): void;
}
export default ImageKit;
