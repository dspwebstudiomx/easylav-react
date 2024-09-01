import { navLinksPages, navLinksSections } from "data/navlinks";
import { scrollWithOffset } from "functions";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const NavLinksMobile = ({ onLinkClick }) => {
  return (
    <div className="animate__animated animate__fadeInDown absolute left-0 top-[103px] z-20 z-30 flex h-[95vh] w-full flex-col items-center justify-start overflow-hidden border-t-4 border-t-primary bg-primary px-8 opacity-[99%]">
      <ul
        id="navlinks-mobile"
        className="grid w-full grid-cols-2 gap-3 px-2 py-8 place-content-center"
      >
        {navLinksSections.map((navlink) => {
          return (
            <li
              id={`navlink-${navlink.linkId}`}
              key={navlink.id}
              className="flex h-[140px] items-center justify-center rounded-2xl border-4 border-primary_dark bg-light p-4 text-base shadow-xl"
            >
              <NavHashLink
                id={`link-${navlink.linkId}`}
                to={navlink.href}
                className="flex h-full w-full flex-col items-center justify-center gap-4 py-2"
                onClick={onLinkClick}
                scroll={(el) => scrollWithOffset(el)}
              >
                <div className="flex items-center justify-center">
                  {navlink.icon && (
                    <navlink.icon size={32} className="text-secondary" />
                  )}
                </div>
                <span className="text-base font-bold uppercase tracking-wide text-secondary text-center">
                  {navlink.name}
                </span>
              </NavHashLink>
            </li>
          );
        })}
        {navLinksPages.map((navlink) => {
          return (
            <li
              id={`navlink-${navlink.linkId}`}
              key={navlink.id}
              className="flex h-[140px] items-center justify-center rounded-2xl border-4 border-primary_dark bg-light p-4 text-base shadow-xl"
            >
              <NavLink
                id={`link-${navlink.linkId}`}
                to={navlink.href}
                className="flex h-full w-full flex-col items-center justify-center gap-4 py-2"
                onClick={onLinkClick}
                scroll={(el) => scrollWithOffset(el)}
              >
                <div className="flex items-center justify-center">
                  {navlink.icon && (
                    <navlink.icon size={32} className="text-secondary" />
                  )}
                </div>
                <span className="text-base font-bold uppercase tracking-wide text-secondary text-center">
                  {navlink.name}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

NavLinksMobile.propTypes = {
  toogleNav: PropTypes.any,
  onLinkClick: PropTypes.any,
};

export default NavLinksMobile;
