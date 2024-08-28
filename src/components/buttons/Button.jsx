import { BUTTON_UI } from 'constants/constants'
import PropTypes from 'prop-types'

const ButtonUI = `${BUTTON_UI.DISPLAY} ${BUTTON_UI.WIDTH} ${BUTTON_UI.HEIGHT} ${BUTTON_UI.FONT_SIZE} ${BUTTON_UI.PADDING} ${BUTTON_UI.FONT_WEIGHT} ${BUTTON_UI.ROUNDED}`

const Button = ({ backgroundColor, title, border, icon, type, onClick, href, titleMailto, textColor }) => {
  return (
    <a href={href}>
      <button onClick={onClick} type={type} className={`${backgroundColor} ${border} ${ButtonUI} ${textColor}`} title={titleMailto} >
        <span className='mr-3'>{icon}</span>
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
  height: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func,
  titleMailto: PropTypes.string
}

export default Button