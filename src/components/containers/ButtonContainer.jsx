/*
  Button Container
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-21
*/

// Importaciones
import PropTypes from 'prop-types'
export default function ButtonContainer({ children, position, distance }) {
  return (
    <div className={`grid sm:grid-cols-2 gap-8 w-full ${position} ${distance}`}>
      {children}
    </div>
  )
}
ButtonContainer.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  distance: PropTypes.string,
}
