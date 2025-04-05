// Importaciones
import PropTypes from 'prop-types';

// Estructura
const TwoColumnsContainer = ({ children }) => {
  return <div className="grid sm:grid-cols-2 gap-8 justify-between items-center">{children}</div>;
};
export default TwoColumnsContainer;

// PropTypes
TwoColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
