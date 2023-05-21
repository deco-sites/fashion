import { useState } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";

export type Props = {
  title: string;
  description: string;
  categories: {
    name: string;
    href: string;
  }[];
  variant: 1 | 2 | 3 | 4;
};

function HeaderSliderController({ variant }: {
  variant: 1 | 2 | 3 | 4;
}) {
  switch (variant) {
    case 1:
      return null;
    case 2:
      return (
        <div className="h-fit flex gap-4">
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
            <Icon id="ChevronLeft" width={16} height={16} />
          </div>
          <div className="flex gap-2 items-center">
            <div
              className={`w-6 h-6 p-2 border border-base-500 rounded-full cursor-pointer`}
            >
              <div className={"w-full h-full bg-base-500 rounded-full"}>
              </div>
            </div>
            <div
              className={`w-6 h-6 p-2 border border-transparent rounded-full cursor-pointer`}
            >
              <div className={"w-full h-full bg-base-500 rounded-full"}>
              </div>
            </div>
            <div
              className={`w-6 h-6 p-2 border border-transparent rounded-full cursor-pointer`}
            >
              <div className={"w-full h-full bg-base-500 rounded-full"}>
              </div>
            </div>
          </div>
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
            <Icon id="ChevronRight" width={16} height={16} />
          </div>
        </div>
      );
    default:
      return (
        <button className="py-1.5 rounded-none bg-transparent px-4 color-base-500 hover:underline transition duration-200 text-base">
          See all products
        </button>
      );
  }
}

function Header({
  title = "",
  description = "",
  categories = [],
  variant = 3,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const isFirstVariant = variant === 1;

  return (
    <div
      data-cid="product-list-header"
      className={`${isFirstVariant ? "mb-10" : "mb-6"}`}
    >
      <div
        className={`w-full flex ${
          isFirstVariant ? "justify-center" : "justify-between items-end"
        }`}
      >
        <div
          className={`text-base-500 flex flex-col gap-4 ${
            isFirstVariant ? "items-center" : ""
          }`}
        >
          <h3
            className={`${
              isFirstVariant ? "text-4xl" : "text-2xl"
            } sm:text-4xl`}
          >
            {title}
          </h3>
          <p className="text-sm sm:text-lg">{description}</p>
        </div>
        {!isFirstVariant ? <HeaderSliderController variant={variant} /> : null}
      </div>
      {!isFirstVariant
        ? <div className="border-b border-base-300 w-full my-6"></div>
        : null}
      <ul
        className={`w-full flex gap-4 overflow-x-auto ${
          isFirstVariant ? "mt-4 justify-center" : "justify-start"
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
              className={`text-base text-base-500 border-b-[1.5px] ${
                selectedCategory === index
                  ? "border-black border-base"
                  : "border-transparent"
              }`}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
