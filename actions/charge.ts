export interface Props {
  value: number;
}

const sleep = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
export default async function charge(
  { value }: Props,
) {
  console.log("charging...", value);
  await sleep(3000); // pretending some delay
  console.log("Charged!");
  return { value };
}
