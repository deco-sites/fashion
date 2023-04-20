import { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";

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
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
    (function (){
    const sendEvent = () => {
      if (!window.dataLayer) { requestIdleCallback(sendEvent, { timeout: 250 }); return; }
      window.sendAnalyticsEvent(${JSON.stringify(event)})
    }
    requestIdleCallback(sendEvent);
    })()
`,
      }}
    />
  );
}
