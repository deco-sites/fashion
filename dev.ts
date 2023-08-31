// #!/usr/bin/env -S deno run -A --watch=static/
import dev from "$fresh/dev.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

await dev(import.meta.url, "./main.ts");
