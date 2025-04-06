// Importaciones
import PropTypes from 'prop-types';

// Estructura
const FourColumnsContainer = ({ children }) => {
  return <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-8">{children}</div>;
};
export default FourColumnsContainer;

// PropTypes
FourColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
