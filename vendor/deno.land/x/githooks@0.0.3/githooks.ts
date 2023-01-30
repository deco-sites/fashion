export type Githooks = {
  githooks: Record<string, string[]>;
};

export type GithooksOptions = {
  getConfig: () => Promise<Githooks>;
  verbose?: boolean;
};

export async function readJson(filePath: string): Promise<unknown> {
  try {
    const jsonString = await Deno.readTextFile(filePath);
    return JSON.parse(jsonString);
  } catch (err) {
    err.message = `${filePath}: ${err.message}`;
    throw err;
  }
}

export function readDenoJson(): Promise<Githooks> {
  return readJson("./deno.json") as Promise<Githooks>;
}

const defaultOptions: GithooksOptions = {
  getConfig: readDenoJson,
  verbose: true,
};

export async function setupGithooks(opts: GithooksOptions = defaultOptions) {
  const config = await opts.getConfig();

  if (!config.githooks) {
    opts.verbose &&
      console.log("No githooks found in deno.json — skipping setup.");
  } else {
    const hooks = Object.keys(config.githooks);

    for (const hook of hooks) {
      const task = config.githooks[hook];
      const hookPath = `./.git/hooks/${hook}`;
      const hookScript = `#!/bin/sh
exec deno task ${task}
`;
      await Deno.writeTextFile(hookPath, hookScript);
      await Deno.chmod(hookPath, 0o755);
    }
    opts.verbose &&
      console.log("Githooks setup successfully:", hooks.join(", "));
  }
}

// Execute when called directly
if (import.meta.main) {
  await setupGithooks();
}
