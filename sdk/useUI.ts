import { signal } from "@preact/signals";

const displayCart = signal(false);
const displayMenu = signal(false);

const state = {
  displayCart,
  displayMenu,
};

export const useUI = () => state;
