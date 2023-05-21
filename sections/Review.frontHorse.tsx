export type Review = {
  title: string;
  content: string;
  rating: number;
  user: {
    name: string;
  };
  totalLikes: number;
  totalDeslikes: number;
  releaseDate: string;
};

export interface Props {
  reviews?: Review[];
  sectionName?: string;
  totalReviews?: number;
  totalStars?: number;
}

export default function Review({
  reviews,
  sectionName,
  totalReviews,
  totalStars,
}: Props) {
  const mockReviews: Review[] = [
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
      user: {
        name: "Name Surname",
      },
      totalLikes: 10,
      totalDeslikes: 10,
      releaseDate: "2 weeks ago",
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
      user: {
        name: "Name Surname",
      },
      totalLikes: 10,
      totalDeslikes: 10,
      releaseDate: "2 weeks ago",
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
      user: {
        name: "Name Surname",
      },
      totalLikes: 10,
      totalDeslikes: 10,
      releaseDate: "2 weeks ago",
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
      user: {
        name: "Name Surname",
      },
      totalLikes: 10,
      totalDeslikes: 10,
      releaseDate: "2 weeks ago",
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
      user: {
        name: "Name Surname",
      },
      totalLikes: 10,
      totalDeslikes: 10,
      releaseDate: "2 weeks ago",
    },
    {
      title: "Review title",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      rating: 4,
      user: {
        name: "Name Surname",
      },
      totalLikes: 10,
      totalDeslikes: 10,
      releaseDate: "2 weeks ago",
    },
  ];

  const reviewsList = [...mockReviews];

  return (
    <>
      <div className="h-full w-full p-10 pb-0">
        <h1 className="text-center text-4xl text-[#292929] mb-10">
          {sectionName ?? "Product reviews"}
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
            <span className="text-center">
              &nbsp; {totalStars ?? "4"} stars - {totalReviews ?? "238"} reviews
            </span>
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
                  <svg
                    width="61"
                    height="60"
                    viewBox="0 0 61 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      width="60"
                      height="60"
                      rx="30"
                      fill="#F0F0F0"
                    />
                    <g opacity="0.3">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23 19.5C21.3431 19.5 20 20.8431 20 22.5V30.8786L23.4393 27.4393L23.4599 27.4191C24.3635 26.5496 25.4963 25.9951 26.75 25.9951C28.0037 25.9951 29.1365 26.5496 30.0401 27.4191L30.0607 27.4393L33.5 30.8786L33.9393 30.4393L33.9599 30.4191C34.8635 29.5496 35.9963 28.9951 37.25 28.9951C38.5037 28.9951 39.6365 29.5496 40.5401 30.4191L40.5607 30.4393L41 30.8786V22.5C41 20.8431 39.6569 19.5 38 19.5H23ZM44 34.4985V22.5C44 19.1863 41.3137 16.5 38 16.5H23C19.6863 16.5 17 19.1863 17 22.5V34.4997C17 34.4995 17 34.4998 17 34.4997V37.5C17 40.8137 19.6863 43.5 23 43.5H38C41.3137 43.5 44 40.8137 44 37.5V34.5014C44 34.5004 44 34.4994 44 34.4985ZM41 35.1212L38.4505 32.5718C37.9897 32.1319 37.5739 31.9951 37.25 31.9951C36.9261 31.9951 36.5103 32.1319 36.0495 32.5718L35.6213 32.9999L37.5607 34.9393C38.1464 35.5251 38.1464 36.4748 37.5607 37.0606C36.9749 37.6464 36.0251 37.6464 35.4393 37.0606L27.9505 29.5718C27.4897 29.1318 27.0739 28.9951 26.75 28.9951C26.4261 28.9951 26.0103 29.1318 25.5495 29.5718L20 35.1212V37.5C20 39.1569 21.3431 40.5 23 40.5H38C39.6569 40.5 41 39.1569 41 37.5V35.1212ZM33.5 24C33.5 23.1716 34.1716 22.5 35 22.5H35.015C35.8434 22.5 36.515 23.1716 36.515 24C36.515 24.8284 35.8434 25.5 35.015 25.5H35C34.1716 25.5 33.5 24.8284 33.5 24Z"
                        fill="#787878"
                      />
                    </g>
                  </svg>
                  <span className="text-[#292929] text-center text-lg">
                    {review.user.name}
                  </span>
                </div>

                <div className="w-full flex flex-col md:gap-2">
                  <span className="w-full h-full flex flex-col md:flex-row gap-2">
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className={`mask mask-star-2 ${
                          review.rating >= 1 ? "bg-orange-400" : "bg-gray-400"
                        }`}
                      />
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className={`mask mask-star-2 ${
                          review.rating >= 2 ? "bg-orange-400" : "bg-gray-400"
                        }`}
                      />
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className={`mask mask-star-2 ${
                          review.rating >= 3 ? "bg-orange-400" : "bg-gray-400"
                        }`}
                      />
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className={`mask mask-star-2 ${
                          review.rating >= 4 ? "bg-orange-400" : "bg-gray-400"
                        }`}
                      />
                      <input
                        type="radio"
                        name={`rating-${review.rating}`}
                        className={`mask mask-star-2 ${
                          review.rating >= 5 ? "bg-orange-400" : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <span className="text-[#787878]">
                      • {review.releaseDate ?? "2 weeks ago"}
                    </span>
                  </span>

                  <div className="flex gap-3 flex-col">
                    <span className="text-xs md:text-normal">
                      {review.title}
                    </span>
                    <span className="text-xs md:text-lg">{review.content}</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <span className="items-center flex flex-col gap-2">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21 13C20.7348 13 20.4804 13.1054 20.2929 13.2929C20.1054 13.4804 20 13.7348 20 14V15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.8372 19.2339 16.9534 19.7044 16 19.899V25C16 25.5304 16.2107 26.0391 16.5858 26.4142C16.9609 26.7893 17.4696 27 18 27H25C25.0283 27 25.0566 27.0012 25.0848 27.0036C25.1715 27.011 25.323 26.9864 25.5155 26.7939C25.7146 26.5948 25.911 26.2537 26.0229 25.7866L26.9966 20.9179C26.9773 20.6827 26.8752 20.461 26.7071 20.2929C26.5196 20.1054 26.2652 20 26 20H23C22.4477 20 22 19.5523 22 19V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM15.6 28.2C15.5435 28.2753 15.4815 28.3469 15.4142 28.4142C15.0391 28.7893 14.5304 29 14 29H12C11.4696 29 10.9609 28.7893 10.5858 28.4142C10.2107 28.0391 10 27.5304 10 27V20C10 19.4696 10.2107 18.9609 10.5858 18.5858C10.9609 18.2107 11.4696 18 12 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15V14C18 13.2043 18.3161 12.4413 18.8787 11.8787C19.4413 11.3161 20.2044 11 21 11C21.7956 11 22.5587 11.3161 23.1213 11.8787C23.6839 12.4413 24 13.2043 24 14V18H26C26.7957 18 27.5587 18.3161 28.1213 18.8787C28.6839 19.4413 29 20.2043 29 21C29 21.0659 28.9935 21.1315 28.9806 21.1961L27.9806 26.1961C27.9784 26.2069 27.9761 26.2176 27.9736 26.2282C27.7973 26.9805 27.45 27.6878 26.9298 28.2081C26.4118 28.726 25.7232 29.0492 24.9633 29H18C17.1295 29 16.2883 28.7163 15.6 28.2ZM14 20H12V27H14V20Z"
                        fill="#292929"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#AAAAAA"
                      />
                    </svg>
                    {String(review.totalLikes) ?? "10"}
                  </span>
                  <span className="items-center flex flex-col gap-2">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.9633 10.9999C25.7232 10.9508 26.4118 11.2739 26.9298 11.7918C27.45 12.3121 27.7973 13.0194 27.9736 13.7717C27.9761 13.7823 27.9784 13.7931 27.9806 13.8038L28.9806 18.8038C28.9935 18.8684 29 18.9341 29 18.9999C29 19.7956 28.6839 20.5586 28.1213 21.1212C27.5587 21.6838 26.7957 21.9999 26 21.9999H24V25.9999C24 26.7956 23.6839 27.5586 23.1213 28.1212C22.5587 28.6838 21.7957 28.9999 21 28.9999C20.2043 28.9999 19.4413 28.6838 18.8787 28.1212C18.3161 27.5586 18 26.7956 18 25.9999V24.9999C18 24.2043 17.6839 23.4412 17.1213 22.8786C16.5587 22.316 15.7956 21.9999 15 21.9999H12C11.4696 21.9999 10.9609 21.7892 10.5858 21.4141C10.2107 21.0391 10 20.5303 10 19.9999V12.9999C10 12.4695 10.2107 11.9608 10.5858 11.5857C10.9609 11.2106 11.4696 10.9999 12 10.9999H14C14.5304 10.9999 15.0391 11.2106 15.4142 11.5857C15.4815 11.653 15.5435 11.7246 15.6 11.7999C16.2883 11.2836 17.1295 10.9999 18 10.9999H24.9633ZM14 12.9999H12V19.9999H14V12.9999ZM16 20.1009V14.9999C16 14.4695 16.2107 13.9608 16.5858 13.5857C16.9609 13.2106 17.4696 12.9999 18 12.9999H25C25.0283 12.9999 25.0566 12.9987 25.0848 12.9963C25.1715 12.9889 25.323 13.0135 25.5155 13.2061C25.7146 13.4051 25.911 13.7462 26.0229 14.2133L26.9966 19.0821C26.9773 19.3172 26.8752 19.5389 26.7071 19.707C26.5196 19.8946 26.2652 19.9999 26 19.9999H23C22.4477 19.9999 22 20.4476 22 20.9999V25.9999C22 26.2651 21.8946 26.5195 21.7071 26.707C21.5196 26.8946 21.2652 26.9999 21 26.9999C20.7348 26.9999 20.4804 26.8946 20.2929 26.707C20.1054 26.5195 20 26.2651 20 25.9999V24.9999C20 23.6738 19.4732 22.4021 18.5355 21.4644C17.8372 20.766 16.9534 20.2956 16 20.1009Z"
                        fill="#292929"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#AAAAAA"
                      />
                    </svg>
                    {String(review.totalDeslikes) ?? "10"}
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}

        <hr className="pb-10 pt-10" />

        <div className="btn-group flex flex-row justify-center items-center text-center mb-10">
          <span className="w-8 h-8">«</span>
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
          <span className="w-8 h-8">»</span>
        </div>
      </div>
    </>
  );
}
