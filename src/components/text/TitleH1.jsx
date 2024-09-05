import PropTypes from 'prop-types'

const TitleH1 = ({ children, className }) => {
  return (
    <h1 className={className}>
      {children}
    </h1>
  )
}
TitleH1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default TitleH1