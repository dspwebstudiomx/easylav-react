/*
  ButtonSecondary
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-21
*/

// Importaciones
import { Button } from 'components';
import PropTypes from 'prop-types';

// Estilos
const BUTTON_SECONDARY_UI = {
  TEXT_COLOR: 'text-light',
  BACKGROUND_COLOR: 'bg-secondary_dark',
  BORDER:
    'border-l-secondary_light border-l-4 border-t-secondary_light border-r-secondary_dark border-t-4 hover:border-t-secondary_light hover:border-l-secondary dark:border-l-primary dark:border-t-primary_light dark:hover:border-l-primary dark:bg-primary',
};

// Estructura
export default function ButtonSecondary({ ...props }) {
  const { title, href, icon, type, titleMailto, distance, name, onClick, width, arialabel } = props;

  return (
    <Button
      onClick={typeof onClick === 'function' ? onClick : undefined}
      backgroundColor={BUTTON_SECONDARY_UI.BACKGROUND_COLOR}
      border={BUTTON_SECONDARY_UI.BORDER}
      textColor={BUTTON_SECONDARY_UI.TEXT_COLOR}
      href={href}
      type={type}
      title={title}
      icon={icon}
      titleMailto={titleMailto}
      width={width}
      distance={distance}
      name={name}
      arialabel={arialabel}
    />
  );
}

ButtonSecondary.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  href: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
  distance: PropTypes.string,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  titleMailto: PropTypes.string,
  name: PropTypes.string,
  arialabel: PropTypes.string,
};
