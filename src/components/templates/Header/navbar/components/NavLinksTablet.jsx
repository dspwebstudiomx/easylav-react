import { navLinksPages, navLinksSections } from "data/navlinks";
import { scrollWithOffset } from "functions";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const NavLinksTablet = () => {
  return (
    <ul
      id="navlinks-tablet"
      className="sm:flex xl:hidden top-[100px] hidden w-full justify-evenly gap-4 bg-primary dark:bg-secondary_dark p-5 px-8 lg:relative lg:top-[0px] "
    >
      {navLinksSections.map((navlink) => {
        return (
          <NavHashLink
            scroll={scrollWithOffset}
            key={navlink.id}
            id={`link-${navlink.linkId}`}
            className="navlink text-xl font-bold uppercase text-light hover:text-secondary_light"
            to={navlink.href}
          >
            {navlink.name}
          </NavHashLink>
        );
      })}
      {navLinksPages.map((navlink) => {
        return (
          <NavLink
            key={navlink.id}
            id={`link-${navlink.linkId}`}
            className="navlink text-xl font-bold uppercase text-light hover:text-secondary_light"
            to={navlink.href}
          >
            {navlink.name}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinksTablet;
