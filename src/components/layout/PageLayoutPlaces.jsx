/*
  Page Layout Places - Template
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
  Descripción: Este componente es un layout para las páginas de sucursales.
  Contiene un banner con una imagen de fondo y un título, seguido de una sección
  que muestra las sucursales de una ciudad específica. También incluye un botón
  para regresar a la lista de sucursales y un componente de contacto.
  ----------------------
  Modificado por : Daniel Pérez
  Fecha: 2025-04-01
  Descripción: Refactoriza el componente PageLayoutPlaces para mejorar la estructura del código y la legibilidad, separando el banner y las tarjetas de contenido en componentes independientes.
  ----------------------

*/

// Importaciones
import {
  BackgroundImageSection,
  ButtonContainer,
  ButtonSecondary,
  Contacto,
  Header,
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
  const BannerPlaces = () => {
    return (
      <BackgroundImageSection
        // image_768={image_768}
        image_576={image_576}
        // image_240={image_240}
        image_1024={image_1024}
        image_1200={image_1200}
        image_1920={image_1920}
        height="h-[210px] sm:h-[30vh] md:h-[20vh] lg:h-[40vh] xl:h-[35vh]"
        opacity="opacity-50 hover:opacity-60"
        backgroundColor="bg-dark"
        className="flex justify-center items-center"
      >
        <h2 className="text-light uppercase text-3xl font-semibold tracking-wide">{city}</h2>
      </BackgroundImageSection>
    );
  };
  const ContentCards = () => {
    return (
      <Section
        id="sucursales-morelia"
        className={'flex flex-col items-center justify-center gap-6'}
        height={'h-full'}
        backgroundColor={'bg-light'}
      >
        <Container className={'mx-auto text-center'}>
          {city ? (
            <>
              <SucursalCardPerCity city={city} />
              <Spacing distance="mt-[10vh]" />
              <ButtonContainer position="items-center justify-center" distance="mt-16">
                <ButtonSecondary
                  title="Regresar a sucursales"
                  href="/sucursales"
                  distance=""
                  type="button"
                  width="w-full sm:w-[320px]"
                  arialabel="Regresar a la lista de sucursales"
                />
              </ButtonContainer>
              <Spacing distance="mt-[5vh]" />
            </>
          ) : (
            <p className="text-center text-dark text-lg font-medium">No hay sucursales</p>
          )}
          <Spacing distance="mt-[10vh]" />
          <Contacto />
        </Container>
      </Section>
    );
  };

  return (
    <>
      <Header />
      <main id={`sucursales-${city}`} className="mt-[100px] sm:mt-0 xl:mt-[100px]">
        <BannerPlaces />
        <ContentCards />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

// Propiedades
PageLayoutPlaces.propTypes = {
  children: PropTypes.node,
  city: PropTypes.string,
  image_576: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  image_1920: PropTypes.string,
};

export default PageLayoutPlaces;
