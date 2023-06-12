export default function colorClasses(layout) {
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
