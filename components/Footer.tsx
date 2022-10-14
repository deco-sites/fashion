import type { JSONSchema7 } from "json-schema";
import ZeedodKitchenLogo from "./icons/ZeedogKitchenLogo.tsx";
import ZeecatLogo from "./icons/ZeecatLogo.tsx";
import ZeedogLogo from "./icons/ZeedogLogo.tsx";
import ZeedogConnectsLogo from "./icons/ZeedogConnectsLogo.tsx";
import ZeenowLogo from "./icons/ZeenowLogo.tsx";
import ZeedogHumanLogo from "./icons/ZeedogHumanLogo.tsx";
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

export const schema: JSONSchema7 = {
  title: "Footer",
  type: "object",
  properties: {
    paragraph1: {
      "type": "string",
      title: "Título 1",
    },
    menuitem1: {
      "type": "string",
      title: "Menu Item 1",
    },
    menuitem2: {
      "type": "string",
      title: "Menu Item 2",
    },
    menuitem3: {
      "type": "string",
      title: "Menu Item 3",
    },
    menuitem4: {
      "type": "string",
      title: "Menu Item 4",
    },
    menuitem5: {
      "type": "string",
      title: "Menu Item 5",
    },
    menuitem6: {
      "type": "string",
      title: "Menu Item 6",
    },
    menuitem7: {
      "type": "string",
      title: "Menu Item 7",
    },
    menuitem8: {
      "type": "string",
      title: "Menu Item 8",
    },
    menuitem9: {
      "type": "string",
      title: "Menu Item 9",
    },
    menuitem10: {
      "type": "string",
      title: "Menu Item 10",
    },
    paragraph2: {
      "type": "string",
      title: "Título 2",
    },
    menuitem11: {
      "type": "string",
      title: "Menu Item 11",
    },
    menuitem12: {
      "type": "string",
      title: "Menu Item 12",
    },
    menuitem13: {
      "type": "string",
      title: "Menu Item 13",
    },
    menuitem14: {
      "type": "string",
      title: "Menu Item 14",
    },
    menuitem15: {
      "type": "string",
      title: "Menu Item 15",
    },
    menuitem16: {
      "type": "string",
      title: "Menu Item 16",
    },
    paragraph3: {
      "type": "string",
      title: "Título 3",
    },
    menuitem17: {
      "type": "string",
      title: "Menu Item 17",
    },
    menuitem18: {
      "type": "string",
      title: "Menu Item 18",
    },
    menuitem19: {
      "type": "string",
      title: "Menu Item 19",
    },
    paragraph4: {
      "type": "string",
      title: "Título 4",
    },
    paragraph5: {
      "type": "string",
      title: "Título 5",
    },
    paragraph6: {
      "type": "string",
      title: "Título 6",
    },
  },
};

interface Props {
  menuitem1?: string;
  menuitem2?: string;
  menuitem3?: string;
  menuitem4?: string;
  menuitem5?: string;
  menuitem6?: string;
  menuitem7?: string;
  menuitem8?: string;
  menuitem9?: string;
  menuitem10?: string;
  menuitem11?: string;
  menuitem12?: string;
  menuitem13?: string;
  menuitem14?: string;
  menuitem15?: string;
  menuitem16?: string;
  menuitem17?: string;
  menuitem18?: string;
  menuitem19?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  paragraph6?: string;
}

export default function Footer(
  {
    menuitem1,
    menuitem2,
    menuitem3,
    menuitem4,
    menuitem5,
    menuitem6,
    menuitem7,
    menuitem8,
    menuitem9,
    menuitem10,
    menuitem11,
    menuitem12,
    menuitem13,
    menuitem14,
    menuitem15,
    menuitem16,
    menuitem17,
    menuitem18,
    menuitem19,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
  }: Props,
) {
  return (
    <footer class="bg-[#f4f4f4] w-full">
      <div class="container flex flex-col md:flex-row justify-between mx-auto py-6 pb-0 md:py-24">
        <nav class="flex flex-col p-5 border-b border-gray-200 md:border-b-0">
          <p class="font-bold text-[#4a4a4a] mb-5">Precisa de ajuda?</p>
          <ul class="text-[#757575]" role="menu">
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Perguntas frequentes</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Sobre nossos produtos</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Trocas e devoluções</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Entregas</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Programa de indicação</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Assinatura Zee.Dog</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Mídias e eventos</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Revenda</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Compras</a>
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              <a href="">Garantias</a>
            </li>
          </ul>
        </nav>

        <nav class="flex flex-col p-5 border-b border-gray-200 md:border-b-0">
          <p class="font-bold text-[#4a4a4a] mb-5">Sobre</p>
          <ul class="text-[#757575]" role="menu">
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Quem somos
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Onde encontrar
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Zee.Dog Mafia
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Blog
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Zee.Dog TV
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Trabalhe com a gente
            </li>
          </ul>
        </nav>

        <nav class="flex flex-col p-5 border-b border-gray-200 md:border-b-0">
          <p class="font-bold text-[#4a4a4a] mb-5">Produtos</p>
          <ul class="text-[#757575]" role="menu">
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Cachorros
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Gatos
            </li>
            <li role="menuitem" class="hover:text-[#000000] cursor-pointer mb-3.5">
              Human
            </li>
          </ul>
        </nav>

        <div class="flex flex-col p-5">
          <nav class="mb-2.5 md:mb-24 border-b border-gray-200 md:border-b-0">
            <p class="font-bold text-[#4a4a4a] mb-5">Siga a gente</p>
            <ul role="menu" class="flex flex-row justify-items-start">
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <InstagramIcon />
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <FacebookIcon />
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <TwitterIcon />
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <SpotifyIcon />
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <YoutubeIcon />
              </li>
            </ul>
          </nav>

          <nav class="border-b border-gray-200 md:border-b-0">
            <p class="font-bold text-[#4a4a4a] mb-5">Fale com a gente</p>
            <ul class="flex flex-row">
              <li class="p-2.5 cursor-pointer">
                <ChatIcon />
              </li>
              <li class="p-2.5 cursor-pointer">
                <WhatsappIcon />
              </li>
              <li class="p-2.5 cursor-pointer">
                <EmailIcon />
              </li>
            </ul>
          </nav>
        </div>

        <div class="p-5">
          <nav class="flex flex-col">
            <p class="font-bold text-[#4a4a4a] mb-5">Formas de pagamento</p>
            <ul role="menu" class="flex flex-row">
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <a href="">
                  <VisaIcon />
                </a>
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <a href="">
                  <MastercardIcon />
                </a>
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <a href="">
                  <EloIcon />
                </a>
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <a href="">
                  <AmericanExpressIcon />
                </a>
              </li>
            </ul>
            <ul class="flex flex-row">
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <a href="">
                  <AmeIcon />
                </a>
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <a href="">
                  <PicpayIcon />
                </a>
              </li>
              <li role="menuitem" class="p-2.5 cursor-pointer">
                <a href="">
                  <BoletoIcon />
                </a>
              </li>
              {
                /* <li role="menuitem" class="p-2.5">
                <a href="">
                  <PixIcon />
                </a>
              </li> */
              }
            </ul>
          </nav>
        </div>
      </div>

      {/* footer container 2 */}
      <div>
        <div class="flex flex-col md:flex-row py-10 border-t border-gray-200">
          <nav>
            <ul role="menu" class="flex flex-col md:flex-row items-center md:justify-between">
              <li role="menuitem" class="md:border-r border-gray-200 px-11 pt-11 md:pt-0">
                <ZeedogLogo />
              </li>
              <li role="menuitem" class="md:border-r border-gray-200 px-11 pt-11 md:pt-0">
                <ZeecatLogo />
              </li>
              <li role="menuitem" class="md:border-r border-gray-200 px-11 pt-11 md:pt-0">
                <ZeedodKitchenLogo />
              </li>
              <li role="menuitem" class="md:border-r border-gray-200 px-11 pt-11 md:pt-0">
                <ZeenowLogo />
              </li>
              <li role="menuitem" class="px-11 pt-11 md:pt-0">
                <ZeedogHumanLogo />
              </li>
            </ul>
          </nav>
          <div class="flex flex-col ml-auto px-11 py-11 md:py-0">
            <a href="/">
              <ZeedogConnectsLogo />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
