import PropTypes from 'prop-types'

const Badge = ({ children, backgroundColor }) => {
  return (
    <div className={`flex gap-2 items-center justify-center ${backgroundColor} py-6 xl:py-4 px-2 text-light w-full`}>
      {children}
    </div>
  )
}
Badge.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

export default Badge