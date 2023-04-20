import { AppProps } from "$fresh/server.ts";
import GlobalTags from "deco-sites/fashion/components/GlobalTags.tsx";
import DesignSystem from "deco-sites/fashion/sections/DesignSystem.tsx";

function App(props: AppProps) {
  return (
    <>
      {/* Includes global Design System so you can test sections with default tokens. You can change tokens on deco's admin */}
      <DesignSystem />

      {/* Include fonts, icons and more */}
      <GlobalTags />

      {/* Rest of Preact tree */}
      <props.Component />
    </>
  );
}

export default App;
