import type { JSONSchema7 } from "json-schema";
import ZeecatLogo from "./icons/ZeecatLogo.tsx";
import DecoFashionLogo from "./icons/DecoFashionLogo.tsx";
import ZeedogConnectsLogo from "./icons/ZeedogConnectsLogo.tsx";
import ZeenowLogo from "./icons/ZeenowLogo.tsx";
import VisaIcon from "./icons/VisaIcon.tsx";
import EloIcon from "./icons/EloIcon.tsx";
import MastercardIcon from "./icons/MastercardIcon.tsx";
import AmericanExpressIcon from "./icons/AmericanExpressIcon.tsx";
import AmeIcon from "./icons/AmeIcon.tsx";
import PicpayIcon from "./icons/PicpayIcon.tsx";
import BoletoIcon from "./icons/BoletoIcon.tsx";
import InstagramIcon from "./icons/InstagramIcon.tsx";
import FacebookIcon from "./icons/FacebookIcon.tsx";
import SpotifyIcon from "./icons/SpotifyIcon.tsx";
import TwitterIcon from "./icons/TwitterIcon.tsx";
import YoutubeIcon from "./icons/YoutubeIcon.tsx";
import ChatIcon from "./icons/ChatIcon.tsx";
import WhatsappIcon from "./icons/WhatsappIcon.tsx";
import EmailIcon from "./icons/EmailIcon.tsx";

import FooterAccordion, { sections } from "../islands/FooterAccordion.tsx";

export const schema: JSONSchema7 = {
  title: "Footer",
  type: "object",
  properties: {},
};

export default function Footer() {
  return (
    <footer class="w-full ">
      <div class="flex flex-col md:flex-row">
        <div className="bg-[#222] flex flex-row md:flex-col justify-between md:justify-center md:items-center px-3 py-6 w-full md:w-1/5">
          <div class="flex flex-col w-3/5 md:w-full md:items-center">
            <span class="font-bold uppercase text-white">Baixe Nosso App</span>
            <p class="text-white text-xs mt-4 md:mb-6">
              Conteúdo exclusivo, novidades e promoções da OFF PREMIUM para IOS
              e Android
            </p>
          </div>
          <div class="flex flex-col justify-center items-end">
            <a href="#">
              <img
                class="lg:w-[115px] lg:h-[39px]"
                src="https://www.offpremium.com.br/static/app-store-badge-c0e6141e91f12abcd49c320c13ac60c5.svg"
                alt="Badge de download na App Store"
                width="109px"
                height="36px"
              />
            </a>
            <a
              class="mt-2"
              href="https://play.google.com/store/apps/details?id=com.mobfiq.offpremium&amp;hl=pt_BR&amp;gl=US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="lg:w-[115px] lg:h-[37px]"
                src="https://www.offpremium.com.br/static/play-store-badge-7fb07ab1eba76b4600644e424589e7ad.svg"
                alt="Badge de download na Play Store"
                width="109px"
                height="33px"
              />
            </a>
          </div>
          <div class="hidden md:flex md:flex-col md:items-center">
            <p class="text-xs text-white mt-2">
              Acompanhe a gente também nas redes sociais
            </p>
            <ul class="flex items-center justify-center mt-3">
              <li class="mr-[8px] last:m-0">
                <a
                  href="https://www.facebook.com/offpremium/"
                  class="flex items-center justify-center w-8 h-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjM3NjM1IDEyLjAwMDhDNS4zNzYzNSAxMy4yNzY3IDUuMzczMTggMTQuNTQ5NCA1LjM3OTUzIDE1LjgyNTNDNS4zNzk1MyAxNS45NjQ5IDUuMzQxNDQgMTYuMDAzIDUuMjAxOCAxNS45OTk4QzQuMTE2MzYgMTUuOTkzNSAzLjAzNDA5IDE1Ljk5MzUgMS45NDg2NSAxNS45OTk4QzEuNzk5NDggMTUuOTk5OCAxLjc1MTg4IDE1Ljk2NDkgMS43NTE4OCAxNS44MDk0QzEuNzU4MjIgMTMuMjc5OSAxLjc1NTA1IDEwLjc1MzUgMS43NTUwNSA4LjIyNDAxQzEuNzU1MDUgNy45NzAxMSAxLjc4MzYxIDguMDAxODUgMS41MjMzNiA3Ljk5ODY3QzEuMDYzMTYgNy45OTg2NyAwLjYwMjk2MSA3Ljk5NTUgMC4xNDI3NiA4LjAwMTg1QzAuMDMxNjc3IDguMDAxODUgLTYuMTAzNTJlLTA1IDcuOTY2OTMgLTYuMTAzNTJlLTA1IDcuODU1ODVDMC4wMDMxMTI3NiA3LjA1Mjg4IDAuMDAzMTEyNzYgNi4yNDY3MyAtNi4xMDM1MmUtMDUgNS40NDM3NkMtNi4xMDM1MmUtMDUgNS4zMzI2OCAwLjAzMTY3NyA1LjI5Nzc3IDAuMTQyNzYgNS4zMDA5NEMwLjYyNTE3NyA1LjMwNzI5IDEuMTA0NDIgNS4yOTc3NyAxLjU4Njg0IDUuMzA3MjlDMS43MTY5NiA1LjMxMDQ2IDEuNzU4MjIgNS4yNzU1NSAxLjc1ODIyIDUuMTM5MDhDMS43NTE4OCA0LjQ2MzA2IDEuNzU4MjIgMy43ODM4NyAxLjc1NTA1IDMuMTA3ODVDMS43NTE4OCAyLjU0NjA5IDEuODM3NTcgMi4wMDMzNyAyLjEyMDA0IDEuNTA4MjVDMi40MjQ3MiAwLjk2ODcwNyAyLjg4MTc1IDAuNTk3MzcyIDMuNDQ2NjggMC4zNTYxNjNDMy45MjI3NSAwLjE1MzA0IDQuNDI0MjEgMC4wNTc4MjYyIDQuOTM4MzcgMC4wMjkyNjJDNS45NTcxNiAtMC4wMjc4NjY0IDYuOTc5MTIgMC4wMTk3NDA2IDcuOTk3OTEgMC4wMDA2OTc3NzNDOC4xMTIxNyAtMC4wMDI0NzYwMyA4LjE0MDczIDAuMDM4NzgzNCA4LjE0MDczIDAuMTQ2NjkzQzguMTM3NTYgMC45ODE0MDIgOC4xMzc1NiAxLjgxOTI4IDguMTQwNzMgMi42NTM5OUM4LjE0MDczIDIuNzgwOTUgOC4wOTMxMyAyLjc5OTk5IDcuOTgyMDQgMi43OTk5OUM3LjM5NDg5IDIuNzk2ODIgNi44MDc3NCAyLjc5NjgyIDYuMjIwNTkgMi43OTY4MkM1LjczMTgyIDIuNzk2ODIgNS4zNzk1MyAzLjE0OTExIDUuMzc5NTMgMy42MzE1MkM1LjM3OTUzIDQuMTI5ODEgNS4zODU4OCA0LjYyNDkyIDUuMzc2MzUgNS4xMjMyMUM1LjM3MzE4IDUuMjY2MDMgNS40MjA3OSA1LjMwMDk0IDUuNTU3MjYgNS4zMDA5NEM2LjM2MDIzIDUuMjk0NTkgNy4xNjYzOCA1LjMwMDk0IDcuOTY5MzUgNS4yOTQ1OUM4LjEwMjY1IDUuMjk0NTkgOC4xNDcwOCA1LjMzMjY4IDguMTMxMjEgNS40NjU5OEM4LjA4MzYgNS44NzU0IDguMDQyMzUgNi4yODQ4MiA3Ljk5NzkxIDYuNjk0MjRDNy45NTY2NSA3LjA4Nzc5IDcuODg2ODMgNy40NzgxNyA3LjgyMzM1IDcuODY4NTVDNy44MDQzMSA3Ljk3OTYzIDcuNzY5NCA4LjAwNTAyIDcuNjY3ODQgOC4wMDUwMkM2Ljk3OTEyIDguMDAxODUgNi4yOTM1OCA4LjAwMTg1IDUuNjA0ODcgOC4wMDUwMkM1LjMzNTEgOC4wMDUwMiA1LjM3MzE4IDcuOTcwMTEgNS4zNzMxOCA4LjI0MzA2QzUuMzc2MzUgOS40OTM1MyA1LjM3NjM1IDEwLjc0NzIgNS4zNzYzNSAxMi4wMDA4WiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K"
                    alt="Ícone de acesso ao facebook"
                    class="w-auto"
                  />
                </a>
              </li>
              <li class="mr-[8px] last:m-0">
                <a
                  href="https://www.instagram.com/offpremium/"
                  class="flex items-center justify-center w-8 h-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTEzOSA1LjczMDAzQzYuOTk3NTUgNS43MzAwMyA1Ljc2MDA5IDYuOTY3NTEgNS43NjAwOSA4LjQ4Mzg5QzUuNzYwMDkgMTAuMDAwMyA2Ljk5NzU1IDExLjIzNzggOC41MTM5IDExLjIzNzhDMTAuMDMwMyAxMS4yMzc4IDExLjI2NzcgMTAuMDAwMyAxMS4yNjc3IDguNDgzODlDMTEuMjY3NyA2Ljk2NzUxIDEwLjAzMDMgNS43MzAwMyA4LjUxMzkgNS43MzAwM1pNMTYuNzczMyA4LjQ4Mzg5QzE2Ljc3MzMgNy4zNDM1MSAxNi43ODM2IDYuMjEzNDYgMTYuNzE5NiA1LjA3NTE0QzE2LjY1NTUgMy43NTI5NiAxNi4zNTM5IDIuNTc5NTIgMTUuMzg3MSAxLjYxMjY3QzE0LjQxODIgMC42NDM3NTkgMTMuMjQ2OCAwLjM0NDIwMiAxMS45MjQ3IDAuMjgwMTU4QzEwLjc4NDMgMC4yMTYxMTUgOS42NTQyNiAwLjIyNjQ0NSA4LjUxNTk3IDAuMjI2NDQ1QzcuMzc1NjEgMC4yMjY0NDUgNi4yNDU1NyAwLjIxNjExNSA1LjEwNzI4IDAuMjgwMTU4QzMuNzg1MTIgMC4zNDQyMDIgMi42MTE3IDAuNjQ1ODI1IDEuNjQ0ODcgMS42MTI2N0MwLjY3NTk3OCAyLjU4MTU4IDAuMzc2NDI2IDMuNzUyOTYgMC4zMTIzODQgNS4wNzUxNEMwLjI0ODM0MiA2LjIxNTUyIDAuMjU4NjcxIDcuMzQ1NTggMC4yNTg2NzEgOC40ODM4OUMwLjI1ODY3MSA5LjYyMjIxIDAuMjQ4MzQyIDEwLjc1NDMgMC4zMTIzODQgMTEuODkyNkMwLjM3NjQyNiAxMy4yMTQ4IDAuNjc4MDQ0IDE0LjM4ODMgMS42NDQ4NyAxNS4zNTUxQzIuNjEzNzcgMTYuMzI0IDMuNzg1MTIgMTYuNjIzNiA1LjEwNzI4IDE2LjY4NzZDNi4yNDc2NCAxNi43NTE3IDcuMzc3NjcgMTYuNzQxMyA4LjUxNTk3IDE2Ljc0MTNDOS42NTYzMyAxNi43NDEzIDEwLjc4NjQgMTYuNzUxNyAxMS45MjQ3IDE2LjY4NzZDMTMuMjQ2OCAxNi42MjM2IDE0LjQyMDIgMTYuMzIyIDE1LjM4NzEgMTUuMzU1MUMxNi4zNTYgMTQuMzg2MiAxNi42NTU1IDEzLjIxNDggMTYuNzE5NiAxMS44OTI2QzE2Ljc4NTcgMTAuNzU0MyAxNi43NzMzIDkuNjI0MjggMTYuNzczMyA4LjQ4Mzg5Wk04LjUxMzkgMTIuNzIxMUM2LjE2OTEzIDEyLjcyMTEgNC4yNzY4IDEwLjgyODcgNC4yNzY4IDguNDgzODlDNC4yNzY4IDYuMTM5MDggNi4xNjkxMyA0LjI0NjcxIDguNTEzOSA0LjI0NjcxQzEwLjg1ODcgNC4yNDY3MSAxMi43NTEgNi4xMzkwOCAxMi43NTEgOC40ODM4OUMxMi43NTEgMTAuODI4NyAxMC44NTg3IDEyLjcyMTEgOC41MTM5IDEyLjcyMTFaTTEyLjkyNDUgNS4wNjI3NEMxMi4zNzcxIDUuMDYyNzQgMTEuOTM1IDQuNjIwNjQgMTEuOTM1IDQuMDczMTdDMTEuOTM1IDMuNTI1NzEgMTIuMzc3MSAzLjA4MzYgMTIuOTI0NSAzLjA4MzZDMTMuNDcyIDMuMDgzNiAxMy45MTQxIDMuNTI1NzEgMTMuOTE0MSA0LjA3MzE3QzEzLjkxNDMgNC4yMDMxNyAxMy44ODg4IDQuMzMxOTIgMTMuODM5MSA0LjQ1MjA2QzEzLjc4OTQgNC41NzIxOSAxMy43MTY1IDQuNjgxMzUgMTMuNjI0NiA0Ljc3MzI3QzEzLjUzMjcgNC44NjUxOSAxMy40MjM2IDQuOTM4MDggMTMuMzAzNCA0Ljk4Nzc1QzEzLjE4MzMgNS4wMzc0MiAxMy4wNTQ1IDUuMDYyOTEgMTIuOTI0NSA1LjA2Mjc0WiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K"
                    alt="Ícone de acesso ao Instagram"
                    class="w-auto"
                  />
                </a>
              </li>
              <li class="mr-[8px] last:m-0">
                <a
                  href="https://pin.it/4gYwKWW"
                  class="flex items-center justify-center w-8 h-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNzk3MjcgMTAuNDg4NEM0LjczNjg3IDEwLjczMzIgNC42ODI4MyAxMC45NDkzIDQuNjI4NzggMTEuMTY1NUM0LjU2ODM4IDExLjQxMzUgNC41MTExNiAxMS42NjE1IDQuNDUzOTMgMTEuOTA5NEM0LjM4NCAxMi4yMTE0IDQuMzI5OTUgMTIuNTE2NiA0LjI0MDk0IDEyLjgwOTFDNC4xMTM3OCAxMy4yMjU1IDMuOTg2NjIgMTMuNjQyIDMuODE0OTUgMTQuMDM5NEMzLjY1NiAxNC40MDUgMy40NDYxOCAxNC43NTE1IDMuMjQ1OSAxNS4wOThDMy4wODA1OSAxNS4zODA5IDIuODkzMDMgMTUuNjU0MyAyLjcwODY0IDE1LjkyNzdDMi42ODAwMyAxNS45NjkgMi42MDA1NiAxNi4wMTA0IDIuNTY1NTkgMTUuOTk3N0MyLjUyMTA4IDE1Ljk4MTggMi40NzAyMiAxNS45MTE4IDIuNDYzODYgMTUuODYxQzIuMzQzMDUgMTQuODk3NyAyLjI3OTQ3IDEzLjkyODEgMi40MDY2NCAxMi45NjE3QzIuNDU3NSAxMi41NzA3IDIuNTYyNDEgMTIuMTg5MiAyLjY0MTg4IDExLjgwMTNDMi42OTI3NSAxMS41NDcgMi43NDM2MSAxMS4yODk1IDIuNzk3NjYgMTEuMDMyQzIuODY0NDIgMTAuNzE3MyAyLjkzNDM1IDEwLjM5OTQgMy4wMDQyOSAxMC4wODQ3QzMuMTA2MDIgOS42MjA1MSAzLjIxMDkzIDkuMTU5NTUgMy4zMTU4NCA4LjY5NTQxQzMuNDAxNjcgOC4zMjM0NiAzLjQ4NDMzIDcuOTQ4MzQgMy41NzY1MiA3LjU3NjM5QzMuNjIxMDMgNy4zOTgzNiAzLjUyODgzIDcuMjUyMTMgMy40ODc1MSA3LjA5MzE4QzMuMzUwODEgNi41NDYzOCAzLjI2NDk3IDYuMDAyNzcgMy4zNjY3IDUuNDMzNzJDMy40Mzk4MiA1LjAyMzYyIDMuNTQ3OTEgNC42MzI2IDMuNzc5OTggNC4yODYwOUM0LjA4MTk5IDMuODM0NjcgNC40ODg5IDMuNTM5MDEgNS4wNjQzMSAzLjU3MDgxQzUuNTU3MDYgMy41OTk0MiA1LjkwMDQgMy45MjA1IDYuMDI3NTYgNC4zNzUxQzYuMTcwNjEgNC44NzczOSA2LjEwNzAzIDUuMzc5NjggNS45NzY2OSA1Ljg3NTYxQzUuODM2ODIgNi40MTYwNCA1LjY4NzQgNi45NTAxMiA1LjU1MDcgNy40OTA1NkM1LjQ2NDg3IDcuODI3NTMgNS4zNDA4OSA4LjE2NDUxIDUuMzIxODEgOC41MDc4NUM1LjI5MzIgOS4wMTk2NyA1LjQ5MzQ4IDkuNDY3OTIgNS45NDE3MiA5Ljc1NzIxQzYuMjk3NzggOS45ODYxIDYuNjc2MDggMTAuMDMwNiA3LjA5NTcxIDkuOTI4ODhDNy42NTIwNSA5Ljc5MjE4IDguMDM2NzEgOS40NDU2NiA4LjM2MDk3IDkuMDA2OTZDOC43NDU2MyA4LjQ4ODc3IDguOTYxODEgNy45MDA2NSA5LjEzMDMgNy4yODA3NEM5LjMzNjkzIDYuNTExNDEgOS40MTY0MSA1LjczNTczIDkuNDAwNTEgNC45NDQxNUM5LjM4NzggNC4yMTI5NyA5LjE5Mzg4IDMuNTM1ODQgOC43ODA2IDIuOTMxODJDOC40NjkwNiAyLjQ4MDQgOC4wNTg5NiAyLjE0MzQyIDcuNTUwMzIgMS45MjA4OUM3LjIyNjA1IDEuNzc3ODMgNi45MDQ5NyAxLjY1Mzg1IDYuNTQ4OTIgMS42Mzc5NUM2LjE2NDI2IDEuNjIyMDYgNS43NzY0MSAxLjU1NTMgNS4zOTgxMSAxLjU5MzQ0QzQuMjU2ODMgMS43MTc0MyAzLjMxMjY2IDIuMjE5NzEgMi42MDA1NiAzLjEzNTI4QzIuMzE3NjIgMy41MDA4NyAyLjA5MTkxIDMuODk4MjUgMS45NDI1IDQuMzI3NDJDMS43MTM2MSA0Ljk4ODY2IDEuNjExODggNS42NzUzMyAxLjY3ODY0IDYuMzc3ODlDMS43MjYzMiA2Ljg3MDY0IDEuODY5MzggNy4zNDQzMiAyLjE5MzY0IDcuNzI1ODFDMi40MTYxNyA3Ljk4NjQ5IDIuMzc0ODQgOC4yNDA4MSAyLjI5ODU1IDguNTIwNTZDMi4yNTcyMiA4LjY2NjggMi4yMTkwNyA4LjgxMzA0IDIuMTg3MjggOC45NjI0NUMyLjEzMzI0IDkuMjI5NDkgMS45ODM4MiA5LjM2NjE5IDEuNjc1NDYgOS4yMTY3N0MxLjA1ODcyIDguOTE3OTQgMC42Njc3MDIgOC40MjUxOSAwLjM5NDMwNSA3LjgxNDgyQzAuMDEyODIxIDYuOTU5NjYgLTAuMDUzOTM4OCA2LjA1NjgxIDAuMDM1MDc0MiA1LjE0NzYxQzAuMTM5OTgyIDQuMTE3NiAwLjUzNzM2MiAzLjE4NjE0IDEuMTQ3NzQgMi4zNTAwNkMxLjU4OTYyIDEuNzQ2MDQgMi4xMzk2IDEuMjU2NDcgMi43ODE3NiAwLjg3MTgwM0MzLjI4NDA1IDAuNTY5Nzk1IDMuODE4MTMgMC4zNTY3OTkgNC4zODQgMC4yMTA1NjRDNS4xMTgzNSAwLjAxOTgyMTUgNS44NjIyNSAtMC4wMzc0MDEyIDYuNjA5MzIgMC4wMjMwMDA1QzcuMTY4ODMgMC4wNjc1MDcgNy43MDkyNyAwLjIwMTAyNyA4LjIzMzgxIDAuNDE3MjAxQzkuMTM5ODMgMC43OTIzMjcgOS44ODA1NSAxLjM2NzczIDEwLjQ1OTEgMi4xNTI5NUMxMC44MDI1IDIuNjIwMjcgMTEuMDY2MyAzLjEzMjEgMTEuMjM4IDMuNjkxNjFDMTEuMzM5NyA0LjAyMjIzIDExLjQyNTYgNC4zNTI4NSAxMS40MzUxIDQuNjk5MzZDMTEuNDQ3OCA1LjA5MDM4IDExLjQ5MjMgNS40ODE0MSAxMS40NzAxIDUuODY2MDdDMTEuNDQ3OCA2LjI3NjE2IDExLjM2NTIgNi42ODYyNiAxMS4zMDE2IDcuMDkzMThDMTEuMTk2NyA3Ljc2NzEzIDEwLjk3MSA4LjQwMjk0IDEwLjY2OSA5LjAxMDE0QzEwLjQwODMgOS41MzE1IDEwLjA4MDggMTAuMDA1MiA5LjY1ODAyIDEwLjQxNTNDOS4yMzIwMyAxMC44Mjg1IDguNzQyNDUgMTEuMTM2OSA4LjE4Mjk0IDExLjM0MDRDNy42NTIwNCAxMS41MzQzIDcuMTA4NDMgMTEuNjA0MiA2LjU1NTI4IDExLjUzNzVDNS44OTcyMiAxMS40NTQ4IDUuMzQwODkgMTEuMTU5MiA0LjkyNDQzIDEwLjYyNTFDNC44OTU4MiAxMC41OTMzIDQuODUxMzEgMTAuNTQ4OCA0Ljc5NzI3IDEwLjQ4ODRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                    alt="pinterest"
                    class="w-auto"
                  />
                </a>
              </li>
              <li class="mr-[8px] last:m-0">
                <a
                  href="https://www.tiktok.com/@offpremium_?_t=8W5XEC4GW5G&amp;_r=1"
                  class="flex items-center justify-center w-8 h-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgaWQ9Imljb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00MTIuMTksMTE4LjY2YTEwOS4yNywxMDkuMjcsMCwwLDEtOS40NS01LjUsMTMyLjg3LDEzMi44NywwLDAsMS0yNC4yNy0yMC42MmMtMTguMS0yMC43MS0yNC44Ni00MS43Mi0yNy4zNS01Ni40M2guMUMzNDkuMTQsMjMuOSwzNTAsMTYsMzUwLjEzLDE2SDI2Ny42OVYzMzQuNzhjMCw0LjI4LDAsOC41MS0uMTgsMTIuNjksMCwuNTItLjA1LDEtLjA4LDEuNTYsMCwuMjMsMCwuNDctLjA1LjcxLDAsLjA2LDAsLjEyLDAsLjE4YTcwLDcwLDAsMCwxLTM1LjIyLDU1LjU2LDY4LjgsNjguOCwwLDAsMS0zNC4xMSw5Yy0zOC40MSwwLTY5LjU0LTMxLjMyLTY5LjU0LTcwczMxLjEzLTcwLDY5LjU0LTcwYTY4LjksNjguOSwwLDAsMSwyMS40MSwzLjM5bC4xLTgzLjk0YTE1My4xNCwxNTMuMTQsMCwwLDAtMTE4LDM0LjUyLDE2MS43OSwxNjEuNzksMCwwLDAtMzUuMyw0My41M2MtMy40OCw2LTE2LjYxLDMwLjExLTE4LjIsNjkuMjQtMSwyMi4yMSw1LjY3LDQ1LjIyLDguODUsNTQuNzN2LjJjMiw1LjYsOS43NSwyNC43MSwyMi4zOCw0MC44MkExNjcuNTMsMTY3LjUzLDAsMCwwLDExNSw0NzAuNjZ2LS4ybC4yLjJDMTU1LjExLDQ5Ny43OCwxOTkuMzYsNDk2LDE5OS4zNiw0OTZjNy42Ni0uMzEsMzMuMzIsMCw2Mi40Ni0xMy44MSwzMi4zMi0xNS4zMSw1MC43Mi0zOC4xMiw1MC43Mi0zOC4xMmExNTguNDYsMTU4LjQ2LDAsMCwwLDI3LjY0LTQ1LjkzYzcuNDYtMTkuNjEsOS45NS00My4xMyw5Ljk1LTUyLjUzVjE3Ni40OWMxLC42LDE0LjMyLDkuNDEsMTQuMzIsOS40MXMxOS4xOSwxMi4zLDQ5LjEzLDIwLjMxYzIxLjQ4LDUuNyw1MC40Miw2LjksNTAuNDIsNi45VjEzMS4yN0M0NTMuODYsMTMyLjM3LDQzMy4yNywxMjkuMTcsNDEyLjE5LDExOC42NloiIGZpbGw9InJnYigyNTUsMjU1LDI1NSkiLz48L3N2Zz4="
                    alt="tiktok"
                    class="w-auto"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden md:flex flex-1 bg-[#353535] justify-between p-12">
          {sections.slice(0, 3).map(({ label, content }) => (
            <div class="flex flex-col mr-12">
              <span class="text-white uppercase mb-4 text-xs">{label}</span>
              {content}
            </div>
          ))}
          <div class="flex-col">
            {sections
              .slice(3, sections.length - 1)
              .map(({ label, content }) => (
                <div class="flex flex-col mr-12">
                  <span class="text-white uppercase mb-4 text-xs">{label}</span>
                  {content}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div class="md:hidden w-full">
        <FooterAccordion />
        <div class="bg-[#222] flex justify-center px-3 py-6">
          <p class="text-xs text-center text-white">
            OFF PREMIUM - GRUPO DE MODA SOMA S.A. Est Tenente Marques, 1818,
            Sala 3-B - Parque Panorama II (Fazendinha), CEP: 06534-030 - Santana
            de Parnaíba / SP - CNPJ: 10.285.590/0133-40 - E-MAIL:
            atendimento@offpremium.com.br
          </p>
        </div>
      </div>
    </footer>
  );
}
