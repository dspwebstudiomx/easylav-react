import PropTypes from 'prop-types'
import Button from './Button'

const ButtonPrimary = ({ title, href, border, icon, width }) => {
  return (
    <Button themeButton={'bg-primary border-l-4 border-t-4 border-l-primary_dark border-t-primary_light hover:bg-primary_dark min-h-[70px]'} title={title} border={border} href={href} icon={icon} width={width} />
  )
}
ButtonPrimary.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  border: PropTypes.string,
  width: PropTypes.string,
}
export default ButtonPrimary