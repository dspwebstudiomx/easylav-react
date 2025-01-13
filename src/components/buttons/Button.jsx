// Importaciones
import { scrollWithOffset } from 'functions';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';


// Estilos
const BUTTON_UI = {
  DISPLAY: "flex items-center justify-center gap-0",
  HEIGHT: "h-auto",
  FONT_SIZE: "text-lg",
  PADDING: "px-6 py-4 sm:px-3 sm:py-4",
  FONT_WEIGHT: "font-semibold",
  TEXT_TRANSFORM: "uppercase",
  ROUNDED: "rounded-lg",
  LETTER_SPACING: "tracking-wider sm:tracking-normal",
  ANIMATION:
    "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300",
  MAX_WIDTH: "w-[240px]"

};

// Estructura
const ButtonUI = `${BUTTON_UI.DISPLAY} ${BUTTON_UI.HEIGHT} ${BUTTON_UI.FONT_SIZE} ${BUTTON_UI.PADDING} ${BUTTON_UI.FONT_WEIGHT} ${BUTTON_UI.ROUNDED} ${BUTTON_UI.TEXT_TRANSFORM} ${BUTTON_UI.LETTER_SPACING} ${BUTTON_UI.ANIMATION} ${BUTTON_UI.MAX_WIDTH}`

const Button = ({ backgroundColor, title, border, icon, type, onClick, href, textColor, width, name }) => {
  return (
    <HashLink to={href} scroll={el => scrollWithOffset(el)}>
      <button name={name} onClick={onClick} type={type} className={`${width} ${backgroundColor} ${border} ${ButtonUI} ${textColor} flex gap-3 z-50`} href={href}>
        <span>{icon}</span>
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

