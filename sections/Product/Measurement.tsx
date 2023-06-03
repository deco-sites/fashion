import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";

export interface Props {
  image?: LiveImage;
  title?: string;
  description?: string;
  /** @description Separate column's values by comma */
  rows: Array<string>;
  buttonText?: string;
}

export default function MeasurementModal(
  {
    image,
    title,
    description,
    rows,
    buttonText,
  }: Props,
) {
  const id = useId();

  return (
    <>
      <label for={id} class="btn btn-link flex gap-2 w-fit">
        <div class="flex-none">
          <Icon id="Ruler" size="20" />
        </div>
        {buttonText || "Tabela de medidas"}
      </label>
      <input id={id} type="checkbox" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box p-0">
          <label
            for={id}
            class="btn btn-xs btn-circle btn-outline absolute right-2 top-2"
          >
            <Icon id="Close" size="20" />
          </label>
          <div class="grid grid-flow-col">
            {image && (
              <div class="w-60 overflow-hidden relative hidden lg:block">
                <figure>
                  <img
                    class="absolute object-cover h-96"
                    src={image}
                    alt={title || "Medidas"}
                    decoding="async"
                    loading="lazy"
                  />
                </figure>
              </div>
            )}
            <div class="p-5 flex flex-col gap-4">
              <h2 class="text-2xl lg:text-3xl">
                {title || "Tabela de medidas"}
              </h2>
              {description && <p class="text-base lg:text-lg">{description}</p>}
              <table class="w-full">
                <thead>
                  {rows.map((values, index) => (
                    <>
                      {index === 0 && (
                        <tr class="font-light text-center">
                          {values.split(",").map((value) => (
                            <th class="p-2">{value}</th>
                          ))}
                        </tr>
                      )}
                    </>
                  ))}
                </thead>
                <tbody>
                  {rows.map((values, index) => (
                    <>
                      {index > 0 && (
                        <tr class="font-light text-center">
                          {values.split(",").map((value) => (
                            <td class="p-2">{value}</td>
                          ))}
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
