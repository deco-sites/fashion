import { asset, Head } from "$fresh/runtime.ts";

export interface Props {
  title?: string;
  description?: string;
  url: string;
  imageUrl?: string;
  faviconUrl?: string;
  styleUrls?: string[];
  themeColor?: string;
}

const initialProps: Props = {
  title: "Fashion | 70% Off",
  description: "70% Off",
  url: "https://fashion.deco.page",
  imageUrl: "https://fashion.deco.page/android-chrome-384x384.png?v=1",
  faviconUrl: "https://fashion.deco.page/favicon-32x32.png?v=1",
  styleUrls: [],
  themeColor: "#221E1F",
};

function BaseTags(props: Props) {
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
      <meta property="og:url" content={url} />
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `,
        }}
      >
      </style>
    </Head>
  );
}

export default BaseTags;
