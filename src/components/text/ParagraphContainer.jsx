import PropTypes from 'prop-types';
const ParagraphContainer = ({ children }) => {
  return <div className="grid gap-8">{children}</div>;
};
export default ParagraphContainer;
ParagraphContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
