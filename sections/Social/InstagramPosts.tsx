import type { SectionProps } from "$live/mod.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface layout {
  headerAlignment?: "center" | "left";
  /** @description Default is 12 */
  numberOfPosts?: number;
  /** @description Up to 6. Default is 4 */
  postsPerLine?: number;
}

export interface Data {
  id: string;
  permalink: string;
  media_type: string;
  media_url: string;
}

export interface Props {
  title?: string;
  description?: string;
  /**
   * @description Get it in Facebook app. Expires every 90 days.
   * @format textarea
   */
  facebookToken: string;
  layout?: layout;
}

export async function loader(
  {
    title,
    description,
    facebookToken,
    layout,
  }: Props,
  _req: Request,
) {
  const fields = ["media_url", "media_type", "permalink"];
  const joinFields = fields.join(",");
  const url =
    `https://graph.instagram.com/me/media?access_token=${facebookToken}&fields=${joinFields}`;

  const { data } = (await fetch(url).then((r) => r.json()).catch((err) => {
    console.error("error fetching posts from instagram", err);
    return { data: [] };
  })) as {
    data: Data[];
  };

  return {
    data: data.slice(0, layout?.numberOfPosts ?? 12),
    title,
    description,
    layout,
  };
}

export default function InstagramPosts({
  title,
  description,
  layout,
  data = [
    {
      id: "placeholderInsta",
      permalink: "#",
      media_type: "IMAGE",
      media_url: "",
    },
  ],
}: SectionProps<typeof loader>) {
  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-14 lg:gap-20 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class="hidden lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 lg:grid-cols-6">
      </div>
      <div
        class={`grid grid-cols-2 lg:grid-cols-${
          layout?.postsPerLine || 4
        } gap-4 items-center justify-center place-items-center`}
      >
        {data.map((item) => (
          <a
            key={item.id}
            href={item.permalink}
            target="_blank"
            title="Visite nosso instagram"
            class="rounded-lg overflow-hidden w-full max-w-[350px] sm:max-w-[350px] group"
          >
            {item.media_type === "IMAGE"
              ? (
                <Image
                  class="max-w-full max-h-full object-cover w-full group-hover:scale-110  transition duration-400 group-hover:brightness-90"
                  src={item.media_url ?? ""}
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
      </div>
    </div>
  );
}
