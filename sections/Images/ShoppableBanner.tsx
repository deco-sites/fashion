import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  image: {
    mobile: ImageWidget;
    desktop?: ImageWidget;
    altText: string;
  };

  pins: Pin[];

  text?: string;
  title?: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface Pin {
  mobile: {
    x: number;
    y: number;
  };
  desktop?: {
    x: number;
    y: number;
  };
  link: string;
  label: string;
}

const DEFAULT_PROPS: Props = {
  link: {
    href: "#",
    text: "Ver agora",
  },
  pins: [],
  image: {
    mobile:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/aa071a4a-fd37-4efa-abf1-f736af0409a3",
    altText: "capybara",
  },
};

export default function ShoppableBanner(props: Props) {
  const { link, text, title, image, pins } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="container">
      <div class="card lg:card-side rounded grid grid-cols-1 lg:grid-cols-[70%_30%]">
        <figure class="relative">
          <Picture>
            <Source
              media="(max-width: 767px)"
              src={image?.mobile}
              width={150}
              height={150}
            />
            <Source
              media="(min-width: 768px)"
              src={image?.desktop ? image?.desktop : image?.mobile}
              width={384}
              height={227}
            />
            <img
              class="w-full object-cover"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image?.mobile}
              alt={image?.altText}
              decoding="async"
              loading="lazy"
            />
          </Picture>
          {pins.map(({ mobile, desktop, link, label }) => (
            <>
              <a
                href={link}
                class="absolute w-min btn btn-accent rounded-full hover:rounded text-accent no-animation md:scale-[30%] hover:text-accent-content hover:scale-125 sm:hidden"
                style={{
                  left: `${mobile.x}%`,
                  top: `${mobile.y}%`,
                }}
              >
                <span>{label}</span>
              </a>
              <a
                href={link}
                class="absolute w-min btn btn-accent rounded-full hover:rounded text-accent no-animation md:scale-[30%] hover:text-accent-content hover:scale-125 hidden sm:inline-flex"
                style={{
                  left: `${desktop?.x ?? mobile.x}%`,
                  top: `${desktop?.y ?? mobile.y}%`,
                }}
              >
                <span>{label}</span>
              </a>
            </>
          ))}
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>{text}</p>
          <div class="card-actions justify-end">
            <a class="btn btn-primary" href={link?.href}>{link?.text}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
