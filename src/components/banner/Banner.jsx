/*
  Banner
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-11
*/

// Importaciones
import PropTypes from 'prop-types';

// Estructura
const Banner = ({ id, children, variant = 'primary' }) => {
  // Variantes de estilos
  const variants = {
    primary: 'bg-primary_light border-dark text-dark',
    secondary: 'bg-secondary_light border-secondary_dark text-dark',
    warning: 'bg-red_light border-red_dark text-red_dark',
  };

  // Clases base
  const baseClasses =
    'border-2 text-xl p-8 xl:p-12 rounded-xl animate__animated animate__flash w-auto flex flex-col items-start justify-center gap-4';

  // Combinar clases base con la variante seleccionada
  const classes = `${baseClasses} ${variants[variant]}`;

  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'warning']),
};

export default Banner;
