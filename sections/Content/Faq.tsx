import Header, { Content as HeaderContent, Layout as HeaderLayout } from "$store/components/ui/SectionHeader.tsx";

export interface Question {
  question: string;
  /** @format html */
  answer: string;
}

export interface Contact {
  title?: string;
  description?: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface Props {
  header?: HeaderContent;
  questions?: Question[];
  contact?: Contact;
  layout?: {
    variation?: "Compact" | "Full" | "Side to side";
    header?: HeaderLayout;
  };
}

const DEFAULT_PROPS = {
  header: {
    title: "",
    description: "",
  },
  questions: [
    {
      question: "Como faço para acompanhar o meu pedido?",
      answer:
        "Acompanhar o seu pedido é fácil! Assim que o seu pedido for enviado, enviaremos um e-mail de confirmação com um número de rastreamento. Basta clicar no número de rastreamento ou visitar o nosso site e inserir o número de rastreamento na seção designada para obter atualizações em tempo real sobre a localização e o status de entrega do seu pedido.",
    },
    {
      question: "Qual é a política de devolução?",
      answer:
        "Oferecemos uma política de devolução sem complicações. Se você não estiver completamente satisfeito(a) com a sua compra, pode devolver o item em até 30 dias após a entrega para obter um reembolso total ou troca. Certifique-se de que o item esteja sem uso, na embalagem original e acompanhado do recibo. Entre em contato com a nossa equipe de atendimento ao cliente e eles o(a) orientarão pelo processo de devolução.",
    },
    {
      question: "Quais são os métodos de pagamento aceitos?",
      answer:
        "Aceitamos diversos métodos de pagamento, incluindo cartões de crédito, débito e boleto bancário. Ao finalizar a sua compra, você poderá escolher a opção de pagamento que melhor se adequa às suas preferências. Garantimos que todas as transações são seguras e protegidas.",
    },
    {
      question: "Quanto tempo leva para a entrega do meu pedido?",
      answer:
        "O tempo de entrega varia de acordo com a sua localização. Geralmente, o prazo estimado para entrega é de 5 a 10 dias úteis após a confirmação do pagamento. No entanto, esse prazo pode variar devido a circunstâncias imprevistas. Após o envio do seu pedido, enviaremos um e-mail com as informações de rastreamento para que você possa acompanhar a entrega.",
    },
    {
      question: "Vocês oferecem frete grátis?",
      answer:
        "Sim, oferecemos frete grátis para pedidos acima de um determinado valor. O valor mínimo para se qualificar para frete grátis pode variar, então verifique as condições atuais em nosso site. Caso o seu pedido atenda aos requisitos, o frete será automaticamente ajustado para zero durante o processo de finalização da compra.",
    },
  ],
  contact: {
    title: "",
    description: "",
    button: {
      text: "",
      link: "",
    },
  },
};

function Question({ question, answer }: Question) {
  return (
    <details class="collapse collapse-arrow join-item border-t border-base-200">
      <summary class="collapse-title text-lg font-medium">
        {question}
      </summary>
      <div
        class="collapse-content"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}

function Contact({ title, description, link }: Contact) {
  return (
    <div class="flex flex-col gap-6 items-center text-center">
      <div class="flex flex-col gap-2">
        {title && <h2 class="text-xl lg:text-3xl">{title}</h2>}
        {description && (
          <div
            class="text-lg lg:text-xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      {link &&
        <a href={link.href} class="btn">{link.text}</a>}
    </div>
  );
}

export default function FAQ(props: Props) {
  const {
    questions = [],
    header,
    contact,
    layout,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <>
      {(!layout?.variation || layout?.variation === "Compact") && (
        <div class="w-full container px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 lg:px-40">
          <div class="flex flex-col gap-8 lg:gap-10">
            <Header content={header} layout={layout?.header} />

            <div class="join join-vertical w-full">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>

          <Contact {...contact} />
        </div>
      )}

      {layout?.variation === "Full" && (
        <div class="w-full container px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 lg:px-0">
          <div class="flex flex-col gap-8 lg:gap-10">
            <Header content={header} layout={layout?.header} />
            <div class="join join-vertical w-full">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>

          <Contact {...contact} />
        </div>
      )}

      {layout?.variation === "Side to side" && (
        <div class="w-full container px-4 py-8 grid gap-8 grid-flow-row grid-cols-1 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 lg:py-10 lg:px-0">
          <div class="order-1 lg:order-1">
            <Header content={header} layout={layout?.header} />
          </div>
          <div class="order-2 lg:order-3 lg:row-span-2">
            <div class="join join-vertical">
              {questions.map((question) => <Question {...question} />)}
            </div>
          </div>
          <div class="order-3 lg:order-2">
            <Contact {...contact} />
          </div>
        </div>
      )}
    </>
  );
}
