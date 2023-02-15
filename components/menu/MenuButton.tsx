import { useUI } from "../../sdk/useUI.ts";
import Icon from "../ui/Icon.tsx";

function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <button
      aria-label="open menu"
      class="flex items-center justify-center h-12 w-12"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon id="Bars3" className="w-8 h-8" />
    </button>
  );
}

export default MenuButton;
