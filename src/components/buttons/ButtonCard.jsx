import Button from './Button'
import PropTypes from 'prop-types'

const ButtonCard = ({ title, href, width, border, icon, type, onClick, height }) => {
  return (
    <Button href={href} type={type} themeButton={'bg-secondary border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:bg-secondary_dark hover:border-t-secondary_light hover:border-l-secondary'} title={title} height={height} width={width} border={border} icon={icon} onClick={onClick} />
  )
}
ButtonCard.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func
}


export default ButtonCard