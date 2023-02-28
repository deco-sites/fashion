import Slider from "$store/components/ui/Slider.tsx";
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
    <div class="hidden md:(flex justify-center) bg-decorative-two text-sm text-white">
      <Slider class="pt-10 w-[340px] sm:w-[500px]">
        {alerts.map((alert) => (
          <Text
            class="flex justify-center items-center w-[340px] sm:w-[500px] h-full"
            variant="caption-regular"
            tone="interactive-default"
          >
            {alert}
          </Text>
        ))}
      </Slider>
    </div>
  );
}

export default Alert;
