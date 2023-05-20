import { useState } from "preact/compat";
import type { JSX } from "preact";
import Icon from "$store/components/ui/Icon.tsx";

type Props = JSX.IntrinsicElements["input"] & {
  initialValue?: number;
  wide?: boolean;
};

const inputStyles = {
  wide: "w-full",
  default: "max-w-[102px]",
};
const InputNumber = ({ initialValue, ...props }: Props) => {
  const [value, setValue] = useState(initialValue ?? 0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div
      className={`flex items-center border h-10 ${
        inputStyles[
          props.wide ? "wide" : "default"
        ]
      }`}
    >
      <button
        className="px-2 py-1"
        onClick={decrement}
      >
        <Icon id="Minus" width={15} height={15} strokeWidth={2} />
      </button>
      <input
        type="number"
        className="w-full text-center"
        value={value}
        readonly
        {...props}
      />
      <button
        className="px-2 py-1"
        onClick={increment}
      >
        <Icon id="Plus" width={15} height={15} strokeWidth={2} />
      </button>
    </div>
  );
};

export default InputNumber;
