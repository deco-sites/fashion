import Icon from "$store/components/ui/Icon.tsx";
import { formatPrice } from "$store/sdk/format.ts";

interface Props {
  total: number;
  target: number;
  locale: string;
  currency: string;
}

function FreeShippingProgressBar({ target, total, currency, locale }: Props) {
  const remaining = target - total;
  const percent = Math.floor((total / target) * 100);

  return (
    <div class="flex flex-col w-full gap-2">
      <div class="flex justify-center items-center gap-2 text-primary">
        <Icon id="Truck" size={20} />
        {remaining > 0
          ? (
            <span>
              Faltam ${formatPrice(remaining, currency, locale)}{" "}
              para ganhar frete grátis!
            </span>
          )
          : <span>Você ganhou frete grátis!</span>}
      </div>
      <progress
        class="progress progress-primary w-full"
        value={percent}
        max={100}
      />
    </div>
  );
}

export default FreeShippingProgressBar;
