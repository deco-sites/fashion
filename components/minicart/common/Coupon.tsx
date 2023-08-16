import Button from "$store/components/ui/Button.tsx";
import { useState } from "preact/hooks";

export interface Props {
  coupon?: string;
  onAddCoupon: (text: string) => Promise<void>;
}

function Coupon({ coupon, onAddCoupon }: Props) {
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);

  return (
    <div class="flex justify-between items-center px-4">
      <span class="text-sm">Cupom de desconto</span>
      {display
        ? (
          <form
            class="join"
            onSubmit={async (e) => {
              e.preventDefault();
              const { currentTarget: { elements } } = e;

              const input = elements.namedItem("coupon") as HTMLInputElement;
              const text = input.value;

              if (!text) return;

              try {
                setLoading(true);
                await onAddCoupon(text);
                setDisplay(false);
              } finally {
                setLoading(false);
              }
            }}
          >
            <input
              name="coupon"
              class="input join-item"
              type="text"
              value={coupon ?? ""}
              placeholder={"Cupom"}
            />
            <Button
              class="join-item"
              type="submit"
              htmlFor="coupon"
              loading={loading}
            >
              Ok
            </Button>
          </form>
        )
        : (
          <Button
            class="btn-ghost underline font-normal"
            onClick={() => setDisplay(true)}
          >
            {coupon || "Adicionar"}
          </Button>
        )}
    </div>
  );
}

export default Coupon;
