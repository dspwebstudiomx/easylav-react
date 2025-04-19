/*
  Banner
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-11
*/

// Importaciones
import PropTypes from 'prop-types';

// Estructura
const Banner = ({ children, variant = 'primary' }) => {
  // Variantes de estilos
  const variants = {
    primary: 'bg-primary_light border-primary_dark text-dark',
    secondary: 'bg-secondary_light border-secondary_dark text-dark',
    warning: 'bg-warning_light border-warning_dark text-dark',
  };

  // Clases base
  const baseClasses = 'border-2 text-xl p-8 rounded-xl animate__animated animate__flash';

  // Combinar clases base con la variante seleccionada
  const classes = `${baseClasses} ${variants[variant]}`;

  return <div className={classes}>{children}</div>;
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'warning']),
};

export default Banner;
