import type { SectionProps } from "$live/mod.ts";
import type { LoaderContext } from "$live/types.ts";
import { useCallback, useState } from "preact/compat";

export default function DogFacts(
  { title, dogFacts }: SectionProps<typeof loader>,
) {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);
  return (
    <>
      <div class="p-4">
        <h1 class="font-bold">{title}</h1>
        <ul>
          {dogFacts.map((fact) => <li>{fact}</li>)}
        </ul>
      </div>
      <p>Counter: {value}</p>
      <button onClick={increment}>Click me!</button>
    </>
  );
}

// Props type that will be configured in deco.cx's Admin
export interface LoaderProps {
  title: string;
  numberOfFacts?: number;
}

export async function loader(
  _req: Request,
  { state: { $live: { numberOfFacts, title } } }: LoaderContext<LoaderProps>,
) {
  const { facts: dogFacts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return { dogFacts, title };
}
