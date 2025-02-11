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
const SectionBanner = ({ children, themeBackgroundColor, themeTextColorDark, themeTextColor, themeBackgroundDark }) => {

  const classes = ` ${BANNER_UI.COLOR} ${BANNER_UI.PADDING} mx-auto text-center uppercase font-semibold tracking-wide text-2xl bg-${themeBackgroundColor} text-${themeTextColor} border-t-2 border-b-2  border-${themeTextColor}   dark:bg-${themeBackgroundDark} dark:text-light dark:border-${themeTextColorDark}`

  return (
    <p className={classes}>
      {children}
    </p>
  )
}
SectionBanner.propTypes = {
  children: PropTypes.node.isRequired,
  themeBackgroundColor: PropTypes.string.isRequired,
  themeTextColor: PropTypes.string.isRequired,
  themeTextColorDark: PropTypes.string.isRequired,
  themeBackgroundDark: PropTypes.string.isRequired,
}

export default SectionBanner