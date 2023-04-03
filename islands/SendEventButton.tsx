import { sendAnalyticsEvent } from "deco-sites/std/commerce/sdk/sendAnalyticsEvent.ts";
import type { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";
import Button, { Props as ButtonProps } from "$store/components/ui/Button.tsx";

type Props<E extends AnalyticsEvent> = ButtonProps & {
  event: E;
};

/**
 * This islands should be used inside server side componentes.
 */
export default function SendEventButton<
  E extends AnalyticsEvent,
>({ event, onClick, ...props }: Props<E>) {
  return (
    <Button
      {...props}
      onClick={(e) => {
        sendAnalyticsEvent(event);

        (onClick as (e: MouseEvent) => void)?.(e);
      }}
    />
  );
}
