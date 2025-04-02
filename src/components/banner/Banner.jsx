/*
  Banner
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-11
*/

// Importaciones
import PropTypes from 'prop-types';

// Estilos
const BANNER_UI = {
  BORDER: 'border-2',
  COLOR: 'text-dark',
  FONT_SIZE: 'text-xl',
  PADDING: 'p-8',
  ROUNDED: 'rounded-xl',
  THEME: 'primary',
};

// Estructura
const Banner = ({ children, themeColor }) => {
  const classes = ` bg-${themeColor}_light border-${themeColor}_dark text-dark  animate__animated animate__flash ${BANNER_UI.BORDER} ${BANNER_UI.COLOR} ${BANNER_UI.FONT_SIZE} ${BANNER_UI.PADDING} ${BANNER_UI.ROUNDED}`;

  return <div className={classes}>{children}</div>;
};
Banner.propTypes = {
  children: PropTypes.node.isRequired,
  themeColor: PropTypes.string.isRequired,
};

export default Banner;
