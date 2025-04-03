/* eslint-disable react-refresh/only-export-components */
import { Container, Section, TituloYDescripcion } from 'components';
import PreguntasFranquicias from './PreguntasFranquicias';
import { memo } from 'react';

// Estilos

// Estructura
// Este componente es parte de la sección de franquicias del sitio web de Easylav, diseñado para atraer a potenciales franquiciados y proporcionarles información clara y concisa sobre el modelo de negocio.
const SobreNuestrasFranquicias = () => {
  return (
    <Section className="flex flex-col sm:gap-12" id="sobre-nuestras-franquicias">
      <Container>
        <TituloYDescripcion
          title="Sobre nuestras franquicias"
          description="Conoce más sobre nuestras franquicias y cómo puedes formar parte de nuestro exitoso modelo de negocio. Aquí encontrarás información detallada sobre los diferentes paquetes de franquicias que ofrecemos, así como las características y beneficios de cada uno."
        />
        <PreguntasFranquicias />
      </Container>
    </Section>
  );
};

const memorizedSobreNuestrasFranquicias = memo(SobreNuestrasFranquicias, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children;
});
export default memorizedSobreNuestrasFranquicias;
