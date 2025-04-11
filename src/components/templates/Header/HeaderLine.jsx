/*
HeaderLine.jsx - Componente
----------------------------
Creador por: Daniel Pérez
*/
// Importaciones
import PropTypes from 'prop-types';

// Estructura
const HeaderLine = ({ className }) => {
  return <div className={`h-1 w-full bg-gradient-to-r from-primary to-secondary ${className}`}></div>;
};
export default HeaderLine;

HeaderLine.propTypes = {
  className: PropTypes.string,
};
