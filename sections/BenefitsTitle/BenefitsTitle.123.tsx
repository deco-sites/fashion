export interface props {
  title: string;
  description: string;
  itemTitle: string;
  itemDescription: string;
  imageSrc: string;
}

function BenefitsTitle(
  { title="Benefits title", description="Description of benefits", itemTitle="Benefit title", itemDescription="Benefit description", imageSrc="/vector.png"}: props,
) {
  return (
    <>
      <div class="container flex flex-col text-center">
        <div class="text-center m-10">
          <h1 class="text-4xl">{title}</h1>
          <span class="text-lg">{description}</span>
        </div>

        <div class="flex flex-col gap-4 divide-y-2 text-start justify-center w-10/12 sm:flex-row sm:divide-x-2 sm:divide-y-0 sm:w-full ">
          <div class="flex items-start justify-start gap-2 px-5 py-2 sm:py-0">
            <div>
              <img src={imageSrc}></img>
            </div>
            <div>
              <h3>{itemTitle}</h3>
              <p>{itemDescription}</p>
            </div>
          </div>

          <div class="flex items-start justify-start gap-2 text-start px-5 py-2 sm:py-0">
            <div>
              <img src={imageSrc}></img>
            </div>
            <div>
              <h3>{itemTitle}</h3>
              <p>{itemDescription}</p>
            </div>
          </div>

          <div class="flex items-start justify-start gap-2 text-start px-5 py-2 sm:py-0">
            <div>
              <img src={imageSrc}></img>
            </div>
            <div>
              <h3>{itemTitle}</h3>
              <p>{itemDescription}</p>
            </div>
          </div>

          <div class="flex items-start justify-start gap-2 text-start px-5 py-2 sm:py-0">
            <div>
              <img src={imageSrc}></img>
            </div>
            <div>
              <h3>{itemTitle}</h3>
              <p>{itemDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BenefitsTitle;
