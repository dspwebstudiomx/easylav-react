import image from 'assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-1920.jpg';
import {
  ButtonContainer,
  ButtonSecondary,
  Container,
  Hero
} from 'components';
import { scrollWithOffset } from 'functions';

const HeroInicio = () => {
  return (
    <Hero
      backgroundImage={image}
      textColor="text-light"
      opacity="opacity-35"
      opacityColor="bg-[#000]"
      height="2xl:h-[60vh]"
      titleSection="inicio"
      imageAlt="canasta de ropa verde con ropa sucia de color con fondo blanco"
    >
      <Container className="items-start w-[80vw]">
        <h1 className="sr-only">en Easylav tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto</h1>
        <p className="text-[42px] sm:text-4xl sm:w-2/3 leading-[55px] sm:leading-[60px] font-semibold text-border">
          Tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto
        </p>
        <ButtonContainer>
          <ButtonSecondary
            title="Nuestros Servicios"
            href="/#servicios"
            border="border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:border-t-secondary hover:border-l-secondary_dark"
            onClick={scrollWithOffset}
          />
        </ButtonContainer>
      </Container>
    </Hero>
  );
};

export default HeroInicio;