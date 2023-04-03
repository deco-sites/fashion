import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { JSX } from "preact";

interface Props
  extends Omit<JSX.HTMLAttributes<HTMLUListElement>, "class" | "className"> {
  title: string;
  terms: { term: string }[];
}

export default function SearchTermList({ terms, title, ...ulProps }: Props) {
  return (
    <div class="flex flex-col gap-6 md:(w-[15.25rem] max-w-[15.25rem])">
      <Text variant="heading-3" role="heading" aria-level={3}>{title}</Text>
      <ul {...ulProps} class="flex flex-col gap-6">
        {terms.map(({ term }) => (
          <li>
            <a href={`/s?q=${term}`} class="flex gap-4 items-center">
              <Text variant="body">
                <Icon
                  id="MagnifyingGlass"
                  width={20}
                  height={20}
                  strokeWidth={0.01}
                />
              </Text>
              <Text variant="body">
                {term}
              </Text>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
