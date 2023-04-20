import { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";
import Button, {
  Props as ButtonProps,
} from "deco-sites/fashion/components/ui/Button.tsx";

function useSendAnalyticsEvent<E extends AnalyticsEvent>(event: E) {
  return {
    onclick: `window.DECO_SITES_STD.sendAnalyticsEvent(${
      JSON.stringify(event)
    });`,
  };
}

type Props<E extends AnalyticsEvent> = Omit<ButtonProps, "onClick"> & {
  event: E;
};

export default function ButtonSendEvent<
  E extends AnalyticsEvent,
>({ event, ...props }: Props<E>) {
  return (
    <Button
      {...props}
      {...useSendAnalyticsEvent(event)}
    />
  );
}
