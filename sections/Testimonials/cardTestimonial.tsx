import {Testimonial} from './typeTestimonial.ts'

function CardTestimonial(testimonial: Testimonial) {
  return(
    <div>
      <img src={testimonial.logo || "./logo-deco-testimonial.svg"} alt="logo_deco"/>
      <p>{testimonial.content}</p>
      <img src={testimonial.photo} alt={testimonial.name}/>
      <p>{testimonial.name}</p>
      <p>{testimonial.company}</p>
    </div>
  )
}

export default CardTestimonial;