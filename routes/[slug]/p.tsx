import {
  createLiveHandler,
  LivePage,
} from "$live/live.tsx";

export const handler = createLiveHandler({
  template: "/:slug/p",
});

export default LivePage;
