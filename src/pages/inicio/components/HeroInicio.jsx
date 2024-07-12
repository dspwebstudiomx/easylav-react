import Hero from '../../../components/hero/Hero'
import ButtonContainer from '../../../components/containers/ButtonContainer'
import ButtonSecondary from '../../../components/buttons/ButtonSecondary'
import image from '../../../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-1920.jpg'

const HeroInicio = () => {
  return (
    <Hero backgroundImage={image} textColor={'text-light'} opacity={'opacity-25'} opacityColor={'bg-dark'}>
      <h1 className='text-5xl font-semibold'><span className='text-primary'>Easy</span><span className='text-secondary'>lav</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni rem voluptatum a explicabo voluptate accusantium ipsam mollitia distinctio nam! Temporibus consequuntur saepe, rerum debitis est molestias. Voluptate, asperiores consequuntur!</p>
      <ButtonContainer>
        <ButtonSecondary title={'Nuestros Servicios'} width={'w-[320px] md:w-[280px]'} href={'/#servicios'} />
      </ButtonContainer>
    </Hero>
  )
}

export default HeroInicio