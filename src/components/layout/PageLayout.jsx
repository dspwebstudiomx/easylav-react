/* 
  PageLayout.jsx - Componente de Diseño de Página
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-07-15
  Descripción: Este componente es un diseño de página que incluye el encabezado, pie de página y un botón para desplazarse hacia arriba. Se utiliza como envoltura para otras páginas o secciones del sitio web.
  ---------------------------
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-04-01
  Descripción: Elimina el margen superior en el componente PageLayout para simplificar el diseño y mejorar la presentación del contenido.
  ----------------------------
*/

// Importaciones
import { Container, Footer, Header, ScrollToTopButton, Section } from 'components';
import PropTypes from 'prop-types';

// Estructura
const PageLayout = ({ children, id }) => {
  return (
    <>
      <Header />
      <main id={id} className="w-full h-full dark:bg-dark mt-0 min-h-[55vh]">
        <Section>
          <Container className="">{children}</Container>
        </Section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

// Propiedades
PageLayout.propTypes = {
  children: PropTypes.node,
  id: PropTypes.any,
};

export default PageLayout;
