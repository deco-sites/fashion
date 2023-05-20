import { useState } from "preact/hooks";

interface Props {
  btnText: string;
  coupon: string;
}

export default function CouponCopy({ btnText, coupon }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyCoupon() {
    if (navigator.clipboard) {
     await navigator.clipboard.writeText(coupon);
    }
    setCopied(true);
  }

  return (
    <button
      className="btn px-3 rounded-none"
      onClick={() => {
        copyCoupon();
      }}
    >
      {copied ? "Copiado!" : btnText}
    </button>
  );
}
