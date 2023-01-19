import type { LoaderFunction } from "$live/std/types.ts";

export interface WorkflowResult {
  // deno-lint-ignore no-explicit-any
  result: any;
}
export type Props =
  | {
    workflow: "createOrder";
    vtexAccountName: string;
  }
  | {
    workflow: "otherWorkflow";
    propa: string;
  };

const workflowRunner: LoaderFunction<Props, WorkflowResult> = () => {
  return Promise.resolve({
    data: {} as WorkflowResult,
  });
};

export default workflowRunner;
