import { useId } from "preact/hooks";
import Icon from "$components/ui/Icon.tsx";

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
        class="hidden md:flex flex-row w-full justify-between h-14 px-12 md:border-b border-[#d3d5db]"
      >
        <div class="flex-1" />
        <div class="flex gap-2 items-center font-bold text-sm text-[#353535]">
          <button data-slider-prev>
            <Icon name="ChevronLeft" className="h-8 w-8" />
          </button>
          <div class="w-[300px] overflow-x-hidden">
            <div
              data-slider-content
              class={`w-[${
                alerts.length * 100
              }%] transition flex justify-center`}
            >
              {alerts.map((alert) => (
                <span class="w-[300px] text-center uppercase text-xs">
                  {alert}
                </span>
              ))}
            </div>
          </div>
          <button data-slider-next>
            <Icon name="ChevronRight" className="h-8 w-8" />
          </button>
        </div>
        <div class="flex-1 flex justify-end mr-4">
          <a
            href="/atendimento"
            class="uppercase text-xs flex flex-row items-center  mr-4"
          >
            <Icon name="QuestionMarkCircle" className="w-6 h-6 mr-2" />
            Atendimento
          </a>
          <a href="/login" class="uppercase text-xs flex flex-row items-center">
            <Icon name="User" className="w-5 h-5 mr-2" />
            Login/Cadastro
          </a>
        </div>
      </section>
      <Slider id={id} items={alerts.length} />
    </>
  );
}

export default Alert;
