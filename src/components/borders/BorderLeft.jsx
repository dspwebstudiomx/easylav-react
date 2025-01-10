/*
  Border Left
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-20
*/

// Importaciones
import PropTypes from "prop-types";

// Estilos
const BORDER_LEFT_UI = {
  BORDER_LEFT: "flex border-l-4 border-l-primary",
  JUSTIFY: "mr-auto",
};

const styles = `${BORDER_LEFT_UI.BORDER_LEFT} ${BORDER_LEFT_UI.JUSTIFY}`

const BorderLeft = ({ children }) => {
  return (
    <div className={styles}>
      <span className="ml-4"></span>
      {children}
    </div>
  );
};
BorderLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BorderLeft;
