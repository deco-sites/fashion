interface Props {
  // html string
  // detalhes: string;
  description: string;
}

export default function ProductInformation({ description }: Props) {
  const sections = [
    // {
    // label: "Detalhes",
    // content: <div dangerouslySetInnerHTML={{ __html: detalhes }}></div>,
    // },
    {
      label: "Descrição",
      content: <p>{description}</p>,
    },
    // {
    //   label: "Troca fácil",
    //   content: (
    //     <div class="">
    //       <p class="text-gray-800 mb-2">
    //         Para trocar é muito fácil e rápido. Escolha entre trocar normalmente
    //         {" "}
    //         <b>via correios</b>, ou troque
    //         <b>sem precisar sair de casa</b>, e você receberá um vale presente
    //         no valor referente à sua compra para realizar sua troca.
    //       </p>
    //       <p>
    //         <a
    //           href="https://troquefacil.example.com/"
    //           class="underline text-black"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Clique aqui
    //         </a>{" "}
    //         e realize a troca.
    //       </p>
    //     </div>
    //   ),
    // },
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
      {/* <div class="border-b border-gray-200 flex justify-between items-center p-4"> */}
      {/* <span className="font-bold">Compartilhe</span> */}
      {/* <img */}
      {/* width="175" */}
      {/* alt="image" */}
      {/* src="https://user-images.githubusercontent.com/18706156/194571172-d210aa9d-b932-48d6-b3ec-c54594d44d1a.png" */}
      {/* ></img> */}
      {/* </div> */}
    </div>
  );
}
