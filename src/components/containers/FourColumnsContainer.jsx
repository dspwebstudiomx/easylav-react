// Importaciones
import PropTypes from 'prop-types';

// Estructura
const FourColumnsContainer = ({ children }) => {
  return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">{children}</div>;
};
export default FourColumnsContainer;

// PropTypes
FourColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
