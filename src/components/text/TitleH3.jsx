import { GENERAL_UI } from 'constants/constants';
import Proptypes from 'prop-types';

const classes = `
  ${GENERAL_UI.TITLEH3.FONT_FAMILY}
  ${GENERAL_UI.TITLEH3.FONT_SIZE}
  ${GENERAL_UI.TITLEH3.FONT_WEIGHT}
  ${GENERAL_UI.TITLEH3.COLOR}
  ${GENERAL_UI.TITLEH3.BACKGROUND_COLOR}
  ${GENERAL_UI.TITLEH3.JUSTIFY}
`;

const TitleH3 = ({ title, className }) => {

  return (
    <h3 className={`${classes} -mb-3 ${className}`}>
      {title}
    </h3>
  )
}
TitleH3.propTypes = {
  title: Proptypes.string.isRequired,
  className: Proptypes.string
}

export default TitleH3