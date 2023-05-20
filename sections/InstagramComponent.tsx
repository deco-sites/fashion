import type { SectionProps } from "$live/mod.ts";
import Image from "deco-sites/std/components/Image.tsx";

// Props type that will be configured in deco.cx's Admin

type Field =
  | "caption"
  | "id"
  | "is_shared_to_feed"
  | "media_type"
  | "media_url"
  | "permalink"
  | "thumbnail_url"
  | "timestamp"
  | "username";

export interface Props {
  /**
   * @title Título do componente
   */
  title: string;
  /**
   * @title Campos a serem buscados na API
   * @description Documentação se encontra aqui https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/
   */
  fields?: Field[];
  /**
   * @title Quantos posts deseja buscar?
   * @description Número de posts que vão ser retornados
   */
  numberOfPosts?: number;
  /**
   * @title Token  do facebook
   * @description Esse token é pego nas configurações do APP do facebook e expira a cada 90 dias
   */
  token: string;
}

type FieldReturn = {
  [key in Field]: string;
};

export async function loader(
  {
    numberOfPosts = 1,
    title,
    fields = ["media_url", "media_type", "permalink"],
    token,
  }: Props,
  _req: Request,
) {
  const joinFields = fields.join(",");
  const url =
    `https://graph.instagram.com/me/media?access_token=${token}&fields=${joinFields}`;

  const { data } = (await fetch(
    url,
  ).then((r) => r.json())) as { data: FieldReturn[] };

  return { data: data.slice(0, numberOfPosts), title };
}

export default function InstagramComponent(
  { title, data }: SectionProps<typeof loader>,
) {
  return (
    <div class="w-full">
      <h2 class="text-center row-start-1 col-span-full mb-3">
        <span class="font-medium text-2xl">{title}</span>
      </h2>
      <section
        class={`w-full max-w-[1200px] mx-auto flex flex-wrap gap-4 items-center justify-center`}
      >
        {data.map((item) => (
          <a
            key={item.id}
            href={item.permalink}
            target="_blank"
            class="rounded-lg overflow-hidden max-w-[350px] group"
          >
            {item.media_type === "IMAGE"
              ? (
                <Image
                  class="max-w-full max-h-full object-cover w-full group-hover:scale-110  transition duration-400 group-hover:brightness-90"
                  src={item.media_url}
                  alt="Imagem do instagram"
                  width={350}
                  height={350}
                  loading="lazy"
                />
              )
              : (
                <video controls class="max-w-full max-h-full object-cover">
                  <source src={item.media_url}></source>
                </video>
              )}
          </a>
        ))}
      </section>
    </div>
  );
}
