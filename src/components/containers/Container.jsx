import PropTypes from "prop-types";

export default function Container({ id, children, className }) {

  const classes = {
    div: `${className} flex flex-col gap-20 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg`
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

