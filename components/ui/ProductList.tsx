import type { ComponentChildren } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";

import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
  description: string;
  children: string[];
}

enum AnimationTypes {
  PLUS = "plus",
  MINUS = "minus",
  SELECT = "select",
}

const ITEMS_BY_PAGE = 3;

const ProductList = ({
  title = "Macarrao",
  description = "Macarrao",
  children = [
    "Placeholder1",
    "Placeholder2",
    "Placeholder3",
    "Placeholder4",
    "Placeholder5",
    "Placeholder6",
    "Placeholder7",
    "Placeholder8",
    "Placeholder9",
    "Placeholder10",
    "Placeholder11",
  ],
}: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedData, setPaginatedData] = useState<ComponentChildren[]>([]);

  const isOnFirstPage = currentPage === 0;
  const isOnLastPage = currentPage === paginatedData.length - 1;
  const pageNavigationIndexes = [...Array(paginatedData.length).keys()];

  const setPage = (chosenAnimation: AnimationTypes, pageIndex?: number) => {
    const newPageStateByAnimationType = {
      [AnimationTypes.SELECT]: pageIndex!,
      [AnimationTypes.PLUS]: (prevState: number) => prevState + 1,
      [AnimationTypes.MINUS]: (prevState: number) => prevState - 1,
    };

    setCurrentPage(newPageStateByAnimationType[chosenAnimation]);
  };

  const setPageByIndex = (pageIndex: number) => {
    setPage(AnimationTypes.SELECT, pageIndex);
  };

  const setNextPage = () => {
    if (isOnLastPage) {
      return;
    }
    setPage(AnimationTypes.PLUS);
  };

  const setPreviousPage = () => {
    if (isOnFirstPage) {
      return;
    }
    setPage(AnimationTypes.MINUS);
  };

  const paginateData = useCallback(() => {
    const paginatedItems = [];
    let pageItems: ComponentChildren[] = [];
    let index = 0;

    children.forEach((item) => {
      pageItems.push(
        <div className="border border-dotted border-base-300 flex items-center justify-center h-96 w-40">
          {item}
        </div>,
      );
      index += 1;
      if (index === ITEMS_BY_PAGE) {
        paginatedItems.push(pageItems);
        pageItems = [];
        index = 0;
      }
    });

    if (pageItems.length) {
      paginatedItems.push(pageItems);
    }
    return paginatedItems;
  }, [children, ITEMS_BY_PAGE]);

  useEffect(() => {
    setCurrentPage(0);
    setPaginatedData(paginateData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ITEMS_BY_PAGE]);

  return (
    <div className="py-10 px-16">
      <h1 className="text-3xl text-base-500">{title}</h1>
      <p className="text-base text-base-300 pb-2 mb-2 mt-2 border-b border-solid border-base-300">
        {description}
      </p>
      <ul className="flex justify-around overflow-hidden">
        {paginatedData[currentPage]}
      </ul>
      <div className="mt-8 flex items-center justify-between">
        <div>
          {pageNavigationIndexes.map((pageNavigationIndex) => (
            <button
              aria-label="Select Page"
              type="button"
              key={pageNavigationIndex}
              onClick={() => setPageByIndex(pageNavigationIndex)}
              className={`w-3 h-3 mx-2 rounded-full bg-gray-200 transition duration-100 hover:bg-gray-900 ${
                currentPage === pageNavigationIndex ? "bg-gray-900" : ""
              }`}
            />
          ))}
        </div>
        <div>
          <button
            className=""
            onClick={setPreviousPage}
            disabled={isOnFirstPage}
            type="button"
          >
            <Icon
              id="ChevronLeft"
              height={16}
              width={28}
              strokeWidth={24}
              className="z-carousel__icon"
            />
          </button>
          <button
            className=""
            type="button"
            onClick={setNextPage}
            disabled={isOnLastPage}
          >
            <Icon
              id="ChevronRight"
              height={16}
              width={28}
              strokeWidth={24}
              className=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
