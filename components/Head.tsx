import { asset, Head } from "$fresh/runtime.ts";

export interface HeadProps {
  title?: string;
  description?: string;
  url: URL;
  imageUrl?: string;
  faviconUrl?: string;
  styleUrls?: string[];
  themeColor?: string;
}

export const schema = {
  type: "object",
  properties: {
    title: {
      title: "Título da Página",
      type: "string",
    },
    description: {
      title: "Descrição",
      type: "string",
    },
    faviconUrl: {
      title: "Favicon URL",
      type: "string",
    },
    url: {
      title: "URL",
      type: "string",
    },
  },
  required: ["description", "faviconUrl", "title", "url"],
  title: "Head (SEO)",
};

export const initialProps: HeadProps = {
  title: "OFF Premium | Outlet Farm, Animale, e mais, até 70% off",
  description: "Outlet Farm, Animale, e mais, até 70% off",
  url: new URL("https://fashion.deco.page"),
  imageUrl: "https://fashion.deco.page/android-chrome-384x384.png?v=1",
  faviconUrl: "https://fashion.deco.page/favicon-32x32.png?v=1",
  styleUrls: [],
  themeColor: "#221E1F",
};

export default function HeadComponent(props: HeadProps) {
  let {
    title,
    description,
    url,
    imageUrl,
    faviconUrl,
    styleUrls,
    themeColor,
  } = props?.title ? props : initialProps;
  if (!imageUrl) {
    imageUrl = initialProps.imageUrl;
  }
  if (!faviconUrl) {
    faviconUrl = initialProps.faviconUrl;
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={themeColor}></meta>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url.href} />
      <meta property="og:image" content={imageUrl} />
      <link rel="shortcut icon" href={faviconUrl} type="image/x-icon"></link>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      >
      </link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        data-color="#221E1F"
      >
      </link>
      <meta name="theme-color" content="#221E1F"></meta>
      <meta name="msapplication-TileColor" content="#221E1F"></meta>
      {styleUrls?.map((styleUrl: string) => (
        <link rel="stylesheet" href={asset(styleUrl)}></link>
      ))}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
      </style>
    </Head>
  );
}
