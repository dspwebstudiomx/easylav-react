/*
  Section.jsx - Componente de sección para la aplicación web
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-28
  Descripción: Este componente se utiliza para crear secciones de la aplicación web con estilos y propiedades personalizables.
*/

// Importaciones
import PropTypes from 'prop-types';

// Estructura
export default function Section({ id, children, backgroundColor, height, className }) {
  return (
    <section
      id={id}
      className={`block p-10 md:py-16 md:p-20 2xl:pb-32 2xl:pt-32 dark:bg-dark mx-auto ${backgroundColor} ${height} ${className}`}>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
