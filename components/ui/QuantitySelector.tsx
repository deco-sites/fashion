import Button from "../ui/Button.tsx";

interface Props {
  quantity: number;
  disabled?: boolean;
  onChange?: (quantity: number) => void;
}

const QUANTITY_MAX_VALUE = 100;

const isHTMLInputElement = (e: EventTarget | null): e is HTMLInputElement =>
  // deno-lint-ignore no-explicit-any
  typeof (e as any)?.value !== "undefined";

// Remove default browser behavior: https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp
// TODO: Figure out how to add it via twind config.
const innerStyle = `
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
`;

function QuantitySelector({ onChange, quantity, disabled }: Props) {
  const decrement = () => onChange?.(Math.max(0, quantity - 1));

  const increment = () =>
    onChange?.(Math.min(quantity + 1, QUANTITY_MAX_VALUE));

  return (
    <div class="flex border border-gray-300">
      <Button variant="tertiary" onClick={decrement} disabled={disabled}>
        -
      </Button>
      <style dangerouslySetInnerHTML={{ __html: innerStyle }} />
      <input
        class="text-center outline-none max-w-[2rem] disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-not-allowed"
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        max={QUANTITY_MAX_VALUE}
        min={1}
        value={quantity}
        onBlur={(e) => {
          if (!isHTMLInputElement(e.target)) {
            return;
          }

          const value = e.target.valueAsNumber;

          if (typeof value !== "number" || !Number.isInteger(value)) {
            return;
          }

          onChange?.(value);
        }}
        disabled={disabled}
      />
      <Button variant="tertiary" onClick={increment} disabled={disabled}>
        +
      </Button>
    </div>
  );
}

export default QuantitySelector;
