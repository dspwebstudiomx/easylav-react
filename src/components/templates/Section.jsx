import PropTypes from 'prop-types'

const Section = ({ id, children, backgroundColor, height, className }) => {
  return (
    <section id={id} className={`px-12 py-16 sm: py-0 md:py-20 grid gap-12 ${backgroundColor} ${height} ${className} text-dark `}>{children}</section>
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