import { Link } from 'react-router-dom'
import Button from './Button'
import PropTypes from 'prop-types'

const ButtonPrimary = ({ title, href, border, ...props }) => {
  return (
    <Link href={href} {...props}>
      <Button themeButton={'bg-primary hover:bg-primary_light'} title={title} border={border} />
    </Link>
  )
}
ButtonPrimary.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  border: PropTypes.string,
}
export default ButtonPrimary