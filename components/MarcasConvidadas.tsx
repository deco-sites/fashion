import { JSONSchema7 } from "json-schema";
import Banner from "./BannerImg.tsx";

export const schema: JSONSchema7 = {
  title: "Marcas Convidadas",
  type: "object",
  properties: {},
};

const banners = [
  {
    href: "/cantao",
    imgSrc:
      "https://images.prismic.io/offpremium-web/98557ce5-b544-4367-8584-bb86d1b9416a_07_banner_terci%C3%A1rio_menor_cantao_mob.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=342&h=425",
  },
  {
    href: "/lucidez",
    imgSrc:
      "https://images.prismic.io/offpremium-web/66f005e9-b0e3-4112-a9b3-99d49f63a023_07_banner_terci%C3%A1rio_menor_lucidez_mob.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=342&h=425",
  },
  {
    href: "/loja-3",
    imgSrc:
      "https://images.prismic.io/offpremium-web/30859267-1b65-4376-884f-4e846c868ad4_07_banner_terci%C3%A1rio_menor_loja_3_mob.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=342&h=425",
  },
];
export default function MarcasConvidadas() {
  return (
    <div>
      <div class="flex flex-row mt-3">
        <h2 class="w-1/4 md:w-1/6 text-lg font-bold p-2">Marcas Convidadas</h2>
        <div class="flex flex-1 px-4">
          <div class="h-1/2 w-full border-b border-solid border-gray-200"></div>
        </div>
      </div>
      <div class="flex justify-center px-2 md:px-4">
        <Banner
          imgSrc={{
            desktop:
              "https://images.prismic.io/offpremium-web/6c1b488a-a907-454f-8d3b-934b51623293_10_banner_terciario_maior_morena_iodice_desk.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1900&h=650",
            mobile:
              "https://images.prismic.io/offpremium-web/3b90e599-993a-40bd-861c-7730abef670a_10_banner_terciario_maior_morena_iodice_mob.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=342&h=425",
          }}
        />
      </div>
      <div class="flex flex-row justify-center flex-wrap px-2">
        {banners.map(({ href, imgSrc }) => (
          <div class="w-full md:w-1/3 mb-3 px-0 md:px-2">
            <a href={href} key={href} class="w-full">
              <img src={imgSrc} alt={href} class="w-full"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
