export interface DomInspectorOptions {
  outline: string;
  backgroundColor: string;
  backgroundBlendMode: string;
  activator: {
    label: string;
    matchEvent: (event: KeyboardEvent) => boolean;
  };
  path: string;
}

export const DomInspectorActivators = {
  CmdE: {
    label: "Cmd+E or Ctrl+E",
    matchEvent: (event: KeyboardEvent) =>
      (event.ctrlKey && event.key === "e") ||
      (event.metaKey && event.key === "e"),
  },
  Backquote: {
    label: "` (backtick)",
    matchEvent: (event: KeyboardEvent) => event.code === "Backquote",
  },
};

export default class DomInspector {
  private element: HTMLElement;
  private hoveredElement?: HTMLElement;
  private options: DomInspectorOptions;
  private active = false;
  private onDeactivate? = () => {};

  constructor(
    element: HTMLElement,
    options: DomInspectorOptions = {
      outline: "1px dashed #2fd080",
      backgroundColor: "rgba(47, 208, 128, 0.33)",
      backgroundBlendMode: "multiply",
      activator: DomInspectorActivators.Backquote,
      path: "/_live/inspect",
    },
  ) {
    if (!element) {
      throw Error("Document element is required to create a a dom inspector");
    }

    this.options = options;
    this.element = element;
    element.addEventListener("keydown", this.handleKeydown, true);
    console.log(
      `InspectVSCode is available. Press ${this.options.activator.label} to activate.`,
    );
  }

  activate = (onDeactivate?: () => void) => {
    this.addEventListeners();
    this.active = true;
    this.onDeactivate = onDeactivate;
    console.log(
      "InspectVSCode activated. Hover any element and click to open it in VSCode directly. Press ESCAPE to deactivate.",
    );
  };

  deactivate = () => {
    console.log(
      `InspectVSCode deactivated. Press ${this.options.activator.label} to activate again.`,
    );

    const { element, hoveredElement } = this;

    element.removeEventListener("mouseover", this.handleMouseOver, true);
    element.removeEventListener("mouseout", this.handleMouseOut, true);
    element.removeEventListener("click", this.handleClick, true);
    element.removeEventListener("keydown", this.handleCancelKey, true);

    // Remove outline on last-selected element
    if (hoveredElement) {
      this.clean(hoveredElement);
    }

    this.active = false;
    if (this.onDeactivate) {
      this.onDeactivate();
    }
  };

  isActive = () => this.active;

  /**
   * Add event listeners for DOM-inspectorey actions
   */
  addEventListeners = () => {
    const { element } = this;

    element.addEventListener("mouseover", this.handleMouseOver, true);
    element.addEventListener("mouseout", this.handleMouseOut, true);
    element.addEventListener("click", this.handleClick, true);
    element.addEventListener("keydown", this.handleCancelKey, true);
  };

  handleKeydown = (event: KeyboardEvent) => {
    if (this.options.activator.matchEvent(event) && !this.active) {
      this.activate();
    }
  };

  handleMouseOver = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    if (
      !targetElement || targetElement === document.body ||
      targetElement.id === "inspect-vscode-button"
    ) {
      return;
    }

    this.paint(targetElement);

    // Set last selected element so it can be 'deselected' on mouseout.
    this.hoveredElement = targetElement;
  };

  handleMouseOut = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement;
    this.clean(targetElement);
  };

  handleClick = async (event: MouseEvent) => {
    event.preventDefault();
    const targetElement = event.target as HTMLElement;

    if (
      !targetElement || targetElement === document.body ||
      targetElement.id === "inspect-vscode-button"
    ) {
      return;
    }

    // Recover the style of the element
    this.clean(targetElement);
    if (!targetElement.getAttribute("style")) {
      targetElement.removeAttribute("style");
    }
    const outerHTML = targetElement.outerHTML;

    const manifestKey = this.getManifestKey(targetElement);

    const handlerPath = manifestKey
      ? this.options.path.split("/").concat(manifestKey).join("/")
      : this.options.path;

    // Send outerHTML and manifestKey to server
    const link = await fetch(handlerPath, {
      method: "POST",
      body: outerHTML,
    }).then((res) => res.text());
    // Navigate to vscode link
    window.location.href = link;

    this.deactivate();
  };

  handleCancelKey = (event: KeyboardEvent) => {
    if (event.key !== "Escape" || event.defaultPrevented) {
      return;
    }

    this.deactivate();
  };

  getManifestKey = (element: HTMLElement): string | null => {
    const manifestKey = element.dataset.manifestKey;
    if (manifestKey) {
      return manifestKey;
    }

    const parent = element.parentElement;
    if (parent) {
      return this.getManifestKey(parent);
    }

    return null;
  };

  paint = (element: HTMLElement) => {
    element.style.outline = this.options.outline;
    element.style.backgroundColor = this.options.backgroundColor;
    element.style.backgroundBlendMode = this.options.backgroundBlendMode;
  };

  clean = (element: HTMLElement) => {
    element.style.outline = "";
    element.style.backgroundColor = "";
    element.style.backgroundBlendMode = "";
  };
}
