import { useEffect, useState } from "preact/hooks";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "heroicons";
const messages = [
  "Parcelamento em até 10x no cartão",
  "Devolução Garantida",
  "Entrega para todo Brasil",
  "Pagamento por Pix",
];

export default function Alert() {
  const [currentMessage, setMessage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setMessage((currentMessage + 1) % messages.length);
    }, 2_000);
  }, []);

  return (
    <section
      class={`hidden md:flex flex-row w-full justify-between h-14 px-12 md:border-b border-[#d3d5db]`}
    >
      <div class="flex-1" />
      <div class="flex gap-2 items-center font-bold text-sm text-[#353535]">
        <button
          onClick={() => setMessage((currentMessage - 1) % messages.length)}
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </button>
        <div class="w-[300px] text-center uppercase text-xs">
          <span>{messages[currentMessage]}</span>
        </div>
        <button
          onClick={() => setMessage((currentMessage + 1) % messages.length)}
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>
      </div>
      <div class="flex-1 flex justify-end mr-4">
        <a
          href="/atendimento"
          class="uppercase text-xs flex flex-row items-center  mr-4"
        >
          <QuestionMarkCircleIcon className="w-6 h-6 mr-2" />
          Atendimento
        </a>
        <a href="/login" class="uppercase text-xs flex flex-row items-center">
          <UserIcon className="w-5 h-5 mr-2" />
          Login/Cadastro
        </a>
      </div>
    </section>
  );
}
