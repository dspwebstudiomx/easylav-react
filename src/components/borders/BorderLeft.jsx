import PropTypes from 'prop-types'

const BorderLeft = ({ children, position }) => {
  return (
    <div className={`border-l-4 border-l-primary flex ${position}`}>
      <span className='ml-4'></span>
      {children}
    </div>
  )
}
BorderLeft.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
}

export default BorderLeft