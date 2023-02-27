interface Props {
  size?: number;
}

function Spinner({ size = 20 }: Props) {
  return (
    <div
      style={{
        verticalAlign: "-0.125em",
        border: "0.125em solid",
        borderRightColor: "transparent",
        width: size,
        height: size,
      }}
      class="animate-spin inline-block border-2 rounded-full"
      role="status"
    >
      <span class="hidden">Carregando...</span>
    </div>
  );
}

export default Spinner;
