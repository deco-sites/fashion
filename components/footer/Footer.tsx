import Icon from "$store/components/ui/Icon.tsx";

const sections = [
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

function Footer() {
  return (
    <footer class="w-full">
      <div class="hidden md:block bg-[#353535] w-full">
        <div class="flex justify-between p-8 w-9/12 mx-auto">
          {sections.map(({ label, content }) => (
            <div class="flex flex-col mr-12">
              <span class="text-white uppercase mb-4 text-xs">{label}</span>
              {content}
            </div>
          ))}
        </div>
      </div>

      <div class="md:hidden w-full">
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
      </div>

      <div className="flex flex-row flex-col justify-between justify-center items-center px-3 pt-2 pb-5 w-full">
        <div class="flex flex-col items-center">
          <ul class="flex items-center justify-center mt-3">
            <li class="mr-[8px] last:m-0">
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook logo"
              >
                <Icon id="Facebook" class="w-auto" />
              </a>
            </li>
            <li class="mr-[8px] last:m-0">
              <a
                href="https://www.instagram.com/deco.cx"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram logo"
              >
                <Icon id="Instagram" class="w-auto" />
              </a>
            </li>
            <li class="mr-[8px] last:m-0">
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok logo"
              >
                <Icon id="Tiktok" class="w-auto" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full">
        <div class="flex justify-center px-3 pb-4">
          <p class="text-xs text-center">
            Site by <a href="https://www.deco.cx">deco.cx</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
