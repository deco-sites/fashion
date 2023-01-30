import arch from "https://deno.land/x/arch@v1.0.0/mod.ts";
import { SystemInfo } from "../types.d.ts";
const { build, hostname } = Deno;

const systemInfo: SystemInfo = {
  /**
    * @description return the operating system platform name
    * @returns { string } "darwin" | "linux" | "windows"
    * @since v0.1.0
    */
  platform: () => build.os,

  /**
    * @description return the operating system CPU architecture 
    * @returns { Promise<"x86" | "x64"> }
    * @since v0.1.0 
    */
  arch: async (): Promise<"x64" | "x86"> => await arch(),

  /**
    * @description return the end-of-line` marker
    * @returns { string }
    * @since v0.11.0 
    */
  EOL: () => systemInfo.platform() === "windows" ? "\n" : "\r\n",

  /**
    * @description return the operating system hostname 
    * @returns { string }
    * @since v0.11.0 
    */
  hostname: () => hostname(),
};

export default systemInfo;
