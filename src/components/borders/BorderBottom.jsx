import PropTypes from 'prop-types'

const BorderBottom = ({ ...props }) => {

  const { children, justify } = props

  return (
    <div className={` border-b-primary border-b-4 ${justify}`}>
      {children}
    </div >
  )
}
BorderBottom.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
}

export default BorderBottom