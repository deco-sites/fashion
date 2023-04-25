import type { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";
import { sendEvent } from "deco-sites/fashion/sdk/analytics.ts";

interface Props<E extends AnalyticsEvent> {
  event: E;
}

/**
 * This componente should be used when want to send event for rendered componentes.
 * This behavior is usefull for view_* events.
 */
function SendEventOnLoad<E extends AnalyticsEvent>(
  { event }: Props<E>,
) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.addEventListener("load", () => ${sendEvent(event)})`,
      }}
    />
  );
}

export default SendEventOnLoad;
