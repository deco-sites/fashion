#!/usr/bin/env -S deno run -A --watch
import dev from "$fresh/dev.ts";

// Generate manifest and boot server
await dev(import.meta.url, "./main.ts");
