const Line = () => {
  return <div className="w-8 h-px bg-black transition-all" />;
};

export const Hamburguer: React.FC = () => {
  return (
    <div className="flex-1 flex-col justify-between align-center w-8 h-22 bg-gray-300">
      <Line />
      <Line />
      <Line />
    </div>
  );
};
