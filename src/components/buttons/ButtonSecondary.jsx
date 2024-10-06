/*
  ButtonSecondary
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-21
*/

// Importaciones
import { Button } from 'components'
import { BUTTON_SECONDARY_UI } from 'constants/constants'
import PropTypes from 'prop-types'

// Estructura
export default function ButtonSecondary({ ...props }) {

  const { title, href, icon, type, onClick, titleMailto, distance, width } = props

  return (
    <Button
      backgroundColor={BUTTON_SECONDARY_UI.BACKGROUND_COLOR}
      border={BUTTON_SECONDARY_UI.BORDER}
      textColor={BUTTON_SECONDARY_UI.TEXT_COLOR}
      href={href}
      type={type}
      title={title}
      icon={icon}
      onClick={onClick}
      titleMailto={titleMailto}
      width={width}
      distance={distance}
    />
  )
}

ButtonSecondary.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  href: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  distance: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  titleMailto: PropTypes.string
}
