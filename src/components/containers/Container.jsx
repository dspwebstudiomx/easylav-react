/*
  Sobre Nosotros Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-28
*/

// Importaciones
import { CONTAINER_UI } from "constants/constants";
import PropTypes from "prop-types";

// Estructura
export default function Container({ id, children, className }) {

  const classes = `${className} ${CONTAINER_UI.DISPLAY} `

  return (
    <div id={id} className={`${classes} mx-auto`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

