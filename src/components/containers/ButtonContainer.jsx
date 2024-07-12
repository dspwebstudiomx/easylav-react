import PropTypes from 'prop-types'

const ButtonContainer = ({ children, position, distance }) => {
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

export default ButtonContainer