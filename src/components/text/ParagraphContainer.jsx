import PropTypes from 'prop-types';
const ParagraphContainer = ({ children, distance }) => {
  return <div className={`grid gap-12 ${distance}`}>{children}</div>;
};
export default ParagraphContainer;
ParagraphContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
ParagraphContainer.defaultProps = {
  distance: 'gap-8',
};
// PropTypes
ParagraphContainer.propTypes = {
  children: PropTypes.node.isRequired,
  distance: PropTypes.string,
};
