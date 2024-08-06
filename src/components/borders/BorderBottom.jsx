import PropTypes from 'prop-types'

const BorderBottom = ({ ...props }) => {

  const { children, justify } = props

  return (
    <div className={` border-b-primary border-b-4 flex ${justify} text-center`}>
      <span className='py-3 mx-auto'>
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