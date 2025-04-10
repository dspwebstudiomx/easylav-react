/*
  Paragraph
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-30
*/

// Importaciones
import PropTypes from 'prop-types';

// Estructura
const Paragraph = ({ children, className = '' }) => {
  return <div className={`text-lg leading-relaxed text-dark dark:text-light ${className}`}>{children}</div>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
