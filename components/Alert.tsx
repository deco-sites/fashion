import { useId } from "preact/hooks";

import Slider from "../islands/Slider.tsx";

const messages = [
  "Parcelamento em até 10x no cartão",
  "Devolução Garantida",
  "Entrega para todo Brasil",
  "Pagamento por Pix",
];

export interface Props {
  alerts: string[];
}

function Alert({ alerts = messages }: Props) {
  const id = useId();

  return (
    <>
      <section
        id={id}
        class="hidden md:flex flex-row w-full justify-between h-10 bg-[#353535]"
      >
        <div class="flex gap-2 items-center text-sm text-white m-auto">
          <div class="w-[500px] overflow-x-hidden">
            <div
              data-slider-content
              class={`w-[${
                alerts.length * 100
              }%] transition flex justify-center`}
            >
              {alerts.map((alert) => (
                <span class="w-[500px] text-center uppercase text-xs">
                  {alert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Slider id={id} items={alerts.length} delay={4000} />
    </>
  );
}

export default Alert;
