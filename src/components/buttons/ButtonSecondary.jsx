import Button from './Button'
import PropTypes from 'prop-types'

const ButtonSecondary = ({ title, href, width, height, border, icon, type, onClick, titleMailto }) => {
  return (
    <Button href={href} type={type} themeButton={'bg-secondary border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:bg-secondary_dark hover:border-t-secondary_light hover:border-l-secondary min-h-[70px]'} title={title} height={height} width={width} border={border} icon={icon} onClick={onClick} titleMailto={titleMailto} />
  )
}
ButtonSecondary.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  titleMailto: PropTypes.string
}


export default ButtonSecondary