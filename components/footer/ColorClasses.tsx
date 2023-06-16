export interface Layout {
  backgroundColor?:
    | "Primary"
    | "Secondary"
    | "Accent"
    | "Base 100"
    | "Base 100 inverted";
  variation?:
    | "Variation 1"
    | "Variation 2"
    | "Variation 3"
    | "Variation 4"
    | "Variation 5";
  hide?: {
    logo?: boolean;
    newsletter?: boolean;
    sectionLinks?: boolean;
    socialLinks?: boolean;
    paymentMethods?: boolean;
    mobileApps?: boolean;
    regionOptions?: boolean;
    extraLinks?: boolean;
    backToTheTop?: boolean;
  };
}

export default function colorClasses(layout: Layout) {
  switch (layout?.backgroundColor) {
    case "Primary":
      return "bg-primary text-primary-content";
    case "Secondary":
      return "bg-secondary text-secondary-content";
    case "Accent":
      return "bg-accent text-accent-content";
    case "Base 100":
      return "bg-base-100 text-base-content";
    case "Base 100 inverted":
      return "bg-base-content text-base-100";
    default:
      return "bg-primary text-primary-content";
  }
}
