const features = [
  {
    src:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/2a97b283-0ffd-4b32-86bb-155790b718d7_benefits-cupom.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;w=59&amp;h=31",
    srcSet:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/2a97b283-0ffd-4b32-86bb-155790b718d7_benefits-cupom.svg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;w=59&amp;h=31 59w",
    title: "15% na primeira compra",
    description: "Aplicado direto na sacola, não acumula com outras promoções.",
    showOnMobile: true,
  },
  {
    src:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/d9a6bb83-23b9-4e40-8e73-b43524242e47_benefits-entrega.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=47&h=31",
    srcSet:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/d9a6bb83-23b9-4e40-8e73-b43524242e47_benefits-entrega.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=47&h=31 47w",
    title: "ENTREGA EM TODO BRASIL",
    description: "Consulte o prazo durante o fechamento da sua compra.",
    showOnMobile: true,
  },
  {
    src:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/193e3cd7-7304-49a1-8e59-05161ed0c6e3_benefits-troca.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=37&h=37",
    srcSet:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/193e3cd7-7304-49a1-8e59-05161ed0c6e3_benefits-troca.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=37&h=37 37w",
    title: "DEVOLUÇÃO GRÁTIS",
    description: "Faça login e preencha o forumário.",
    showOnMobile: true,
  },
  {
    src:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/e86b0871-7560-4da9-b071-02144cb686bd_benefits-pix.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=52&h=30",
    srcSet:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/e86b0871-7560-4da9-b071-02144cb686bd_benefits-pix.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=52&h=30 52w",
    title: "PAGAMENTO POR PIX",
    description: "Confira as marcas participantes.",
    showOnMobile: true,
  },
  {
    src:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/679d723c-6195-46d8-b703-ca69cddd01e7_benefits-newsletter.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=29&h=29",
    srcSet:
      "https://offpremium-web.cdn.prismic.io/offpremium-web/679d723c-6195-46d8-b703-ca69cddd01e7_benefits-newsletter.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=29&h=29 29w",
    title: "NOSSA NEWSLETTER",
    description:
      "Recompensas e promoções especiais apenas para usuários cadastrados",
    showOnMobile: false,
  },
];
export default function StoreFeatures() {
  return (
    <div class="bg-gray-200 flex flex-row flex-wrap py-2">
      {features.map(({ src, srcSet, title, description, showOnMobile }) => (
        <div
          key={title}
          class={`w-1/2 md:w-1/5 p-6 flex flex-col items-center justify-center ${
            !showOnMobile && "hidden md:flex"
          }`}
        >
          <img
            width="59"
            height="31"
            class=""
            data-main-image=""
            style="object-fit:cover;opacity:1"
            sizes="(min-width: 59px) 59px, 100vw"
            decoding="async"
            loading="lazy"
            src={src}
            srcset={srcSet}
            alt="Benefício 15% NA PRIMEIRA COMPRA"
          />
          <span class="font-bold uppercase text-center mt-3">{title}</span>
          <p class="text-xs text-center">{description}</p>
        </div>
      ))}
    </div>
  );
}
