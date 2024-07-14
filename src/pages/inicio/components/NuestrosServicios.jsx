
import imageService1 from '../../../assets/images/gif/lavadero.gif'
import imageService2 from '../../../assets/images/gif/lavar-la-ropa.gif'
import imageService3 from '../../../assets/images/gif/planchar.gif'
import Section from '../../../components/templates/Section'
import Container from '../../../components/containers/Container'
import ButtonContainer from '../../../components/containers/ButtonContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import TitleH2 from '../../../components/title/TitleH2'

const services = [
  {
    id: 1,
    title: 'Lavado Regular',
    description: 'Confía en nosotros para mantener tus prendas limpias y frescas semana tras semana. Utilizamos técnicas avanzadas para eliminar las manchas y preservar la calidad de tus telas.',
    image: imageService1
  },
  {
    id: 2,
    title: 'Lavado Especializado',
    description: '¿Tienes prendas delicadas o difíciles de limpiar? Nuestro servicio especializado está diseñado para manejar incluso los textiles más sensibles, asegurando resultados excepcionales',
    image: imageService2
  },
  {
    id: 3,
    title: 'Planchado y Doblez',
    description: 'El toque final perfecto para tus prendas. Nuestro servicio de planchado garantiza que cada artículo luzca impecable y listo para usar.',
    image: imageService3
  },
]

const NuestrosServicios = () => {
  return (
    <Section id={'servicios'}>
      <Container >
        <div className='grid place-content-center'>
          <TitleH2 title='Nuestros Servicios' />
        </div>
        <div className='grid place-content-center gap-8'>
          <ul className='grid sm:grid-cols-3 gap-20'>
            {services.map((service) => {
              return (
                <li key={service.id} className='flex flex-col gap-8 items-center justify-center'>
                  <img src={service.image} alt="alt" width={210} className='mx-auto' />
                  <h3 className='text-3xl sm:text-2xl text-center font-semibold'>{service.title}</h3>
                  <p className='w-3/4 sm:w-full mx-auto text-pretty text-lg sm:text-xl'>{service.description}</p>
                </li>
              )
            })
            }
          </ul>
          <ButtonContainer position={'justify-center'} distance={'mt-16'}>
            <ButtonSecondary title={'Conoce nuestras Sucursales'} href={'/sucursales'} width={'w-[320px] md:w-[380px] xl:w-[340px]'} border={'border-primary border-4'} />
          </ButtonContainer>
        </div>
      </Container>

    </Section>
  )
}

export default NuestrosServicios