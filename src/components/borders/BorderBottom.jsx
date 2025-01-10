/*
  Border Bottom
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-20
*/

// Importaciones
import PropTypes from 'prop-types';

// Estilos
const BORDER_BOTTOM_UI = {
  WIDTH: "w-100%",
  BORDER: "flex border-b-4 border-b-primary pb-3",
  JUSTIFY: "mx-auto",
};

// Estructura
const BorderBottom = ({ ...props }) => {

  const { children } = props

  const styles = `${BORDER_BOTTOM_UI.BORDER} ${BORDER_BOTTOM_UI.JUSTIFY} ${BORDER_BOTTOM_UI.WIDTH}`

  return (
    <div className={styles}>
      {children}
    </div >
  )
}
BorderBottom.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BorderBottom