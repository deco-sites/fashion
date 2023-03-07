import { tw } from "twind";
import { useId } from "preact/hooks";
import { animation, css, keyframes } from "twind/css";
import { ComponentChild, toChildArray } from "preact";

const getPrevNextIndexes = (index: number, total: number) => {
  return {
    prev: (total + (index - 1)) % total,
    next: (total + (index + 1)) % total,
  };
};

const generateSlideId = (id: string, index: number) => `${id}-slide${index}`;

interface Props {
  class?: string;
  children?: ComponentChild[];
  dot?: ComponentChild;
  leftArrow?: ComponentChild;
  rightArrow?: ComponentChild;
  animationDuration?: number;
}

function Carousel(
  {
    class: _class = "",
    children,
    dot,
    leftArrow,
    rightArrow,
    animationDuration = 3,
  }: Props,
) {
  const id = useId();

  if (children === undefined) {
    return null;
  }

  const childrenArray = toChildArray(children);
  const childrenLength = childrenArray.length;
  const toStart = tw(keyframes`
            75% { left: 0; }
            95% { left: -${Math.max(childrenLength - 1, 0)}00%; }
            98% { left: -${Math.max(childrenLength - 1, 0)}00%; }
            99% { left: 0; }
`);
  const toNext = tw(keyframes`
    75% { left: 0; }
    95% { left: 100%; }
    98% { left: 100%; }
    99% { left: 0; }
  `);
  const snap = tw(keyframes`
          96% { scroll-snap-align: center; }
          97% { scroll-snap-align: none; }
          99% { scroll-snap-align: none; }
          100% { scroll-snap-align: center; }`);

  // const autoPlayAnimation = tw(css(animation({
  //   animationDuration: `${animationDuration}s`,
  //   animationTimingFunction: "ease",
  //   animationIterationCount: "infinite",
  // }, {})));

  // Inline top-[calc(50% - 1.25rem)] doesn't work.
  // This is 50% - ((arrow svg height + padding) / 2)
  const arrowTopClass = tw(() => ({ top: "calc(50% - 1.25rem)" }));

  return (
    <section
      class={`relative group ${_class}`}
      aria-label="Gallery"
      data-carousel
    >
      <ol
        class="absolute inset-0 flex scrollbar-none overflow-x-scroll scroll-smooth scroll-x-mandatory"
        data-carousel-viewport
      >
        {childrenArray?.map((child, index) => {
          const isFirst = index === 0;
          const isLast = index === childrenLength - 1;
          const { next, prev } = getPrevNextIndexes(index, childrenLength);

          const prevNextArrows = (!!leftArrow || !!rightArrow) && (
            <>
              {!!leftArrow && (
                <a
                  class={`absolute ${arrowTopClass} left-0 ml-2 text-white outline-none p-2`}
                  href={`#${generateSlideId(id, prev)}`}
                  data-carousel-prev
                >
                  {leftArrow}
                </a>
              )}
              {!!rightArrow && (
                <a
                  class={`absolute ${arrowTopClass} right-0 mr-2 text-white outline-none p-2`}
                  href={`#${generateSlideId(id, next)}`}
                  data-carousel-next
                >
                  {rightArrow}
                </a>
              )}
            </>
          );

          return (
            <li
              class="relative w-full"
              style="flex: 0 0 100%"
              id={generateSlideId(id, index)}
              data-carousel-slide
            >
              {child}
              <div
                class={`absolute top-0 left-0 w-full h-full scroll-snap-center group-hover:animate-none group-focus-within:animate-none`}
                style={`animation-name: ${isLast ? toStart : toNext}, ${snap};`}
                data-carousel-snapper
              >
                {isFirst && prevNextArrows}
              </div>
              {!isFirst && prevNextArrows}
            </li>
          );
        })}
      </ol>
      {!!dot && (
        <aside class="absolute right-0 bottom-0 left-0 text-center">
          <ol class="inline-block" data-carousel-navigation>
            {childrenArray.map((_, index) => {
              return (
                <li
                  class="inline-block p-2 rounded-full text-white outline-none"
                  data-carousel-item
                >
                  <a
                    href={`#${generateSlideId(id, index)}`}
                    class="focus:text-gray-600"
                  >
                    {dot}
                  </a>
                </li>
              );
            })}
          </ol>
        </aside>
      )}
    </section>
  );
}

export default Carousel;
