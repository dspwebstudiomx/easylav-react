/*
  Sobre Nosotros Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-20
*/

// Importaciones
import video from 'assets/video/video2.mp4';
import { Container, Paragraph, Section, TitleContainer } from 'components';
import Video from 'components/video/Video';

const ABOUT_UI = {
  BACKGROUND_COLOR: "",
  HEIGHT: "h-auto",
  SECTION: "",
  CONTAINER: "mx-auto",
  TWOCOLUMNS_CONTAINER: "grid gap-x-20 gap-y-16 sm:grid-cols-2 sm:gap-20",
  COLUMN1_CONTAINER: "grid place-content-center gap-8",
  COLUMN2_CONTAINER: "flex justify-end h-[320px]",
  SPAN: "font-semibold text-secondary dark:text-primary ml-2",
};
const ABOUT_PROPS = {
  SECTION_ID: "nosotros",
  CONTAINER_ID: "sobrenosotros-contenedor",
  TITLEH2: "Sobre Nosotros",
};

// Estructura
const SobreNosotros = () => {

  // const theme = 'dark'
  // const backgroundOpacity = 'opacity-0'
  // const backgroundColor = `bg-${theme}`
  // const imageDisplay = 'block'

  return (
    <Section
      id={ABOUT_PROPS.SECTION_ID}
      className={ABOUT_UI.SECTION}
      backgroundColor={ABOUT_UI.BACKGROUND_COLOR}
      height={ABOUT_UI.HEIGHT}
    >
      <Container className={ABOUT_UI.CONTAINER} id={ABOUT_PROPS.CONTAINER_ID}>
        <div id='sobrenosotros-doscolunmas' className={ABOUT_UI.TWOCOLUMNS_CONTAINER}>
          <div id='sobrenosotros-columna-1' className={ABOUT_UI.COLUMN1_CONTAINER}>
          <TitleContainer title='Sobre Nosotros' />
            <Paragraph>
              En
              <span className={ABOUT_UI.SPAN}>
                Easylav
              </span>
              , somos un equipo apasionado por el cuidado de la ropa. Con muchos
              años de experiencia, hemos perfeccionado nuestra técnica para
              asegurarnos de que cada prenda se vea y se sienta como nueva.
              Usamos solo los mejores equipos y productos porque creemos que tu
              ropa merece lo mejor.
            </Paragraph>

          </div>
          <div id='sobrenosotros-columna-2' className={ABOUT_UI.COLUMN2_CONTAINER}>
            {/* <ImageResponsive
              src={img}
              // className={'shadow-image'}
              imageAlt={'Placeholder'}
              image_640={img}
              image_1024={img}
              image_1920={img}
            /> */}
            {/* <LottieAnimationImage lottieImage={lottieImage} /> */}
            {/* <BackgroundImageSection height="h-[240px] sm:h-[320px]" opacity={backgroundOpacity} titleColor='text-primary' textColor='text-dark' image={`${imageDisplay}`} backgroundColor={`${backgroundColor}`} image_1024={img} image_1200={img} image_576={img} image_1920={img} /> */}
            <Video src={video} type='video/mp4' title='sucursal' className='shadow-image' height={ABOUT_UI.HEIGHT} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SobreNosotros;
