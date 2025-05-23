import { navLinksPages, navLinksSections } from 'data/navlinks';
import { scrollWithOffset } from 'functions';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const NavLinksTablet = () => {
  return (
    <ul
      id="navlinks-tablet"
      className="sm:flex xl:hidden top-[100px] hidden w-full justify-evenly gap-4 bg-primary dark:bg-secondary_dark p-5 px-8 lg:relative lg:top-[0px]">
      {navLinksSections.map((navlink) => {
        return (
          <li key={navlink.id} className="">
            <NavHashLink
              scroll={scrollWithOffset}
              id={`link-${navlink.linkId}`}
              className={({ isActive }) =>
                `text-sm md:text-base font-bold uppercase ${
                  isActive ? 'text-secondary_light' : 'text-primary_darkcontrast dark:text-light'
                } hover:text-secondary_light`
              }
              to={navlink.href}>
              {navlink.name}
            </NavHashLink>
          </li>
        );
      })}
      {navLinksPages.map((navlink) => {
        return (
          <li key={navlink.id} className="">
            <NavLink
              id={`link-${navlink.linkId}`}
              className={({ isActive }) =>
                `text-sm md:text-base font-bold uppercase ${
                  isActive ? 'text-secondary_light' : 'text-primary_darkcontrast dark:text-light'
                } hover:text-secondary_light`
              }
              to={navlink.href}>
              {navlink.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinksTablet;
