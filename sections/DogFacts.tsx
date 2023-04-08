// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
  numberOfFacts?: number;
}

export default async function DogFacts({ title, numberOfFacts }: Props) {
  const { facts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };

  return () => (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {facts.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
