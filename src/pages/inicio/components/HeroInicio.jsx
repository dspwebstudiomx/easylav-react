import Hero from '../../../components/hero/Hero'
import ButtonContainer from '../../../components/containers/ButtonContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import image from '../../../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-1920.jpg'
import Container from '../../../components/containers/Container'

const HeroInicio = () => {
  return (
    <Hero backgroundImage={image} textColor={'text-light'} opacity={'opacity-45'} opacityColor={'bg-dark'} height={'2xl:h-[60vh]'} titleSection={'inicio'} imageAlt='canasta de ropa verde con ropa sucia de color con fondo blanco'  >
      <Container className={'items-start w-[80vw]'}>
        <h1 className='hidden'>en Easylav uu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto</h1>
        {/* <h1 className='hidden text-5xl font-extrabold uppercase'><span className='text-primary'>Easy</span><span className='text-secondary'>lav</span></h1> */}
        <p className='text-3xl sm:text-5xl sm:w-2/3 leading-[45px] sm:leading-[60px] font-semibold'>Tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto</p>
        <ButtonContainer>
          <ButtonSecondary title={'Nuestros Servicios'} width={'w-[320px] md:w-[280px]'} href={'/#servicios'} border={'border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:border-t-secondary hover:border-l-secondary_dark'} height={'h-[80px]'} />
        </ButtonContainer>
      </Container>
    </Hero>
  )
}

export default HeroInicio