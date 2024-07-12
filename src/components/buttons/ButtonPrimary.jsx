import Button from './Button'
import PropTypes from 'prop-types'

const ButtonPrimary = ({ title, href, border }) => {
  return (
    <Button themeButton={'bg-primary hover:bg-primary_light'} title={title} border={border} href={href} />
  )
}
ButtonPrimary.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  border: PropTypes.string,
}
export default ButtonPrimary