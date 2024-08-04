import PropTypes from 'prop-types'

const Badge = ({ children, backgroundColor }) => {
  return (
    <div className={`flex flex-col gap-2 items-center justify-center ${backgroundColor} text-light py-4 rounded-b-lg`}>
      {children}
    </div>
  )
}
Badge.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

export default Badge