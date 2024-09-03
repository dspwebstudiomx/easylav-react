/*
Hero Inicio
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { ButtonContainer, ButtonSecondary, Container, Hero, TitleH1 } from "components";
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
      <Container className="w-[65vw] items-start">
        <TitleH1>
          En <span className="text-primary">Easylav</span> tu Ropa es Nuestra Pasión: Limpieza Impecable, Planchado Perfecto
        </TitleH1>
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