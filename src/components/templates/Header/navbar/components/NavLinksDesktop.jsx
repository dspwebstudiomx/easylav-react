// NavLinksDesktop.jsx
import { navLinksPages, navLinksSections } from "data/navlinks";
import { scrollWithOffset } from "functions";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const NavLinksDesktop = () => {
  const classes =
    "uppercase font-semibold text-base text-dark text-bolder hover:text-secondary_light last:text-primary_dark target:text-primary"

  return (
    <>
      <ul
        id="navlinks-desktop"
        className="hidden items-center justify-between gap-8 px-6 xl:flex xl:gap-4 2xl:px-0"
      >
        {navLinksSections.map((navlink) => {
          return (
            <NavHashLink
              key={navlink.id}
              id={`navlink ${navlink.name}`}
              className={classes}
              to={navlink.href}
              scroll={scrollWithOffset}
              title={`navlink ${navlink.linkId}`}

            >
              {navlink.name}
            </NavHashLink>
          );
        })}
        {navLinksPages.map((navlink) => {
          return (
            <NavLink
              key={navlink.id}
              id={`navlink-${navlink.name}`}
              className={classes}
              to={navlink.href}
              title={`navlink ${navlink.linkId}`}

            >
              {navlink.name}
            </NavLink>
          );
        })}
      </ul >
    </>
  );
};

export default NavLinksDesktop;