/*
Hero Inicio
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { VistaLavanderiaDesdeEntrada_1_640 } from 'assets'
import { BackgroundImageSection, ButtonContainer } from "components"
import { QUIERES_UNA_FRANQUICIA_UI } from 'constants/constants'
import { scrollWithOffset } from 'functions'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

// Estructura
const QuieresUnaFranquicia = () => {

  const styles = {
    button: `bg-${QUIERES_UNA_FRANQUICIA_UI.COLOR.BUTTON} px-6 py-4 w-[${QUIERES_UNA_FRANQUICIA_UI.BUTTON.SIZE}] text-${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.SIZE} rounded-lg ${QUIERES_UNA_FRANQUICIA_UI.DISPLAY.BUTTON} text-${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.SIZE} ${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.TRANSFORM}`,
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

  //! Falta la alineación del titulo
  return (
    <BackgroundImageSection height="full" opacity={`bg-${QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.COLOR} ${QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.OPACITY}`} titleColor='text-primary' textColor='text-dark' image={QUIERES_UNA_FRANQUICIA_UI.DISPLAY.IMAGE} backgroundColor={QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.COLOR} image_1024={images.image_1024} image_1200={images.image_1200} image_576={images.image_576} image_1920={images.image_1920}>
      <div id='hero-inicio_container' className={`grid md:grid-cols-1 gap-x-8 p-6 md:p-0`}>
        <div id='hero-inicio_info_container' className="flex flex-col gap-8 sm:w-2/3 mx-auto">
          <span className={styles.span}>
            {QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.CONTENT}
          </span>
          <p className={styles.paragraph}>
            Imagina ser parte de una franquicia de lavandería, un sector que nunca pasa de moda y siempre tiene demanda. Con nuestra marca, no solo obtendrás un modelo de negocio probado y exitoso, sino también el respaldo y la capacitación necesaria para triunfar. Nuestros sistemas innovadores y tecnología de vanguardia te permitirán ofrecer un servicio excepcional, atrayendo a clientes que buscan calidad y conveniencia. No dejes pasar esta oportunidad de inversión segura que te brindará libertad financiera y la posibilidad de hacer crecer tu patrimonio. ¡Únete a nosotros y forma parte de un futuro brillante en el mundo de la lavandería!
          </p>
          <ButtonContainer position={styles.buttonContainer}>
            <HashLink to={QUIERES_UNA_FRANQUICIA_UI.BUTTON.HREF} scroll={el => scrollWithOffset(el)} >
              <button className={styles.button}>{QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.CONTENT}</button>
            </HashLink>
          </ButtonContainer>
        </div>
      </div>
    </BackgroundImageSection >
  )
}

export default QuieresUnaFranquicia