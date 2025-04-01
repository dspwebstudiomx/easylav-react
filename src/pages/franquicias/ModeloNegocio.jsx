/*
  ModeloNegocio.jsx - Componente de Sección en Franquicias
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-28
  Descripción: Este componente presenta el modelo de negocio de Easylav, destacando la inversión inicial, costos operativos, márgenes de ganancia y soporte ofrecido a los franquiciados.
  Este componente es parte de la sección de franquicias del sitio web de Easylav, diseñado para atraer a potenciales franquiciados y proporcionarles información clara y concisa sobre el modelo de negocio.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-31
*/

// Importaciones
import { Container, Paragraph, Section, TitleContainer } from 'components';
import TarjetasModeloNegocio from './TarjetasModeloNegocio';

// Base de Datos

// Estructura
const ModeloNegocio = () => {
  return (
    <Section className="">
      <Container className="flex flex-col gap-12">
        <TitleContainer title="Modelo de Negocio Detallado" />
        <Paragraph>
          El modelo de franquicia de Easylav está diseñado para ofrecer una alta rentabilidad y sostenibilidad. Aquí te
          explicamos cómo funciona:
        </Paragraph>
        <TarjetasModeloNegocio />
      </Container>
    </Section>
  );
};

export default ModeloNegocio;
