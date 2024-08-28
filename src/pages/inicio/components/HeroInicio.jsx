/*
Hero Inicio
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { ButtonContainer, ButtonSecondary, Container, Hero } from "components";
import { HEROINICIO_PROPS, HEROINICIO_UI } from "constants/constants";
import { scrollWithOffset } from "functions";

// Componente
export default function HeroInicio() {
  return (
    <Hero
      textColor={HEROINICIO_UI.TEXT_COLOR}
      opacity={HEROINICIO_UI.OPACITY}
      opacityColor={HEROINICIO_UI.OPACITY_COLOR}
      height={HEROINICIO_UI.HEIGHT}
      id={HEROINICIO_PROPS.SECTION_ID}
      imageAlt={HEROINICIO_PROPS.IMAGE_ALT}
      backgroundImage_640={HEROINICIO_PROPS.BACKGROUND_IMAGE_640}
      backgroundImage_1024={HEROINICIO_PROPS.BACKGROUND_IMAGE_1024}
      backgroundImage_1920={HEROINICIO_PROPS.BACKGROUND_IMAGE_1920}
    >
      <Container className="w-[75vw] items-start">
        <h1 className="sr-only">
          en Easylav tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado
          Perfecto
        </h1>
        <p className="text-border text-[32px] font-semibold leading-[45px] sm:w-2/3 sm:text-4xl">
          Tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto
        </p>
        <ButtonContainer>
          <ButtonSecondary
            title={HEROINICIO_PROPS.BUTTON_SECONDARY.TITLE}
            href={HEROINICIO_PROPS.BUTTON_SECONDARY.HREF}
            onClick={scrollWithOffset}
          />
        </ButtonContainer>
      </Container>
    </Hero>
  );
}