import { BorderLeft, Container, Section, TitleH2 } from 'components';
import PreguntasFranquicias from './PreguntasFranquicias';

// Estilos
const FRANQUICIAS_UI = {
  TITLEH1: {
    COLOR: 'text-dark dark:text-light',
    FONT_SIZE: 'text-3xl md:text-4xl',
    FONT_WEIGHT: 'font-semibold',
    LETTER_SPACING: 'tracking-wide',
  },
  CONTAINER: {
    DISPLAY: 'grid 2xl:grid-cols-2 sm:gap-8',
  },
  COLUMNA_1: {
    DISPLAY: 'flex flex-col gap-2',
  },

  UL: {
    DISPLAY: 'flex flex-col gap-0',
  },
};

const styles = `${FRANQUICIAS_UI.TITLEH1.COLOR} ${FRANQUICIAS_UI.TITLEH1.FONT_SIZE} ${FRANQUICIAS_UI.TITLEH1.FONT_WEIGHT} ${FRANQUICIAS_UI.TITLEH1.LETTER_SPACING}`;

// Componentes Internos
const TituloConDescripcion = () => {
  return (
    <div className="w-full px-4 sm:px-0">
      <div className="mx-auto mb-[60px] lg:mb-0 flex flex-col gap-0">
        <BorderLeft>
          <TitleH2 className={styles} textColor="text-dark dark:text-light w-full">
            SOBRE NUESTRAS FRANQUICIAS
          </TitleH2>
        </BorderLeft>
        <h3 className="text-xl font-semibold sm:text-2xl mt-8 text-dark dark:text-light">
          Visita cada punto para ver la información relacionada.
        </h3>
      </div>
    </div>
  );
};

// Estructura
// Este componente es parte de la sección de franquicias del sitio web de Easylav, diseñado para atraer a potenciales franquiciados y proporcionarles información clara y concisa sobre el modelo de negocio.
const SobreNuestrasFranquicias = () => {
  return (
    <Section className="flex flex-col sm:gap-12" id="sobre-nuestras-franquicias">
      <Container>
        <TituloConDescripcion />
        <PreguntasFranquicias />
      </Container>
    </Section>
  );
};

export default SobreNuestrasFranquicias;
