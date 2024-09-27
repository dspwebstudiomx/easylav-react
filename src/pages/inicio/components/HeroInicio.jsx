/*
Hero Inicio
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import { Camisas } from 'assets'
import { BackgroundImageSection, ButtonContainer, TitleH1 } from "components"
import { GENERAL_UI, HEROINICIO_PROPS, HEROINICIO_UI } from 'constants/constants'
import { scrollWithOffset } from 'functions'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

// Estructura
const HeroInicio = () => {

  const styles = {
    button: `bg-${HEROINICIO_UI.COLOR.BUTTON} px-6 py-4 w-[${HEROINICIO_UI.BUTTON.SIZE}] text-${HEROINICIO_UI.BUTTON.TEXT.SIZE} rounded-lg ${HEROINICIO_UI.DISPLAY.BUTTON}  text-${HEROINICIO_UI.BUTTON.TEXT.SIZE} text-${HEROINICIO_UI.BUTTON.TEXT.COLOR}`,
    paragraph: `text-${HEROINICIO_UI.COLOR.PARAGRAPH} text-lg ${HEROINICIO_UI.DISPLAY.PARAGRAPH}`,
    buttonContainer: 'place-content-center sm:place-content-start',
    titleH1: {
      textColor: `text-${HEROINICIO_UI.COLOR.TITLE}`,
      textTransform: GENERAL_UI.TITLEH1.TRANSFORM,

    }
  }
  const images = {
    image_576: Camisas,
    image_1024: Camisas,
    image_1200: Camisas,
    image_1920: Camisas
  }

  //! Falta la alineación del titulo
  return (
    <BackgroundImageSection id={HEROINICIO_PROPS.SECTION_ID} height="full" opacity={`bg-${HEROINICIO_UI.BACKGROUND.COLOR} ${HEROINICIO_UI.BACKGROUND.OPACITY}`} titleColor='text-primary' textColor='text-dark' image={HEROINICIO_UI.DISPLAY.IMAGE} backgroundColor={HEROINICIO_UI.BACKGROUND.COLOR} image_1024={images.image_1024} image_1200={images.image_1200} image_576={images.image_576} image_1920={images.image_1920}>
      <div id='hero-inicio_container' className={`grid md:grid-cols-1 gap-x-8 p-6 md:p-0`}>
        <div id='hero-inicio_info_container' className="flex flex-col gap-8 sm:w-2/3">
          <TitleH1 textColor={styles.titleH1.textColor} textTransform={styles.titleH1.textTransform} align={'center'}>En <span className='mx-2 text-primary'>LAVANDERÍAS EASYLAV</span> no solo te brindamos soluciones para el lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus prendas luzcan siempre de la mejor manera. </TitleH1>
          <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in architecto, quibusdam earum placeat officiis ea molestias esse consequuntur aliquam culpa tempora ut dolorum nisi quaerat autem quisquam. Asperiores temporibus adipisci fugiat et sed incidunt maiores magnam iste voluptate sunt.</p>
          <ButtonContainer position={styles.buttonContainer}>
            <HashLink to={HEROINICIO_UI.BUTTON.HREF} scroll={el => scrollWithOffset(el)} >
              <button className={styles.button}>{HEROINICIO_UI.BUTTON.TEXT.CONTENT}</button>
            </HashLink>
          </ButtonContainer>
        </div>
      </div>
    </BackgroundImageSection >
  )
}

export default HeroInicio