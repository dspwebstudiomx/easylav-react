/*
Hero Inicio
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { VistaLavanderiaDesdeEntrada_1_640 } from 'assets';
import { BackgroundImageSection, ButtonContainer, ButtonPrimary, Container } from "components";
import { scrollToTop } from 'functions';

// Estilos
// Quieres una franquicia - Inicio - Sección
const QUIERES_UNA_FRANQUICIA_UI = {
  THEME: "dark",
  BACKGROUND: {
    OPACITY: "opacity-80",
    COLOR: "dark",
  },
  DISPLAY: {
    BUTTON: "block",
    IMAGE: "bg-fixed",
    PARAGRAPH: "block",
  },
  COLOR: {
    BUTTON: "primary",
    PARAGRAPH: "light",
    TITLE: "light",
  },
  BUTTON: {
    SIZE: "",
    HREF: "/franquicias",
    TEXT: {
      CONTENT: "Conocer más",
      COLOR: "light",
      SIZE: "xl",
      TRANSFORM: "",
    },
    CONTAINER: "items-center justify-center",
  },
  TITLE: {
    H2: {
      CONTENT:
        "¿Estás listo para emprender un negocio rentable y en crecimiento? ",
      TRANSFORM: "uppercase",
      FONT_SIZE: "text-2xl",
      FONT_WEIGHT: "font-bold",
      JUSTIFY: "mx-auto",
    },
  },
};

// Estructura
const QuieresUnaFranquicia = () => {

  const styles = {
    button: `bg-${QUIERES_UNA_FRANQUICIA_UI.COLOR.BUTTON} px-8 py-4 w-[${QUIERES_UNA_FRANQUICIA_UI.BUTTON.SIZE}] text-${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.SIZE} rounded-lg ${QUIERES_UNA_FRANQUICIA_UI.DISPLAY.BUTTON} text-${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.SIZE} ${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.TRANSFORM} text-${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.COLOR}`,
    paragraph: `text-${QUIERES_UNA_FRANQUICIA_UI.COLOR.PARAGRAPH} text-lg ${QUIERES_UNA_FRANQUICIA_UI.DISPLAY.PARAGRAPH}`,
    buttonContainer: QUIERES_UNA_FRANQUICIA_UI.BUTTON.CONTAINER,
    span: `text-${QUIERES_UNA_FRANQUICIA_UI.COLOR.TITLE} ${QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.TRANSFORM} ${QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.FONT_SIZE} ${QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.FONT_WEIGHT} ${QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.JUSTIFY}`,
  }
  const images = {
    image_576: VistaLavanderiaDesdeEntrada_1_640,
    image_1024: VistaLavanderiaDesdeEntrada_1_640,
    image_1200: VistaLavanderiaDesdeEntrada_1_640,
    image_1920: VistaLavanderiaDesdeEntrada_1_640
  }
  return (
    <BackgroundImageSection height="h-[1000px] sm:h-[700px] lg:h-[650px]" opacity={`bg-${QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.COLOR} ${QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.OPACITY}`} titleColor='text-primary' textColor='text-dark' image={QUIERES_UNA_FRANQUICIA_UI.DISPLAY.IMAGE} backgroundColor={QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.COLOR} image_1024={images.image_1024} image_1200={images.image_1200} image_576={images.image_576} image_1920={images.image_1920} align='items-center justify-center'>
      <Container>
        <div id='hero-inicio_container' className={`grid md:grid-cols-1 gap-x-8`}>
          <div id='hero-inicio_info_container' className="flex flex-col gap-8 w-full mx-auto xl:w-2/3">
            <span className={styles.span}>
              {QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.CONTENT}
            </span>
            <p className={styles.paragraph}>
              Imagina ser parte de una franquicia de lavandería, un sector que nunca pasa de moda y siempre tiene demanda. Con nuestra marca, no solo obtendrás un modelo de negocio probado y exitoso, sino también el respaldo y la capacitación necesaria para triunfar. Nuestros sistemas innovadores y tecnología de vanguardia te permitirán ofrecer un servicio excepcional, atrayendo a clientes que buscan calidad y conveniencia. No dejes pasar esta oportunidad de inversión segura que te brindará libertad financiera y la posibilidad de hacer crecer tu patrimonio. ¡Únete a nosotros y forma parte de un futuro brillante en el mundo de la lavandería!
            </p>
            <ButtonContainer position={styles.buttonContainer} distance='mt-12'>
              <ButtonPrimary title='Conoce más' href='/franquicias' width={'w-[280px]'} onClick={scrollToTop} />
            </ButtonContainer>
          </div>
        </div>
      </Container>

    </BackgroundImageSection >
  )
}

export default QuieresUnaFranquicia