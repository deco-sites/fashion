export interface Props {
  menuHamburger?: Array<{
    title?: string;
    url?: string;
  }>;
  titleMenuDropdown?: string;
  menuDropdown?: Array<{
    title?: string;
    url?: string;
  }>;
  menuOthers?: Array<{
    title?: string;
    url?: string;
  }>;
  logo: {
    src?: string;
    alt?: string;
  };
  searchInput?: true | false;
  iconsUrls?: {
    search?: string;
    heart?: string;
    location?: string;
    person?: string;
    shop?: string;
  };
  button?: {
    active?: true | false;
    label?: string;
    url?: string;
  };
  language?: Array<string>;
}

const HeaderAlternative = (props: Props) => {
  const {
    menuHamburger,
    titleMenuDropdown,
    menuDropdown,
    menuOthers,
    logo,
    searchInput,
    iconsUrls,
    language,
    button,
  } = props;

  return (
    <header className="navbar px-8 py-7 max-h-[120px] min-h-[72px] w-full  border border-solid border-b-[#aaaaaa] bg-white lg:px-16  ">
      <div className=" w-1/4 justify-center md:navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box "
          >
            {menuHamburger?.map((item) => {
              const { title, url } = item;

              return (
                <li>
                  <a href={url}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <a>
                {titleMenuDropdown
                  ? [
                    titleMenuDropdown,
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>,
                  ]
                  : <></>}
              </a>
              <ul className="p-2 bg-base-100">
                {menuDropdown?.map((item) => {
                  const { title, url } = item;

                  return (
                    <li>
                      <a href={url}>{title}</a>
                    </li>
                  );
                })}
              </ul>
            </li>

            {menuOthers?.map((item, index) => {
              const { title, url } = item;

              return (
                <li>
                  {menuOthers.length - 1 == index
                    ? <a className={"text-[#E37A69]"} href={url}>{title}</a>
                    : <a href={url}>{title}</a>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-1/4 justify-center flex flex-col md:navbar-center">
        <button className="h-7 w-20 btn-circle">
          <img src={logo?.src} alt={logo?.alt} />
        </button>

        {searchInput
          ? (
            <div className="hidden form-control justify-center  relative lg:flex">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full pl-11"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 absolute mr-2 w-10 fill-none stroke-[#aaaaaa]"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          )
          : null}
      </div>

      <div className="w-2/4 justify-center  gap-6 md:navbar-end">
        <button className="btn btn-ghost" href={iconsUrls?.search}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button
          className="hidden btn btn-ghost xl:inline-flex"
          href={iconsUrls?.heart}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.41135 5.01115C7.86226 4.95258 7.30699 5.00833 6.78051 5.1749C6.25402 5.34146 5.76773 5.61524 5.35225 5.97898C4.93677 6.34272 4.6011 6.78854 4.36638 7.28838C4.13167 7.78822 4.00299 8.33124 3.98845 8.88326C3.97391 9.43527 4.07382 9.98432 4.2819 10.4958C4.48997 11.0073 4.8017 11.4702 5.19746 11.8553L5.20377 11.8615L5.20374 11.8615L12.0001 18.5926L18.7964 11.8615C18.8171 11.841 18.8385 11.8215 18.8605 11.8032C19.2242 11.4301 19.5117 10.9894 19.7066 10.5056C19.9123 9.99497 20.0104 9.4474 19.9948 8.89714C19.9791 8.34688 19.8501 7.80577 19.6157 7.30768C19.3813 6.8096 19.0466 6.36525 18.6326 6.00246C18.2185 5.63967 17.7341 5.36624 17.2095 5.19928C16.685 5.03233 16.1316 4.97544 15.5841 5.03219C15.0365 5.08893 14.5066 5.25808 14.0274 5.52905C13.5482 5.80003 13.1301 6.16699 12.7993 6.60697C12.6098 6.85898 12.3126 7.00687 11.9973 7.00599C11.682 7.00511 11.3855 6.85558 11.1975 6.60251C10.8681 6.15931 10.4505 5.78912 9.97096 5.51524C9.49146 5.24136 8.96044 5.06973 8.41135 5.01115ZM20.1347 13.3508L12.7037 20.7105C12.314 21.0965 11.6861 21.0965 11.2964 20.7105L3.79935 13.2855C3.20729 12.7084 2.74085 12.0153 2.42931 11.2494C2.1172 10.4822 1.96733 9.65862 1.98914 8.8306C2.01095 8.00257 2.20397 7.18804 2.55605 6.43828C2.90812 5.68852 3.41162 5.01978 4.03484 4.47417C4.65806 3.92856 5.3875 3.5179 6.17723 3.26805C6.96696 3.0182 7.79986 2.93458 8.6235 3.02244C9.44713 3.1103 10.2437 3.36774 10.9629 3.77856C11.337 3.99221 11.6859 4.24493 12.0042 4.5318C12.3221 4.2484 12.6702 3.99891 13.0429 3.78814C13.7617 3.38168 14.5566 3.12796 15.3779 3.04284C16.1992 2.95773 17.0293 3.04305 17.8161 3.29349C18.6029 3.54392 19.3296 3.95406 19.9507 4.49825C20.5717 5.04244 21.0737 5.70896 21.4253 6.45609C21.7769 7.20322 21.9705 8.01488 21.994 8.84027C22.0174 9.66566 21.8703 10.487 21.5618 11.2529C21.2532 12.0188 20.7899 12.7128 20.2008 13.2914C20.1794 13.3124 20.1574 13.3322 20.1347 13.3508Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          className="hidden btn btn-ghost xl:inline-flex"
          href={iconsUrls?.location}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4.00024C10.6156 4.00024 9.26219 4.41078 8.11105 5.17993C6.95991 5.94909 6.06271 7.04232 5.53288 8.32138C5.00306 9.60044 4.86441 11.0079 5.13448 12.3657C5.40454 13.7236 6.07115 14.9708 7.05003 15.9498C7.04999 15.9497 7.05006 15.9498 7.05003 15.9498L11.2938 20.1925C11.4813 20.3798 11.7355 20.485 12.0005 20.485C12.2655 20.485 12.5197 20.3798 12.7073 20.1925L16.9499 15.9499C16.9499 15.9499 16.9499 15.9499 16.9499 15.9499C17.9288 14.9709 18.5955 13.7236 18.8655 12.3657C19.1356 11.0079 18.997 9.60044 18.4671 8.32138C17.9373 7.04232 17.0401 5.94909 15.889 5.17993C14.7378 4.41078 13.3845 4.00024 12 4.00024ZM6.99992 3.51699C8.47995 2.52807 10.22 2.00024 12 2.00024C13.78 2.00024 15.5201 2.52807 17.0001 3.51699C18.4801 4.5059 19.6337 5.91148 20.3149 7.55599C20.9961 9.20049 21.1743 11.0101 20.8271 12.7559C20.4799 14.5017 19.6228 16.1053 18.3641 17.364L14.1211 21.6071C13.5586 22.169 12.7956 22.485 12.0005 22.485C11.2054 22.485 10.4428 22.1694 9.88025 21.6074L5.63598 17.3641C4.37735 16.1055 3.52013 14.5017 3.1729 12.7559C2.82567 11.0101 3.00393 9.20049 3.68513 7.55599C4.36633 5.91148 5.51989 4.5059 6.99992 3.51699ZM12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9ZM8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11Z"
              fill="#292929"
            />
          </svg>
        </button>

        <button
          className="hidden btn btn-ghost xl:inline-flex"
          href={iconsUrls?.person}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7ZM10 16C9.20435 16 8.44129 16.3161 7.87868 16.8787C7.31607 17.4413 7 18.2043 7 19V21C7 21.5523 6.55228 22 6 22C5.44772 22 5 21.5523 5 21V19C5 17.6739 5.52678 16.4021 6.46447 15.4645C7.40215 14.5268 8.67392 14 10 14H14C15.3261 14 16.5979 14.5268 17.5355 15.4645C18.4732 16.4021 19 17.6739 19 19V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V19C17 18.2044 16.6839 17.4413 16.1213 16.8787C15.5587 16.3161 14.7956 16 14 16H10Z"
              fill="#292929"
            />
          </svg>
        </button>

        <button className="btn btn-ghost" href={iconsUrls?.shop}>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
              fill="#292929"
            />
          </svg>
        </button>

        <div className="dropdown dropdown-end flex items-center justify-center">
          <svg
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.6838 1.67256C9.7887 1.66865 9.8941 1.66668 9.99996 1.66668C10.1058 1.66668 10.2112 1.66865 10.3161 1.67256C10.4132 1.66083 10.5112 1.66644 10.6054 1.68833C14.9251 1.99847 18.3333 5.60123 18.3333 10C18.3333 14.3988 14.9251 18.0016 10.6054 18.3117C10.5112 18.3336 10.4132 18.3392 10.3161 18.3275C10.2112 18.3314 10.1058 18.3333 9.99996 18.3333C9.8941 18.3333 9.78871 18.3314 9.68381 18.3275C9.58665 18.3392 9.48869 18.3336 9.39452 18.3117C5.07479 18.0015 1.66663 14.3988 1.66663 10C1.66663 5.60124 5.07479 1.99848 9.39452 1.68833C9.4887 1.66644 9.58665 1.66082 9.6838 1.67256ZM11.9794 16.3679C13.593 15.8669 14.944 14.7694 15.7747 13.3333H13.0231C12.785 14.3778 12.4354 15.3953 11.9794 16.3679ZM11.3081 13.3333C11.0168 14.4613 10.578 15.5502 9.99995 16.5708C9.42189 15.5502 8.98307 14.4613 8.69183 13.3333H11.3081ZM13.3052 11.6667H16.4566C16.5937 11.134 16.6666 10.5755 16.6666 10C16.6666 9.42451 16.5937 8.86604 16.4566 8.33334H13.3052C13.3669 8.88502 13.3981 9.4414 13.3981 10C13.3981 10.5586 13.3669 11.115 13.3052 11.6667ZM11.6269 8.33334C11.6963 8.8843 11.7315 9.4409 11.7315 10C11.7315 10.5591 11.6963 11.1157 11.6269 11.6667H8.37301C8.3036 11.1157 8.26844 10.5591 8.26844 10C8.26844 9.4409 8.3036 8.8843 8.37301 8.33334H11.6269ZM13.0231 6.66668H15.7747C14.944 5.23058 13.593 4.13313 11.9794 3.63211C12.4354 4.60472 12.785 5.6222 13.0231 6.66668ZM11.3081 6.66668H8.69183C8.98307 5.5387 9.42189 4.44984 9.99995 3.42921C10.578 4.44984 11.0168 5.5387 11.3081 6.66668ZM8.02053 3.63212C6.40695 4.13315 5.0559 5.23059 4.22517 6.66668H6.97683C7.21489 5.6222 7.5645 4.60473 8.02053 3.63212ZM6.69465 8.33334H3.54332C3.40621 8.86604 3.33329 9.42451 3.33329 10C3.33329 10.5755 3.40621 11.134 3.54332 11.6667H6.69465C6.63297 11.115 6.60178 10.5586 6.60178 10C6.60178 9.4414 6.63297 8.88502 6.69465 8.33334ZM6.97683 13.3333C7.21489 14.3778 7.5645 15.3953 8.02053 16.3679C6.40695 15.8669 5.05591 14.7694 4.22517 13.3333H6.97683Z"
              fill="#292929"
            />
          </svg>
          <select className="select select-ghost w-auto max-w-xs">
            {language?.map((label, index) => {
              return index === 0
                ? <option selected>{label}</option>
                : <option>{label}</option>;
            })}
          </select>
        </div>

        {button?.active && (
          <button
            href={button?.url}
            className={"hidden btn w-20 h-10 min-h-full py-2 px-3 md:flex"}
          >
            {button?.label}
          </button>
        )}
      </div>
    </header>
  );
};

HeaderAlternative.props = {
  menuHamburger: [{ title: "Category", url: "#" }],
  titleMenuDropdown: "Category",
  menuDropdown: [{ title: "Category", url: "#" }],
  menuOthers: [{ title: "Sales", url: "#" }],
  logo: {
    src: "https://dummyimage.com/60x60/aaaaaa/000000.png",
    alt: "deco",
  },
  searchInput: true,
  iconsUrls: {
    search: "#",
    heart: "#",
    location: "#",
    person: "#",
    shop: "#",
  },
  language: ["EN", "PT"],
  button: {
    active: true,
    label: "button",
    url: "#",
  },
};

export default HeaderAlternative;
