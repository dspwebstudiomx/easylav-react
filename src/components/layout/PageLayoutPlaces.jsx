/*
  Page Layout Places - Template
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { BackgroundImageSection, ButtonContainer, ButtonSecondary, Contacto, Navbar, SucursalCardPerCity } from 'components'
import PropTypes from 'prop-types'
import Container from '../containers/Container'
import Footer from '../templates/footer/Footer'
import Section from '../templates/Section'
import Spacing from './Spacing'


// Estructura
const PageLayoutPlaces = ({ city, image_576, image_1024, image_1200, image_1920 }) => {

  return (
    <>
      <Navbar />
      <main id={`sucursales-${city}`} className='mt-[100px] sm:mt-[60px] xl:mt-[100px]'>
        <BackgroundImageSection
          // image_768={image_768}
          image_576={image_576}
          // image_240={image_240}
          image_1024={image_1024}
          image_1200={image_1200}
          image_1920={image_1920}
          height='h-[210px] sm:h-[300px] '
          opacity='opacity-50 hover:opacity-60'
          backgroundColor='bg-dark'
        >
          <h2 className="text-light uppercase text-3xl font-semibold tracking-wide">{city}</h2>
        </BackgroundImageSection>

        <Section id='sucursales-morelia' className={'flex flex-col gap-6'} height={'h-auto'} backgroundColor={'bg-light'}>
          <Container className={''}>
            <SucursalCardPerCity city={city} />
            <ButtonContainer position='items-center justify-center' distance='mt-16'>
              <ButtonSecondary
                title='Regresar a sucursales'
                href='/sucursales'
                distance=''
                type='button'
              />
            </ButtonContainer>
            <Spacing distance={'mt-[10vh]'} />
            <Contacto />
          </Container>
        </Section>

      </main >
      <Footer />
    </>
  )
}
PageLayoutPlaces.propTypes = {
  children: PropTypes.node,
  city: PropTypes.string,
  image_576: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  image_1920: PropTypes.string,

}

export default PageLayoutPlaces