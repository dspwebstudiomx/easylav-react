/*
  Container - Component
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-28
  Modificado: 2025-01-24
*/

// Importaciones
import PropTypes from "prop-types";

// Estilos
const CONTAINER_UI = {
  DISPLAY:
    "flex flex-col md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg justify-center mx-auto ",
};


// Estructura4
export default function Container({ id, children, className }) {
  const classes = `${className} ${CONTAINER_UI.DISPLAY} `
  return (
    <article id={`container-${id}`} className={classes}>
      {children}
    </article>
  );
}

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

