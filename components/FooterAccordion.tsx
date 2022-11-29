export const sections = [
  {
    label: "Minha Conta",
    content: (
      <div class="flex flex-col">
        <a
          href="https://secure.offpremium.com.br/api/io/login?returnUrl=https://fashion.deco.site"
          class="mb-4 text-white text-xs"
        >
          Login/Cadastro
        </a>
        <a
          href="https://secure.offpremium.com.br/login?returnUrl=%2Fapi%2Fio%2Faccount%23%2Forders"
          class="mb-4 text-white text-xs"
        >
          Meus pedidos
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
          href="https://www.offpremium.com.br/atendimento"
        >
          Central de Atendimento
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=552125036888"
        >
          Fale conosco pelo WhatsApp
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://www.offpremium.com.br/politica/troca-e-devolucao"
        >
          Troca e Devolução
        </a>
      </div>
    ),
  },
  {
    label: "Sobre",
    content: (
      <div class="flex flex-col">
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://www.offpremium.com.br/institucional/quem-somos"
        >
          Quem somos
        </a>

        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://www.offpremium.com.br/institucional/lojas"
        >
          Lojas
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://gruposoma.gupy.io/"
        >
          Trabalhe Conosco
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://www.somagrupo.com.br/"
        >
          Grupo Soma
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://www.offpremium.com.br/politica/privacidade-e-seguran%C3%A7a/"
        >
          Privacidade e segurança
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://www.offpremium.com.br/aviso-de-privacidade"
        >
          Aviso de privacidade
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://www.offpremium.com.br/politica/termos-de-uso"
        >
          Termos de uso
        </a>
        <a
          target="_blank"
          class="mb-4 text-white text-xs"
          rel="noopener noreferrer"
          href="https://www.offpremium.com.br/mapa-do-site"
        >
          Mapa do Site
        </a>
      </div>
    ),
  },
  {
    label: "Formas de Pagamento",
    content: (
      <div class="flex flex-col p-4">
        <span class="text-white mb-4 text-white text-xs">
          Pagamento por Pix
        </span>
        <div class="flex justify-center">
          <img
            src="/assets/pix.svg"
            alt="Logotipo pix"
            width="44.39px"
            height="16px"
            loading="lazy"
          />
        </div>
        <span class="text-white my-4 text-xs">Cartão de Crédito:</span>
        <ul class="flex flex-row flex-wrap justify-center lg:justify-start mt-1">
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="/assets/visa.svg"
              alt="Bandeira Visa"
              width="20px"
              height="6.46px"
              loading="lazy"
            />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="/assets/diners.svg"
              alt="Bandeira Diners"
              width="16px"
              height="13.83px"
              loading="lazy"
            />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="/assets/mastercard-logo-c0bb8dbfe9c9d74d6ddcf7f781d31921.svg"
              alt="Bandeira Mastercard"
              width="20px"
              height="16.09px"
              loading="lazy"
            />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="/assets/amex.svg"
              alt="Bandeira Amex"
              width="16px"
              height="10.57px"
              loading="lazy"
            />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="/assets/elo.svg"
              alt="Bandeira Elo"
              width="20px"
              height="7.66px"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Certificados",
    content: (
      <div>
        <ul class="flex flex-row flex-wrap pb-6" style="margin-top: 8px;">
          <li class="">
            <a href="#" aria-label="certificado compromisso">
              <img
                data-src="https://lojaoffpremium.vtexassets.com/arquivos/compromisso-logo-footer2-mini.png?v=637088123928200000"
                src="https://lojaoffpremium.vtexassets.com/arquivos/compromisso-logo-footer2-mini.png?v=637088123928200000"
                alt=""
                width="80"
                height="80"
                loading="lazy"
              />
            </a>
          </li>
          <li style="display: inline-block; margin-left: 15px; margin-right: 15px; align-self: center;">
            |
          </li>
          <li class="">
            <a href="#" aria-label="certifiicado logo oficial">
              <img
                data-src="https://lojaoffpremium.vtexassets.com/arquivos/oficial-logo-footer-mini.png?v=637088123936870000"
                src="https://lojaoffpremium.vtexassets.com/arquivos/oficial-logo-footer-mini.png?v=637088123936870000"
                alt=""
                width="80"
                height="80"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Redes Sociais",
    content: (
      <div>
        <ul class="flex items-center justify-center flex-row flex-wrap">
          <li class="mr-[8px] last:m-0">
            <a
              class="flex items-center justify-center w-8 h-8"
              href="https://www.facebook.com/offpremium/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjM3NjM1IDEyLjAwMDhDNS4zNzYzNSAxMy4yNzY3IDUuMzczMTggMTQuNTQ5NCA1LjM3OTUzIDE1LjgyNTNDNS4zNzk1MyAxNS45NjQ5IDUuMzQxNDQgMTYuMDAzIDUuMjAxOCAxNS45OTk4QzQuMTE2MzYgMTUuOTkzNSAzLjAzNDA5IDE1Ljk5MzUgMS45NDg2NSAxNS45OTk4QzEuNzk5NDggMTUuOTk5OCAxLjc1MTg4IDE1Ljk2NDkgMS43NTE4OCAxNS44MDk0QzEuNzU4MjIgMTMuMjc5OSAxLjc1NTA1IDEwLjc1MzUgMS43NTUwNSA4LjIyNDAxQzEuNzU1MDUgNy45NzAxMSAxLjc4MzYxIDguMDAxODUgMS41MjMzNiA3Ljk5ODY3QzEuMDYzMTYgNy45OTg2NyAwLjYwMjk2MSA3Ljk5NTUgMC4xNDI3NiA4LjAwMTg1QzAuMDMxNjc3IDguMDAxODUgLTYuMTAzNTJlLTA1IDcuOTY2OTMgLTYuMTAzNTJlLTA1IDcuODU1ODVDMC4wMDMxMTI3NiA3LjA1Mjg4IDAuMDAzMTEyNzYgNi4yNDY3MyAtNi4xMDM1MmUtMDUgNS40NDM3NkMtNi4xMDM1MmUtMDUgNS4zMzI2OCAwLjAzMTY3NyA1LjI5Nzc3IDAuMTQyNzYgNS4zMDA5NEMwLjYyNTE3NyA1LjMwNzI5IDEuMTA0NDIgNS4yOTc3NyAxLjU4Njg0IDUuMzA3MjlDMS43MTY5NiA1LjMxMDQ2IDEuNzU4MjIgNS4yNzU1NSAxLjc1ODIyIDUuMTM5MDhDMS43NTE4OCA0LjQ2MzA2IDEuNzU4MjIgMy43ODM4NyAxLjc1NTA1IDMuMTA3ODVDMS43NTE4OCAyLjU0NjA5IDEuODM3NTcgMi4wMDMzNyAyLjEyMDA0IDEuNTA4MjVDMi40MjQ3MiAwLjk2ODcwNyAyLjg4MTc1IDAuNTk3MzcyIDMuNDQ2NjggMC4zNTYxNjNDMy45MjI3NSAwLjE1MzA0IDQuNDI0MjEgMC4wNTc4MjYyIDQuOTM4MzcgMC4wMjkyNjJDNS45NTcxNiAtMC4wMjc4NjY0IDYuOTc5MTIgMC4wMTk3NDA2IDcuOTk3OTEgMC4wMDA2OTc3NzNDOC4xMTIxNyAtMC4wMDI0NzYwMyA4LjE0MDczIDAuMDM4NzgzNCA4LjE0MDczIDAuMTQ2NjkzQzguMTM3NTYgMC45ODE0MDIgOC4xMzc1NiAxLjgxOTI4IDguMTQwNzMgMi42NTM5OUM4LjE0MDczIDIuNzgwOTUgOC4wOTMxMyAyLjc5OTk5IDcuOTgyMDQgMi43OTk5OUM3LjM5NDg5IDIuNzk2ODIgNi44MDc3NCAyLjc5NjgyIDYuMjIwNTkgMi43OTY4MkM1LjczMTgyIDIuNzk2ODIgNS4zNzk1MyAzLjE0OTExIDUuMzc5NTMgMy42MzE1MkM1LjM3OTUzIDQuMTI5ODEgNS4zODU4OCA0LjYyNDkyIDUuMzc2MzUgNS4xMjMyMUM1LjM3MzE4IDUuMjY2MDMgNS40MjA3OSA1LjMwMDk0IDUuNTU3MjYgNS4zMDA5NEM2LjM2MDIzIDUuMjk0NTkgNy4xNjYzOCA1LjMwMDk0IDcuOTY5MzUgNS4yOTQ1OUM4LjEwMjY1IDUuMjk0NTkgOC4xNDcwOCA1LjMzMjY4IDguMTMxMjEgNS40NjU5OEM4LjA4MzYgNS44NzU0IDguMDQyMzUgNi4yODQ4MiA3Ljk5NzkxIDYuNjk0MjRDNy45NTY2NSA3LjA4Nzc5IDcuODg2ODMgNy40NzgxNyA3LjgyMzM1IDcuODY4NTVDNy44MDQzMSA3Ljk3OTYzIDcuNzY5NCA4LjAwNTAyIDcuNjY3ODQgOC4wMDUwMkM2Ljk3OTEyIDguMDAxODUgNi4yOTM1OCA4LjAwMTg1IDUuNjA0ODcgOC4wMDUwMkM1LjMzNTEgOC4wMDUwMiA1LjM3MzE4IDcuOTcwMTEgNS4zNzMxOCA4LjI0MzA2QzUuMzc2MzUgOS40OTM1MyA1LjM3NjM1IDEwLjc0NzIgNS4zNzYzNSAxMi4wMDA4WiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K"
                alt="Ícone de acesso ao facebook"
                width="9"
                height="16"
                loading="lazy"
              />
            </a>
          </li>
          <li class="mr-[8px] last:m-0">
            <a
              class="flex items-center justify-center w-8 h-8"
              href="https://www.instagram.com/offpremium/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTEzOSA1LjczMDAzQzYuOTk3NTUgNS43MzAwMyA1Ljc2MDA5IDYuOTY3NTEgNS43NjAwOSA4LjQ4Mzg5QzUuNzYwMDkgMTAuMDAwMyA2Ljk5NzU1IDExLjIzNzggOC41MTM5IDExLjIzNzhDMTAuMDMwMyAxMS4yMzc4IDExLjI2NzcgMTAuMDAwMyAxMS4yNjc3IDguNDgzODlDMTEuMjY3NyA2Ljk2NzUxIDEwLjAzMDMgNS43MzAwMyA4LjUxMzkgNS43MzAwM1pNMTYuNzczMyA4LjQ4Mzg5QzE2Ljc3MzMgNy4zNDM1MSAxNi43ODM2IDYuMjEzNDYgMTYuNzE5NiA1LjA3NTE0QzE2LjY1NTUgMy43NTI5NiAxNi4zNTM5IDIuNTc5NTIgMTUuMzg3MSAxLjYxMjY3QzE0LjQxODIgMC42NDM3NTkgMTMuMjQ2OCAwLjM0NDIwMiAxMS45MjQ3IDAuMjgwMTU4QzEwLjc4NDMgMC4yMTYxMTUgOS42NTQyNiAwLjIyNjQ0NSA4LjUxNTk3IDAuMjI2NDQ1QzcuMzc1NjEgMC4yMjY0NDUgNi4yNDU1NyAwLjIxNjExNSA1LjEwNzI4IDAuMjgwMTU4QzMuNzg1MTIgMC4zNDQyMDIgMi42MTE3IDAuNjQ1ODI1IDEuNjQ0ODcgMS42MTI2N0MwLjY3NTk3OCAyLjU4MTU4IDAuMzc2NDI2IDMuNzUyOTYgMC4zMTIzODQgNS4wNzUxNEMwLjI0ODM0MiA2LjIxNTUyIDAuMjU4NjcxIDcuMzQ1NTggMC4yNTg2NzEgOC40ODM4OUMwLjI1ODY3MSA5LjYyMjIxIDAuMjQ4MzQyIDEwLjc1NDMgMC4zMTIzODQgMTEuODkyNkMwLjM3NjQyNiAxMy4yMTQ4IDAuNjc4MDQ0IDE0LjM4ODMgMS42NDQ4NyAxNS4zNTUxQzIuNjEzNzcgMTYuMzI0IDMuNzg1MTIgMTYuNjIzNiA1LjEwNzI4IDE2LjY4NzZDNi4yNDc2NCAxNi43NTE3IDcuMzc3NjcgMTYuNzQxMyA4LjUxNTk3IDE2Ljc0MTNDOS42NTYzMyAxNi43NDEzIDEwLjc4NjQgMTYuNzUxNyAxMS45MjQ3IDE2LjY4NzZDMTMuMjQ2OCAxNi42MjM2IDE0LjQyMDIgMTYuMzIyIDE1LjM4NzEgMTUuMzU1MUMxNi4zNTYgMTQuMzg2MiAxNi42NTU1IDEzLjIxNDggMTYuNzE5NiAxMS44OTI2QzE2Ljc4NTcgMTAuNzU0MyAxNi43NzMzIDkuNjI0MjggMTYuNzczMyA4LjQ4Mzg5Wk04LjUxMzkgMTIuNzIxMUM2LjE2OTEzIDEyLjcyMTEgNC4yNzY4IDEwLjgyODcgNC4yNzY4IDguNDgzODlDNC4yNzY4IDYuMTM5MDggNi4xNjkxMyA0LjI0NjcxIDguNTEzOSA0LjI0NjcxQzEwLjg1ODcgNC4yNDY3MSAxMi43NTEgNi4xMzkwOCAxMi43NTEgOC40ODM4OUMxMi43NTEgMTAuODI4NyAxMC44NTg3IDEyLjcyMTEgOC41MTM5IDEyLjcyMTFaTTEyLjkyNDUgNS4wNjI3NEMxMi4zNzcxIDUuMDYyNzQgMTEuOTM1IDQuNjIwNjQgMTEuOTM1IDQuMDczMTdDMTEuOTM1IDMuNTI1NzEgMTIuMzc3MSAzLjA4MzYgMTIuOTI0NSAzLjA4MzZDMTMuNDcyIDMuMDgzNiAxMy45MTQxIDMuNTI1NzEgMTMuOTE0MSA0LjA3MzE3QzEzLjkxNDMgNC4yMDMxNyAxMy44ODg4IDQuMzMxOTIgMTMuODM5MSA0LjQ1MjA2QzEzLjc4OTQgNC41NzIxOSAxMy43MTY1IDQuNjgxMzUgMTMuNjI0NiA0Ljc3MzI3QzEzLjUzMjcgNC44NjUxOSAxMy40MjM2IDQuOTM4MDggMTMuMzAzNCA0Ljk4Nzc1QzEzLjE4MzMgNS4wMzc0MiAxMy4wNTQ1IDUuMDYyOTEgMTIuOTI0NSA1LjA2Mjc0WiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K"
                alt="Ícone de acesso ao Instagram"
                width="16"
                height="16"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];

export default function FooterAccordion() {
  return (
    <div class="w-full">
      {sections.map(({ label, content }) => (
        <div class="bg-[#353535]" key={label}>
          <details class="w-full cursor-pointer flex flex-row justify-between focus:outline-none">
            <summary class="text-white p-6">{label}</summary>
            <p class="p-4 pt-4 pb-2 text-sm text-gray-100 bg-[#222]">
              {content}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
}
