/*
  Banner
  =====================================+
  Creado por : Daniel Pérez
  Fecha: 2024-09-11
*/

// Importaciones
import { BANNER_UI } from 'constants/constants'
import PropTypes from 'prop-types'

// Estructura
const SectionBanner = ({ children, themeColor, themeColorDark }) => {

  const classes = ` bg-${themeColor}_light text-${themeColor}_dark ${BANNER_UI.COLOR} ${BANNER_UI.PADDING} mx-auto text-center uppercase border-${themeColor} border-t-2 border-b-2 font-semibold tracking-wide text-2xl  dark:bg-${themeColorDark}_light dark:text-light  dark:border-${themeColorDark}`

  return (
    <p className={classes}>
      {children}
    </p>
  )
}
SectionBanner.propTypes = {
  children: PropTypes.node.isRequired,
  themeColor: PropTypes.string.isRequired,
  themeColorDark: PropTypes.string.isRequired,
}

export default SectionBanner