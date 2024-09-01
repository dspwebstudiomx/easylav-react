import { scrollToTop } from "functions";
import PropTypes from 'prop-types';
import { TbPoint } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function FooterLinksGenerator({ links }) {
  const classes = {
    footerSectionsList: "flex flex-col gap-2 text-lg xl:text-sm",
  }
  return (
    <ul className={classes.footerSectionsList}>
      {links.map((link) => {
        return (
          <li key={link.id} id={`footer-navlink-${link.linkId}`}>
            <Link
              id={`footer-link-${link.linkId}`}
              to={link.href}
              className="text-white flex items-center hover:text-primary"
            >
              <TbPoint
                className="text-2xl text-primary"
                size={32}
                title={`Visita ${link.name}`}
                onClick={scrollToTop}
              />
              <span className="ml-2">{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  )
}
FooterLinksGenerator.propTypes = {
  links: PropTypes.array,
}