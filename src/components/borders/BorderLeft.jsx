import PropTypes from 'prop-types'

const BorderLeft = ({ children }) => {
  return (
    <div className='border-l-4 border-l-primary flex'>
      <span className='ml-4'></span>
      {children}
    </div>
  )
}
BorderLeft.propTypes = {
  children: PropTypes.node.isRequired
}

export default BorderLeft