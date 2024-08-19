import { Button } from 'components'
import PropTypes from 'prop-types'

export default function ButtonSecondary({ ...props }) {

  const { title, href, border, icon, type, onClick, titleMailto } = props

  const themeButton = 'bg-secondary border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:bg-secondary_dark hover:border-t-secondary_light hover:border-l-secondary min-h-[70px] dark:bg-primary dark:border-l-primary dark:border-t-primary_light dark:hover:bg-primary_dark dark:hover:border-l-primary'

  return (
    <Button href={href} type={type} themeButton={themeButton} title={title} border={border} icon={icon} onClick={onClick} titleMailto={titleMailto} />
  )
}

ButtonSecondary.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  href: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  titleMailto: PropTypes.string
}
