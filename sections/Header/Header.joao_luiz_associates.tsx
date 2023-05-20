// import Hamburguer from "$store/sections/Header/components/Hamburguer/index.tsx";
// import { Logo } from "$store/sections/Header/components/Logo/index.tsx";
// import { Nav } from "$store/sections/Header/components/Nav/index.tsx";
// import { Search } from "$store/sections/Header/components/Search/index.tsx";
// import { Favorites } from "$store/sections/Header/components/Favorites/index.tsx";
// import { Locations } from "$store/sections/Header/components/Locations/index.tsx";
// import { Profile } from "$store/sections/Header/components/Profile/index.tsx";
// import { Cart } from "$store/sections/Header/components/Cart/index.tsx";
// import { Languages } from "$store/sections/Header/components/Languages/index.tsx";
// import { Button } from "$store/sections/Header/components/Button/index.tsx";
// import { ProductSpotlight } from "$store/sections/Header/components/ProductSpotlight/index.tsx";
// import { ProductCategories } from "$store/sections/Header/components/ProductCategories/index.tsx";
// import { ProductSizes } from "$store/sections/Header/components/ProductSizes/index.tsx";
// import { ColorFilter } from "$store/sections/Header/components/ColorFilter/index.tsx";
// import { PriceFilter } from "$store/sections/Header/components/PriceFilter/index.tsx";

export interface Props {
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function Header({ questions }: Props) {
  const navBarCenter = [
    {
      name: "Category",
      className: "flex normal-case text-md align-center gap-2 cursor-pointer",
    },
    {
      name: "Filter",
      className: "normal-case text-md cursor-pointer",
    },
    {
      name: "Sale",
      className: "normal-case text-md text-orange-500 cursor-pointer",
    },
  ] as {
    name: string;
    className: string;
  }[];

  const navBarStart = [
    {
      name: "Hambuger",
      className: "btn btn-ghost align-center cursor-pointer",
      icon: (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55229 17.5523 8 17 8H1C0.447715 8 0 7.55229 0 7ZM0 13C0 12.4477 0.447715 12 1 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H1C0.447715 14 0 13.5523 0 13Z"
            fill="#292929"
          />
        </svg>
      ),
      data: [
        {
          id: 0,
          name: "Homepage",
        },
        {
          id: 1,
          name: "Portfolio",
        },
        {
          id: 2,
          name: "About",
        },
      ],
    },
    {
      name: "Logo",
      className: "btn btn-ghost",
    },
  ] as {
    name: string;
    className: string;
    icon?: any;
    data?: {
      id: number;
      name: string;
    }[];
  }[];

  const navBarEnd = [
    {
      name: "Search",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z"
            fill="#292929"
          />
        </svg>
      ),
    },
    {
      name: "Favorite",
      icon: (
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.41135 3.01115C6.86226 2.95258 6.30699 3.00833 5.78051 3.1749C5.25402 3.34146 4.76773 3.61524 4.35225 3.97898C3.93677 4.34272 3.6011 4.78854 3.36638 5.28838C3.13167 5.78822 3.00299 6.33124 2.98845 6.88326C2.97391 7.43527 3.07382 7.98432 3.2819 8.49582C3.48997 9.00732 3.8017 9.4702 4.19746 9.85531L4.20377 9.86146L4.20374 9.86148L11.0001 16.5926L17.7964 9.86148C17.8171 9.84097 17.8385 9.82154 17.8605 9.8032C18.2242 9.43013 18.5117 8.98938 18.7066 8.50557C18.9123 7.99497 19.0104 7.4474 18.9948 6.89714C18.9791 6.34688 18.8501 5.80577 18.6157 5.30768C18.3813 4.8096 18.0466 4.36525 17.6326 4.00246C17.2185 3.63967 16.7341 3.36624 16.2095 3.19928C15.685 3.03233 15.1316 2.97544 14.5841 3.03219C14.0365 3.08893 13.5066 3.25808 13.0274 3.52905C12.5482 3.80003 12.1301 4.16699 11.7993 4.60697C11.6098 4.85898 11.3126 5.00687 10.9973 5.00599C10.682 5.00511 10.3855 4.85558 10.1975 4.60251C9.86806 4.15931 9.45046 3.78912 8.97096 3.51524C8.49146 3.24136 7.96044 3.06973 7.41135 3.01115ZM19.1347 11.3508L11.7037 18.7105C11.314 19.0965 10.6861 19.0965 10.2964 18.7105L2.79935 11.2855C2.20729 10.7084 1.74085 10.0153 1.42931 9.24944C1.1172 8.48218 0.96733 7.65862 0.989141 6.8306C1.01095 6.00257 1.20397 5.18804 1.55605 4.43828C1.90812 3.68852 2.41162 3.01978 3.03484 2.47417C3.65806 1.92856 4.3875 1.5179 5.17723 1.26805C5.96696 1.0182 6.79986 0.934576 7.6235 1.02244C8.44713 1.1103 9.24365 1.36774 9.96291 1.77856C10.337 1.99221 10.6859 2.24493 11.0042 2.5318C11.3221 2.2484 11.6702 1.99891 12.0429 1.78814C12.7617 1.38168 13.5566 1.12796 14.3779 1.04284C15.1992 0.957725 16.0293 1.04305 16.8161 1.29349C17.6029 1.54392 18.3296 1.95406 18.9507 2.49825C19.5717 3.04244 20.0737 3.70896 20.4253 4.45609C20.7769 5.20322 20.9705 6.01488 20.994 6.84027C21.0174 7.66566 20.8703 8.48701 20.5618 9.25292C20.2532 10.0188 19.7899 10.7128 19.2008 11.2914C19.1794 11.3124 19.1574 11.3322 19.1347 11.3508Z"
            fill="#292929"
          />
        </svg>
      ),
    },
    {
      name: "Cart",
      icon: (
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path
            d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
            fill="#292929"
          />
        </svg>
      ),
      list: {
        jsx: (
          <div className="flex-col">
            <div className="flex-row align-center gap-2">
              <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
                <path
                  d="M19 5.99999H16.3334C16.3334 3.05332 13.9467 0.666656 11 0.666656C8.05337 0.666656 5.66671 3.05332 5.66671 5.99999H3.00004C1.53337 5.99999 0.333374 7.19999 0.333374 8.66666V24.6667C0.333374 26.1333 1.53337 27.3333 3.00004 27.3333H19C20.4667 27.3333 21.6667 26.1333 21.6667 24.6667V8.66666C21.6667 7.19999 20.4667 5.99999 19 5.99999ZM11 3.33332C12.4667 3.33332 13.6667 4.53332 13.6667 5.99999H8.33337C8.33337 4.53332 9.53338 3.33332 11 3.33332ZM19 24.6667H3.00004V8.66666H5.66671V11.3333C5.66671 12.0667 6.26671 12.6667 7.00004 12.6667C7.73337 12.6667 8.33337 12.0667 8.33337 11.3333V8.66666H13.6667V11.3333C13.6667 12.0667 14.2667 12.6667 15 12.6667C15.7334 12.6667 16.3334 12.0667 16.3334 11.3333V8.66666H19V24.6667Z"
                  fill="#292929"
                />
              </svg>

              <span>Seu carrinho</span>
            </div>
            <div>
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.0999756 1.00001C0.0999756 0.50295 0.502919 0.100006 0.999976 0.100006H12C12.497 0.100006 12.9 0.50295 12.9 1.00001V1.10001H17C17.3161 1.10001 17.6091 1.26588 17.7717 1.53696L20.7717 6.53696C20.8556 6.67683 20.9 6.83689 20.9 7.00001V13C20.9 13.4971 20.497 13.9 20 13.9H18.7576C18.3789 15.061 17.2874 15.9 16 15.9C14.7125 15.9 13.621 15.061 13.2423 13.9H8.75761C8.37893 15.061 7.28743 15.9 5.99998 15.9C4.71252 15.9 3.62102 15.061 3.24234 13.9H1.99998C1.50292 13.9 1.09998 13.4971 1.09998 13V9.00001C1.09998 8.50295 1.50292 8.10001 1.99998 8.10001C2.49703 8.10001 2.89998 8.50295 2.89998 9.00001V12.1H3.24234C3.62102 10.939 4.71252 10.1 5.99998 10.1C7.28743 10.1 8.37893 10.939 8.75761 12.1H11.1V1.90001H0.999976C0.502919 1.90001 0.0999756 1.49706 0.0999756 1.00001ZM12.9 2.90001V6.10001H18.4104L16.4904 2.90001H12.9ZM19.1 7.90001H12.9V12.1H13.2423C13.621 10.939 14.7125 10.1 16 10.1C17.2874 10.1 18.3789 10.939 18.7576 12.1H19.1V7.90001ZM1.09998 5.00001C1.09998 4.50295 1.50292 4.10001 1.99998 4.10001H5.99998C6.49703 4.10001 6.89997 4.50295 6.89997 5.00001C6.89997 5.49706 6.49703 5.90001 5.99998 5.90001H1.99998C1.50292 5.90001 1.09998 5.49706 1.09998 5.00001ZM5.99998 11.9C5.39246 11.9 4.89998 12.3925 4.89998 13C4.89998 13.6075 5.39246 14.1 5.99998 14.1C6.60749 14.1 7.09997 13.6075 7.09997 13C7.09997 12.3925 6.60749 11.9 5.99998 11.9ZM16 11.9C15.3925 11.9 14.9 12.3925 14.9 13C14.9 13.6075 15.3925 14.1 16 14.1C16.6075 14.1 17.1 13.6075 17.1 13C17.1 12.3925 16.6075 11.9 16 11.9Z"
                  fill="#186740"
                />
              </svg>
            </div>
            <div>
              <div>
                <span>Subtotal</span>
                <span>R$ 00,00</span>
              </div>
              <div>
                <span>Cupom de desconto</span>
                <button>Adicionar</button>
              </div>
              <div>
                <span>Código do vendedor</span>
                <input type="text" />
              </div>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 00,00</span>
            </div>
            <div>
              <button className="btn btn-primary">Finalizar compra</button>
            </div>
          </div>
        ),
      },
    },
  ] as {
    name: string;
    icon: any;
    list?: {
      jsx: any;
    };
  }[];

  const navBarBottom = [
    {
      name: "Popular product",
      img:
        "https://images.unsplash.com/photo-1684444161762-95fbabc9a766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
      className: "card",
    },
    {
      name: "Categories",
      list: [
        {
          id: 0,
          name: "All",
        },
        {
          id: 1,
          name: "Clothes",
        },
        {
          id: 2,
          name: "Shoes",
        },
      ],
    },
    {
      name: "Sizes",
      list: [
        {
          id: 0,
          name: "32",
        },
        {
          id: 1,
          name: "34",
        },
        {
          id: 2,
          name: "36",
        },
        {
          id: 3,
          name: "38",
        },
        {
          id: 4,
          name: "40",
        },
        {
          id: 5,
          name: "42",
        },
      ],
    },
    {
      name: "Colors",
      list: [
        {
          id: 0,
          name: "Black",
          code: "#000",
        },
        {
          id: 1,
          name: "White",
          code: "#fff",
        },
        {
          id: 2,
          name: "Red",
          code: "#f00",
        },
        {
          id: 3,
          name: "Blue",
          code: "#00f",
        },
        {
          id: 4,
          name: "Yellow",
          code: "#ff0",
        },
        {
          id: 5,
          name: "Green",
          code: "#0f0",
        },
      ],
    },
    {
      name: "Price",
      list: [
        {
          id: 0,
          name: "All",
        },
        {
          id: 1,
          name: "$0 - $50",
        },
        {
          id: 2,
          name: "$50 - $100",
        },
        {
          id: 3,
          name: "$100 - $150",
        },
        {
          id: 4,
          name: "$150 - $200",
        },
      ],
    },
  ] as {
    name: string;
    img?: string;
    list?: {
      id: number;
      name: string;
      code?: string;
    }[];
  }[];

  return (
    <>
      <div className="navbar bg-base-100 flex align-center">
        <div className="navbar-start gap-4">
          {navBarStart.map((item) => (
            <div className="dropdown dropdown-start">
              <label tabIndex={0} className={item.className}>
                {item.icon ? item.icon : item.name}
              </label>
              {item.data && (
                <ul
                  tabIndex={0}
                  className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                >
                  {item.data.map((item) => <li>{item.name}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="navbar-center gap-4">
          {navBarCenter.map((item) => (
            <div className={item.className}>
              <label tabIndex={0}>{item.name}</label>
            </div>
          ))}
        </div>

        <div className="navbar-end">
          {navBarEnd.map((item) => (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                {item.icon}
              </label>
              {item.list && (
                <ul
                  tabIndex={0}
                  className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                >
                  {item.list.jsx}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center border-solid border-grey-300 border">
        <div className="navbar-bottom flex gap-4">
          {navBarBottom.map((item) => (
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                {item.img && (
                  <div className="card-image bg-base-200">
                    <img
                      src={item.img}
                      alt="img"
                      className="w-full object-cover object-center rounded-t-lg"
                    />
                  </div>
                )}
                {item.list && (
                  <ul className="menu row-span-2">
                    {item.list.map((item) => {
                      return (
                        <li>
                          {item?.code
                            ? (
                              <a className="flex items-center gap-2">
                                <span
                                  className="w-4 h-4 rounded-full border-2 border-base-100"
                                  style={{ backgroundColor: item.code }}
                                >
                                </span>
                                {item.name}
                              </a>
                            )
                            : <a>{item.name}</a>}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
