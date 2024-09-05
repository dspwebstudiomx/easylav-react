import { GENERAL_UI } from 'constants/constants'
import PropTypes from 'prop-types'


const Paragraph = ({ children, className }) => {
  const styles = `${GENERAL_UI.PARAGRAPH.FONT_SIZE} ${GENERAL_UI.PARAGRAPH.FONT_WEIGHT} ${GENERAL_UI.PARAGRAPH.COLOR} ${GENERAL_UI.PARAGRAPH.LETTER_SPACING} ${GENERAL_UI.PARAGRAPH.LINE_HEIGHT} `
  return (
    <p className={`${styles} ${className} `}>
      {children}
    </p>
  )
}
Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Paragraph