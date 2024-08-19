import PropTypes from 'prop-types'

export default function Section({ id, children, backgroundColor, height, className }) {

  const classes = {
    section: `px-12 py-16 sm: py-0 md:py-20 grid gap-12 ${backgroundColor} ${height} ${className} text-dark `
  }
  return (
    <section id={id} className={classes.section}>{children}</section>
  )
}
Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}