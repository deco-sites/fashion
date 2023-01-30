import systemPaths from "./os/systemPaths.ts";
import systemInfo from "./os/systemInfo.ts";
const os = {
  ...systemPaths,
  ...systemInfo,
};

export default os;
