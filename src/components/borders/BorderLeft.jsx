import PropTypes from "prop-types";

const BorderLeft = ({ children, position }) => {
  return (
    <div className={`flex border-l-4 border-l-primary ${position}`}>
      <span className="ml-4"></span>
      {children}
    </div>
  );
};
BorderLeft.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
};

export default BorderLeft;
