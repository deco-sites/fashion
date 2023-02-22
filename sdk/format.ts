export const formatPrice = (
  price: number | undefined,
  currency: string,
  locale = "pt-BR",
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  if (!price) {
    return null;
  }

  return formatter.format(price);
};
