import { Spacing } from 'components'
import { BUTTON_UI } from 'constants/constants'
import PropTypes from 'prop-types'

const ButtonUI = `${BUTTON_UI.DISPLAY} ${BUTTON_UI.WIDTH} ${BUTTON_UI.HEIGHT} ${BUTTON_UI.FONT_SIZE} ${BUTTON_UI.PADDING} ${BUTTON_UI.FONT_WEIGHT} ${BUTTON_UI.ROUNDED} ${BUTTON_UI.TEXT_TRANSFORM} ${BUTTON_UI.LETTER_SPACING}`

const Button = ({ backgroundColor, title, border, icon, type, onClick, href, textColor, distance }) => {
  return (
    <a href={href}>
      <button onClick={onClick} type={type} className={`${backgroundColor} ${border} ${ButtonUI} ${textColor} flex gap-1 z-50`} title={title} href={href}>
        <span>{icon}</span>
        <Spacing distance={distance} />
        {title}
      </button>
    </a>
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

