import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";

interface Totals {
  id: string;
  name: string;
  value: number;
}

function FreeShippingBar() {
  const { cart } = useCart();

  const valueForFreeShipping = 100;
  const total = cart.value?.totalizers.find((item) => item.id === "Items");

  if (!total) return null;

  const progress = (total?.value / 100 / valueForFreeShipping) * 100;

  return (
    <>
      <div className="pt-4 mx-4">
        <div className="mb-2 text-[#1A7346]">
          <img
            className="mr-2 inline-block"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjEwMTU2MiAwLjk5OTYwOUMwLjEwMTU2MiAwLjUwMjU1MyAwLjUwNDUwNiAwLjA5OTYwOTQgMS4wMDE1NiAwLjA5OTYwOTRIMTIuMDAxNkMxMi40OTg2IDAuMDk5NjA5NCAxMi45MDE2IDAuNTAyNTUzIDEyLjkwMTYgMC45OTk2MDlWMS4wOTk2MUgxNy4wMDE2QzE3LjMxNzcgMS4wOTk2MSAxNy42MTA3IDEuMjY1NDggMTcuNzczMyAxLjUzNjU2TDIwLjc3MzMgNi41MzY1NkMyMC44NTcyIDYuNjc2NDQgMjAuOTAxNiA2LjgzNjQ5IDIwLjkwMTYgNi45OTk2MVYxMi45OTk2QzIwLjkwMTYgMTMuNDk2NyAyMC40OTg2IDEzLjg5OTYgMjAuMDAxNiAxMy44OTk2SDE4Ljc1OTJDMTguMzgwNSAxNS4wNjA3IDE3LjI4OSAxNS44OTk2IDE2LjAwMTYgMTUuODk5NkMxNC43MTQxIDE1Ljg5OTYgMTMuNjIyNiAxNS4wNjA3IDEzLjI0MzkgMTMuODk5Nkg4Ljc1OTJDOC4zODA1MiAxNS4wNjA3IDcuMjg5MDIgMTUuODk5NiA2LjAwMTU2IDE1Ljg5OTZDNC43MTQxMSAxNS44OTk2IDMuNjIyNiAxNS4wNjA3IDMuMjQzOTMgMTMuODk5NkgyLjAwMTU2QzEuNTA0NTEgMTMuODk5NiAxLjEwMTU2IDEzLjQ5NjcgMS4xMDE1NiAxMi45OTk2VjguOTk5NjFDMS4xMDE1NiA4LjUwMjU1IDEuNTA0NTEgOC4wOTk2MSAyLjAwMTU2IDguMDk5NjFDMi40OTg2MiA4LjA5OTYxIDIuOTAxNTYgOC41MDI1NSAyLjkwMTU2IDguOTk5NjFWMTIuMDk5NkgzLjI0MzkzQzMuNjIyNiAxMC45Mzg2IDQuNzE0MTEgMTAuMDk5NiA2LjAwMTU2IDEwLjA5OTZDNy4yODkwMiAxMC4wOTk2IDguMzgwNTIgMTAuOTM4NiA4Ljc1OTIgMTIuMDk5NkgxMS4xMDE2VjEuODk5NjFIMS4wMDE1NkMwLjUwNDUwNiAxLjg5OTYxIDAuMTAxNTYyIDEuNDk2NjcgMC4xMDE1NjIgMC45OTk2MDlaTTEyLjkwMTYgMi44OTk2MVY2LjA5OTYxSDE4LjQxMkwxNi40OTIgMi44OTk2MUgxMi45MDE2Wk0xOS4xMDE2IDcuODk5NjFIMTIuOTAxNlYxMi4wOTk2SDEzLjI0MzlDMTMuNjIyNiAxMC45Mzg2IDE0LjcxNDEgMTAuMDk5NiAxNi4wMDE2IDEwLjA5OTZDMTcuMjg5IDEwLjA5OTYgMTguMzgwNSAxMC45Mzg2IDE4Ljc1OTIgMTIuMDk5NkgxOS4xMDE2VjcuODk5NjFaTTEuMTAxNTYgNC45OTk2MUMxLjEwMTU2IDQuNTAyNTUgMS41MDQ1MSA0LjA5OTYxIDIuMDAxNTYgNC4wOTk2MUg2LjAwMTU2QzYuNDk4NjIgNC4wOTk2MSA2LjkwMTU2IDQuNTAyNTUgNi45MDE1NiA0Ljk5OTYxQzYuOTAxNTYgNS40OTY2NyA2LjQ5ODYyIDUuODk5NjEgNi4wMDE1NiA1Ljg5OTYxSDIuMDAxNTZDMS41MDQ1MSA1Ljg5OTYxIDEuMTAxNTYgNS40OTY2NyAxLjEwMTU2IDQuOTk5NjFaTTYuMDAxNTYgMTEuODk5NkM1LjM5NDA1IDExLjg5OTYgNC45MDE1NiAxMi4zOTIxIDQuOTAxNTYgMTIuOTk5NkM0LjkwMTU2IDEzLjYwNzEgNS4zOTQwNSAxNC4wOTk2IDYuMDAxNTYgMTQuMDk5NkM2LjYwOTA4IDE0LjA5OTYgNy4xMDE1NiAxMy42MDcxIDcuMTAxNTYgMTIuOTk5NkM3LjEwMTU2IDEyLjM5MjEgNi42MDkwOCAxMS44OTk2IDYuMDAxNTYgMTEuODk5NlpNMTYuMDAxNiAxMS44OTk2QzE1LjM5NCAxMS44OTk2IDE0LjkwMTYgMTIuMzkyMSAxNC45MDE2IDEyLjk5OTZDMTQuOTAxNiAxMy42MDcxIDE1LjM5NCAxNC4wOTk2IDE2LjAwMTYgMTQuMDk5NkMxNi42MDkxIDE0LjA5OTYgMTcuMTAxNiAxMy42MDcxIDE3LjEwMTYgMTIuOTk5NkMxNy4xMDE2IDEyLjM5MjEgMTYuNjA5MSAxMS44OTk2IDE2LjAwMTYgMTEuODk5NloiIGZpbGw9IiMxQTczNDYiLz4KPC9zdmc+Cg=="
          />
          {progress < 100
            ? `Faltam R$ ${
              formatPrice(
                valueForFreeShipping - total?.value / 100,
              )
            } para o frete grátis`
            : "Parabéns! Você tem frete grátis"}
        </div>
        <div
          className="bg-[#D4DBD7] h-2.5 rounded-full"
          style={{ width: `100%` }}
        >
          <div
            className="max-w-full bg-[#1A7346] h-2.5 rounded-full after:content-[''] after:h-[10px] after:w-[10px] after:ml-0.5 after:bg-[#FFFFFF] after:block after:rounded-full after:float-right block"
            style={{ width: `${progress}%` }}
          >
          </div>
        </div>
      </div>
    </>
  );
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export default FreeShippingBar;
