import type { LoaderContext } from "$live/types.ts";

// Return type of this loader
export interface DogFact {
  fact: string;
}

// Props type that will be configured in deco.cx's Admin
export interface Props {
  numberOfFacts?: number;
}

export default async function dogApiFacts(
  _req: Request,
  { state: { $live: { numberOfFacts } } }: LoaderContext<Props>,
): Promise<DogFact[]> {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return facts.map((fact) => ({ fact }));
}
