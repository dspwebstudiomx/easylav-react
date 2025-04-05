// Importaciones
import PropTypes from 'prop-types';

// Estructura
const ThreeColumnsContainer = ({ children }) => {
  return <div className="grid sm:grid-cols-3 sm:gap-0 items-center justify-center">{children}</div>;
};
export default ThreeColumnsContainer;

// PropTypes
ThreeColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
