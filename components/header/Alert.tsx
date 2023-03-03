import Carousel from "$store/components/ui/Carousel.tsx";
import Text from "$store/components/ui/Text.tsx";

const messages = [
  "Parcelamento em até 10x no cartão",
  "Devolução Garantida",
  "Entrega para todo Brasil",
  "Pagamento por Pix",
];

export interface Props {
  alerts: string[];
}

function Alert({ alerts = messages }: Props) {
  return (
    <div class="flex justify-center bg-badge text-sm text-white">
      <Carousel class="pt-10 w-[340px] sm:w-[500px]" animationDuration={4}>
        {alerts.map((alert) => (
          <Text
            class="flex justify-center items-center w-[340px] sm:w-[500px] h-full"
            variant="caption"
            tone="default-inverse"
          >
            {alert}
          </Text>
        ))}
      </Carousel>
    </div>
  );
}

export default Alert;
