import { PropsLoader } from "$live/mod.ts";
import type { LoaderContext } from "$live/types.ts";

// Props type that will be configured in deco.cx's Admin
export interface LoadProps {
  title: string;
  numberOfFacts?: number;
}

async function dogFacts(
  _req: Request,
  { state: { $live: { numberOfFacts } } }: LoaderContext<LoadProps>,
): Promise<string[]> {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return facts;
}

export interface Props {
  title: string;
  dogFacts: string[];
}

export default function DogFacts({ title, dogFacts }: Props) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}

export const loader: PropsLoader<
  Props,
  LoadProps
> = {
  dogFacts,
};
