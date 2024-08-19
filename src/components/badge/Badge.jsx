import PropTypes from 'prop-types'

const Badge = ({ children, backgroundColor, flexDirection }) => {
  return (
    <div className={`flex ${flexDirection} gap-2 items-center justify-center ${backgroundColor} py-6 xl:py-4 px-2 text-light w-full `}>
      {children}
    </div>
  )
}
Badge.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  flexDirection: PropTypes.string
}

export default Badge