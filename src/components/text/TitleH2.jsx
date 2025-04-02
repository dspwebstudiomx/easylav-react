// Importaciones
import { GENERAL_UI } from 'constants/constants';
import Proptypes from 'prop-types';

// Estilos
const classes = `
  ${GENERAL_UI.TITLEH2.FONT_FAMILY}
  ${GENERAL_UI.TITLEH2.FONT_SIZE}
  ${GENERAL_UI.TITLEH2.FONT_WEIGHT}
  ${GENERAL_UI.TITLEH2.COLOR}
  ${GENERAL_UI.TITLEH2.BACKGROUND_COLOR}
  ${GENERAL_UI.TITLEH2.TEXT_TRANSFORM}
`;

// Estructura
const TitleH2 = ({ children, justify, className }) => {
  return <h2 className={`${className} ${classes} ${justify}`}>{children}</h2>;
};

// Propiedades
TitleH2.propTypes = {
  children: Proptypes.node.isRequired,
  className: Proptypes.string,
  justify: Proptypes.string,
};

export default TitleH2;
