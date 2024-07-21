import Button from './Button'
import PropTypes from 'prop-types'

const ButtonPrimary = ({ title, href, border, icon }) => {
  return (
    <Button themeButton={'bg-primary border-l-4 border-t-4 border-l-primary_dark border-t-primary_light hover:bg-primary_dark'} title={title} border={border} href={href} icon={icon} />
  )
}
ButtonPrimary.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  border: PropTypes.string,
}
export default ButtonPrimary