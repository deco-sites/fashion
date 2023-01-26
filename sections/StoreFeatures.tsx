const features = [
  {
    src: "",
    srcSet: "",
    title: "15% na primeira compra",
    description: "Aplicado direto na sacola, não acumula com outras promoções.",
    showOnMobile: true,
  },
  {
    src: "",
    srcSet: "",
    title: "ENTREGA EM TODO BRASIL",
    description: "Consulte o prazo durante o fechamento da sua compra.",
    showOnMobile: true,
  },
  {
    src: "",
    srcSet: "",
    title: "DEVOLUÇÃO GRÁTIS",
    description: "Faça login e preencha o forumário.",
    showOnMobile: true,
  },
  {
    src: "",
    srcSet: "",
    title: "PAGAMENTO POR PIX",
    description: "Confira as marcas participantes.",
    showOnMobile: true,
  },
  {
    src: "",
    srcSet: "",
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
            class="hidden"
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
