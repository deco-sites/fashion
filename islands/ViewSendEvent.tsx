import { useEffect } from "preact/hooks";
import { sendAnalyticsEvent } from "deco-sites/std/commerce/sdk/sendAnalyticsEvent.ts";
import type { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";

interface Props<E extends AnalyticsEvent> {
  event: E;
}

/**
 * This componente should be used when want to send event for rendered componentes.
 * This behavior is usefull for view_* events.
 */
export default function ViewSendEvent<E extends AnalyticsEvent>(
  { event }: Props<E>,
) {
  useEffect(function sendEvent() {
    sendAnalyticsEvent(event);
  }, []);

  return <div class="hidden" />;
}
