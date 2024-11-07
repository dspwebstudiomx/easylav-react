import { GENERAL_UI } from 'constants/constants';
import Proptypes from 'prop-types';

const classes = `
  ${GENERAL_UI.TITLEH3.FONT_FAMILY}
  ${GENERAL_UI.TITLEH3.FONT_SIZE}
  ${GENERAL_UI.TITLEH3.FONT_WEIGHT}
  ${GENERAL_UI.TITLEH3.COLOR}
  ${GENERAL_UI.TITLEH3.BACKGROUND_COLOR}
  ${GENERAL_UI.TITLEH3.JUSTIFY}
  ${GENERAL_UI.TITLEH3.TEXT_TRANSFORM}
`;

const TitleH3 = ({ children, className }) => {

  return (
    <h3 className={`${classes} ${className}`}>
      {children}
    </h3>
  )
}
TitleH3.propTypes = {
  children: Proptypes.node,
  className: Proptypes.string
}

export default TitleH3