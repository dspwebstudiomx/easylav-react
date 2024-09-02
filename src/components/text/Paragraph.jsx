import { GENERAL_UI } from 'constants/constants'
import PropTypes from 'prop-types'

const styles = `${GENERAL_UI.PARAGRAPH.FONT_SIZE} ${GENERAL_UI.PARAGRAPH.FONT_WEIGHT} ${GENERAL_UI.PARAGRAPH.COLOR}`

const Paragraph = ({ children }) => {
  return (
    <p className={styles}>
      {children}
    </p>
  )
}
Paragraph.propTypes = {
  children: PropTypes.node.isRequired
}

export default Paragraph