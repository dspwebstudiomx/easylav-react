/*
  Por qué Elegirnos Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { VistaLavanderiaDesdeEntrada_1_640 } from 'assets';
import { BackgroundImageSection, BorderLeft, Container, DescriptionWithBulletPoint, Section, TitleH2 } from 'components';
import { PORQUE_ELEGIRNOS_PROPS, PORQUE_ELEGIRNOS_UI } from 'constants/constants';
import { porqueElegirnosDescripciones } from 'data';

// Estructura
export default function PorqueElegirnos() {

  const theme = 'dark'
  const backgroundOpacity = 'opacity-0'
  const backgroundColor = `bg-${theme}`
  const imageDisplay = 'block'


  return (
    <Section id={PORQUE_ELEGIRNOS_PROPS.SECTION.ID} backgroundColor={PORQUE_ELEGIRNOS_UI.SECTION.BACKGROUND_COLOR} height={PORQUE_ELEGIRNOS_UI.HEIGHT} className={PORQUE_ELEGIRNOS_UI.CLASSNAME} >
      <Container className={PORQUE_ELEGIRNOS_UI.CONTAINER} id={PORQUE_ELEGIRNOS_PROPS.CONTAINER.ID}>
        <article className={PORQUE_ELEGIRNOS_UI.ARTICLE}>
          <div id={PORQUE_ELEGIRNOS_PROPS.ARTICLE.CARACTERISTICAS.ID} className={PORQUE_ELEGIRNOS_UI.CONTAINER_CARACTERISTICAS}>
            <BorderLeft>
              <TitleH2>
                {PORQUE_ELEGIRNOS_PROPS.ARTICLE.CARACTERISTICAS.TITLEH2.TITLE}
              </TitleH2>
            </BorderLeft>
            <div className={PORQUE_ELEGIRNOS_UI.CONTAINER_BULLET_DETAILS}>
              {porqueElegirnosDescripciones.map(descripcion => {
                return (
                  <DescriptionWithBulletPoint key={descripcion.id} id={descripcion.id} titulo={descripcion.titulo} texto={descripcion.texto} />
                )
              })}
            </div>
          </div>
          {/* <div id={PORQUE_ELEGIRNOS_PROPS.ARTICLE.IMAGE.CONTENEDOR.ID} className={PORQUE_ELEGIRNOS_UI.CONTAINER_IMAGE}>
            <ImageResponsive
              src={img}
              imageAlt={'Placeholder'}
              // className={'shadow-image'}
              image_640={img}
              image_1024={img}
              image_1920={img}
            />
          </div> */}
          <div className={PORQUE_ELEGIRNOS_UI.CONTAINER_IMAGE}>
            <BackgroundImageSection height="h-[240px] sm:h-[320px]" opacity={backgroundOpacity} titleColor='text-primary' textColor='text-dark' image={`${imageDisplay}`} backgroundColor={`${backgroundColor}`} image_1024={VistaLavanderiaDesdeEntrada_1_640} image_1200={VistaLavanderiaDesdeEntrada_1_640} image_576={VistaLavanderiaDesdeEntrada_1_640} image_1920={VistaLavanderiaDesdeEntrada_1_640} />
          </div>
        </article>
      </Container>
    </Section>
  );
}
