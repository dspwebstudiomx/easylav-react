import PropTypes from 'prop-types'

const BorderButtom = ({ children, justify }) => {
  return (
    <div className={` border-b-primary border-b-4 flex ${justify}`}>
      <span className='py-3'>
        {children}
      </span>
    </div>
  )
}
BorderButtom.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
}

export default BorderButtom