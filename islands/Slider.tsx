import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";

interface Props {
  items: number;
  delay?: number;
  id: string;
}

function Slider({ id, items, delay = 2_000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((index + 1) % items), delay);

    return () => {
      clearInterval(id);
    };
  }, [index, delay, items]);

  useEffect(() => {
    const content = document.getElementById(id)?.querySelector(
      "[data-slider-content]",
    ) as HTMLDivElement;

    if (content) {
      content.style.transform = `translateX(-${(100 / items) * index}%)`;
    }
  }, [index]);

  useEffect(() => {
    const prevElement = document.getElementById(id)?.querySelector(
      "[data-slider-prev]",
    );
    const nextElement = document.getElementById(id)?.querySelector(
      "[data-slider-next]",
    );

    const next = () => setIndex((i) => (i + 1) % items);
    const prev = () => setIndex((i) => i > 0 ? i - 1 : items - 1);

    nextElement?.addEventListener("click", next);
    prevElement?.addEventListener("click", prev);

    return () => {
      nextElement?.removeEventListener("click", next);
      prevElement?.removeEventListener("click", prev);
    };
  }, [items]);

  return <div />;
}

export default Slider;
