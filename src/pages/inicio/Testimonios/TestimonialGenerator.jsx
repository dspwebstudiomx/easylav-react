import { testimonios } from '../../../data/testimonios'
import Testimonio from './Testimonio'

const TestimonialGenerator = () => {
  return (
    <div className='grid place-content-center'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 w-[100%] mx-auto'>
        {testimonios.map((testimonio) => {
          return (
            <Testimonio key={testimonio.id} testimonio={testimonio} />
          )
        })}
      </div>
    </div>
  )
}

export default TestimonialGenerator