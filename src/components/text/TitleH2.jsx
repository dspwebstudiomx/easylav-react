import { GENERAL_UI } from 'constants/constants';
import Proptypes from 'prop-types';

const classes = `
  ${GENERAL_UI.TITLEH2.FONT_FAMILY}
  ${GENERAL_UI.TITLEH2.FONT_SIZE}
  ${GENERAL_UI.TITLEH2.FONT_WEIGHT}
  ${GENERAL_UI.TITLEH2.COLOR}
  ${GENERAL_UI.TITLEH2.BACKGROUND_COLOR}
  ${GENERAL_UI.TITLEH3.TEXT_TRANSFORM}
`;

const TitleH2 = ({ children, justify }) => {

  return (
    <h2 className={`${classes} ${justify}`}>
      {children}
    </h2>
  )
}
TitleH2.propTypes = {
  children: Proptypes.node.isRequired,
  justify: Proptypes.string
}

export default TitleH2