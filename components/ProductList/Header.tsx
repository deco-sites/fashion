import { useState } from "preact/hooks";

export type Props = {
  title: string;
  description: string;
  categories: {
    name: string;
    href: string;
  }[];
  variant: 1 | 2 | 3 | 4;
};

function Header({
  title = "",
  description = "",
  categories = [],
  variant = 1,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <div data-cid="product-list-header">
      <div className="w-full flex flex-col items-center text-neutral gap-4">
        <h3 className="text-4xl">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <ul
        className={`w-full flex justify-center gap-4 ${
          variant === 1 ? "mt-4" : "mt-6"
        }`}
      >
        {categories.map(({ name, href }, index) => (
          // TODO: improve this way to handle the selected category
          <li
            className="py-2 flex items-center"
            key={name}
            onClick={() => setSelectedCategory(index)}
          >
            <a
              href={href}
              className={`text-base border-b-[1.5px] ${
                selectedCategory === index
                  ? "border-black border-base"
                  : "border-transparent"
              }`}
            >
              Category
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
