import type { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";

export const sendEvent = <E extends AnalyticsEvent>(event: E) =>
  `window.DECO_SITES_STD.sendAnalyticsEvent(${JSON.stringify(event)})`;

export const sendEventOnClick = <E extends AnalyticsEvent>(event: E) => ({
  onclick: sendEvent(event),
});
