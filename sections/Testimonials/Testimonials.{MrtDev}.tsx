export type Testimonial = {
  logoVector?: string;
  testimonial: string;
  person: string;
  nameSurname: string;
  positionSurname: string;
};

interface TestimonialsProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

function Testimonials({ title, description, testimonials }: TestimonialsProps) {
  return (
    <div>
      <h1 className="text-4xl font-medium">{title}</h1>
      <p className="font-medium">{description}</p>
      {testimonials.map((dataTestemunial, index) => (
        <CardTestimonial key={index} dataTestemunial={dataTestemunial} />
      ))}
    </div>
  );
}

function CardTestimonial({ dataTestemunial }: { dataTestemunial: Testimonial }) {
  const { logoVector, testimonial, person, nameSurname, positionSurname } = dataTestemunial;
  return (
    <div>
      {logoVector && (
        <img
          src={logoVector}
          alt="Logo Deco"
          style={{ width: "92px", height: "31.81px" }}
        />
      )}
      <blockquote className="text-lg font-medium">
        {`"${testimonial}"`}
      </blockquote>
      <div className="flex flex-col items-center">
        {person && (
          <img
            src={person}
            alt="Person Photo"
            className="w-12 h-12 rounded-full"
          />
        )}
        <div className="ml-3 flex flex-col items-center">
          <p className="font-medium">{nameSurname}</p>
          <p className="text-sm font-medium">{positionSurname}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
