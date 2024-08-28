import { SECTION_UI } from 'constants/constants'
import PropTypes from 'prop-types'

export default function Section({ id, children, backgroundColor, height, className }) {

  const classes = `${SECTION_UI.DISPLAY} ${SECTION_UI.PADDING} ${SECTION_UI.BACKGROUND_COLOR} ${SECTION_UI.TEXT_COLOR} ${backgroundColor} ${height} ${className}`

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}