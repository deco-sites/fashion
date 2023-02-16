import { signal } from "@preact/signals";

const displayCart = signal(false);

const state = {
  displayCart,
};

export const useUI = () => state;
