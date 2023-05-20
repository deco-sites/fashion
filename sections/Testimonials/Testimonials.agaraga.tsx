import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  description?: string;
  testimonials?: Array<TestimonialProps>;
}

export interface TestimonialProps {
  logoImageHref?: string;
  profileImageHref?: string;
  name?: string;
  surname?: string;
  company?: string;
  position?: string;
  content?: string;
}

function Testimonial({
  logoImageHref = "",
  profileImageHref = "",
  name = "",
  surname = "",
  company = "",
  position = "",
  content = "",
}: TestimonialProps) {
  return (
    <div className="flex flex-col items-center mx-5 my-10 md:w-96">
      <Image width={128} height={72} src={logoImageHref} />
      <p className="my-9 text-base-content text-center text-xl">
        {`"${content}"`}
      </p>
      <div>
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src={profileImageHref}
        />
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
              logoImageHref={testimonial.logoImageHref}
              profileImageHref={testimonial.profileImageHref}
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
