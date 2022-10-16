import { Handlers } from "$fresh/server.ts";
import { getCookies, setCookie } from "std/http/mod.ts";
import {
  OrderForm,
  VTEXCheckoutClient,
} from "../../../clients/vtex/checkout.ts";

interface AddItemInputData {
  items: [
    {
      skuId: string;
      seller: string;
      quantity: number;
      options: any;
      index: number;
      uniqueId: string;
    },
  ];
}

const ORDER_FORM_ID_COOKIE = "ofid";

// TODO: Deal with orderForms for placed orders
export const getOrCreateOrderForm = async (
  req: Request,
  nextHeaders: Headers,
): Promise<OrderForm> => {
  const checkout = new VTEXCheckoutClient();
  const cookies = getCookies(req.headers);
  const orderFormIdFromCookies = cookies[ORDER_FORM_ID_COOKIE];

  if (!orderFormIdFromCookies) {
    const orderForm = await checkout.getOrderForm();
    // TODO: Remove this in favor of in-store address selection
    // const orderForm = await checkout.setAttachments({
    //   orderFormId: orderFormId,
    //   field: "shippingData",
    //   value: {
    //     ...shippingData,
    //     selectedAddresses: [
    //       {
    //         postalCode: "22250-040",
    //         addressType: "residential",
    //       },
    //     ],
    //   },
    // });

    setCookie(nextHeaders, {
      name: ORDER_FORM_ID_COOKIE,
      value: orderForm.orderFormId,
    });
    return orderForm;
  }

  return checkout.getOrderForm(orderFormIdFromCookies);
};

export const handler: Handlers = {
  async PUT(req) {
    const checkout = new VTEXCheckoutClient();
    const headers = new Headers();
    const orderForm = await getOrCreateOrderForm(req, headers);
    const { items } = (await req.json()) as {
      items: [
        { uniqueId: string; quantity: number; id?: string; index?: number },
      ];
    };

    const cleanItems = items.map(({ id, ...rest }) => rest);

    if (cleanItems.some((item) => !item.index)) {
      const idToIndex = orderForm.items.reduce(
        (acc: Record<string, number>, item, index: number) => {
          if (acc[item.uniqueId] === undefined) {
            acc[item.uniqueId] = index;
          }
          return acc;
        },
        {} as Record<string, number>,
      );

      cleanItems.forEach((item) => {
        if (!item.index && item.uniqueId) {
          item.index = idToIndex[item.uniqueId];
        }
      });
    }
    const newOrderForm = await checkout.updateItems({
      orderFormId: orderForm.orderFormId,
      items: cleanItems,
      allowedOutdatedData: ["paymentData"],
    });

    return Response.json(newOrderForm, { headers });
  },

  async POST(req) {
    const checkout = new VTEXCheckoutClient();

    const headers = new Headers();
    // TODO: Think about validation/typing layer here. Maybe Zod it up.
    const { items } = (await req.json()) as AddItemInputData;

    const { orderFormId } = await getOrCreateOrderForm(req, headers);

    const cleanItems = items.map(
      ({ options, index, uniqueId, skuId, quantity, seller, ...rest }) => ({
        ...rest,
        id: parseInt(skuId, 10),
        quantity,
        seller,
      }),
    );

    const updatedOrderForm = await checkout.updateItems({
      orderFormId,
      items: cleanItems,
      allowedOutdatedData: ["paymentData"],
      // TODO: Get this from Segment (next iteration)
      salesChannel: "1",
    });

    return Response.json(updatedOrderForm, { headers });
  },
};
