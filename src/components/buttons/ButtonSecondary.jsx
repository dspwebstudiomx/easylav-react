import Button from './Button'
import PropTypes from 'prop-types'

const ButtonSecondary = ({ title, href, width, border, icon, type, onClick }) => {
  return (
    <Button href={href} type={type} themeButton={'bg-secondary hover:bg-secondary_light'} title={title} width={width} border={border} icon={icon} onClick={onClick} />
  )
}
ButtonSecondary.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func
}


export default ButtonSecondary