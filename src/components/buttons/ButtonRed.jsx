import Button from './Button'
import PropTypes from 'prop-types'

const ButtonRed = ({ title, href, width, border, icon, type, onclick }) => {
  return (
    <Button href={href} type={type} themeButton={'bg-red border-l-red_dark border-l-4 border-t-light border-t-4 hover:bg-red_dark hover:border-t-red_light hover:border-l-secondary'} title={title} width={width} border={border} icon={icon} onclick={onclick} />
  )
}
ButtonRed.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  onclick: PropTypes.func
}


export default ButtonRed