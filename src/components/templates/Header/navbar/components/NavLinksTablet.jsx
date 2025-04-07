import { navLinksPages, navLinksSections } from 'data/navlinks';
import { scrollWithOffset } from 'functions';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const NavLinksTablet = () => {
  return (
    <ul
      id="navlinks-tablet"
      className="sm:flex xl:hidden top-[100px] hidden w-full justify-evenly gap-4 bg-primary dark:bg-secondary_dark p-5 px-8 lg:relative lg:top-[0px] ">
      {navLinksSections.map((navlink, index) => {
        return (
          <li key={navlink.id} className="">
            <NavHashLink
              scroll={scrollWithOffset}
              key={index.id}
              id={`link-${navlink.linkId}`}
              className="navlink md:text-lg lg:text-lg font-bold uppercase text-primary_darkcontrast dark:text-light hover:text-secondary_light"
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
              key={navlink.id}
              id={`link-${navlink.linkId}`}
              className="navlink md:text-lg lg:text-lg  font-bold uppercase text-primary_darkcontrast dark:text-light hover:text-secondary_light"
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
