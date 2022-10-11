import type { JSONSchema7 } from "https://esm.sh/v92/@types/json-schema@7.0.11/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmQvcHJlYWN0QDEwLjEwLjY/index.d.ts";
import TruckIcon from "../icons/TruckIcon.tsx";

export const schema: JSONSchema7 = {
  title: "Alerta",
  type: "object",
  required: ["message"],
  properties: {
    message: {
      title: "Mensagem de reward",
      type: "string",
    },
  },
};

export interface Props {
  message: string;
  class?: string;
}

export default function Alert(
  { message = "Frete gratis a partir de 1000 reais", class: className }: Props,
) {
  return (
    <section
      class={`bg-custom-gray w-full justify-center h-10 md:border-b border-[#d3d5db] ${
        className ?? ""
      }`}
    >
      <div class="flex gap-2 items-center font-bold text-sm text-[#353535]">
        <span>
          <TruckIcon class="w-5 h-5 md:w-6 md:h-6" />
        </span>
        <span>{message}</span>
      </div>
    </section>
  );
}
