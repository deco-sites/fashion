import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";

import { Button } from "$store/components/ui/Button.tsx";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id} class="flex flex-col">
      <Slider class="carousel carousel-center bg-cyan-950 gap-6 scrollbar-none md:flex-nowrap">
        {alerts.map((alert, index) => (
          <Slider.Item
            index={index}
            class={`carousel-item ${index >= 2 ? "hidden md:block" : ""}`}
          >
            <span class="text-sm text-white flex justify-between px-4 items-center w-screen h-[38px]">
              <button class="bg-cyan-950 text-white mr-4">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.70711 0.292893C8.09763 0.683418 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
                    fill="white"
                  />
                </svg>
              </button>
              <div class="flex">
                {index === 0 && (
                  <span class="">
                    <svg
                      idth="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.0999756 0.999975C0.0999756 0.502919 0.502919 0.0999756 0.999976 0.0999756H12C12.497 0.0999756 12.9 0.502919 12.9 0.999975V1.09998H17C17.3161 1.09998 17.6091 1.26584 17.7717 1.53693L20.7717 6.53693C20.8556 6.6768 20.9 6.83686 20.9 6.99997V13C20.9 13.497 20.497 13.9 20 13.9H18.7576C18.3789 15.061 17.2874 15.9 16 15.9C14.7125 15.9 13.621 15.061 13.2423 13.9H8.75761C8.37893 15.061 7.28743 15.9 5.99998 15.9C4.71252 15.9 3.62102 15.061 3.24234 13.9H1.99998C1.50292 13.9 1.09998 13.497 1.09998 13V8.99997C1.09998 8.50292 1.50292 8.09997 1.99998 8.09997C2.49703 8.09997 2.89998 8.50292 2.89998 8.99997V12.1H3.24234C3.62102 10.9389 4.71252 10.1 5.99998 10.1C7.28743 10.1 8.37893 10.9389 8.75761 12.1H11.1V1.89998H0.999976C0.502919 1.89998 0.0999756 1.49703 0.0999756 0.999975ZM12.9 2.89998V6.09997H18.4104L16.4904 2.89998H12.9ZM19.1 7.89997H12.9V12.1H13.2423C13.621 10.9389 14.7125 10.1 16 10.1C17.2874 10.1 18.3789 10.9389 18.7576 12.1H19.1V7.89997ZM1.09998 4.99997C1.09998 4.50292 1.50292 4.09997 1.99998 4.09997H5.99998C6.49703 4.09997 6.89998 4.50292 6.89998 4.99997C6.89998 5.49703 6.49703 5.89997 5.99998 5.89997H1.99998C1.50292 5.89997 1.09998 5.49703 1.09998 4.99997ZM5.99998 11.9C5.39246 11.9 4.89998 12.3925 4.89998 13C4.89998 13.6075 5.39246 14.1 5.99998 14.1C6.60749 14.1 7.09998 13.6075 7.09998 13C7.09998 12.3925 6.60749 11.9 5.99998 11.9ZM16 11.9C15.3925 11.9 14.9 12.3925 14.9 13C14.9 13.6075 15.3925 14.1 16 14.1C16.6075 14.1 17.1 13.6075 17.1 13C17.1 12.3925 16.6075 11.9 16 11.9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                )}
                <span class="ml-2 mr-2 break-words">{alert}</span>
                {index !== alerts.length - 1 && (
                  <div class="w-px h-4 bg-gray-200 mx-2 hidden md:block" />
                )}
              </div>

              <button class="bg-cyan-950 text-white ml-4">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
                    fill="white"
                  />
                </svg>
              </button>

              <div class="hidden md:flex items-center">
                {/* desktop version */}
                <button class="text-white ml-4 border border-white px-2 py-1">
                  Button
                </button>
                <button class="ml-4">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </span>
          </Slider.Item>
        ))}
      </Slider>
      <SliderJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
