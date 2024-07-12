import PropTypes from 'prop-types'

const BorderButton = ({ children }) => {
  return (
    <div className=' border-b-primary border-b-4 flex'>
      <span className='py-3'>
        {children}
      </span>
    </div>
  )
}
BorderButton.propTypes = {
  children: PropTypes.node.isRequired
}

export default BorderButton