export interface Props {
  title: string;
  description: string;
  image: string;
  inputs?: Array<{
    type: "text" | "email" | "password";
    label: string;
    placeholder: string;
  }>;
}

export default function NewsletterModal ({ title = "Welcome", description = "Get 10% off on your first purchase by subscribing to our newsletter:", image, inputs }:Props) { 
  return (
    <div class="flex items-center justify-center h-screen mx-auto">
      <div class="relative max-w-[360px] lg:max-w-[800px] bg-white shadow-md drop-shadow-md">
        <div className="grid lg:grid-cols-2 w-full bg-base-100 shadow-xl">
          <section>
            <figure class="w-full h-full">
                <img src={image} className="w-full h-full object-cover" />
            </figure>
          </section>

          <div class="flex flex-col flex-1 px-0 lg:px-10">
            <div className="card-body items-start text-start pb-4 gap-4 w-full px-4">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>

            <div class="flex flex-col gap-4 px-2 items-start text-[#292929]">
              {inputs?.map((input) => (
                <div key={input.placeholder} class="form-control w-full">
                  <label class="label">
                    <span className="label-text">{input.label}</span>
                  </label>

                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    class="input input-bordered w-full"
                  />

                  {input.type === "password" && (
                    <p class="flex self-end leading-5 text-sm text-[#787878] cursor-pointer pt-2 opacity-90 hover:opacity-100">
                        Forgot your password?
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div class="flex flex-col pt-6 gap-6 items-start px-4 w-full pb-4">
                <div class="flex items-center gap-2 w-full">
                    <input type="checkbox" checked={true} className="checkbox" />
                    <span class="flex items-center gap-1">
                      I accept the 
                      <p class="underline">terms</p>
                    </span>
                </div>

                <button className="btn btn-wide w-full">
                    <span>Button</span>
                </button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
