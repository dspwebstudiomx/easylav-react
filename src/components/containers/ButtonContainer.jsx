/*
  Button Container
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-21
*/

// Importaciones
import PropTypes from 'prop-types';

// Estilos
const BUTTON_CONTAINER = {
  POSITION: "place-items-center bg-red",
  DISTANCE: "mt-12",
};

export default function ButtonContainer({ children, position, distance }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-8 ${position} ${distance}`}>
      {children}
    </div>
  )
}
ButtonContainer.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  distance: PropTypes.string,
}
