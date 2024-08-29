/*
  Border Bottom
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-20
*/

import { BORDER_BOTTOM_UI } from 'constants/constants'
import PropTypes from 'prop-types'

const BorderBottom = ({ ...props }) => {

  const { children } = props

  const styles = `${BORDER_BOTTOM_UI.BORDER_LEFT} ${BORDER_BOTTOM_UI.JUSTIFY} ${BORDER_BOTTOM_UI.WIDTH}`

  return (
    <div className={styles}>
      {children}
    </div >
  )
}
BorderBottom.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BorderBottom