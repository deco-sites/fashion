import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GoogleTagManager from "partytown/integrations/GoogleTagManager.tsx";

const trackingId = "";

export default function App(props: AppProps) {
  return (
    <>
      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && trackingId && (
        <GoogleTagManager trackingId={trackingId} />
      )}
      <props.Component />
    </>
  );
}
