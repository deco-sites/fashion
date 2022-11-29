import { useEffect, useRef, useState } from "preact/hooks";

interface Props {
  items: number;
  delay?: number;
  id: string;
}

function Slider({ id, items, delay = 2_000 }: Props) {
  const root = useRef(document.getElementById(id) as HTMLDivElement);
  const [index, setIndex] = useState(0);

  // Timer
  useEffect(() => {
    const id = setInterval(() => setIndex((index + 1) % items), delay);

    return () => {
      clearInterval(id);
    };
  }, [index, delay, items]);

  // Focus the right content
  useEffect(() => {
    const content = root.current?.querySelector(
      "[data-slider-content]",
    ) as HTMLDivElement;

    if (content) {
      content.style.transform = `translateX(-${(100 / items) * index}%)`;
    }
  }, [index]);

  // Handles next/prev elements
  useEffect(() => {
    const prevElement = root.current?.querySelector(
      "[data-slider-prev]",
    );
    const nextElement = root.current?.querySelector(
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

  // Handles button control elements (dots)
  useEffect(() => {
    const dots = root.current.querySelectorAll("[data-dots]");

    if (!dots) {
      return;
    }

    const listeners: Array<() => void> = [];

    dots.forEach((dot, index) => {
      const set = () => setIndex(index);

      listeners.push(set);
      dot.addEventListener("click", set);
    });

    return () => {
      dots.forEach((dot, index) =>
        dot.removeEventListener("click", listeners[index])
      );
    };
  }, []);

  return <div />;
}

export default Slider;
