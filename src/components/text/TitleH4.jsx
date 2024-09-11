/*
  Title H4
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-28
*/

// Importaciones
import { GENERAL_UI } from 'constants/constants';
import Proptypes from 'prop-types';

// Estructura
const TitleH4 = ({ title }) => {

  const classes = `
    ${GENERAL_UI.TITLEH4.FONT_FAMILY}
    ${GENERAL_UI.TITLEH4.FONT_SIZE}
    ${GENERAL_UI.TITLEH4.FONT_WEIGHT}
    ${GENERAL_UI.TITLEH4.COLOR}
    ${GENERAL_UI.TITLEH4.BACKGROUND_COLOR}
    ${GENERAL_UI.TITLEH4.JUSTIFY}
    ${GENERAL_UI.TITLEH4.TEXT_TRANSFORM}
  `;
  return (
    <h4 className={`${classes} mx-auto -mb-2`}>
      {title}
    </h4>
  )
}
TitleH4.propTypes = {
  title: Proptypes.string.isRequired,
  className: Proptypes.string
}

export default TitleH4