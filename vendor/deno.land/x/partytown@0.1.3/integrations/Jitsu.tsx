import Script from "../Script.tsx";

import type { ComponentProps } from "preact";

interface Props extends ComponentProps<typeof Script> {
  "data-key": string;
  "data-init-only"?: "true" | "false";
}

const Jitsu = (props: Props) => (
  <Script
    id="jitsu-script"
    forward={["jitsu"]}
    src="https://t.jitsu.com/s/lib.js"
    {...props}
  />
);

export default Jitsu;
