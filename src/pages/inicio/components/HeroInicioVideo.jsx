import { VistaLavanderiaDesdeEntrada_2_640 as defaultImage } from 'assets';
import video from 'assets/video/video1.mp4';
import { ButtonContainer, ButtonPrimary, Container } from 'components';
import Video from 'components/video/Video';
import PropTypes from 'prop-types';

const HeroInicioVideo = () => {

  const HEROINICIO_UI = {
    HEIGHT:
      "h-[85vh] sm:h-[100vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] 2xl:h-[75vh]",
    THEME: "dark",
    BACKGROUND: {
      OPACITY: "opacity-90",
      COLOR: "bg-primary",
    },
    DISPLAY: {
      BUTTON: "block",
      IMAGE: "block",
      PARAGRAPH: "hidden",
    },
    TITLE: {
      FONT_SIZE: "text-2xl md:text-4xl",
      FONT_WEIGHT: "font-bold",
      FONT_FAMILY: "",
      LETTER_SPACING: "tracking-wider",
      LINE_HEIGHT: "",
      TEXT_TRANSFORM: "",
    },
    COLOR: {
      BUTTON: "primary",
      PARAGRAPH: "text-light",
      TITLE: "text-light",
    },
    BUTTON: {
      SIZE: "lg",
      HREF: "/#servicios",
      TEXT: {
        CONTENT: "Nuestros Servicios",
        COLOR: "light",
        SIZE: "xl",
        TRANSFORM: "uppercase",
      },
    },
  };

  const styles = {
    button: `bg-${HEROINICIO_UI.COLOR.BUTTON} px-6 py-4 w-[${HEROINICIO_UI.BUTTON.SIZE}] text-${HEROINICIO_UI.BUTTON.TEXT.SIZE} rounded-lg ${HEROINICIO_UI.DISPLAY.BUTTON}  text-${HEROINICIO_UI.BUTTON.TEXT.SIZE} text-${HEROINICIO_UI.BUTTON.TEXT.COLOR}`,
    paragraph: `text-${HEROINICIO_UI.COLOR.PARAGRAPH} text-lg ${HEROINICIO_UI.DISPLAY.PARAGRAPH}`,
    buttonContainer: 'place-content-center sm:place-content-start',
    title: `${HEROINICIO_UI.TITLE.FONT_SIZE} ${HEROINICIO_UI.TITLE.FONT_WEIGHT} ${HEROINICIO_UI.TITLE.FONT_FAMILY} ${HEROINICIO_UI.TITLE.LETTER_SPACING}  ${HEROINICIO_UI.TITLE.TEXT_TRANSFORM} ${HEROINICIO_UI.TITLE.LINE_HEIGHT} ${HEROINICIO_UI.COLOR.TITLE}`,
    image: `absolute top-0 left-0 overflow-hidden object-cover object-center w-full`
  }
  return (
    <section id='inicio' className={`relative overflow-hidden w-full ${HEROINICIO_UI.HEIGHT}`}>
      <div className={`absolute inset-0 z-0 w-full bg-dark opacity-60 left-0 ${HEROINICIO_UI.HEIGHT}`}>
        <Video src={video} type='video/mp4' title='sucursal' className={styles.image} defaultImage={defaultImage} />
      </div>
      <div className={`absolute inset-0 z-10 w-[1920px] bg-dark opacity-20 left-0 ${HEROINICIO_UI.HEIGHT}`}></div>
      <div className={`absolute inset-0 top-0 z-20 p-8 py-20 sm:p-20 ${HEROINICIO_UI.HEIGHT} w-full flex items-center`}>
        <Container>
          <div className='w-full xl:w-2/3 flex flex-col gap-12 items-center sm:items-start justify-center'>
            <h1 className={styles.title}>En <span className='mx-2 text-primary'>LAVANDERÍAS EASYLAV</span> no solo te brindamos soluciones para el lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus prendas luzcan siempre de la mejor manera. </h1>
            <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in architecto, quibusdam earum placeat officiis ea molestias esse consequuntur aliquam culpa tempora ut dolorum nisi quaerat autem quisquam. Asperiores temporibus adipisci fugiat et sed incidunt maiores magnam iste voluptate sunt.</p>
            <ButtonContainer position={'items-center'}>
              <ButtonPrimary title='Nuestros servicios' href='/#servicios' width={"w-full sm:w-[340px]"} />
            </ButtonContainer>
          </div>
        </Container>
      </div>
    </section>
  )
}

HeroInicioVideo.propTypes = {
  id: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  image_240: PropTypes.string,
  image_576: PropTypes.string,
  image_768: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  image_1920: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.string,
  opacity: PropTypes.string,
  backgroundColor: PropTypes.string,
  rounded: PropTypes.string
}
export default HeroInicioVideo