import { Paragraph, TitleH3 } from 'components'
import Video from 'components/video/Video'
import { services } from 'data'

const ServicesGenerator = () => {
  return (
    <div className='grid place-content-center gap-8 w-full'>
      <ul className='grid sm:grid-cols-3 gap-20'>
        {services.map((service) => {
          return (
            <li key={service.title} id={service.idLink} className='flex flex-col gap-8 items-center justify-center'>
              <div className='mx-auto sm:w-24 md:w-44 dark:border-4 dark:border-primary '>
                <Video src={service.image} type={'video/webm'} title={service.alt} />
              </div>
              <div className='mx-auto'>
                <TitleH3 title={service.title} />
              </div>
              <Paragraph>
                {service.description}
              </Paragraph>
            </li>
          )
        })
        }
      </ul>
    </div>
  )
}

export default ServicesGenerator