import { useId } from "$store/sdk/useId.ts";
import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";

interface Props {
  onClose?: () => void;
  open?: boolean;
  class?: string;
  loading?: "eager" | "lazy";
  children: ComponentChildren;
  aside: ComponentChildren;
}

function Drawer(props: Props) {
  const id = useId();
  const {
    children,
    aside,
    open,
    onClose,
    class: _class = "",
    loading = "lazy",
  } = props;
  const [lazy, setLazy] = useState(loading === "lazy" && !open);

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>
      (e.key === "Escape" || e.keyCode === 27) && open && onClose?.();

    addEventListener("keydown", handler);

    return () => {
      removeEventListener("keydown", handler);
    };
  }, [open]);

  useEffect(() => setLazy(false), []);

  return (
    <div class={`drawer ${_class}`}>
      <input
        id={id}
        checked={open}
        type="checkbox"
        class="drawer-toggle"
        onChange={(e) => e.currentTarget.checked === false && onClose?.()}
      />

      <div class="drawer-content">
        {children}
      </div>

      <aside class="drawer-side z-50">
        <label for={id} class="drawer-overlay" />
        {!lazy && aside}
      </aside>
    </div>
  );
}

export default Drawer;
