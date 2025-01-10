/*
  Sobre Nosotros Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-28
*/

// Importaciones
import PropTypes from "prop-types";

// Estilos
const CONTAINER_UI = {
  DISPLAY:
    "flex flex-col gap-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl justify-center",
};


// Estructura
export default function Container({ id, children, className }) {
  const classes = `${className} ${CONTAINER_UI.DISPLAY} `
  return (
    <article id={`container-${id}`} className={`${classes} mx-auto`}>
      {children}
    </article>
  );
}

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

