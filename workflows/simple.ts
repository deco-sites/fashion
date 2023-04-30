import { Workflow, WorkflowContext, WorkflowGen } from "$live/mod.ts";
import type { Manifest } from "../live.gen.ts";
export interface Props {
  sleepTime: number;
}
export default function Simple({ sleepTime }: Props): Workflow {
  return function* (_ctx: WorkflowContext<Manifest>): WorkflowGen<void> {
    const chargedValue1 = yield _ctx.invoke({
      key: "deco-sites/fashion/actions/charge.ts",
      props: {
        value: 20,
      },
    });
    console.log("the charged value", chargedValue1);
    console.log("sleeping", sleepTime);
    yield _ctx.sleep(sleepTime);
    const chargedValue2 = yield _ctx.invoke({
      key: "deco-sites/fashion/actions/charge.ts",
      props: {
        value: 20,
      },
    });
    const { newValue } = yield _ctx.waitForSignal("my-signal");
    console.log("the charged value", chargedValue2);
    return chargedValue1.value + chargedValue2.value + newValue;
  };
}
