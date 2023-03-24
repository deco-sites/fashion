import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import { formatPrice } from "$store/sdk/format.ts";

import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts"
import { SimulationData } from "deco-sites/std/commerce/vtex/types.ts"
import { createClient } from "deco-sites/std/commerce/vtex/client.ts";
import { fetchAPI } from "deco-sites/std/utils/fetchAPI.ts"

import { useSignal, signal } from "@preact/signals";
import { useCallback } from "preact/hooks";

import type {
    OrderForm,
    SimulationData,
    SimulationOrderForm,
    SKU
} from "deco-sites/std/commerce/vtex/types.ts";

export interface Props {
    item: SKU;
}

export interface Props {
    simulation?: SimulationOrderForm;
    simulationType: ShippingTypes;
}

function ShippingContentError(params:type) {
    return(
        <div class="p-2">
            <span>CEP inválido</span>
        </div>
    )
}

function  ShippingContentSuccess(params:type) {
    
}

function ShippingContent({ simulation }:{ simulation: SimulationOrderForm }) {
    const { cart } = useCart();
    const locale = cart.value?.clientPreferencesData.locale;
    const currencyCode = cart.value?.storePreferencesData.currencyCode;

    if (!simulation.logisticsInfo?.length) {
        return <ShippingContentError />;
    }

    const methods = simulation.logisticsInfo.reduce<Sla[]>(
        (initial, logistic) => {
          return [...initial, ...logistic.slas];
        }, [],);

    if (!methods?.length) {
        return <SimulationError type="delivery" />;
    }

    const handleShippingTime = (estimate: string) => {
        const [, time, type] = estimate.split(/(\d+)/);
    
        if (type === "bd") return `${time} dias úteis`;
        if (type === "d") return `${time} dias`;
        if (type === "h") return `${time} horas`;
    };

    console.log(simulation.logisticsInfo)

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

    const {simulation} = useCart()

    const handleSimulation = useCallback(() => {
        const {simulateShipping} = useCart()
        const simulationData = {
            items: items,
            postalCode: postalCode.value,
            country: "BRA",
        }

        if(postalCode.value.length == 8){
            loading.value = true 
            simulateShipping(simulationData)
            .then(() => {loading.value = false})
        }else{
            simulation.value = "error"
        }
    }, []);
    
    return(
        <div>
            <Text>Consulte o frete</Text>
            <div>
                <form 
                    class="flex"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSimulation();
                    }}
                >
                    <Button 
                        as="input" 
                        type="text" 
                        variant="input" 
                        class="w-full" 
                        placeholder="Digite seu cep"
                        onChange={(e) => {
                            postalCode.value = e.currentTarget.value
                            simulation.value = undefined
                        }}
                        value={postalCode.value}
                        maxlength={8}
                        minlenth={8}
                    ></Button>
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
                    simulation.value && <div>
                        <ShippingContent simulation={simulation.value} />
                    </div>
                }

            </div>
        </div>
    )
}

export default ShippingSimulation;