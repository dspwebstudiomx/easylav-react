/*
  ButtonPrimary
  =====================================
  Creado por : Daniel Pérez
  Fecha de Creacion: 2022-08-21
  Fecha de Modificación: 2022-09-05
*/

// Importaciones
import { Button } from 'components'
import { BUTTON_PRIMARY_UI } from 'constants/constants'
import PropTypes from 'prop-types'

// Estructura
export default function ButtonPrimary({ ...props }) {

  const { title, href, icon, type, onClick, titleMailto } = props

  return (
    <Button
      backgroundColor={`${BUTTON_PRIMARY_UI.BACKGROUND_COLOR}`}
      border={BUTTON_PRIMARY_UI.BORDER}
      textColor={BUTTON_PRIMARY_UI.TEXT_COLOR}
      href={href}
      type={type}
      title={title}
      icon={icon}
      onClick={onClick}
      titleMailto={titleMailto}
    />
  )
}

ButtonPrimary.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  href: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  titleMailto: PropTypes.string
}
