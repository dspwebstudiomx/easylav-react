import PropTypes from 'prop-types'

const BorderBottom = ({ children, justify }) => {
  return (
    <div className={` border-b-primary border-b-4 flex ${justify} w-[120px]`}>
      <span className='py-3'>
        {children}
      </span>
    </div>
  )
}
BorderBottom.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
}

export default BorderBottom