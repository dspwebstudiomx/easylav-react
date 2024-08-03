import PropTypes from 'prop-types'

const Spacing = ({ height }) => {
  return (
    <div className={height}></div>
  )
}
Spacing.propTypes = {
  height: PropTypes.string
}

export default Spacing