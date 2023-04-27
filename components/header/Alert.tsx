import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import { useId } from "preact/hooks";

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
    <div id={id}>
      <ul class="carousel carousel-center bg-secondary gap-6 scrollbar-none">
        {alerts.map((alert) => (
          <li class="carousel-item">
            <span class="text-sm text-secondary-content flex justify-center items-center w-screen h-[38px]">
              {alert}
            </span>
          </li>
        ))}
      </ul>

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
