/*
  ButtonPrimary
  =====================================
  Creado por : Daniel Pérez
  Fecha de Creacion: 2022-08-21
  Fecha de Modificación: 2022-09-05
*/

// Importaciones
import { Button } from 'components';
import PropTypes from 'prop-types';

// Estilos
//Primary Button
const BUTTON_PRIMARY_UI = {
  TEXT_COLOR: "text-light",
  BACKGROUND_COLOR:
    "bg-gradient-to-r from-primary_dark to-primary dark:bg-gradient dark:from-secondary_dark dark:to-secondary_light hover:bg-primary_dark",
  BORDER:
    "border-l-primary_dark border-l-4 border-t-primary_light border-t-4 hover:border-t-primary_light hover:border-l-primary dark:border-l-secondary dark:border-t-secondary_light dark:hover:border-l-secondary",
};


// Estructura
export default function ButtonPrimary({ ...props }) {

  const { title, href, icon, type, onClick, titleMailto, width, name } = props

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
      width={width}
      name={name}
    />
  )
}

ButtonPrimary.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  href: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  titleMailto: PropTypes.string,
  name: PropTypes.string

}
