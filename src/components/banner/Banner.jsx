/*
  Banner
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-11
*/

// Importaciones
import { BANNER_UI } from 'constants/constants';
import PropTypes from 'prop-types';

// Estilos


// Estructura
const Banner = ({ children, themeColor }) => {

  const classes = ` bg-${themeColor}_light border-${themeColor}_dark text-dark ${BANNER_UI.BORDER} ${BANNER_UI.COLOR} ${BANNER_UI.FONT_SIZE}  ${BANNER_UI.PADDING} ${BANNER_UI.ROUNDED} animate__animated animate__flash`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
Banner.propTypes = {
  children: PropTypes.node.isRequired,
  themeColor: PropTypes.string.isRequired
}

export default Banner