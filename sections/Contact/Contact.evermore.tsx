export interface Props {
    title: string;
    subtitle: string;
    link: string;
  }
  export default function Contact(
    {
      title,
      subtitle,
      link,
    }: Props,
  ) {
    return (
      <div class="bg-slate-50">
        <div class="p-5 justify-center">
          <div>
            <h1 class="text-2xl font-semibold">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div class="flex flex-row gap-4">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">First name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Last name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div class="flex flex-row gap-4">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">E-mail</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Phone number</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Message</span>
            </label>
            <textarea
              class="textarea textarea-bordered h-24"
              placeholder="Type your message..."
            >
            </textarea>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">
                I accept the <a href={link}>terms</a>
              </span>
              <input type="checkbox" class="checkbox" />
            </label>
          </div>
          <button class="btn btn-wide bg-slate-900">Submit</button>
        </div>
      </div>
    );
  }