import { AppProps } from "$fresh/server.ts";
import GlobalTags from "deco-sites/fashion/components/GlobalTags.tsx";
import DesignSystem from "deco-sites/fashion/sections/DesignSystem.tsx";

function App(props: AppProps) {
  return (
    <>
      <DesignSystem />

      {/* Include fonts, icons and more */}
      <GlobalTags />

      {/* Rest of Preact tree */}
      <props.Component />
    </>
  );
}

export default App;
