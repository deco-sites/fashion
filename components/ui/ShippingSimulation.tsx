import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import type {
  SimulationOrderForm,
  SKU,
  Sla,
} from "deco-sites/std/packs/vtex/types.ts";

export interface Props {
  items: Array<SKU>;
}

const handleShippingTime = (estimate: string) => {
  const [, time, type] = estimate.split(/(\d+)/);

  if (type === "bd") return `${time} dias úteis`;
  if (type === "d") return `${time} dias`;
  if (type === "h") return `${time} horas`;
};

function ShippingContentError() {
  return (
    <div class="p-2">
      <span>CEP inválido</span>
    </div>
  );
}

function ShippingContent(
  { simulation, locale, currencyCode }: {
    simulation: SimulationOrderForm;
    locale: string;
    currencyCode: string;
  },
) {
  if (!simulation.logisticsInfo?.length) {
    return <ShippingContentError />;
  }

  const methods = simulation.logisticsInfo.reduce<Sla[]>(
    (initial, logistic) => {
      return [...initial, ...logistic.slas];
    },
    [],
  );

  if (!methods.length) {
    return <ShippingContentError />;
  }

  return (
    <ul class="flex flex-col gap-4 p-4 bg-base-200 rounded-[4px]">
      {methods.map((method) => (
        <li class="flex justify-between items-center border-base-200 not-first-child:border-t">
          <span class="text-button text-center">
            Entrega {method.name}
          </span>
          <span class="text-button">
            até {handleShippingTime(method.shippingEstimate)}
          </span>
          <span class="text-base font-semibold text-right">
            {method.price === 0 ? "Grátis" : (
              formatPrice(method.price / 100, currencyCode!, locale)
            )}
          </span>
        </li>
      ))}
      <span class="text-base-300">
        Os prazos de entrega começam a contar a partir da confirmação do
        pagamento e podem variar de acordo com a quantidade de produtos na
        sacola.
      </span>
    </ul>
  );
}

function ShippingSimulation({ items }: Props) {
  const postalCode = useSignal("");
  const loading = useSignal(false);
  const simulateResult = useSignal<SimulationOrderForm | null>(null);

  const { simulate, cart } = useCart();

  const locale = cart.value?.clientPreferencesData.locale || "pt-BR";
  const currencyCode = cart.value?.storePreferencesData.currencyCode || "BRL";

  const handleSimulation = useCallback(() => {
    const simulationData = {
      items: items,
      postalCode: postalCode.value,
      country: cart.value?.storePreferencesData.countryCode || "BRA",
    };

    if (postalCode.value.length == 8) {
      loading.value = true;
      simulate(simulationData)
        .then((result) => {
          simulateResult.value = result;
          loading.value = false;
        });
    }
  }, []);

  return (
    <div class="flex flex-col gap-2">
      <div class="flex flex-col">
        <span>Calcular frete</span>
        <span>
          Informe seu CEP para consultar os prazos de entrega
        </span>
      </div>
      <div>
        <form
          class="form-control input-group"
          onSubmit={(e) => {
            e.preventDefault();
            handleSimulation();
          }}
        >
          <div class="input-group">
            <input
              as="input"
              type="text"
              class="input input-bordered"
              placeholder="Seu cep aqui"
              value={postalCode.value}
              maxLength={8}
              onChange={(e: { currentTarget: { value: string } }) => {
                postalCode.value = e.currentTarget.value;
              }}
            />
            <Button
              type="submit"
              loading={loading.value}
            >
              Calcular
            </Button>
          </div>
        </form>
      </div>
      <div>
        {simulateResult.value && (
          <div>
            <ShippingContent
              simulation={simulateResult.value}
              locale={locale}
              currencyCode={currencyCode}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ShippingSimulation;
