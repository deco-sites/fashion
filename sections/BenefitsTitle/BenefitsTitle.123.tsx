export interface props {
  title: string;
  description: string;
  itemTitle: string;
  itemDescription: string;
}

function BenefitsTitle(
  { title, description, itemTitle, itemDescription }: props,
) {
  return (
    <>
      <div class="row container flex flex-col items-center text-center px-5">
        <div class="text-center">
          <h1 class="text-4xl">Benefits title</h1>
          <span class="text-lg">description benefits</span>
        </div>

        <div class="grid grid-cols-4 gap-4 divide-x-2">
          <div class="flex items-center justify-start gap-2">
            <div>
            </div>
            <div>
              <h3>Title item</h3>
              <p>description of the item</p>
            </div>
          </div>

          <div class="flex items-center justify-start gap-2">
            <div>
              <img></img>
            </div>
            <div>
              <h3>Title item</h3>
              <p>description of the item</p>
            </div>
          </div>

          <div class="flex items-center justify-start gap-2">
            <div></div>
            <div>
              <h3>Title item</h3>
              <p>description of the item</p>
            </div>
          </div>

          <div class="flex items-center justify-start gap-2">
            <div></div>
            <div>
              <h3>Title item</h3>
              <p>description of the item</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BenefitsTitle;
