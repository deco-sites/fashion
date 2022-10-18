import { JSONSchema7 } from "json-schema";

export const schema: JSONSchema7 = {
  title: "Marcas Convidadas",
  type: "object",
  properties: {},
};

const banners = [
  {
    href: "/search?q=cantao",
    imgSrc:
      "https://images.prismic.io/offpremium-web/98557ce5-b544-4367-8584-bb86d1b9416a_07_banner_terci%C3%A1rio_menor_cantao_mob.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=342&h=425",
  },
  {
    href: "/search?q=lucidez",
    imgSrc:
      "https://images.prismic.io/offpremium-web/66f005e9-b0e3-4112-a9b3-99d49f63a023_07_banner_terci%C3%A1rio_menor_lucidez_mob.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=342&h=425",
  },
  {
    href: "/search?q=loja-3",
    imgSrc:
      "https://images.prismic.io/offpremium-web/30859267-1b65-4376-884f-4e846c868ad4_07_banner_terci%C3%A1rio_menor_loja_3_mob.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=342&h=425",
  },
];
export default function MarcasConvidadas() {
  return (
    <section class="max-w-[1400px] w-full px-4 md:px-0 mx-auto mt-[50px]">
      <div class="py-6 md:py-0 md:pb-[40px] flex items-center">
        <h3
          class={"text-lg leading-5 font-semibold uppercase whitespace-nowrap"}
        >
          Marcas Convidadas
        </h3>

        <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        <a class="md:col-span-3" href="/search?q=morena+rosa">
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="https://images.prismic.io/offpremium-web/3b90e599-993a-40bd-861c-7730abef670a_10_banner_terciario_maior_morena_iodice_mob.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=342&h=425"
            />
            <source
              media="(min-width: 768px)"
              srcset="https://images.prismic.io/offpremium-web/6c1b488a-a907-454f-8d3b-934b51623293_10_banner_terciario_maior_morena_iodice_desk.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1900&h=650"
            />
            <img
              class="object-cover w-full"
              src="https://images.prismic.io/offpremium-web/6c1b488a-a907-454f-8d3b-934b51623293_10_banner_terciario_maior_morena_iodice_desk.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=1900&h=650"
              alt="Morena iodice"
            />
          </picture>
        </a>
        {banners.map(({ href, imgSrc }) => (
          <div>
            <a href={href} key={href}>
              <img src={imgSrc} alt={href} class="w-full" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
