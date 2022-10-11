export default function Spinner() {
  return (
    <div
      style={{
        verticalAlign: "-0.125em",
        border: "0.125em solid",
        borderRightColor: "transparent",
      }}
      class="animate-spin inline-block w-4 h-4 border-2 rounded-full"
      role="status"
    >
      <span class="hidden">Carregando...</span>
    </div>
  );
}
