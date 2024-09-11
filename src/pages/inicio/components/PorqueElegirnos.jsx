/*
  Por qué Elegirnos Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { Placeholder } from 'assets';
import { BorderLeft, Container, DescriptionWithBulletPoint, ImageResponsive, Section, TitleH2 } from 'components';
import { PORQUE_ELEGIRNOS_PROPS, PORQUE_ELEGIRNOS_UI } from 'constants/constants';
import { porqueElegirnosDescripciones } from 'data';

// Estructura
export default function PorqueElegirnos() {
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
            {porqueElegirnosDescripciones.map(descripcion => {
              return (
                <DescriptionWithBulletPoint key={descripcion.id} id={descripcion.id} titulo={descripcion.titulo} texto={descripcion.texto} />
              )
            })}
          </div>
          <div id={PORQUE_ELEGIRNOS_PROPS.ARTICLE.IMAGE.CONTENEDOR.ID} className={PORQUE_ELEGIRNOS_UI.CONTAINER_IMAGE}>
            <ImageResponsive
              src={Placeholder}
              imageAlt={'Placeholder'}
              className={'shadow-image'}
              image_640={Placeholder}
              image_1024={Placeholder}
              image_1920={Placeholder}
            />
          </div>
          <div className=''></div>
        </article>
      </Container>
    </Section>
  );
}
