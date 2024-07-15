import Hero from '../../../components/hero/Hero'
import ButtonContainer from '../../../components/containers/ButtonContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import image from '../../../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-1920.jpg'
import Container from '../../../components/containers/Container'

const HeroInicio = () => {
  return (
    <Hero backgroundImage={image} textColor={'text-light'} opacity={'opacity-25'} opacityColor={'bg-dark'}>
      <Container>
        <h1 className='text-5xl font-semibold'><span className='text-primary'>Easy</span><span className='text-secondary'>lav</span></h1>
        <p className='text-2xl'>Tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto</p>
        <ButtonContainer>
          <ButtonSecondary title={'Nuestros Servicios'} width={'w-[320px] md:w-[280px]'} href={'/#servicios'} />
        </ButtonContainer>
      </Container>
    </Hero>
  )
}

export default HeroInicio