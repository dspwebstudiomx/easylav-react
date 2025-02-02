import { navLinksPages, navLinksSections } from "data/navlinks";
import { scrollWithOffset } from "functions";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const NavLinksDesktop = () => {
  const baseClasses =
    "uppercase font-semibold text-base text-dark text-bolder hover:text-secondary_dark last:text-primary_dark target:text-primary";

  const activeClasses = "text-secondary"; // Add this line for active link styling

  return (
    <>
      <ul
        id="navlinks-desktop"
        className="hidden items-center justify-between gap-8 px-6 xl:flex xl:gap-4 2xl:px-0 items-center"
      >
        {navLinksSections.map((navlink) => {
          return (
            <NavHashLink
              key={navlink.id}
              id={`navlink ${navlink.name}`}
              className={({ isActive }) => {
                const classNames = `${isActive ? activeClasses : baseClasses}`;
                return classNames;
              }}
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
              className={({ isActive }) => {
                const classNames = `${baseClasses} ${isActive ? activeClasses : ''}`;
                return classNames;
              }}
              to={navlink.href}
              title={`navlink ${navlink.linkId}`}
            // Spread the remaining props to avoid passing isActive
            >
              {navlink.name}
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default NavLinksDesktop;
