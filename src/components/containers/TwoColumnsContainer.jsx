// Importaciones
import PropTypes from 'prop-types';

// Estructura
const TwoColumnsContainer = ({ children, gridOrder }) => {
  return (
    <div className={`flex flex-col md:flex-row  gap-6 sm:gap-12 justify-between items-center ${gridOrder}`}>
      {children}
    </div>
  );
};
export default TwoColumnsContainer;

// PropTypes
TwoColumnsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  gridOrder: PropTypes.string,
};
