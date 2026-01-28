// Importaciones
import PropTypes from 'prop-types';

// Estructura
const TwoColumnsContainer = ({ children, gridOrder }) => {
  return <div className={`${gridOrder} grid gap-6 sm:gap-12 justify-start items-center`}>{children}</div>;
};
export default TwoColumnsContainer;

// PropTypes
TwoColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  gridOrder: PropTypes.string,
};
