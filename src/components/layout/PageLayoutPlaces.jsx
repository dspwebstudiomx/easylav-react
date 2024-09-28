/*
  Page Layout Places - Template
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { BackgroundImageSection, ButtonContainer, ButtonSecondary, Contacto, SucursalCardPerCity } from 'components'
import PropTypes from 'prop-types'
import ScrollToTopButton from '../buttons/ScrollToTopButton'
import Container from '../containers/Container'
import Footer from '../templates/footer/Footer'
import Header from '../templates/header/Header'
import Section from '../templates/Section'
import Spacing from './Spacing'


// Estructura
const PageLayoutPlaces = ({ city, image_576, image_1024, image_1200, image_1920 }) => {

  const styles = {
    span: `text-4xl uppercase font-semibold tracking-wider text-light py-8`,
  }
  return (
    <>
      <Header />
      <main id={`sucursales-${city}`} className='mt-[100px] sm:mt-0 xl:mt-[100px]'>
        <BackgroundImageSection height="full" opacity='opacity-40' titleColor='text-light' textColor='text-light' image='block' backgroundColor='bg-dark' image_1024={image_1024} image_1200={image_1200} image_576={image_576} image_1920={image_1920}>
          <span className={styles.span}>
            {city}
          </span>
        </BackgroundImageSection >

        <Section id='sucursales-morelia' className={'flex flex-col gap-6'} height={'h-auto'} backgroundColor={'bg-light'}>
          <Container className={''}>
            <SucursalCardPerCity city={city} />
            <ButtonContainer position='justify-center' distance='mt-16'>
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
      <ScrollToTopButton />
    </>
  )
}
PageLayoutPlaces.propTypes = {
  children: PropTypes.node.isRequired,
  city: PropTypes.string,
  image_576: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  image_1920: PropTypes.string,

}

export default PageLayoutPlaces