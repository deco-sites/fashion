import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Tailwind v3 CSS file */}
      <link href={asset("/tailwind.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
        window.addEventListener('load', function() {
          const STORAGE_SCROLL_KEY = 'deco-pages-scroll';
          const top = sessionStorage.getItem(STORAGE_SCROLL_KEY)
          if (top !== null) {
            console.log('scrolling to ' + top);
            document.documentElement.scrollTop = parseInt(top, 10);
          }
          window.addEventListener('beforeunload', () => {
            sessionStorage.setItem(STORAGE_SCROLL_KEY, document.documentElement.scrollTop || document.body.scrollTop);
          })
      })
        `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
