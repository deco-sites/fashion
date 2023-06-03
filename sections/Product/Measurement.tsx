import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image?: LiveImage;
  title?: string;
  description?: string;
  buttonText?: string;
  /**
   * @description Separate column's values by comma
   * @example c,a,p,y,b,a,r,a
   */
  rows: string[];
}

const DEFAULT_PROPS: Props = {
  title: "Medidas",
  buttonText: "Tabela de medidas",
  rows: [],
};

/** TODO: Move this product details */
export default function MeasurementModal(props: Props) {
  const id = `measurement-${useId()}`;
  const {
    image,
    title,
    description,
    rows,
    buttonText,
  } = { ...DEFAULT_PROPS, ...props };
  const [head, ...body] = rows ?? [];

  return (
    <>
      <label for={id} class="btn btn-link gap-2 no-animation">
        <Icon id="Ruler" size={20} />
        {buttonText}
      </label>
      <input id={id} type="checkbox" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box overflow-y-hidden">
          <label
            for={id}
            class="btn btn-xs btn-circle btn-outline absolute right-2 top-2"
          >
            <Icon id="XMark" size={20} strokeWidth={1.5} />
          </label>
          <div class="grid grid-flow-col h-64">
            {image && (
              <Image
                class="object-cover hidden sm:block w-full"
                src={image}
                alt={title}
                width={240}
                height={240}
                decoding="async"
                loading="lazy"
              />
            )}
            <div class="p-5 flex flex-col gap-4 overflow-scroll">
              <h2 class="text-2xl sm:text-3xl">
                {title}
              </h2>
              {description && <p class="text-base sm:text-lg">{description}</p>}
              <table class="w-full">
                <thead>
                  <tr class="font-light text-center flex flex-row items-center justify-center flex-nowrap gap-4">
                    {head?.split(",").map((value) => <th>{value}</th>)}
                  </tr>
                </thead>
                <tbody class="">
                  {body?.map((values) => (
                    <tr class="font-light text-center flex flex-row items-center justify-center flex-nowrap gap-4">
                      {values.split(",").map((value) => <td>{value}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <label class="modal-backdrop" for={id}>X</label>
      </div>
    </>
  );
}
