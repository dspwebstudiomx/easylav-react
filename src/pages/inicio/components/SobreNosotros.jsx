/*
  Sobre Nosotros Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-20
*/

// Importaciones
import { VistaLavadorasySecadorasConDosMesas_640 as img } from 'assets';
import { BorderLeft, Container, ImageResponsive, Paragraph, Section, TitleH2 } from 'components';
import { ABOUT_PROPS, ABOUT_UI } from 'constants/constants';

// Estructura
const SobreNosotros = () => {
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
            <BorderLeft>
              <TitleH2>
                {ABOUT_PROPS.TITLEH2}
              </TitleH2>
            </BorderLeft>
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
          <div id='sobrenosotros-columna-2' className={ABOUT_UI.COLUMNS2_CONTAINER}>
            <ImageResponsive
              src={img}
              // className={'shadow-image'}
              imageAlt={'Placeholder'}
              image_640={img}
              image_1024={img}
              image_1920={img}
            />
            {/* <LottieAnimationImage lottieImage={lottieImage} /> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SobreNosotros;
