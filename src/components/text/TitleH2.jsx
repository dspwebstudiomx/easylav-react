import { GENERAL_UI } from 'constants/constants';
import Proptypes from 'prop-types';

const styles = `
  flex
  ${GENERAL_UI.TITLEH2.FONT_FAMILY}
  ${GENERAL_UI.TITLEH2.FONT_SIZE}
  ${GENERAL_UI.TITLEH2.FONT_WEIGHT}
  ${GENERAL_UI.TITLEH2.COLOR}
  ${GENERAL_UI.TITLEH2.BACKGROUND_COLOR}
`;

const TitleH2 = ({ children, align }) => {

  return (
    <h2 className={`${styles} ${align}`}>
      {children}
    </h2>
  )
}
TitleH2.propTypes = {
  children: Proptypes.node.isRequired,
  align: Proptypes.string
}

export default TitleH2