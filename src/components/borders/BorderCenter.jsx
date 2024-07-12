import PropTypes from 'prop-types'

const BorderCenter = ({ children }) => {
  return (
    <div className='border-l-4 border-l-primary border-r-4 border-r-primary flex'>
      <span className='px-4'>
        {children}
      </span>
    </div>
  )
}
BorderCenter.propTypes = {
  children: PropTypes.node.isRequired
}

export default BorderCenter