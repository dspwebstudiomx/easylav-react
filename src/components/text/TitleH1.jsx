import { GENERAL_UI } from 'constants/constants'
import PropTypes from 'prop-types'

const styles = `${GENERAL_UI.TITLEH1.COLOR} ${GENERAL_UI.TITLEH1.FONT_SIZE} ${GENERAL_UI.TITLEH1.FONT_WEIGHT} ${GENERAL_UI.TITLEH1.BACKGROUND_COLOR}`

const TitleH1 = ({ children }) => {
  return (
    <h1 className={styles}>
      {children}
    </h1>
  )
}
TitleH1.propTypes = {
  children: PropTypes.node.isRequired
}

export default TitleH1