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
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCA0NSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjU4MTMgMTQuOTY4VjUuNjc2MTRDMTguNTgxMyA0Ljg1NTI0IDE4Ljg4MzEgNC4wNjc5NiAxOS40MjAzIDMuNDg3NUMxOS45NTc1IDIuOTA3MDMgMjAuNjg2MSAyLjU4MDkzIDIxLjQ0NTggMi41ODA5M0wyMy45ODQ1IDIuNTg0NzZDMjQuNzQyMyAyLjU4NjQxIDI1LjQ2ODUgMi45MTI4NSAyNi4wMDM3IDMuNDkyNDNDMjYuNTM4OSA0LjA3MjAxIDI2LjgzOTQgNC44NTczNyAyNi44MzkzIDUuNjc2MTRWNy42NTM1MUMyNi44MzkzIDguNDc0NDUgMjYuNTM3NSA5LjI2MTc4IDI2LjAwMDMgOS44NDIzMkMyNS40NjMyIDEwLjQyMjkgMjQuNzM0NiAxMC43NDkxIDIzLjk3NDggMTAuNzQ5MkgyMC4zODY1IiBzdHJva2U9IiM5Mzk1OTgiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI3Ljg3MDQgMi41ODA5M0gyOS4xMTg1QzI5LjQ3MTkgMi41ODA5MyAyOS44MTA4IDIuNzE1NTUgMzAuMDYwNyAyLjk1NTE3QzMwLjMxMDYgMy4xOTQ3OSAzMC40NTEgMy41MTk3OCAzMC40NTEgMy44NTg2NVYxMC44MzkiIHN0cm9rZT0iIzkzOTU5OCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjkuOTgwNiAxLjQ2MDI2TDI5LjUwNzMgMC45ODY1MjdDMjkuNDc5NCAwLjk1ODYyNiAyOS40NTcyIDAuOTI1NDk1IDI5LjQ0MjEgMC44ODkwMjhDMjkuNDI3IDAuODUyNTYxIDI5LjQxOTIgMC44MTM0NzMgMjkuNDE5MiAwLjc3Mzk5OEMyOS40MTkyIDAuNzM0NTIzIDI5LjQyNyAwLjY5NTQzNSAyOS40NDIxIDAuNjU4OTY4QzI5LjQ1NzIgMC42MjI1MDEgMjkuNDc5NCAwLjU4OTM3IDI5LjUwNzMgMC41NjE0NjlMMjkuOTgwNiAwLjA4ODE1NjRDMzAuMDM3MSAwLjAzMTcwODQgMzAuMTEzNyAwIDMwLjE5MzYgMEMzMC4yNzM1IDAgMzAuMzUwMSAwLjAzMTcwODQgMzAuNDA2NiAwLjA4ODE1NjRMMzAuODc5NSAwLjU2MTQ2OUMzMC45MDc0IDAuNTg5MzcgMzAuOTI5NiAwLjYyMjUwMSAzMC45NDQ3IDAuNjU4OTY4QzMwLjk1OTggMC42OTU0MzUgMzAuOTY3NiAwLjczNDUyMyAzMC45Njc2IDAuNzczOTk4QzMwLjk2NzYgMC44MTM0NzMgMzAuOTU5OCAwLjg1MjU2MSAzMC45NDQ3IDAuODg5MDI4QzMwLjkyOTYgMC45MjU0OTUgMzAuOTA3NCAwLjk1ODYyNiAzMC44Nzk1IDAuOTg2NTI3TDMwLjQwNDUgMS40NjAyNkMzMC4zNzY1IDEuNDg4MiAzMC4zNDMzIDEuNTEwMzYgMzAuMzA2OCAxLjUyNTQ4QzMwLjI3MDMgMS41NDA2IDMwLjIzMTIgMS41NDgzOCAzMC4xOTE3IDEuNTQ4MzhDMzAuMTUyMiAxLjU0ODM4IDMwLjExMzEgMS41NDA2IDMwLjA3NjYgMS41MjU0OEMzMC4wNDAxIDEuNTEwMzYgMzAuMDA2OSAxLjQ4ODIgMjkuOTc4OSAxLjQ2MDI2IiBmaWxsPSIjMzJCQ0FEIi8+CjxwYXRoIGQ9Ik0zMi41MTcxIDIuNTgwOTNIMzMuNjY3QzM0LjI1ODUgMi41ODA2OSAzNC44MjU5IDIuODE1OTkgMzUuMjQ0MyAzLjIzNTA5TDM3LjkzNDIgNS45MzE2M0MzOC4wMTcgNi4wMTQ3NSAzOC4xMTU0IDYuMDgwNjkgMzguMjIzNiA2LjEyNTY3QzM4LjMzMTkgNi4xNzA2NiAzOC40NDc5IDYuMTkzODIgMzguNTY1MSA2LjE5MzgyQzM4LjY4MjMgNi4xOTM4MiAzOC43OTgzIDYuMTcwNjYgMzguOTA2NiA2LjEyNTY3QzM5LjAxNDggNi4wODA2OSAzOS4xMTMyIDYuMDE0NzUgMzkuMTk2IDUuOTMxNjNMNDEuODc2MSAzLjI0NTM3QzQyLjA4MzIgMy4wMzc4MyA0Mi4zMjkgMi44NzMyMyA0Mi41OTk2IDIuNzYwOThDNDIuODcwMiAyLjY0ODc0IDQzLjE2MDIgMi41OTEwNSA0My40NTMgMi41OTEyMUg0NC4zODgiIHN0cm9rZT0iIzkzOTU5OCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIuNTE3MSAxMC44Mzg3SDMzLjY2N0MzNC4yNTg1IDEwLjgzODkgMzQuODI1OCAxMC42MDM2IDM1LjI0NDMgMTAuMTg0NUwzNy45MzQyIDcuNDg3NjVDMzguMTAxNiA3LjMyIDM4LjMyODUgNy4yMjU4MyAzOC41NjUxIDcuMjI1ODNDMzguODAxNyA3LjIyNTgzIDM5LjAyODYgNy4zMiAzOS4xOTYgNy40ODc2NUw0MS44NzYxIDEwLjE3NDdDNDIuMjk0NCAxMC41OTM3IDQyLjg2MTYgMTAuODI5MSA0My40NTMgMTAuODI4OUg0NC4zODgiIHN0cm9rZT0iIzkzOTU5OCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNTk5OCAxMi4zODIyQzExLjMxNTYgMTIuMzgzMiAxMS4wMzQgMTIuMzI1NSAxMC43NzE0IDEyLjIxMjJDMTAuNTA4NyAxMi4wOTkgMTAuMjcwMSAxMS45MzI1IDEwLjA2OTMgMTEuNzIyNEw3Ljg1ODY1IDkuNDEyMDJDNy43ODA0NiA5LjMzMzkzIDcuNjc2NDQgOS4yOTAzNCA3LjU2ODI1IDkuMjkwMzRDNy40NjAwNiA5LjI5MDM0IDcuMzU2MDQgOS4zMzM5MyA3LjI3Nzg1IDkuNDEyMDJMNS4wNTk2OCAxMS43Mjg3QzQuODU5MDggMTEuOTM5MiA0LjYyMDU1IDEyLjEwNiA0LjM1Nzg2IDEyLjIxOTVDNC4wOTUxNyAxMi4zMzMxIDMuODEzNTQgMTIuMzkxMiAzLjUyOTI0IDEyLjM5MDRIMy4wOTY0NEw1Ljg5Nzc0IDE1LjMxNjJDNi4zMTc4OCAxNS43NTQxIDYuODg3MTcgMTYgNy40ODA3MSAxNkM4LjA3NDI0IDE2IDguNjQzNTQgMTUuNzU0MSA5LjA2MzY4IDE1LjMxNjJMMTEuODcwNiAxMi4zODQxTDExLjU5OTggMTIuMzgyMloiIGZpbGw9IiMzMkJDQUQiLz4KPHBhdGggZD0iTTMuNTI5OTMgNC42MzkzM0MzLjgxNDM5IDQuNjM4NTQgNC4wOTYxOSA0LjY5NjU4IDQuMzU5MDIgNC44MTAxMUM0LjYyMTg1IDQuOTIzNjQgNC44NjA1IDUuMDkwNCA1LjA2MTE5IDUuMzAwNzVMNy4yODA1NCA3LjYxNjkzQzcuMzU3NjggNy42OTcxOCA3LjQ2MjE3IDcuNzQyMjQgNy41NzExIDcuNzQyMjRDNy42ODAwMyA3Ljc0MjI0IDcuNzg0NTEgNy42OTcxOCA3Ljg2MTY1IDcuNjE2OTNMMTAuMDczMSA1LjMwOTUyQzEwLjI3MzYgNS4wOTg5MSAxMC41MTIyIDQuOTMxOTUgMTAuNzc1MSA0LjgxODMyQzExLjAzNzkgNC43MDQ3IDExLjMxOTggNC42NDY2NyAxMS42MDQzIDQuNjQ3NjJIMTEuODcwNkw5LjA2MjE4IDEuNzE3MjlDOC44NTQyMiAxLjUwMDIyIDguNjA3MzEgMS4zMjgwMyA4LjMzNTU2IDEuMjEwNTRDOC4wNjM4IDEuMDkzMDYgNy43NzI1MyAxLjAzMjU5IDcuNDc4MzcgMS4wMzI1OUM3LjE4NDIxIDEuMDMyNTkgNi44OTI5NCAxLjA5MzA2IDYuNjIxMTggMS4yMTA1NEM2LjM0OTQzIDEuMzI4MDMgNi4xMDI1MiAxLjUwMDIyIDUuODk0NTYgMS43MTcyOUwzLjA5NjQ0IDQuNjM5MzNIMy41Mjk5M1oiIGZpbGw9IiMzMkJDQUQiLz4KPHBhdGggZD0iTTE0LjMwMTUgNi45MDAwMkwxMi41Nzg3IDUuMTY4NTFDMTIuNTM5OCA1LjE4NDQ4IDEyLjQ5ODMgNS4xOTI4OSAxMi40NTYzIDUuMTkzM0gxMS42NzI5QzExLjI2NTMgNS4xOTQzMiAxMC44NzQ1IDUuMzU3MDQgMTAuNTg1NiA1LjY0NjA3TDguMzQwNjMgNy45MDA4OUM4LjEzODQ1IDguMTAzNzIgNy44NjQ0NiA4LjIxNzYzIDcuNTc4OCA4LjIxNzYzQzcuMjkzMTQgOC4yMTc2MyA3LjAxOTE1IDguMTAzNzIgNi44MTY5NyA3LjkwMDg5TDQuNTYzNSA1LjYzNzQ5QzQuMjc0NjQgNS4zNDgyOSAzLjg4Mzg2IDUuMTg1MzkgMy40NzYxMyA1LjE4NDI0SDIuNTE0NDJDMi40NzQ3OSA1LjE4MzM1IDIuNDM1NjIgNS4xNzU0NCAyLjM5ODcxIDUuMTYwODlMMC42NjQ5ODIgNi45MDAwMkMwLjIzOTE1MiA3LjMyODkxIDAgNy45MTAwNiAwIDguNTE1OTVDMCA5LjEyMTg0IDAuMjM5MTUyIDkuNzAyOTkgMC42NjQ5ODIgMTAuMTMxOUwyLjM5NDkyIDExLjg3MDVDMi40MzE3NSAxMS44NTU3IDIuNDcwOTYgMTEuODQ3OCAyLjUxMDYzIDExLjg0NzJIMy40NzYxM0MzLjg4Mzg1IDExLjg0NiA0LjI3NDYyIDExLjY4MzEgNC41NjM1IDExLjM5MzlMNi44MTY1IDkuMTI5NThDNy4yMjM4NSA4LjcyMDY1IDcuOTMzNzUgOC43MjA2NSA4LjM0MDYzIDkuMTI5NThMMTAuNTg1NiAxMS4zODU0QzEwLjg3NDUgMTEuNjc0NCAxMS4yNjUzIDExLjgzNzEgMTEuNjcyOSAxMS44MzgxSDEyLjQ1NjNDMTIuNDk4MyAxMS44Mzg0IDEyLjUzOTkgMTEuODQ2OCAxMi41Nzg3IDExLjg2MjlMMTQuMzAxNSAxMC4xMzE0QzE0LjUxMjcgOS45MTkyMiAxNC42ODAyIDkuNjY3MzEgMTQuNzk0NSA5LjM5MDA0QzE0LjkwODggOS4xMTI3OCAxNC45Njc3IDguODE1NTkgMTQuOTY3NyA4LjUxNTQ3QzE0Ljk2NzcgOC4yMTUzNSAxNC45MDg4IDcuOTE4MTcgMTQuNzk0NSA3LjY0MDlDMTQuNjgwMiA3LjM2MzY0IDE0LjUxMjcgNy4xMTIyIDE0LjMwMTUgNi45MDAwMloiIGZpbGw9IiMzMkJDQUQiLz4KPC9zdmc+Cg=="
            alt="Logotipo pix"
            width="44.39px"
            height="16px"
          />
        </div>
        <span class="text-white my-4 text-xs">Cartão de Crédito:</span>
        <ul class="flex flex-row flex-wrap justify-center lg:justify-start mt-1">
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDIwIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC4zNDM1IDIuNjA2MjRDMTAuMzMyMSAzLjUwNTg4IDExLjE0NTMgNC4wMDc5NiAxMS43NTc5IDQuMzA2NDRDMTIuMzg3MiA0LjYxMjczIDEyLjU5ODYgNC44MDkxMSAxMi41OTYyIDUuMDgyOTdDMTIuNTkxNCA1LjUwMjE2IDEyLjA5NDIgNS42ODcxNCAxMS42Mjg3IDUuNjk0MzRDMTAuODE2OCA1LjcwNjk1IDEwLjM0NDcgNS40NzUxNCA5Ljk2OTM3IDUuMjk5NzdMOS42NzY5IDYuNjY4NDZDMTAuMDUzNSA2Ljg0MjAyIDEwLjc1MDcgNi45OTMzNiAxMS40NzM4IDYuOTk5OTdDMTMuMTcxIDYuOTk5OTcgMTQuMjgxNCA2LjE2MjE4IDE0LjI4NzQgNC44NjMxNkMxNC4yOTQgMy4yMTQ2MSAxMi4wMDcxIDMuMTIzMzMgMTIuMDIyNyAyLjM4NjQzQzEyLjAyODEgMi4xNjMwMiAxMi4yNDEzIDEuOTI0NiAxMi43MDg1IDEuODYzOTRDMTIuOTM5OCAxLjgzMzMxIDEzLjU3ODIgMS44MDk4OSAxNC4zMDE4IDIuMTQzMkwxNC41ODU5IDAuODE4OTU5QzE0LjE5NjcgMC42NzcyMjYgMTMuNjk2NSAwLjU0MTQ5OCAxMy4wNzM3IDAuNTQxNDk4QzExLjQ3NjIgMC41NDE0OTggMTAuMzUyNSAxLjM5MDcgMTAuMzQzNSAyLjYwNjI0Wk0xNy4zMTU1IDAuNjU1NjA1QzE3LjAwNTYgMC42NTU2MDUgMTYuNzQ0MyAwLjgzNjM3NSAxNi42Mjc4IDEuMTEzODRMMTQuMjAzNCA2LjkwMjY4SDE1Ljg5OTNMMTYuMjM2OSA1Ljk3SDE4LjMwOTRMMTguNTA1MiA2LjkwMjY4SDIwTDE4LjY5NTYgMC42NTU2MDVIMTcuMzE1NVpNMTcuNTUyNyAyLjM0MzE5TDE4LjA0MjIgNC42ODlIMTYuNzAxN0wxNy41NTI3IDIuMzQzMTlaTTguMjg3MTkgMC42NTU2MDVMNi45NTAzMyA2LjkwMjY4SDguNTY2NDVMOS45MDI3MSAwLjY1NTYwNUg4LjI4NzE5Wk01Ljg5NjM0IDAuNjU1NjA1TDQuMjE0MTYgNC45MDc2TDMuNTMzNzIgMS4yOTIyQzMuNDUzODUgMC44ODg2MjQgMy4xMzg1NSAwLjY1NTYwNSAyLjc4ODQyIDAuNjU1NjA1SDAuMDM4NDM2MUwwIDAuODM2OTc2QzAuNTY0NTMxIDAuOTU5NDkxIDEuMjA1OTMgMS4xNTcwOCAxLjU5NDUgMS4zNjg0OEMxLjgzMjMyIDEuNDk3NiAxLjkwMDE5IDEuNjEwNSAxLjk3ODI2IDEuOTE3MzlMMy4yNjcwNyA2LjkwMjY4SDQuOTc1MDhMNy41OTM1NCAwLjY1NTYwNUg1Ljg5NjM0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
              alt="Bandeira Visa"
              width="20px"
              height="6.46px"
            />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMjg5NDI5IDcuMDM1MjRDMC4yODk0MjkgMy4zNDc4NyAzLjI3ODU2IDAuMzU4NjI0IDYuOTY1OTIgMC4zNTg2MjRDMTAuNjUzMyAwLjM1ODYyNCAxMy42NDI0IDMuMzQ3ODcgMTMuNjQyNCA3LjAzNTI0QzEzLjY0MjQgMTAuNzIyNCAxMC42NTMzIDEzLjcxMTggNi45NjU5MiAxMy43MTE4QzMuMjc4NTYgMTMuNzExOCAwLjI4OTQyOSAxMC43MjI0IDAuMjg5NDI5IDcuMDM1MjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEuMDAzOSA2LjkwMzA3QzExLjAwMSA1LjE5MzQ0IDkuOTMyMTYgMy43MzUwNyA4LjQyNjYyIDMuMTU3ODZWMTAuNjQ4MkM5LjkzMjE2IDEwLjA3MDEgMTEuMDAxIDguNjEzMjggMTEuMDAzOSA2LjkwMzA3Wk01LjU1MzQ3IDEwLjY0NjhWMy4xNTg0MUM0LjA0OSAzLjczNzc3IDIuOTgxODUgNS4xOTM5NiAyLjk3Nzk0IDYuOTAzMDdDMi45ODE4NSA4LjYxMTkzIDQuMDQ5IDEwLjA2ODEgNS41NTM0NyAxMC42NDY4Wk02Ljk5MDY3IDAuNTcxOTE4QzMuNDk0MTkgMC41NzMyNjQgMC42NjE1MjYgMy40MDY2IDAuNjYwODQ5IDYuOTAzMDdDMC42NjE1MjYgMTAuMzk5MyAzLjQ5NDE5IDEzLjIzMjEgNi45OTA2NyAxMy4yMzI3QzEwLjQ4NzMgMTMuMjMyMSAxMy4zMjA5IDEwLjM5OTMgMTMuMzIxNyA2LjkwMzA3QzEzLjMyMDkgMy40MDY2IDEwLjQ4NzMgMC41NzMyNjQgNi45OTA2NyAwLjU3MTkxOFpNNi45NzUyNyAxMy44MzAzQzMuMTQ4OTggMTMuODQ4NSAwIDEwLjc0ODcgMCA2Ljk3NTI0QzAgMi44NTE1MSAzLjE0ODk4IC0wLjAwMDcxMDQ4NyA2Ljk3NTI3IC0xLjkwNzM1ZS0wNUg4Ljc2ODI5QzEyLjU0OTEgLTAuMDAwNzEwNDg3IDE2IDIuODUwMyAxNiA2Ljk3NTI0QzE2IDEwLjc0NzMgMTIuNTQ5MSAxMy44MzAzIDguNzY4MjkgMTMuODMwM0g2Ljk3NTI3WiIgZmlsbD0iIzIxNEU4RCIvPgo8L3N2Zz4K"
              alt="Bandeira Diners"
              width="16px"
              height="13.83px"
            />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="https://www.offpremium.com.br/static/mastercard-logo-c0bb8dbfe9c9d74d6ddcf7f781d31921.svg"
              alt="Bandeira Mastercard"
              width="20px"
              height="16.09px"
            />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuOTk5OTg2IDBIMTVDMTUuNTUyIDAgMTYgMC40MTE2NyAxNiAwLjkxOTM5MVY5LjY0OTQyQzE2IDEwLjE1NjcgMTUuNTUyIDEwLjU2ODQgMTUgMTAuNTY4NEgwLjk5OTk4NkMwLjQ0NzQ4NSAxMC41Njg0IDAgMTAuMTU2NyAwIDkuNjQ5NDdWMC45MTkzOTFDMCAwLjQxMTY3IDAuNDQ3OTc5IDAgMC45OTk5ODYgMFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yLjU4MDAyIDMuMzAyNjRMMSA2Ljc2Njk0SDIuODkxNUwzLjEyNTk5IDYuMjE0NTlIMy42NjE5OUwzLjg5NjQ4IDYuNzY2OTRINS45Nzg0OVY2LjM0NTM3TDYuMTY0MDEgNi43NjY5NEg3LjI0MDk5TDcuNDI2NTEgNi4zMzY0NlY2Ljc2Njk0SDExLjc1NjVMMTIuMjgzIDYuMjI4OTNMMTIuNzc2IDYuNzY2OTRMMTUgNi43NzE0TDEzLjQxNSA1LjA0NDQ2TDE1IDMuMzAyNjRIMTIuODEwNUwxMi4yOTggMy44MzA3MUwxMS44MjA1IDMuMzAyNjRINy4xMTAwM0w2LjcwNTU0IDQuMTk2ODFMNi4yOTE1NiAzLjMwMjY0SDQuNDA0MDFWMy43MDk4N0w0LjE5NDAzIDMuMzAyNjRDNC4xOTQwMyAzLjMwMjY0IDIuNTgwMDIgMy4zMDI2NCAyLjU4MDAyIDMuMzAyNjRaTTIuOTQ2MDEgMy43OTQ1OEgzLjg2ODAyTDQuOTE2MDQgNi4xNDM3NFYzLjc5NDU4SDUuOTI2MDZMNi43MzU1NCA1LjQ3ODkxTDcuNDgxNTcgMy43OTQ1OEg4LjQ4NjU0VjYuMjgwNDRINy44NzUwNEw3Ljg3MDA1IDQuMzMyNTNMNi45Nzg1MyA2LjI4MDQ0SDYuNDMxNTFMNS41MzUwMSA0LjMzMjUzVjYuMjgwNDRINC4yNzdMNC4wMzg1MSA1LjcyMzE0SDIuNzUwMDJMMi41MTIwMiA2LjI3OTk1SDEuODM3OTlMMi45NDYwMSAzLjc5NDU4Wk05LjA0NjAxIDMuNzk0NThIMTEuNTMyNUwxMi4yOTMgNC42MDg0OUwxMy4wNzggMy43OTQ1OEgxMy44Mzg1TDEyLjY4MyA1LjA0Mzk3TDEzLjgzODUgNi4yNzg5N0gxMy4wNDM1TDEyLjI4MyA1LjQ1NTZMMTEuNDk0IDYuMjc4OTdIOS4wNDYwMVYzLjc5NDU4Wk0zLjM5NDU0IDQuMjE1MTdMMi45NzAwMyA1LjIwNzk1SDMuODE4NTVMMy4zOTQ1NCA0LjIxNTE3Wk05LjY2MDA0IDQuMzA5MjhWNC43NjMwN0gxMS4wMTY1VjUuMjY4ODZIOS42NjAwNFY1Ljc2NDI3SDExLjE4MTVMMTEuODg4NSA1LjAzNDU3TDExLjIxMTUgNC4zMDg4NEg5LjY2MDA0VjQuMzA5MjhaIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo="
              alt="Bandeira Amex"
              width="16px"
              height="10.57px"
            />
          </li>
          <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDIwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zLjExNzY5IDIuMDI4ODFDMy4zNDI0NSAxLjk1MzYxIDMuNTgyOTUgMS45MTMxOSAzLjgzMjk3IDEuOTEzMTlDNC45MjM1NiAxLjkxMzE5IDUuODMzNTYgMi42ODc3OSA2LjA0MjU5IDMuNzE3NzVMNy41ODg0NyAzLjQwMjA1QzcuMjMzNzkgMS42NTI3NyA1LjY4NzMzIDAuMzM1NTQ2IDMuODMyOTcgMC4zMzU1NDZDMy40MDc4NSAwLjMzNTU0NiAyLjk5OTYxIDAuNDA0NjkyIDIuNjE3OCAwLjUzMjQ0NUwzLjExNzY5IDIuMDI4ODFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMS4yOTM1NSA3LjAzODg4TDIuMzM4OTYgNS44NTY5MUMxLjg3MjEyIDUuNDQzMzQgMS41NzgwNyA0Ljg0MDA4IDEuNTc4MDcgNC4xNjc5N0MxLjU3ODA3IDMuNDk2MTUgMS44NzIxMiAyLjg5MzE5IDIuMzM4MzggMi40ODAwNUwxLjI5MjY5IDEuMjk3OTRDMC40OTk4OTcgMi4wMDAwNyAwIDMuMDI1NyAwIDQuMTY3OTdDMCA1LjMxMDgyIDAuNTAwNDc0IDYuMzM2NzQgMS4yOTM1NSA3LjAzODg4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYuMDQxNjQgNC42MjA1MkM1LjgzMjc2IDUuNjQ5MzIgNC45MjMxOSA2LjQyMjc3IDMuODMyODggNi40MjI3N0MzLjU4MjU4IDYuNDIyNzcgMy4zNDE3OSA2LjM4MjM1IDMuMTE3MDMgNi4zMDY3MUwyLjYxNjI3IDcuODAzMzdDMi45OTgzOCA3LjkzMTI3IDMuNDA3NDcgNy45OTk5OCAzLjgzMjg4IDcuOTk5OThDNS42ODU1MiA3Ljk5OTk4IDcuMjMxNjkgNi42ODU1IDcuNTg3ODEgNC45MzcwOEw2LjA0MTY0IDQuNjIwNTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIuMDI5NSA1LjQ0MDI2QzEyLjAyODkgNS40NDA5OCAxMi4wMjg3IDUuNDQxMjcgMTIuMDI4NCA1LjQ0MTk5TDExLjk4NDIgNS40MTE5N0MxMS44NTc2IDUuNjE3NjcgMTEuNjYwNCA1Ljc4Mzk3IDExLjQxMSA1Ljg5MThDMTAuOTM2NSA2LjA5ODIzIDEwLjQ5NjkgNi4wNDUyNSAxMC4xODE0IDUuNzY4MzhMMTAuMTUyMyA1LjgxMjI2QzEwLjE1MjEgNS44MTE5NyAxMC4xNTIxIDUuODExNTQgMTAuMTUxNSA1LjgxMTU0TDkuNjEzMDQgNi42MTY4OUM5Ljc0NjcxIDYuNzA5NTYgOS44OTAyIDYuNzg4NTMgMTAuMDQwOCA2Ljg1MTMyQzEwLjYzNTYgNy4wOTgxNiAxMS4yNDQxIDcuMDg2NjIgMTEuODQzNCA2LjgyNjA2QzEyLjI3NjggNi42Mzg1NCAxMi42MTcgNi4zNTE4NiAxMi44NDk3IDUuOTg4NjZMMTIuMDI5NSA1LjQ0MDI2Wk0xMC4zNDg4IDMuNDUzNTJDOS44NDg0OCAzLjY2ODc1IDkuNTg5OTQgNC4xMzg0OCA5LjY0MzIxIDQuNjg5NjJMMTEuNzY0OCAzLjc3NjNDMTEuNDAwMyAzLjM0NzI4IDEwLjkyNTIgMy4yMDUzOCAxMC4zNDg4IDMuNDUzNTJaTTguOTQwMzUgNS45MDY2N0M4Ljg4OTU0IDUuODI0NjggOC44MjA2OCA1LjY5MzE3IDguNzc5MjUgNS41OTY3NEM4LjUzNDU3IDUuMDI4NDIgOC41MjI3NCA0LjQ0MDMyIDguNzI5NDUgMy44NzU3NkM4Ljk1NjY2IDMuMjU2MzQgOS4zOTExNyAyLjc4MjQyIDkuOTUxODQgMi41NDEwNkMxMC42NTc2IDIuMjM3MzQgMTEuNDM3NyAyLjI5NzU0IDEyLjExMzggMi42OTg0MUMxMi41NDMgMi45NDQ2OCAxMi44NDc0IDMuMzI1MDUgMTMuMDc4NyAzLjg2MjkxQzEzLjEwODMgMy45MzE3NyAxMy4xMzM4IDQuMDA1NjggMTMuMTU5MiA0LjA2ODA0TDguOTQwMzUgNS45MDY2N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNC42MzQxIDEuMzU1MDZWNS44MzI2MkwxNS4zMzAyIDYuMTE0NTRMMTQuOTM0NyA3LjAzNzI1TDE0LjE2NjQgNi43MTc5NEMxMy45OTM4IDYuNjQzMDIgMTMuODc2NiA2LjUyODY5IDEzLjc4NzUgNi4zOTk2NEMxMy43MDI5IDYuMjY4MTMgMTMuNjM5MSA2LjA4NzY5IDEzLjYzOTEgNS44NDQ4OVYxLjM1NTA2SDE0LjYzNDFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYuNDM3MSA0LjY5MTcyQzE2LjQzNzcgNC4zMTA2MiAxNi42MDYzIDMuOTY4NjUgMTYuODcyNSAzLjczNjI0TDE2LjE1ODMgMi45NDAxM0MxNS42NzM5IDMuMzY4NDMgMTUuMzY5MiAzLjk5MzYyIDE1LjM2ODMgNC42OTA3QzE1LjM2NzUgNS4zODg1MSAxNS42NzE5IDYuMDE0NDMgMTYuMTU2NCA2LjQ0Mzc0TDE2Ljg2OTMgNS42NDY0N0MxNi42MDQ2IDUuNDEzNDggMTYuNDM3MSA1LjA3MjA5IDE2LjQzNzEgNC42OTE3MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNy43MDYxIDUuOTYyNUMxNy41NjU3IDUuOTYyMjEgMTcuNDMwNCA1LjkzODgzIDE3LjMwMzggNS44OTY2OEwxNi45NjI3IDYuOTExMkMxNy4xOTU4IDYuOTg5NDQgMTcuNDQ1OSA3LjAzMTg4IDE3LjcwNTMgNy4wMzIxNkMxOC44MzU4IDcuMDMzMTggMTkuNzgwMyA2LjIzMDg2IDE5Ljk5ODkgNS4xNjQyM0wxOC45NTA2IDQuOTUwNDRDMTguODMxNyA1LjUyODQzIDE4LjMxOTMgNS45NjMwOCAxNy43MDYxIDUuOTYyNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNy43MDkzIDIuMzUzNDlDMTcuNDQ5OSAyLjM1MzIgMTcuMjAwNyAyLjM5NTM1IDE2Ljk2NzUgMi40NzI4N0wxNy4zMDU4IDMuNDg3OTZDMTcuNDMyNCAzLjQ0NjI0IDE3LjU2NzggMy40MjI4NiAxNy43MDg0IDMuNDIyODZDMTguMzIzMSAzLjQyMzU4IDE4LjgzNTQgMy44NjA2OCAxOC45NTE1IDQuNDQwNDFMMjAgNC4yMjc0OUMxOS43ODQ3IDMuMTU5NTYgMTguODQxMyAyLjM1NDIxIDE3LjcwOTMgMi4zNTM0OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
              alt="Bandeira Elo"
              width="20px"
              height="7.66px"
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
