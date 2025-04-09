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
  return <div className={`text-base leading-relaxed ${className}`}>{children}</div>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
