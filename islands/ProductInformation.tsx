interface Props {
  description: string;
}

export default function ProductInformation({ description }: Props) {
  const sections = [
    {
      label: "Descrição",
      content: <p>{description}</p>,
    },
  ];
  return (
    <div className="w-full border-b border-t border-solid border-black mt-8">
      {sections.map(({ label, content }) => (
        <div class="border-b border-gray-200" key={label}>
          <details class="w-full p-4 px-2 cursor-pointer flex flex-row justify-between">
            <summary>
              <span class="font-bold">{label}</span>
            </summary>
            <p class="p-4 pt-4 pb-2 text-sm text-gray-500">
              {content}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
}
