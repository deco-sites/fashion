import Button from "$store/components/ui/Button.tsx";
import Input from "$store/components/ui/Input.tsx";
import Text from "$store/components/ui/Text.tsx";
import { formatPrice } from "$store/sdk/format.ts";

import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts"

import type {
    SimulationOrderForm,
    SKU,
    Sla
} from "deco-sites/std/commerce/vtex/types.ts";

import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";

export interface Props {
    items: Array<SKU>;
}

function ShippingContentError() {
    return(
        <div class="p-2">
            <span>CEP inválido</span>
        </div>
    )
}

function ShippingContent({ simulation }:{ simulation: SimulationOrderForm }) {
    const { cart } = useCart();
    const locale = cart.value?.clientPreferencesData.locale;
    const currencyCode = cart.value?.storePreferencesData.currencyCode;

    if (!simulation.logisticsInfo?.length) {
        return <ShippingContentError />;
    }

    const methods = simulation.logisticsInfo.reduce<Sla[]>((initial, logistic) => {
          return [...initial, ...logistic.slas];
    }, []);

    if (!methods.length) {
        return <ShippingContentError />;
    }

    const handleShippingTime = (estimate: string) => {
        const [, time, type] = estimate.split(/(\d+)/);
    
        if (type === "bd") return `${time} dias úteis`;
        if (type === "d") return `${time} dias`;
        if (type === "h") return `${time} horas`;
    };

    return(
        <ul class="p-2">
            {methods.map((method) => (
                <li class="flex justify-between items-center py-2 border-[#e4e4e4] not-first-child:border-t-1">
                    <Text variant="body" class="text-button">
                        receba em até{" "}
                        <span class="font-semibold block">
                        {handleShippingTime(method.shippingEstimate)}*
                        </span>
                    </Text>
                    <Text variant="body" class="text-button text-center">
                        {method.name}
                    </Text>
                    <Text variant="body" class="text-base font-semibold text-right">
                        {method.price === 0 ? "Grátis" : (
                        formatPrice(method.price / 100, currencyCode!, locale)
                        )}
                    </Text>
                </li>
            ))}
        </ul>
    )
}

function ShippingSimulation({ items }: Props) {

    const postalCode = useSignal("");
    const loading = useSignal(false)
    const simulateResult = useSignal<SimulationOrderForm | null>(null)

    const { simulate } = useCart()

    const handleSimulation = useCallback(() => {
        const simulationData = {
            items: items,
            postalCode: postalCode.value,
            country: "BRA",
        }

        if(postalCode.value.length == 8){
            loading.value = true 
            simulate(simulationData)
            .then((result) => {
               simulateResult.value = result
               loading.value = false
            })
        }

    }, []);
    
    return(
        <>
            <Text>Consulte o frete</Text>
            <div>
                <form 
                    class="flex"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSimulation();
                    }}
                >
                    <Input 
                        as="input" 
                        type="text" 
                        variant="input" 
                        class="w-full" 
                        placeholder="Digite seu cep"
                        onChange={(e: { currentTarget: { value: string; }; }) => {
                            postalCode.value = e.currentTarget.value

                        }}
                        value={postalCode.value}
                        maxlength={8}
                    ></Input>
                    <Button 
                        class="ml-[-5px]" 
                        type="submit" 
                        loading={loading.value}
                    >
                        OK
                    </Button>
                </form>
                
            </div>
            <div>             
                {
                    simulateResult.value && <div>
                        <ShippingContent simulation={simulateResult.value} />
                    </div>
                }

            </div>
        </>
    )
}

export default ShippingSimulation;