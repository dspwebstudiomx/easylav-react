import Button from './Button'
import PropTypes from 'prop-types'

const ButtonSecondary = ({ title, href, width, border, icon, type, onClick }) => {
  return (
    <Button href={href} type={type} themeButton={'bg-secondary border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:bg-secondary_dark hover:border-t-secondary_light hover:border-l-secondary'} title={title} width={width} border={border} icon={icon} onClick={onClick} />
  )
}
ButtonSecondary.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func
}


export default ButtonSecondary