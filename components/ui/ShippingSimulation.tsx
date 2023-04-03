import Button from "$store/components/ui/Button.tsx";
import Input from "$store/components/ui/Input.tsx";
import Text from "$store/components/ui/Text.tsx";
import { formatPrice } from "$store/sdk/format.ts";

import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";

import type {
  SimulationOrderForm,
  SKU,
  Sla,
} from "deco-sites/std/commerce/vtex/types.ts";

import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";

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
    <ul class="flex flex-col gap-4 p-4 bg-hover rounded-[4px]">
      {methods.map((method) => (
        <li class="flex justify-between items-center border-default not-first-child:border-t-1">
          <Text variant="body" class="text-button text-center">
            Entrega {method.name}
          </Text>
          <Text variant="body" class="text-button">
            até {handleShippingTime(method.shippingEstimate)}
          </Text>
          <Text variant="body" class="text-base font-semibold text-right">
            {method.price === 0 ? "Grátis" : (
              formatPrice(method.price / 100, currencyCode!, locale)
            )}
          </Text>
        </li>
      ))}
      <Text class="text-subdued">
        Os prazos de entrega começam a contar a partir da confirmação do
        pagamento e podem variar de acordo com a quantidade de produtos na
        sacola.
      </Text>
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
        <Text>Calcular frete</Text>
        <Text variant="body">
          Informe seu CEP para consultar os prazos de entrega
        </Text>
      </div>
      <div>
        <form
          class="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSimulation();
          }}
        >
          <Input
            as="input"
            type="text"
            variant="input"
            class="w-[120px] p-2 rounded-[4px] border-1 border-default"
            placeholder="Seu cep aqui"
            onChange={(e: { currentTarget: { value: string } }) => {
              postalCode.value = e.currentTarget.value;
            }}
            value={postalCode.value}
            maxlength={8}
          >
          </Input>
          <Button
            type="submit"
            loading={loading.value}
          >
            Calcular
          </Button>
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
