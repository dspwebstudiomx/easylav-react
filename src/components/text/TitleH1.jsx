/*
  Por qué Elegirnos Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { GENERAL_UI } from 'constants/constants';
import PropTypes from 'prop-types';

// Estructura
const TitleH1 = ({ children, textColor, align, attr }) => {
  const styles = `
  ${GENERAL_UI.TITLEH1.FONT_FAMILY}
  ${GENERAL_UI.TITLEH1.COLOR}
  ${GENERAL_UI.TITLEH1.FONT_SIZE}
  ${GENERAL_UI.TITLEH1.FONT_WEIGHT}
  ${GENERAL_UI.TITLEH1.BACKGROUND_COLOR}
  ${GENERAL_UI.TITLEH1.TRANSFORM}
  `;
  return <h1 className={`${styles} ${textColor} ${align} ${attr}`}>{children}</h1>;
};
TitleH1.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  attr: PropTypes.string,
};

export default TitleH1;
