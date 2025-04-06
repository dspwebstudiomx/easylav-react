import PropTypes from 'prop-types';

const Spacing = ({ distance }) => {
  return <div className={`${distance} text-xs flex items-center justify-center info`}>{`spacing-${distance}`}</div>;
};
Spacing.propTypes = {
  distance: PropTypes.string,
};

export default Spacing;
