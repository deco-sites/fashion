import Button from "../ui/Button.tsx";

interface Props {
  quantity: number;
  disabled?: boolean;
  loading?: boolean;
  onChange?: (quantity: number) => void;
}

const QUANTITY_MAX_VALUE = 100;

function QuantitySelector({ onChange, quantity, disabled, loading }: Props) {
  const decrement = () => onChange?.(Math.max(0, quantity - 1));

  const increment = () =>
    onChange?.(Math.min(quantity + 1, QUANTITY_MAX_VALUE));

  return (
    <div class="dui-form-control">
      <div class="dui-input-group">
        <Button
          class="dui-btn-square dui-btn-outline"
          onClick={decrement}
          disabled={disabled}
          loading={loading}
        >
          -
        </Button>
        <input
          class="dui-input border-base-content border-x-0 text-center"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          max={QUANTITY_MAX_VALUE}
          min={1}
          value={quantity}
          disabled={disabled}
          onBlur={(e) => onChange?.(e.currentTarget.valueAsNumber)}
        />
        <Button
          class="dui-btn-square dui-btn-outline"
          onClick={increment}
          disabled={disabled}
          loading={loading}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default QuantitySelector;
