import {Testimonial} from './typeTestimonial.ts';
import CardTestimonial from './cardTestimonial.tsx';

export interface Props {
  description: string,
  testimonials: Testimonial[], 
}

function Testimonials({ description, testimonials}: Props) {
  return(
    <div>
      <h1>Testimonials</h1>
      <p>{description}</p>
      {testimonials.map(({
        content,
        photo,
        name,
        company,
      }: Testimonial, index: number) => (
        <CardTestimonial
          key={index}
          content={content}
          photo={photo}
          name={name}
          company={company}
         />
      ))}
    </div>
  )
}

export default Testimonials;