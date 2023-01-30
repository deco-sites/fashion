export interface SystemInfo {
  /**
   *  The operating system name.
   * 
   * ```ts
   * console.log(os.platform())
   * ```
   * 
   */
  platform(): "darwin" | "linux" | "windows";

  /**
   *  Return the operating system CPU architecture.
   * 
   * ```ts
   * console.log(os.platform())
   * ```
   * 
   */
  arch(): Promise<"x64" | "x86">;

  /** 
   * The operating system `end-of-line` marker.
   * 
   * ```ts
   * console.log(os.EOL())
   * ```
   * 
   */
  EOL(): "\n" | "\r\n";

  /** 
   * The operating system `hostname`.
   * 
   * ```ts
   * console.log(os.hostname())
   * ```
   * 
   */
  hostname(): string;
}

export interface SystemPaths {
  /** 
   * The operating system `home path directory`.
   * 
   * e.g: `c:/Users/USERNAME` in Windows and `/home/USERNAME` Mac & Linux
   * 
   * ```ts
   * console.log(os.homeDir())
   * ```
   * 
   */
  homeDir(): string | undefined;

  /** 
   * The operating system `temporary files directory`.
   * 
   * ```ts
   * console.log(os.tempDir())
   * ```
   * 
  
   */
  tempDir(): string | undefined;
}
