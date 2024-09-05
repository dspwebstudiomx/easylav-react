import PropTypes from "prop-types";

export default function Container({ id, children, className }) {

  const classes = {
    div: `${className} flex flex-col gap-20 max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto overflow-hidden wrap`
  }

  return (
    <div id={id} className={classes.div}>
      {children}
    </div>
  );
}

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

