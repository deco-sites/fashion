import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import { JSX } from "preact";

interface Props
  extends Omit<JSX.HTMLAttributes<HTMLUListElement>, "class" | "className"> {
  title: string;
  terms: { term: string }[];
}

export default function SearchTermList({ terms, title, ...ulProps }: Props) {
  return (
    <div class="flex flex-col gap-6 md:w-[15.25rem] md:max-w-[15.25rem]\">
      <span class="font-medium text-xl" role="heading" aria-level={3}>
        {title}
      </span>
      <ul {...ulProps} class="flex flex-col gap-6">
        {terms.map(({ term }) => (
          <li>
            <a href={`/s?q=${term}`} class="flex gap-4 items-center">
              <span>
                <Icon
                  id="MagnifyingGlass"
                  width={20}
                  height={20}
                  strokeWidth={0.01}
                />
              </span>
              <span>
                {term}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
