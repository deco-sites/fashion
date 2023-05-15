import { useState } from "preact/hooks";

export default function Counter() {
  const [a, b] = useState(0);
  return (
    <button class="bg-red-900 text-white p-4" onClick={() => b(a + 1)}>{a}</button>
  );
}
