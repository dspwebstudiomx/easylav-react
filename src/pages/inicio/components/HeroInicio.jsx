/*
Hero Inicio
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { Camisas } from 'assets';
import { ButtonContainer, ButtonSecondary, Container, Hero, TitleH1 } from "components";
import { GENERAL_UI, HEROINICIO_PROPS, HEROINICIO_UI } from "constants/constants";
import { scrollWithOffset } from "functions";



// Estructura
export default function HeroInicio() {

  const styles = ` ${GENERAL_UI.TITLEH1.FONT_SIZE} ${GENERAL_UI.TITLEH1.FONT_WEIGHT} ${GENERAL_UI.TITLEH1.BACKGROUND_COLOR} ${GENERAL_UI.TITLEH1.JUSTIFY}`

  return (
    <Hero
      textColor={HEROINICIO_UI.TEXT_COLOR}
      opacity={HEROINICIO_UI.OPACITY}
      opacityColor={HEROINICIO_UI.OPACITY_COLOR}
      height={HEROINICIO_UI.HEIGHT}
      id={HEROINICIO_PROPS.SECTION_ID}
      imageAlt={HEROINICIO_PROPS.IMAGE_ALT}
      backgroundImage_640={Camisas}
      backgroundImage_1024={Camisas}
      backgroundImage_1920={Camisas}
    >
      <Container className="sm:w-[70vw] lg:w-[80vw] xl:w-[50vw] px-12 xl:mt-12">
        <TitleH1 className={styles} textColor={GENERAL_UI.TITLEH1.HERO.COLOR}>
          En <span className="text-primary">Easylav</span> tu Ropa es Nuestra Pasión :
          <br />
          <span className="mt-8">Limpieza Impecable, Planchado Perfecto</span>
        </TitleH1>
        <ButtonContainer distance="-mt-6" position="place-items-start">
          <ButtonSecondary
            title={HEROINICIO_PROPS.BUTTON_SECONDARY.TITLE}
            href={HEROINICIO_PROPS.BUTTON_SECONDARY.HREF}
            onClick={el => scrollWithOffset(el)}
          />
        </ButtonContainer>
      </Container>

    </Hero>
  );
}