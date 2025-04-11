/*
  Button.jsx - Componente de botón reutilizable
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-09
  Descripción: Este componente es un botón reutilizable que se puede utilizar en diferentes partes de la aplicación.
  Permite personalizar el color de fondo, el texto, el tamaño y otros estilos. También incluye un icono opcional y un enlace a una sección específica de la página.
  Modificado por: Daniel Pérez
  Fecha modificación: 2025-03-27
*/

// Importaciones
import { scrollWithOffset } from 'functions';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

const Button = ({
  title,
  type,
  onClick,
  href,
  name,
  width,
  height,
  arialabel,
  variant = 'primary', // Valor por defecto es 'primary'
  icon,
}) => {
  const buttonWidth = width ? width : 'w-[320px] sm:w-[300px]';
  const buttonHeight = height ? height : 'min-h-[60px]';

  // Define los estilos base
  let baseStyles =
    'flex items-center justify-center min-h-[60px] text-lg xl:text-lg px-6 py-4 font-semibold rounded-xl uppercase text-balance tracking-wider sm:tracking-normal transition ease-in-out delay-150 flex gap-3 z-50';

  // Define los estilos específicos para cada variante
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles =
        'bg-primary text-primary_contrastDark hover:bg-primary_dark dark:bg-secondary_dark dark:hover:bg-secondary_light';
      break;
    case 'secondary':
      variantStyles =
        'bg-secondary text-light hover:bg-secondary_dark dark:text-dark dark:bg-primary_dark dark:hover:bg-primary_light';
      break;
    default:
      variantStyles = 'bg-primary text-light';
      break;
  }

  return (
    <HashLink to={href} scroll={(el) => scrollWithOffset(el)}>
      <button
        name={name}
        onClick={typeof onClick === 'function' ? onClick : undefined}
        type={type}
        className={`${baseStyles} ${variantStyles} ${buttonWidth} ${buttonHeight}`}
        aria-label={arialabel}>
        {icon && <span>{icon}</span>}
        {title}
      </button>
    </HashLink>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  arialabel: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']), // Define las variantes permitidas
  icon: PropTypes.node,
};

export default Button;
