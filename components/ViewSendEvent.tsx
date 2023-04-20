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
     window.addEventListener("load", () => window.DECO_SITES_STD.sendAnalyticsEvent(${
          JSON.stringify(event)
        }))
`,
      }}
    />
  );
}
