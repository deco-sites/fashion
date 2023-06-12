import { IS_BROWSER } from "$fresh/runtime.ts";
import type { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";

declare global {
  interface Window {
    DECO_SITES_STD: {
      sendAnalyticsEvent: (args: AnalyticsEvent) => void;
    };
  }
}

export const sendEvent = <E extends AnalyticsEvent>(event: E) => {
  if (typeof window.DECO_SITES_STD?.sendAnalyticsEvent !== "function") {
    console.info(
      "Cannot find Analytics section in your page. Press `.` to add Analytics and supress this warning",
    );

    return;
  }
  window.DECO_SITES_STD.sendAnalyticsEvent(event);
};

/**
 * This function is usefull for sending events on click. Works with both Server and Islands components
 */
export const SendEventOnClick = <E extends AnalyticsEvent>({ event, id }: {
  event: E;
  id: string;
}) => (
  <script
    dangerouslySetInnerHTML={{
      __html:
        `addEventListener("load", () => document.getElementById("${id}")?.addEventListener("click", () => (${sendEvent})(${
          JSON.stringify(event)
        })))`,
    }}
  >
  </script>
);

/**
 * This componente should be used when want to send event for rendered componentes.
 * This behavior is usefull for view_* events.
 */
export const SendEventOnLoad = <E extends AnalyticsEvent>(
  { event }: { event: E },
) => (
  <script
    dangerouslySetInnerHTML={{
      __html: `addEventListener("load", () => (${sendEvent})(${
        JSON.stringify(event)
      }))`,
    }}
  />
);
