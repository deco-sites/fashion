import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

export interface Banner {
  href: string;
  src: LiveImage;
}

export interface Props {
  banners: Banner[];
}

export default function MarcasConvidadas({ banners }: Props) {
  return (
    <section class="max-w-[1400px] w-full px-4 md:px-0 mx-auto mt-[50px]">
      <div class="py-6 md:py-0 md:pb-[40px] flex items-center">
        <h3
          class={"text-lg leading-5 font-semibold uppercase whitespace-nowrap"}
        >
          Marcas Convidadas
        </h3>

        <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        <a class="md:col-span-3" href="/search?ft=morena+rosa">
          <Picture preload>
            <Source
              width={320}
              height={400}
              media="(max-width: 767px)"
              sizes="25vw"
              src="https://images.prismic.io/offpremium-web/3b90e599-993a-40bd-861c-7730abef670a_10_banner_terciario_maior_morena_iodice_mob.jpg"
            />
            <Source
              width={1280}
              height={437}
              media="(min-width: 768px)"
              sizes="50vw"
              src="https://images.prismic.io/offpremium-web/6c1b488a-a907-454f-8d3b-934b51623293_10_banner_terciario_maior_morena_iodice_desk.jpg"
            />
            <img
              class="object-cover w-full"
              src="https://images.prismic.io/offpremium-web/6c1b488a-a907-454f-8d3b-934b51623293_10_banner_terciario_maior_morena_iodice_desk.jpg"
              alt="Morena iodice"
            />
          </Picture>
        </a>
        {banners.map(({ href, src }) => (
          <div>
            <a href={href} key={href}>
              <Image
                sizes="(max-width: 767px) 50vw, 30vw"
                width={320}
                height={400}
                src={src}
                alt={href}
                class="w-full"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
