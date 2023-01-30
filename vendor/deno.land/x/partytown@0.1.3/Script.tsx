import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import { collectForward } from "./shared.ts";

interface Props extends JSX.HTMLAttributes<HTMLScriptElement> {
  forward?: string[];
}

const Script = ({
  forward = [],
  ...scriptProps
}: Props) => {
  collectForward(forward);

  return (
    <Head>
      <script type="text/partytown" {...scriptProps} />
    </Head>
  );
};

export default Script;
