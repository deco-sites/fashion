import { useState } from "preact/hooks";
import { useId } from "preact/hooks";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "../../components/ui/Icon.tsx";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosed, setIsClosed] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alerts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? alerts.length - 1 : prevIndex - 1
    );
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <div id={id}>
      {!isClosed && (
        <div class="relative">
          <button
            class="absolute left-10 top-3 md:left-15"
            onClick={handlePrevious}
          >
            <Icon class="text-white" id="ChevronLeft" size={15} strokeWidth={2} />
          </button>
          <button
            class="absolute right-10 top-3 md:right-15"
            onClick={handleNext}
          >
            <Icon class="text-white" id="ChevronRight" size={15} strokeWidth={2} />
          </button>
          <button
            class="absolute right-2 top-3 md:right-2"
            onClick={handleClose}
          >
            <Icon class="text-white" id="XMark" size={15} strokeWidth={2} />
          </button>
          <Slider class="carousel bg-secondary carousel-centergap-6 scrollbar-none">
            {alerts.map((alert, index) => (
              <Slider.Item
                key={index}
                index={index}
                class={`carousel-item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <span class="text-sm text-secondary-content flex justify-center items-center w-screen h-[38px]">
                  {alert}
                </span>
              </Slider.Item>
            ))}
          </Slider>
        </div>
      )}
      <SliderJS rootId={id} interval={interval && interval * 1000} />
    </div>
  );
}

export default Alert;