import PropTypes from 'prop-types'

const Section = ({ id, children, backgroundColor, height, className }) => {
  return (
    <section id={id} className={`px-12 py-20 sm: py-0 md:p-24 grid gap-12 ${backgroundColor} ${height} ${className}`}>{children}</section>
  )
}
Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}

export default Section