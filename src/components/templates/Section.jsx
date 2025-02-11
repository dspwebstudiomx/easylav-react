/*
  Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-28
*/

// Importaciones
import PropTypes from 'prop-types';

// Clases
const SECTION_UI = {
  DISPLAY: "block",
  PADDING: "p-12 px-8 sm:p-20 2xl:py-20",
  BACKGROUND_COLOR: "bg-light dark:bg-dark",
  TEXT_COLOR: "",
  BORDER_JUSTIFY: "mx-auto",
};

// Estructura
export default function Section({ id, children, backgroundColor, height, className, backgroundImage }) {


  const classes = `${SECTION_UI.DISPLAY} ${SECTION_UI.PADDING} ${SECTION_UI.BACKGROUND_COLOR} ${SECTION_UI.TEXT_COLOR} ${backgroundColor} ${height} ${className}  bg-[url("${backgroundImage}")] `

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}