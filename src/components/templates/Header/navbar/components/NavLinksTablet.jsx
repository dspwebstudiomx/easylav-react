import { navLinksPages, navLinksSections } from 'data/navlinks';
import { scrollToTop, scrollWithOffset } from 'functions';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useState } from 'react';

const NavLinksTablet = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <ul
      id="navlinks-tablet"
      className="sm:flex xl:hidden top-[100px] hidden w-full justify-evenly gap-4 bg-primary dark:bg-secondary_dark p-5 px-8 lg:relative lg:top-[0px]">
      {navLinksSections.map((navlink) => {
        const isActive = activeSection === navlink.linkId;
        const colorClass = isActive ? 'text-secondary_light' : 'text-primary_darkcontrast dark:text-light';
        return (
          <li key={navlink.id} className="">
            <NavHashLink
              scroll={scrollWithOffset}
              id={`link-${navlink.linkId}`}
              className={`text-sm md:text-base font-bold uppercase hover:text-secondary_light ${colorClass}`}
              onClick={navlink.name === 'Inicio' ? scrollToTop : () => setActiveSection(navlink.linkId)}
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
              to={navlink.href}
              onClick={() => {
                setActiveSection('');
                if (navlink.name === 'Inicio') scrollToTop();
              }}>
              {({ isActive }) => {
                const colorClass = isActive ? 'text-secondary_light' : 'text-primary_darkcontrast dark:text-light';
                return (
                  <span className={`text-sm md:text-base font-bold uppercase hover:text-secondary_light ${colorClass}`}>
                    {navlink.name}
                  </span>
                );
              }}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinksTablet;
