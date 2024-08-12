import PropTypes from 'prop-types';
import { NavHashLink } from "react-router-hash-link";

const SectionNavLink = ({ id, name, href, scroll, classes }) => {

  return (
    <NavHashLink
      key={id}
      id={`navlink-${name}`}
      className={classes}
      to={href}
      scroll={scroll}
    >
      {name}
    </NavHashLink>
  )
}
SectionNavLink.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  scroll: PropTypes.func.isRequired
}

export default SectionNavLink