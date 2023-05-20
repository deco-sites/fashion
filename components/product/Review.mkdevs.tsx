import Icon from "$store/components/ui/Icon.tsx";
import { StateUpdater, useMemo, useState } from "preact/hooks";

export interface Review {
  id: string;
  reviewerImageUrl?: string;
  reviewerName: string;
  rating: number;
  /** @format date */
  date: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
}

export interface Props {
  title: string;
  reviews: Review[];
  pageSize: number;
}

type SortingFilter = "none" | "bigger-rating" | "lower-rating";

function getAvgRating(reviews: Review[]) {
  // Total rating divided by the reviews length
  return reviews.reduce((prev, curr) => prev + curr.rating, 0) / reviews.length;
}

function sortReviews(
  reviews: Review[],
  filter: SortingFilter,
  page: number,
  pageSize: number,
) {
  if (filter === "lower-rating") {
    reviews.sort((a, b) => a.rating - b.rating);
  }
  if (filter === "bigger-rating") {
    reviews.sort((a, b) => b.rating - a.rating);
  }

  return reviews.slice(page * pageSize, (page * pageSize) + pageSize);
}

export interface PaginatorProps {
  page: number;
  setPage: StateUpdater<number>;
  pageCount: number;
}

function range(start: number, end: number) {
  return new Array(end - start + 1).fill(1).map((d, i) => i + start);
}

function ReviewsPaginator({ page, setPage, pageCount }: PaginatorProps) {
  return (
    <div class="flex gap-2 justify-center items-center my-6">
      <Icon
        id="ChevronLeft"
        width={30}
        height={30}
        strokeWidth={2}
        class="flex items-center justify-center cursor-pointer rounded-full p-2 w-10 h-10 hover:bg-gray-200"
        onClick={() => setPage((p) => Math.max(p - 1, 0))}
      />
      {range(page - 1, page + 3).map((num) => (
        <button
          disabled={num <= 0 || num > pageCount}
          onClick={() => setPage(num - 1)}
          class={`rounded-full p-2 w-10 h-10 flex items-center justify-center disabled:opacity-0
                        ${
            num === page + 1 ? "bg-black text-white" : "hover:bg-gray-200"
          }
                `}
        >
          {num}
        </button>
      ))}
      <Icon
        id="ChevronRight"
        width={30}
        height={30}
        strokeWidth={2}
        class="flex items-center justify-center cursor-pointer rounded-full p-2 w-10 h-10 hover:bg-gray-200"
        onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
      />
    </div>
  );
}

function getTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

function ProductReview(props: Review) {
  const reviewDate = new Date(props.date);
  const diffDate = getTimeAgo(reviewDate);

  return (
    <div class="w-full">
      <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-8">
        <div class="flex flex-col items-center lg:w-1/6">
          {props.reviewerImageUrl
            ? (
              <img
                class="rounded-full object-cover w-16 h-16"
                src={props.reviewerImageUrl}
                alt={`${props.reviewerName} picture`}
              />
            )
            : <ImageProfile />}
          <h5 class="text-lg text-center">{props.reviewerName}</h5>
        </div>
        <div class="lg:mr-auto lg:w-2/3 lg:flex lg:flex-col w-full">
          <div class="flex gap-3 items-center justify-center mt-2 lg:mr-auto">
            <div class="rating">
              {range(0, 4).map((num) => (
                <input
                  type="radio"
                  name={`rating-${props.id}-${num}`}
                  class="h-[16px] mask mask-star-2 bg-orange-400"
                  checked={props.rating - 1 === num}
                />
              ))}
            </div>
            <span class="text-[#787878]">{"\u2022"}</span>
            <p class="text-[#787878]">{diffDate}</p>
          </div>
          <h5 class="text-lg lg:text-xl mt-4">{props.title}</h5>
          <p class="text-sm lg:text-lg mt-2">{props.content}</p>
        </div>
        <div class="mt-4 flex gap-8 justify-center lg:w-1/6">
          <div class="flex gap-2 items-center">
            <div class="border border-gray-400 rounded-full p-2 hover:bg-gray-100 cursor-pointer">
              <ThumbsUp />
            </div>
            <span>{props.likes}</span>
          </div>

          <div class="flex gap-2 items-center">
            <div class="border border-gray-400 rounded-full p-2 hover:bg-gray-100 cursor-pointer">
              <ThumbsDown />
            </div>
            <span>{props.dislikes}</span>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}

function ProductReviews({ title, reviews, pageSize }: Props) {
  const [filter, setFilter] = useState<SortingFilter>("lower-rating");
  const [page, setPage] = useState(0);
  const avgRating = useMemo(() => getAvgRating(reviews), [reviews]);
  const filteredReviews = useMemo(
    () => sortReviews(reviews, filter, page, pageSize),
    [filter, page],
  );

  return (
    <div class="px-4 py-10 lg:px-10">
      <header class="w-full flex justify-start lg:justify-center items-center">
        <h2 class="text-4xl">{title}</h2>
      </header>
      <div class="flex justify-between items-center mt-4">
        <div class="flex flex-col lg:flex-row items-start gap-2">
          <div
            class="rating rating-half flex tooltip"
            data-tip={`${avgRating.toFixed(1)} average rating`}
          >
            {range(0, 9).map((num) => {
              return (
                <input
                  type="radio"
                  name={`rating-10`}
                  class={`mask mask-star-2 bg-orange-400 
                          ${num % 2 === 0 ? "mask-half-1" : "mask-half-2"}`}
                  checked={num === (Math.floor(avgRating * 2)) - 1}
                />
              );
            })}
          </div>
          <span class="text-lg">
            {avgRating.toFixed(1)} stars {`\u2022`} {reviews.length} reviews
          </span>
        </div>
        <div class="dropdown dropdown-end h-full text-green-900 border border-green-900 text-lg">
          <label
            tabIndex={0}
            class="flex items-center p-2 gap-2 cursor-pointer select-none"
          >
            <div class="">
              <Icon
                id="Bars3"
                width={23}
                height={20}
                strokeWidth={0.01}
              />
            </div>
            <span class="">Order by</span>
          </label>
          <ul tabIndex={0} class="dropdown-content menu shadow bg-white w-52">
            <li
              class="hover:bg-gray-100 p-2 cursor-pointer"
              onClick={() => {
                setFilter("bigger-rating");
              }}
            >
              Rating (bigger)
            </li>
            <li
              class="hover:bg-gray-100 p-2 cursor-pointer"
              onClick={() => setFilter("lower-rating")}
            >
              Rating (lower)
            </li>
          </ul>
        </div>
      </div>
      <Divider />
      <div class="mt-4 flex flex-col">
        {filteredReviews.map((review) => (
          <ProductReview key={review.id} {...review} />
        ))}
      </div>
      <ReviewsPaginator
        page={page}
        setPage={setPage}
        pageCount={Math.ceil(reviews.length / pageSize)}
      />
    </div>
  );
}

function Divider() {
  return <div class="my-4 bg-gray-400 h-[1px] w-full px-2" />;
}

// Icons

function ThumbsUp() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 2C10.7348 2 10.4804 2.10536 10.2929 2.29289C10.1054 2.48043 10 2.73478 10 3V4C10 5.32608 9.47322 6.59785 8.53553 7.53553C7.83715 8.23392 6.95344 8.70436 6 8.899V14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16H15C15.0283 16 15.0566 16.0012 15.0848 16.0036C15.1715 16.011 15.323 15.9864 15.5155 15.7939C15.7146 15.5948 15.911 15.2537 16.0229 14.7866L16.9966 9.91786C16.9773 9.68272 16.8752 9.46097 16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9H13C12.4477 9 12 8.55228 12 8V3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2ZM5.6 17.2C5.54354 17.2753 5.48152 17.3469 5.41421 17.4142C5.03914 17.7893 4.53043 18 4 18H2C1.46957 18 0.960861 17.7893 0.585786 17.4142C0.210713 17.0391 0 16.5304 0 16V9C0 8.46957 0.210714 7.96086 0.585786 7.58579C0.960859 7.21071 1.46957 7 2 7H5C5.79565 7 6.55871 6.68393 7.12132 6.12132C7.68393 5.55871 8 4.79565 8 4V3C8 2.20435 8.31607 1.44129 8.87868 0.87868C9.44129 0.31607 10.2044 0 11 0C11.7956 0 12.5587 0.31607 13.1213 0.87868C13.6839 1.44129 14 2.20435 14 3V7H16C16.7957 7 17.5587 7.31607 18.1213 7.87868C18.6839 8.44129 19 9.20435 19 10C19 10.0659 18.9935 10.1315 18.9806 10.1961L17.9806 15.1961C17.9784 15.2069 17.9761 15.2176 17.9736 15.2282C17.7973 15.9805 17.45 16.6878 16.9298 17.2081C16.4118 17.726 15.7232 18.0492 14.9633 18H8C7.12953 18 6.28831 17.7163 5.6 17.2ZM4 9H2V16H4V9Z"
        fill="#292929"
      />
    </svg>
  );
}

function ThumbsDown() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9633 0.999915C15.7232 0.950761 16.4118 1.27388 16.9298 1.79184C17.45 2.31209 17.7973 3.01945 17.9736 3.77168C17.9761 3.78234 17.9784 3.79305 17.9806 3.8038L18.9806 8.8038C18.9935 8.86837 19 8.93406 19 8.99992C19 9.79556 18.6839 10.5586 18.1213 11.1212C17.5587 11.6838 16.7957 11.9999 16 11.9999H14V15.9999C14 16.7956 13.6839 17.5586 13.1213 18.1212C12.5587 18.6838 11.7957 18.9999 11 18.9999C10.2043 18.9999 9.44129 18.6838 8.87868 18.1212C8.31607 17.5586 8 16.7956 8 15.9999V14.9999C8 14.2043 7.68393 13.4412 7.12132 12.8786C6.55871 12.316 5.79565 11.9999 5 11.9999H2C1.46957 11.9999 0.960859 11.7892 0.585786 11.4141C0.210714 11.0391 0 10.5303 0 9.99992V2.99992C0 2.46948 0.210714 1.96077 0.585786 1.5857C0.960859 1.21063 1.46957 0.999915 2 0.999915H4C4.53043 0.999915 5.03914 1.21063 5.41421 1.5857C5.48152 1.65301 5.54354 1.72463 5.6 1.7999C6.28831 1.28365 7.12953 0.999915 8 0.999915H14.9633ZM4 2.99992H2V9.99992H4V2.99992ZM6 10.1009V4.99992C6 4.46948 6.21071 3.96077 6.58579 3.5857C6.96086 3.21063 7.46957 2.99992 8 2.99992H15C15.0283 2.99992 15.0566 2.99871 15.0848 2.99632C15.1715 2.98893 15.323 3.01348 15.5155 3.20606C15.7146 3.40515 15.911 3.7462 16.0229 4.21328L16.9966 9.08205C16.9773 9.31719 16.8752 9.53894 16.7071 9.70702C16.5196 9.89456 16.2652 9.99992 16 9.99992H13C12.4477 9.99992 12 10.4476 12 10.9999V15.9999C12 16.2651 11.8946 16.5195 11.7071 16.707C11.5196 16.8946 11.2652 16.9999 11 16.9999C10.7348 16.9999 10.4804 16.8946 10.2929 16.707C10.1054 16.5195 10 16.2651 10 15.9999V14.9999C10 13.6738 9.47322 12.4021 8.53553 11.4644C7.83715 10.766 6.95344 10.2956 6 10.1009Z"
        fill="#292929"
      />
    </svg>
  );
}

function ImageProfile() {
  return (
    <div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="gray"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.5 3.5C4.84315 3.5 3.5 4.84315 3.5 6.5V14.8786L6.93934 11.4393L6.95994 11.4191C7.8635 10.5496 8.99629 9.99512 10.25 9.99512C11.5037 9.99512 12.6365 10.5496 13.5401 11.4191L13.5607 11.4393L17 14.8786L17.4393 14.4393L17.4599 14.4191C18.3635 13.5496 19.4963 12.9951 20.75 12.9951C22.0037 12.9951 23.1365 13.5496 24.0401 14.4191L24.0607 14.4393L24.5 14.8786V6.5C24.5 4.84315 23.1569 3.5 21.5 3.5H6.5ZM27.5 18.4985V6.5C27.5 3.18629 24.8137 0.5 21.5 0.5H6.5C3.18629 0.5 0.5 3.18629 0.5 6.5V18.4997C0.5 18.4995 0.5 18.4998 0.5 18.4997V21.5C0.5 24.8137 3.18629 27.5 6.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V18.5014C27.5 18.5004 27.5 18.4994 27.5 18.4985ZM24.5 19.1212L21.9505 16.5718C21.4897 16.1319 21.0739 15.9951 20.75 15.9951C20.4261 15.9951 20.0103 16.1319 19.5495 16.5718L19.1213 16.9999L21.0607 18.9393C21.6464 19.5251 21.6464 20.4748 21.0607 21.0606C20.4749 21.6464 19.5251 21.6464 18.9393 21.0606L11.4505 13.5718C10.9897 13.1318 10.5739 12.9951 10.25 12.9951C9.92609 12.9951 9.51034 13.1318 9.04948 13.5718L3.5 19.1212V21.5C3.5 23.1569 4.84315 24.5 6.5 24.5H21.5C23.1569 24.5 24.5 23.1569 24.5 21.5V19.1212ZM17 8C17 7.17157 17.6716 6.5 18.5 6.5H18.515C19.3434 6.5 20.015 7.17157 20.015 8C20.015 8.82843 19.3434 9.5 18.515 9.5H18.5C17.6716 9.5 17 8.82843 17 8Z"
          fill="#787878"
        />
      </svg>
    </div>
  );
}

export default ProductReviews;
