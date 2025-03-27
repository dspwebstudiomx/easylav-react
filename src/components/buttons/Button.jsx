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

// Estilos
const BUTTON_UI = {
  DISPLAY: "flex items-center justify-center gap-0",
  HEIGHT: "min-h-[40px]",
  WIDTH: "w-[300px]",
  FONT_SIZE: "text-lg xl:text-lg",
  PADDING: "px-6 py-4",
  FONT_WEIGHT: "font-semibold",
  TEXT_TRANSFORM: "uppercase text-balance",
  ROUNDED: "rounded-xl",
  LETTER_SPACING: "tracking-wider sm:tracking-normal",
  ANIMATION:
    "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300",
}

// Estructura
const ButtonUI = `${BUTTON_UI.DISPLAY} ${BUTTON_UI.HEIGHT} ${BUTTON_UI.WIDTH}  ${BUTTON_UI.FONT_SIZE} ${BUTTON_UI.PADDING} ${BUTTON_UI.FONT_WEIGHT} ${BUTTON_UI.ROUNDED} ${BUTTON_UI.TEXT_TRANSFORM} ${BUTTON_UI.LETTER_SPACING} ${BUTTON_UI.ANIMATION} `

const Button = ({ backgroundColor, title, border, icon, type, onClick, href, textColor, name, width, height }) => {
  const buttonWidth = width ? width : BUTTON_UI.WIDTH;
  const buttonHeight = height ?  height: BUTTON_UI.WIDTH;
  return (
    <HashLink to={href} scroll={el => scrollWithOffset(el)}>
      <button name={name} onClick={typeof onClick === 'function' ? onClick : undefined} type={type} className={`${backgroundColor} ${border} ${ButtonUI} ${buttonWidth} ${buttonHeight} ${textColor} flex gap-3 z-50`} href={href}>
        {icon && <span>{icon}</span>}
        {title}
      </button>
    </HashLink>
  )
}

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
  name: PropTypes.string
}

export default Button
