import { Head } from "$fresh/runtime.ts";

import Script from "../Script.tsx";

interface Props {
  trackingId: string;
}

const snippet = (trackingId: string) => `
// It is safe to .push in datalayer in here because partytown have already
// run and made dataLayer.push available in window
window.gtag = window.gtag || function(){window.dataLayer.push(arguments)};

function init() {
  window.gtag("js", new Date());
  window.gtag("config", "${trackingId}");
};

if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init);
};
`;

const GoogleTagManager = ({ trackingId = "" }: Props) => (
  <>
    <Script
      forward={["dataLayer.push"]}
      src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
    />
    <Script
      type="application/javascript"
      dangerouslySetInnerHTML={{
        __html: snippet(trackingId),
      }}
    />
  </>
);

export default GoogleTagManager;
