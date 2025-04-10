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
  backgroundColor,
  title,
  border,
  icon,
  type,
  onClick,
  href,
  textColor,
  name,
  width,
  height,
  arialabel,
}) => {
  const buttonWidth = width ? width : 'w-[320px] sm:w-[300px]';
  const buttonHeight = height ? height : 'min-h-[60px]';
  return (
    <HashLink to={href} scroll={(el) => scrollWithOffset(el)}>
      <button
        name={name}
        onClick={typeof onClick === 'function' ? onClick : undefined}
        type={type}
        className={`${backgroundColor} ${border} flex items-center justify-center min-h-[60px] w-[320px] sm:w-[300px] text-lg xl:text-lg px-6 py-4 font-semibold rounded-xl uppercase text-balance tracking-wider sm:tracking-normal transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 ${buttonWidth} ${buttonHeight} ${textColor} flex gap-3 z-50`}
        href={href}
        aria-label={arialabel}>
        {icon && <span>{icon}</span>}
        {title}
      </button>
    </HashLink>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
  arialabel: PropTypes.string,
};

export default Button;
