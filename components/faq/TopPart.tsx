import type { TopPart } from "./Faq.tsx";

function TopPartComponent({ topPart }: {
  topPart: TopPart;
}) {
  const { title, text } = topPart;
  return (
    <>
        {/* Mobile Version */}
        <div className="md:hidden relative">
            <h3 class="text-5xl font-albert-sans font-normal text-center text-12 leading-12 mb-6">
                {title}
            </h3>
            <p class="text-lg font-albert-sans font-normal text-center text-4 leading-7">
                {text}
            </p>
        </div>
          {/* Desktop Version */}
        <div className="hidden md:block relative">
            <h3 class="text-5xl font-albert-sans font-normal text-center text-12 leading-12 mb-6">
                {title}
            </h3>
            <p class="text-lg font-albert-sans font-normal text-center text-4 leading-7">
                {text}
            </p>
        </div>
    </>
  );
}

export default TopPartComponent;
