import Container, { HeaderContent, Layout, Style } from "$store/components/ui/Container.tsx"
import { getButtonClasses, borderColorClasses } from "$store/components/ui/Types.tsx"

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
  layout?: Layout;
  itemsLayout?: {
    variation?: "Rows" | "Cols";
  };
  style?: Style;
}

const DEFAULT_PROPS = {
  header: {
    title: "",
    description: "",
  },
  questions: [
    {
      "question": "How can I track my order?",
      "answer": "Tracking your order is easy! Once your order is shipped, we will send a confirmation email with a tracking number. Simply click on the tracking number or visit our website and enter the tracking number in the designated section to get real-time updates on the location and delivery status of your order."
    },
    {
      "question": "What is the return policy?",
      "answer": "We offer a hassle-free return policy. If you are not completely satisfied with your purchase, you can return the item within 30 days of delivery for a full refund or exchange. Please ensure that the item is unused, in its original packaging, and accompanied by the receipt. Contact our customer service team, and they will guide you through the return process."
    },
    {
      "question": "What payment methods are accepted?",
      "answer": "We accept various payment methods, including credit cards, debit cards, and bank transfers. When checking out, you can choose the payment option that best suits your preferences. We ensure that all transactions are secure and protected."
    },
    {
      "question": "How long does it take for my order to be delivered?",
      "answer": "The delivery time depends on your location. Generally, the estimated delivery timeframe is 5 to 10 business days after payment confirmation. However, this timeframe may vary due to unforeseen circumstances. After your order is shipped, we will send an email with tracking information so you can monitor the delivery."
    },
    {
      "question": "Do you offer free shipping?",
      "answer": "Yes, we offer free shipping for orders above a certain value. The minimum value to qualify for free shipping may vary, so please check the current conditions on our website. If your order meets the requirements, the shipping cost will be automatically adjusted to zero during the checkout process."
    }
  ],
};

function Question({ question, answer }: Question) {
  return (
    <details class="collapse collapse-arrow join-item border-t">
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

function Contact({ title, description, link, button }: Contact & Style) {
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
        <a href={link.href} class={getButtonClasses(button || {})}>{link.text}</a>}
    </div>
  );
}

export default function FAQ(props: Props) {
  const {
    questions = [],
    header,
    contact,
    layout,
    style,
    itemsLayout,
  } = { ...DEFAULT_PROPS, ...props };

  const variation = itemsLayout?.variation || "Rows";

  return (
    <Container header={header} layout={layout} style={style} afterHeader={variation !== "Rows" && <Contact {...{...contact, ...style}} />}>
      <div class={`flex gap-4 lg:gap-8 ${variation === "Rows" ? "flex-col" : ""}`}>
        <div class="join join-vertical w-full rounded-none">
          {questions.map((question) => <Question {...question} />)}
        </div>

        {variation === "Rows" && (<Contact {...{...contact, ...style}} />)}
      </div>
    </Container>
  );
}
