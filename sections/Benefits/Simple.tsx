import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "$store/components/benefits/Header.tsx";
import Benefit from "$store/components/benefits/Benefit.tsx";

export interface Props {
  title?: string;
  description?: string;
  benefits?: Array<{
    label: string;
    icon: AvailableIcons;
    description: string;
  }>;
}

export default function Benefits(
  props: Props,
) {
  const {
    title = "",
    description = "",
    benefits = [{
      icon: "Truck",
      label: "Entrega em todo Brasil",
      description: "Consulte o prazo no fechamento da compra.",
    },{
      icon: "Discount",
      label: "15% na primeira compra",
      description: "Aplicado direto na sacola de compras.",
    },{
      icon: "ArrowsPointingOut",
      label: "Devolução grátis",
      description: "Veja as condições para devolver seu produto.",
    }],
  } = props;
  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
      <Header title={title} description={description} />
      <div class="w-full flex justify-center">
        <div class="flex flex-col gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr">
          {benefits.map((benefit, index) => 
            <Benefit
              showDivider={index < benefits.length - 1}
              icon={benefit.icon}
              label={benefit.label}
              description={benefit.description}
            />
          )}
        </div>
      </div>
    </div>
  );
}
