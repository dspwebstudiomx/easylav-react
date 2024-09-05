import { GENERAL_UI } from 'constants/constants';
import Proptypes from 'prop-types';

const titleH3UIString = `flex ${GENERAL_UI.TITLEH3.JUSTIFY} ${GENERAL_UI.TITLEH3.FONT_SIZE} ${GENERAL_UI.TITLEH3.FONT_WEIGHT} ${GENERAL_UI.TITLEH3.BACKGROUND_COLOR} ${GENERAL_UI.TITLEH3.COLOR}`;

const TitleH3 = ({ title, className }) => {

  return (
    <h3 className={`${titleH3UIString} mr-auto -mb-2 ${className}`}>
      {title}
    </h3>
  )
}
TitleH3.propTypes = {
  title: Proptypes.string.isRequired,
  className: Proptypes.string
}

export default TitleH3