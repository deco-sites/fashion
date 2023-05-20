export type TitleItem = {
  text: string;
};

export type ContentItem = {
    input: { type: string, placeholder: string }
    button: { href: string, text: string }
    description: { text: string, link: string };
}

export interface Props {
  title: TitleItem;
  content: ContentItem;
}

function NewsLetter(
    { title = { text: "Sign up for our newsletter" }, content = { input = { type: "text", placeholder: "Enter your email" }, button = { href: "#", text: "Subscribe" }, description = { text: "By subscribing you agree to with our ", link: "Privacy Policy." } } }: Props,
) {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="flex flex-col">
        <div class="hero-content text-center text-6xl">title.text</div>

        <div class="hero-content flex-col text-center">
          <div>
            <input
              class="input-bordered input input-ghost border-"
              type={content.input.type}
              placeholder={content.input.placeholder}
            />
            <button
              class="btn btn-outline rounded-none"
              href={content.button.href}
            >
              {content.button.text}
            </button>
          </div>
          <p>
            {content.description.text}{" "}
            <span class="link">{content.description.link}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
