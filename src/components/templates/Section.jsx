/*
  Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-28
*/

// Importaciones
import { SECTION_UI } from 'constants/constants'
import PropTypes from 'prop-types'

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