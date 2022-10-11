import { Handlers } from "$fresh/server.ts";
import { getOrCreateOrderForm } from "./items.ts";

export const handler: Handlers = {
  async GET(req) {
    const headers = new Headers();
    const orderForm = await getOrCreateOrderForm(req, headers);

    /**
     * Right now, we're passing/receiving the whole order form and using the data directly.
     *
     * We should soon come up with our own data model, mostly to reduce data sent to the client
     */
    return Response.json(orderForm, { headers });
  },
};
