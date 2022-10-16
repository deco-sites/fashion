import { Handlers, PageProps } from "$fresh/server.ts";
import { OrderForm } from "../vtexTypes.d.ts";

const ACCOUNT = "zeedog";

const wait = (t: number) =>
  new Promise((res) => {
    setTimeout(() => res(null), t);
  });

export const handler: Handlers<Props> = {
  async POST(req, ctx) {
    const headers = new Headers();
    headers.append("user-agent", "deco");
    headers.append("content-type", "application/json");
    const data = await req.formData();

    const input = data.get("list");

    const conversationalInput = {
      conversationId: "85014cf87bf527a975374567fc888631",
      accountName: ACCOUNT,
      accountPhoneNumber: "558189852268",
      userPhoneNumber: "558182552215",
      list: input,
      postalCode: "22250040",
    };

    const { orderFormId } = await fetch(
      "https://conv-cart-builder-dev.vtex.com/api/list",
      {
        method: "POST",
        body: JSON.stringify(conversationalInput),
        headers,
      },
    ).then((response) => response.json());

    await wait(2000);
    const orderForm = await fetch(
      `https://${ACCOUNT}.vtexcommercestable.com.br/api/checkout/pub/orderForm/${orderFormId}`,
    ).then((response) => response.json());

    return ctx.render({ orderForm });
  },
};

interface Props {
  orderForm?: OrderForm;
}

export default function Cart(props: PageProps<Props>) {
  const { orderForm } = props?.data ?? {};
  return (
    <div class="w-80 m-2 p-2">
      {!orderForm
        ? (
          <form method="post">
            <div>
              <label
                for="about"
                class="block text-sm font-medium text-gray-700"
              >
                Digite aqui sua lista
              </label>
              <div class="mt-1">
                <textarea
                  id="about"
                  name="list"
                  rows={3}
                  class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="ex: manteiga s/lactose, 2 garrafas de coca-cola"
                >
                </textarea>
              </div>
            </div>
            <div class="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </div>
          </form>
        )
        : (
          <div>
            <span>{`${orderForm.items.length} itens`}</span>
            <h2>Lista de compras:</h2>
            <div>
              {orderForm.items.map((item) => (
                <div class="m-1 max-w-xs rounded border p-1">
                  <div class="flex flex-row">
                    <div class="w-2/5">
                      <img src={item.imageUrl} width="150" height="150" />
                    </div>
                    <div class="flex flex-col">
                      <a
                        href={`https://zeedog.deco.page/${item.detailUrl}`}
                        class="font-bold text-blue-700 hover:underline"
                      >
                        {item.name}
                      </a>
                      <span class="text-sm">
                        <b>Quantidade:</b>
                        {item.quantity}
                      </span>
                      <span class="text-sm">
                        <b>Preço Uni.:</b>
                        {(
                          item.priceDefinition.calculatedSellingPrice / 100
                        ).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
