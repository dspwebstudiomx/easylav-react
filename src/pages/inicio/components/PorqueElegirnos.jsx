/*
  Por qué Elegirnos Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { woman as img } from 'assets';
import { Container, DescriptionWithBulletPoint, ImageResponsive, Section, TitleContainer} from 'components';
import { porqueElegirnosDescripciones } from 'data';

// Estilos
// Por que Elegirnos
const PORQUE_ELEGIRNOS_PROPS = {
  SECTION: {
    ID: "porque-elegirnos",
  },
  CONTAINER: {
    ID: "porque-elegirnos-container",
  },
  ARTICLE: {
    CARACTERISTICAS: {
      CONTENEDOR: {
        ID: "contenedor-caracteristicas",
      },
      TITLEH2: {
        TITLE: "Por qué Elegirnos?",
      },
    },
    IMAGE: {
      CONTENEDOR: {
        ID: "contenedor-imagen",
      },
    },
  },
};
const PORQUE_ELEGIRNOS_UI = {
  SECTION: {
    BACKGROUND_COLOR: "",
    CLASSNAME: "",
    HEIGHT: "h-auto",
  },
  ARTICLE: "mx-auto grid sm:grid-cols-2 gap-x-20 gap-y-16",
  CONTAINER: "mx-auto",
  CONTAINER_CARACTERISTICAS: "grid place-content-center gap-12",
  CONTAINER_BULLET_DETAILS: "grid lg:grid-cols-1 gap-8",
  CONTAINER_IMAGE: "items-center lg:justify-end mt-8",
};


// Estructura
export default function PorqueElegirnos() {

  return (
    <Section id={PORQUE_ELEGIRNOS_PROPS.SECTION.ID} backgroundColor={PORQUE_ELEGIRNOS_UI.SECTION.BACKGROUND_COLOR} height={PORQUE_ELEGIRNOS_UI.HEIGHT} className={PORQUE_ELEGIRNOS_UI.CLASSNAME} >
      <Container className={PORQUE_ELEGIRNOS_UI.CONTAINER} id={PORQUE_ELEGIRNOS_PROPS.CONTAINER.ID}>
        <article className={PORQUE_ELEGIRNOS_UI.ARTICLE}>
          <div id={PORQUE_ELEGIRNOS_PROPS.ARTICLE.CARACTERISTICAS.ID} className={PORQUE_ELEGIRNOS_UI.CONTAINER_CARACTERISTICAS}>
            <TitleContainer title='¿Por qué elegirnos?' />
         
            <div className={PORQUE_ELEGIRNOS_UI.CONTAINER_BULLET_DETAILS}>
              {porqueElegirnosDescripciones.map(descripcion => {
                return (
                  <DescriptionWithBulletPoint key={descripcion.id} id={descripcion.id} titulo={descripcion.titulo} texto={descripcion.texto} />
                )
              })}
            </div>
          </div>
          <div id={PORQUE_ELEGIRNOS_PROPS.ARTICLE.IMAGE.CONTENEDOR.ID} className={PORQUE_ELEGIRNOS_UI.CONTAINER_IMAGE}>
            <ImageResponsive
              src={img}
              imageAlt={'Mujer señalando hacia las caraterísticas de la empresa'}
              // className={'shadow-image'}
              image_640={img}
              image_1024={img}
              image_1920={img}
              width='320px'
            />
          </div>
        </article>
      </Container>
    </Section>
  );
}
