import type { TopPart } from "./Faq.tsx";

function TopPartComponent({ topPart }: {
  topPart: TopPart;
}) {
  const { title, text } = topPart;
  return (
    <div class="">
      <h3 class="text-5xl font-albert-sans font-normal text-center text-12 leading-12 mb-6">
        {title}
      </h3>
      <p class="text-lg font-albert-sans font-normal text-center text-4 leading-7">
        {text}
      </p>
    </div>
  );
}

export default TopPartComponent;
