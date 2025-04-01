/*
  Page Layout Places - Template
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import {
  BackgroundImageSection,
  ButtonContainer,
  ButtonSecondary,
  Contacto,
  Navbar,
  ScrollToTopButton,
  SucursalCardPerCity,
} from 'components';
import PropTypes from 'prop-types';
import Container from '../containers/Container';
import Footer from '../templates/footer/Footer';
import Section from '../templates/Section';
import Spacing from './Spacing';

// Estructura
const PageLayoutPlaces = ({ city, image_576, image_1024, image_1200, image_1920 }) => {
  return (
    <>
      <Navbar />
      <main id={`sucursales-${city}`} className="mt-[100px] sm:mt-[60px] md:mt-0 xl:mt-[100px]">
        {/* Banner */}
        <BackgroundImageSection
          // image_768={image_768}
          image_576={image_576}
          // image_240={image_240}
          image_1024={image_1024}
          image_1200={image_1200}
          image_1920={image_1920}
          height="h-[210px] sm:h-[50vh] "
          opacity="opacity-50 hover:opacity-60"
          backgroundColor="bg-dark"
          className="flex justify-center items-center"
        >
          <h2 className="text-light uppercase text-3xl font-semibold tracking-wide">{city}</h2>
        </BackgroundImageSection>
        {/* Banner */}

        {/* Contenido */}
        <Section
          id="sucursales-morelia"
          className={'flex flex-col items-center justify-center gap-6'}
          height={'h-full'}
          backgroundColor={'bg-light'}
        >
          <Container className={''}>
            <SucursalCardPerCity city={city} />
            <Spacing distance={'mt-[10vh]'} />
            <ButtonContainer position="items-center justify-center" distance="mt-16">
              <ButtonSecondary
                title="Regresar a sucursales"
                href="/sucursales"
                distance=""
                type="button"
                width={'w-full sm:w-[320px]'}
              />
            </ButtonContainer>
            <Spacing distance={'mt-[10vh]'} />
          </Container>
          <Contacto />
        </Section>
        {/* Contenido */}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};
PageLayoutPlaces.propTypes = {
  children: PropTypes.node,
  city: PropTypes.string,
  image_576: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  image_1920: PropTypes.string,
};

export default PageLayoutPlaces;
