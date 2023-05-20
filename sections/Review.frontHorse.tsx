import { asset } from "$fresh/runtime.ts";

export type Review = {
  title: string;
  content: string;
  rating: number;
};

export interface Props {
  reviews?: Review[];
}

export default function Review({ reviews }: Props) {
  const mockReviews: Review[] = [
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
    },
  ];

  const reviewsList = [...mockReviews];

  return (
    <>
      <div className="h-full w-full p-10 pb-0">
        <h1 className="text-center text-4xl text-[#292929] mb-10">
          Product Reviews
        </h1>

        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row pb-10">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-gray-400"
              />
            </div>
            <span className="text-center">&nbsp; 4 stars - 238 reviews</span>
          </div>

          <button className="h-8 max-w-28 flex justify-center items-center p-0 md:p-3 gap-2 text-[#546F4A] text-center border border-[#546F4A] hover:opacity-70">
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 0C1.55228 0 2 0.447715 2 1V1.01C2 1.56228 1.55228 2.01 1 2.01C0.447715 2.01 0 1.56228 0 1.01V1C0 0.447715 0.447715 0 1 0ZM4 1C4 0.447715 4.44772 0 5 0H16C16.5523 0 17 0.447715 17 1C17 1.55228 16.5523 2 16 2H5C4.44772 2 4 1.55228 4 1ZM1 6C1.55228 6 2 6.44772 2 7V7.01C2 7.56228 1.55228 8.01 1 8.01C0.447715 8.01 0 7.56228 0 7.01V7C0 6.44772 0.447715 6 1 6ZM4 7C4 6.44772 4.44772 6 5 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H5C4.44772 8 4 7.55228 4 7ZM1 12C1.55228 12 2 12.4477 2 13V13.01C2 13.5623 1.55228 14.01 1 14.01C0.447715 14.01 0 13.5623 0 13.01V13C0 12.4477 0.447715 12 1 12ZM4 13C4 12.4477 4.44772 12 5 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H5C4.44772 14 4 13.5523 4 13Z"
                fill="#546F4A"
              />
            </svg>

            Order by
          </button>
        </div>

        {reviewsList.map((review) => (
          <>
            <hr className="pb-10" />

            <div className="flex h-full w-full flex-col gap-5 justify-start py-6">
              <div className="flex h-[10.5rem] w-full justify-center gap-4 items-center pb-10">
                <div className="h-[6.8rem] w-[12rem] flex flex-col justify-center p-3 gap-2">
                  <img src={asset("/placeholder.png")} alt="PlaceHolder" />
                  <span className="text-[#292929] text-center text-lg">
                    Name Surname
                  </span>
                </div>

                <div className="w-full flex flex-col md:gap-2">
                  <span className="w-full h-full flex flex-col md:flex-row gap-2">
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className="mask mask-star-2 bg-gray-400"
                      />
                    </div>
                    <span className="text-[#787878]">• 2 weeks ago</span>
                  </span>

                  <div className="flex gap-3 flex-col">
                    <span className="text-xs md:text-normal">
                      {review.title}
                    </span>
                    <span className="text-xs md:text-lg">{review.content}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="items-center flex flex-col gap-2">
                    <img src={asset("/like.png")} alt="Like" className="pr-1" />
                    10
                  </span>
                  <span className="items-center flex flex-col gap-2">
                    <img
                      src={asset("/deslike.png")}
                      alt="deslike"
                      className="pr-1"
                    />
                    10
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}

        <hr className="pb-10 pt-10" />

        <div className="btn-group flex flex-row justify-center items-center text-center mb-10">
          <span className="w-8 h-8">
            «
          </span>
          <span className="bg-transparent w-8 h-8 border-solid border-1 border-slate-200">
            1
          </span>
          <span className="bg-transparent w-8 h-8 border-solid border-1 border-slate-200">
            2
          </span>
          <span className="bg-[#292929] w-8 h-8 border-solid border-1 rounded-[50%] text-white text-center">
            3
          </span>
          <span className="bg-transparent w-8 h-8 border-solid border-1 border-slate-200">
            4
          </span>
          <span className="w-8 h-8">
            »
          </span>
        </div>
      </div>
    </>
  );
}
