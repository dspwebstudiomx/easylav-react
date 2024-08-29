/*
  Border Left
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-20
*/

import { BORDER_LEFT_UI } from "constants/constants";
import PropTypes from "prop-types";

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
