import type { BottomPart } from "./Faq.tsx";

function BottomPartComponent({ bottomPart }: {
  bottomPart: BottomPart;
}) {
  const { title, text, contactUrl } = bottomPart;
  return (
    <div class="">
      <h3 class="font-albert-sans font-normal text-center text-3xl leading-40">
        {title}
      </h3>
      <p class="text-lg font-albert-sans font-normal text-center text-4 leading-7 py-4">
        {text}
      </p>
      <div class="flex justify-center">
        <a
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          Contato
        </a>
      </div>
    </div>
  );
}

export default BottomPartComponent;
