import type { LoaderReturnType } from "$live/std/types.ts";
import { WorkflowResult } from "../functions/workflowRunner.ts";

export interface Props {
  workflow: LoaderReturnType<WorkflowResult>;
}

export default function ProductShelf({
  workflow,
}: Props) {
  return (
    <section class="max-w-[1400px] w-full p-2 md:p-0 mx-auto">
      {JSON.stringify(workflow)}
    </section>
  );
}
