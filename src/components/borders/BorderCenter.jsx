// Importaciones
import PropTypes from 'prop-types';

// Estilos
const BORDER_CENTER_UI = {
  WIDTH: "w-full",
  BORDER_CENTER:
    "flex border-l-4 border-l-primary border-r-4 border-r-primary ",
  JUSTIFY: "mx-auto",
};

// Estructuras
const BorderCenter = ({ children }) => {

  const styles = `${BORDER_CENTER_UI.BORDER_LEFT} ${BORDER_CENTER_UI.JUSTIFY}`

  return (
    <div className={styles}>
      <span className='border-b-4  border-b-primary'></span>
      {children}
      <span className='px-4'></span>
    </div>
  )
}
BorderCenter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BorderCenter