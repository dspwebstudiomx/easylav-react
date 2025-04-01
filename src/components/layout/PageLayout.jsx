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
import { Footer, Header, ScrollToTopButton } from 'components';
import PropTypes from 'prop-types';

// Estructura
const PageLayout = ({ children, id }) => {
  return (
    <>
      <Header />
      <main id={id} className="bg-light dark:bg-dark py-20">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

PageLayout.propTypes = {
  /**
   * The content of the page.
   */
  children: PropTypes.node,
  id: PropTypes.any,
};

export default PageLayout;
