import * as path from "https://deno.land/std@0.61.0/path/mod.ts";
var decoder = new TextDecoder("utf-8");

/**
 * Returns the operating system's CPU architecture.
 */
export default async function arch() {
  /**
   * The running binary is 64-bit, so the OS is clearly 64-bit.
   */
  if (Deno.build.arch === 'x86_64') {
    return 'x64'
  }

  /**
   * All recent versions of Mac OS are 64-bit.
   */
  if (Deno.build.os === 'darwin') {
    return 'x64'
  }

  /**
   * On Windows, the most reliable way to detect a 64-bit OS from within a 32-bit
   * app is based on the presence of a WOW64 file: %SystemRoot%\SysNative.
   * See: https://twitter.com/feross/status/776949077208510464
   */
  if (Deno.build.os === 'windows') {
    let systemRoot = Deno.env.get("SystemRoot");
    var sysRoot = systemRoot && Deno.statSync(systemRoot) ? systemRoot : 'C:\\Windows'

    // If %SystemRoot%\SysNative exists, we are in a WOW64 FS Redirected application.
    var isWOW64 = false
    try {
      isWOW64 = sysRoot ? !!Deno.statSync(path.join(sysRoot, 'sysnative')) : false
    } catch (err) { }

    return isWOW64 ? 'x64' : 'x86'
  }

  /**
   * On Linux, use the `getconf` command to get the architecture.
   */
  if (Deno.build.os === 'linux') {
    var process = Deno.run({ cmd: ['getconf', 'LONG_BIT'], stdout: "piped" });
    var output = decoder.decode(await process.output());
    return output === '64\n' ? 'x64' : 'x86'
  }

  /**
   * If none of the above, assume the architecture is 32-bit.
   */
  return 'x86'
}
