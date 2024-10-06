import { Spacing } from 'components'
import { BUTTON_UI } from 'constants/constants'
import { scrollWithOffset } from 'functions'
import PropTypes from 'prop-types'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

const ButtonUI = `${BUTTON_UI.DISPLAY} ${BUTTON_UI.HEIGHT} ${BUTTON_UI.FONT_SIZE} ${BUTTON_UI.PADDING} ${BUTTON_UI.FONT_WEIGHT} ${BUTTON_UI.ROUNDED} ${BUTTON_UI.TEXT_TRANSFORM} ${BUTTON_UI.LETTER_SPACING}`

const Button = ({ backgroundColor, title, border, icon, type, onClick, href, textColor, distance, width }) => {
  return (
    <HashLink to={href} scroll={el => scrollWithOffset(el)}>
      <button onClick={onClick} type={type} className={`${width} ${backgroundColor} ${border} ${ButtonUI} ${textColor} flex gap-1 z-50`} title={title} href={href}>
        <span>{icon}</span>
        <Spacing distance={distance} />
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
  distance: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button

