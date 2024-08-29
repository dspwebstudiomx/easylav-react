import { BORDER_CENTER_UI } from 'constants/constants'
import PropTypes from 'prop-types'

const BorderCenter = ({ children }) => {

  const styles = `${BORDER_CENTER_UI.BORDER_LEFT} ${BORDER_CENTER_UI.JUSTIFY}`

  return (
    <div className={styles}>
      <span className='px-4'>
        {children}
      </span>
    </div>
  )
}
BorderCenter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BorderCenter