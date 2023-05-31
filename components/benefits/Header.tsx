export default function Header(
  props: { title:string, description:string },
) {
  return (
    <>
      {
        props.title || props.description ? (
          <div class="flex flex-col gap-2 text-center ">
            {
              props.title &&
                <h1 class="text-2xl lg:text-4xl leading-8 lg:leading-10 text-base-content">
                    {props.title}
                </h1>
            }
            {
              props.description &&
                <h2 class="lg:text-2xl leading-6 lg:leading-8 text-neutral">
                    {props.description}
                </h2>
            }
          </div>
        ) : (<> </>)
      }
    </>
  );
}
