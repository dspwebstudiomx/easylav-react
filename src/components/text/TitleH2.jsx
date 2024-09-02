import { GENERAL_UI } from 'constants/constants';
import Proptypes from 'prop-types';

const titleH2UIString = `flex ${GENERAL_UI.TITLEH2.JUSTIFY} ${GENERAL_UI.TITLEH2.FONT_SIZE} ${GENERAL_UI.TITLEH2.FONT_WEIGHT} ${GENERAL_UI.TITLEH2.BACKGROUND_COLOR} ${GENERAL_UI.TITLEH2.COLOR}`;

const TitleH2 = ({ title }) => {

  return (
    <h2 className={`${titleH2UIString} mr-auto mb-2`}>
      {title}
    </h2>
  )
}
TitleH2.propTypes = {
  title: Proptypes.string.isRequired,
}

export default TitleH2