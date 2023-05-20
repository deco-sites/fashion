import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  description?: string;
  testimonials?: Array<TestimonialProps>;
}

export interface TestimonialProps {
  image?: string;
  name?: string;
  surname?: string;
  company?: string;
  position?: string;
  content?: string;
}

function Testimonial({
  image = "",
  name = "",
  surname = "",
  company = "",
  position = "",
  content = "",
}: TestimonialProps) {
  return (
    <div className="flex flex-col items-center mx-5 my-10 md:w-96">
      <svg
        width="92"
        height="32"
        viewBox="0 0 93 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M79.1187 26.9477C75.6685 26.9477 75.0772 23.5419 76.1665 20.2273C77.0291 17.593 79.0721 14.823 82.1154 14.823C85.7034 14.823 86.0658 18.4556 85.021 21.6345C84.1118 24.36 82.0688 26.9477 79.1187 26.9477ZM78.0739 31.8052C84.0673 31.8052 89.425 28.4905 91.5591 22.4971C93.7844 16.1858 91.2857 9.87443 83.1136 9.87443C76.5755 9.87443 71.5803 13.9605 69.6729 19.3647C67.5387 25.4493 69.8552 31.8052 78.0739 31.8052ZM58.1862 31.8052C60.5471 31.8052 62.9547 31.305 64.6332 30.5802C65.2244 28.9462 65.269 27.3567 64.8154 25.7672C63.635 26.2207 62.001 26.6764 60.3203 26.6764C55.7786 26.6764 55.3717 23.3173 56.3254 20.4562C57.3702 17.415 60.0936 14.9629 64.4085 14.9629C65.5445 14.9629 66.6338 15.1452 67.3141 15.5542C68.4946 13.9647 69.1749 12.3752 69.3126 10.7412C68.3144 10.2877 66.6338 9.87867 64.4551 9.87867C57.3724 9.87867 51.7858 14.0113 49.7894 19.7314C47.882 25.1357 49.3359 31.8094 58.1904 31.8094L58.1862 31.8052ZM33.8034 18.7735C35.0284 16.048 36.9358 14.4606 39.4344 14.4606C41.6597 14.4606 42.0221 15.6856 41.6597 16.6393C41.1151 17.9554 39.2522 18.7735 33.8034 18.7735ZM35.7553 31.8052C38.0717 31.8052 41.3397 31.3516 44.0652 29.9889C44.5187 28.4905 44.4742 26.9922 43.974 25.4472C42.2489 26.3098 39.8414 26.8099 37.6627 26.8099C34.4392 26.8099 32.6674 25.7651 32.7141 23.1329C41.522 23.3597 46.1082 21.7702 47.6065 17.8664C49.1049 13.916 46.5172 9.87443 40.386 9.87443C33.8479 9.87443 29.0349 14.5518 27.2632 19.5915C25.4024 24.9492 26.5829 31.8052 35.7532 31.8052H35.7553ZM9.43547 31.8052C15.4755 31.8052 18.9109 29.0352 22.9059 20.5452C25.0845 15.8679 26.9474 11.2817 29.0816 6.74208L31.6247 7.56013C32.305 7.7869 32.6696 7.37787 32.3517 6.74208L29.2638 0.430743C29.0371 -0.0227917 28.5369 -0.0694168 28.219 0.068339L20.5449 2.97393C19.9091 3.20069 19.9537 3.79198 20.5894 3.97213L22.8592 4.69905C20.9985 8.92286 18.6821 15.2787 16.8192 19.2736C14.7295 23.7242 13.6868 26.8565 10.1454 26.8565C6.60406 26.8565 6.01277 24.0866 7.51113 20.1362C9.23625 15.55 12.1418 14.1872 15.4565 15.1409C16.3656 13.8693 17.0459 11.962 17.3172 10.2368C16.3635 9.96344 15.2276 9.87443 14.276 9.87443C8.91835 9.87443 3.60522 12.6444 1.42656 18.4556C-1.3879 25.9474 1.21463 31.8052 9.43335 31.8052H9.43547Z"
          fill="#292929"
        />
      </svg>
      <p className="my-9 text-base-content text-center text-xl">{`"${content}"`}</p>
      <div>
        <Image className="rounded-full" width={60} height={60} src={image} />
      </div>
      <span className="mt-4 text-lg">{`${name} ${surname}`}</span>
      <span className="text-lg">{`${position}, ${company}`}</span>
    </div>
  );
}

function Testimonials({ description = "", testimonials = [] }: Props) {
  return (
    <section className="py-10 px-12 bg-base-100">
      <h2 className="text-base-content text-center text-5xl mb-2">
        Testimonials
      </h2>
      <p className="text-neutral text-center text-lg mb-7">{description}</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto bg-base-100">
          {testimonials?.map((testimonial) => (
            <Testimonial
              key={testimonial.content}
              image={testimonial.image}
              name={testimonial.name}
              surname={testimonial.surname}
              position={testimonial.position}
              company={testimonial.company}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
