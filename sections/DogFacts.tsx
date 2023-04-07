import { PropsResolver } from "../../live/blocks/propsResolver.ts";
import dogApiFacts, {
  DogFact,
  Props as DogFactsProps,
} from "../loaders/dogApiFacts.ts";

export interface Props {
  title: string;
  dogFacts: DogFact[];
}

export default function DogFacts({ title, dogFacts }: Props) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts.map(({ fact }) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}

// Props type that will be configured in deco.cx's Admin
export interface LoadProps extends DogFactsProps {
  title: string;
}

export const resolveProps: PropsResolver<
  Props,
  LoadProps
> = {
  dogFacts: dogApiFacts,
};
