import type { BottomPart } from "./Faq.tsx";

function BottomPartComponent({ bottomPart }: {
  bottomPart: BottomPart;
}) {
  const { title, text, contactUrl } = bottomPart;
  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden relative">
        <h3 class="font-albert-sans font-normal text-center text-4xl leading-40">
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
            Contact
          </a>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block relative">
        <h3 class="font-albert-sans font-normal text-center text-4xl leading-40">
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
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default BottomPartComponent;
