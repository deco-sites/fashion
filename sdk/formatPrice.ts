export const priceFormatter = (currency: string) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  });

  return formatter;
};
