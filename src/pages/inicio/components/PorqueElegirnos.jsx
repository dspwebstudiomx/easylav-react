/*
  Por qué Elegirnos Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { woman as img } from 'assets';
import { Container, DescriptionWithBulletPoint, ImageResponsive, Section, TitleContainer } from 'components';
import { porqueElegirnosDescripciones } from 'data';

// Estilos
// Por que Elegirnos
const PORQUE_ELEGIRNOS_PROPS = {
  SECTION: {
    ID: 'porque-elegirnos',
  },
  CONTAINER: {
    ID: 'porque-elegirnos-container',
  },
  ARTICLE: {
    CARACTERISTICAS: {
      CONTENEDOR: {
        ID: 'contenedor-caracteristicas',
      },
      TITLEH2: {
        TITLE: 'Por qué Elegirnos?',
      },
    },
  },
};
const PORQUE_ELEGIRNOS_UI = {
  SECTION: {
    BACKGROUND_COLOR: '',
    CLASSNAME: '',
    HEIGHT: 'h-auto',
  },
  ARTICLE: 'mx-auto grid lg:grid-cols-2 gap-x-20 gap-y-16',
  CONTAINER: 'mx-auto grid place-content-center gap-12',
  CONTAINER_BULLET_DETAILS: 'grid lg:grid-cols-1 gap-8',
  CONTAINER_IMAGE: '',
};

// Estructura
export default function PorqueElegirnos() {
  return (
    <Section id="porque-elegirnos" backgroundColor="bg-light dark:bg-dark" height="h-auto" className="">
      <Container className={PORQUE_ELEGIRNOS_UI.CONTAINER} id={PORQUE_ELEGIRNOS_PROPS.CONTAINER.ID}>
        <TitleContainer title="¿Por qué elegirnos?" />
        <article className={PORQUE_ELEGIRNOS_UI.ARTICLE}>
          <ul className={PORQUE_ELEGIRNOS_UI.CONTAINER_BULLET_DETAILS}>
            {porqueElegirnosDescripciones.map((descripcion) => {
              return (
                <DescriptionWithBulletPoint
                  key={descripcion.id}
                  id={descripcion.id}
                  titulo={descripcion.titulo}
                  texto={descripcion.texto}
                />
              );
            })}
          </ul>
          <div id="porque-elegirnos-contenedor-imagen" className="">
            <ImageResponsive
              src={img}
              imageAlt={'Mujer señalando hacia las caraterísticas de la empresa'}
              imageTitle={'Mujer señalando hacia las caraterísticas de la empresa'}
              // className={'}
              image_640={img}
              image_1024={img}
              image_1920={img}
              width="w-full sm:w-1/2 md:2/3 lg:w-full"
            />
          </div>
        </article>
      </Container>
    </Section>
  );
}
