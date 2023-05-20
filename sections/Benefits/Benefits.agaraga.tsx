import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title?: string;
  description?: string;
  benefits?: Array<BenefitProps>;
}

export interface BenefitProps {
  logoHref?: string;
  title?: string;
  description?: string;
}

function Benefit({
  logoHref = "",
  title = "",
  description = "",
}: BenefitProps) {
  return (
    <div className="bg-primary flex flex-col items-center p-6 mx-4 my-3 lg:w-72">
      <Image width={30} height={30} src={logoHref} />
      <h3 className="mt-3 text-base-100 text-xl">{title}</h3>
      <p className="mt-2 hidden sm:block text-base-100 text-sm">
        {description}
      </p>
    </div>
  );
}

function Benefits({ title = "", description = "", benefits = [] }: Props) {
  return (
    <section className="py-10 px-12 bg-base-100">
      <h2 className="text-base-content text-center text-4xl mb-2">{title}</h2>
      <p className="text-neutral text-center text-2xl mb-7">{description}</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto bg-base-100">
          {benefits?.map((benefit) => (
            <Benefit key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
