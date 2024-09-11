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
    <div className={`flex flex-col sm:flex-row gap-8 mx-auto w-full items-center ${position} ${distance}`}>
      {children}
    </div>
  )
}
ButtonContainer.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  distance: PropTypes.string,
}
