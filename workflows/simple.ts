import { Workflow, WorkflowContext, WorkflowGen } from "$live/mod.ts";
import type { Manifest } from "../live.gen.ts";
export interface Props {
  sleepTime: number;
}
export default function Simple({ sleepTime }: Props): Workflow {
  return function* (_ctx: WorkflowContext<Manifest>): WorkflowGen<void> {
    const { value: chargedValue1 } = yield _ctx.invoke(
      "deco-sites/fashion/actions/charge.ts",
      {
        value: 20,
      },
    );
    console.log("the charged value", chargedValue1);
    console.log("sleeping", sleepTime);
    yield _ctx.sleep(sleepTime);
    const { value: chargedValue3 } = yield _ctx.invoke(
      "deco-sites/fashion/actions/charge.ts",
      {
        value: 30,
      },
    );
    console.log("the charged value3", chargedValue3);

    const { value: chargedValue2 } = yield _ctx.invoke(
      "deco-sites/fashion/actions/charge.ts",
      {
        value: 40,
      },
    );
    console.log("the charged value", chargedValue2);
    console.log("TOTAL", chargedValue1 + chargedValue2 + chargedValue3);
  };
}
