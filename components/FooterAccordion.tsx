import Icon from "./ui/Icon.tsx";

export const sections = [
  {
    label: "Sobre",
    content: (
      <div class="flex flex-col">
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="#"
        >
          Quem somos
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="#"
        >
          Privacidade e segurança
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="#"
        >
          Termos de uso
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="#"
        >
          Trabalhe Conosco
        </a>
      </div>
    ),
  },
  {
    label: "Atendimento",
    content: (
      <div class="flex flex-col">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="mb-4 text-white text-xs"
          href="#"
        >
          Central de Atendimento
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="#"
        >
          Fale conosco pelo WhatsApp
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="#"
        >
          Troca e Devolução
        </a>
      </div>
    ),
  },
  {
    label: "Minha Conta",
    content: (
      <div class="flex flex-col">
        <a
          href="#"
          class="mb-4 text-white text-xs"
        >
          Login/Cadastro
        </a>
        <a
          href="#"
          class="mb-4 text-white text-xs"
        >
          Meus pedidos
        </a>
      </div>
    ),
  },
  {
    label: "Formas de Pagamento",
    content: (
      <div class="flex flex-col pb-4">
        <div class="text-white mb-3 text-xs">
          Pagamento por Pix
        </div>
        <div class="mb-3">
          <Icon id="Pix" width="44.39px" height="16px" />
        </div>
        <div class="text-white mt-3 text-xs">
          Cartão de Crédito
        </div>
        <ul class="flex flex-row flex-wrap justify-start mt-1">
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <Icon id="Visa" width="20px" height="6.46px" />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <Icon id="Diners" width="16px" height="13.83px" />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <Icon id="Mastercard" width="20px" height="16.09px" />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <Icon id="Amex" width="16px" height="10.57px" />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <Icon id="Elo" width="20px" height="7.66px" />
          </li>
        </ul>
      </div>
    ),
  },
];

function FooterAccordion() {
  return (
    <div class="w-full py-3 bg-[#353535]">
      {sections.map(({ label, content }) => (
        <div key={label}>
          <details class="w-full cursor-pointer flex flex-row justify-between focus:outline-none">
            <summary class="text-white px-6 py-2">{label}</summary>
            <div class="px-8 text-sm text-gray-100">
              {content}
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}

export default FooterAccordion;
