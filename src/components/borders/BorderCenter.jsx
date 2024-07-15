import PropTypes from 'prop-types'

const BorderCenter = ({ children, justify }) => {
  return (
    <div className={`border-l-4 border-l-primary border-r-4 border-r-primary flex ${justify}`}>
      <span className='px-4'>
        {children}
      </span>
    </div>
  )
}
BorderCenter.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
}

export default BorderCenter