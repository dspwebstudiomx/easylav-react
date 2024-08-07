import { services } from 'data/services'

const ServicesGenerator = () => {
  return (
    <div className='grid place-content-center gap-8'>
      <ul className='grid sm:grid-cols-3 gap-20'>
        {services.map((service) => {
          return (
            <li key={service.title} id={service.idLink} className='flex flex-col gap-8 items-center justify-center'>
              <img src={service.image} alt={service.alt} width={210} className='mx-auto sm:w-24 md:w-44 dark:border-4 dark:border-primary ' title={service.alt} />
              <h3 className='text-2xl sm:text-xl md:text-2xl text-center font-semibold dark:text-primary'>{service.title}</h3>
              <p className='w-3/4 sm:w-full mx-auto text-xl text-pretty lg:text-lg sm:text-base'>{service.description}</p>
            </li>
          )
        })
        }
      </ul>
    </div>
  )
}

export default ServicesGenerator