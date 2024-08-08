// NavLinksDesktop.jsx
import { DarkModeButton } from 'components';
import {
  navLinksPages,
  navLinksSections,
} from 'data/navlinks';
import { scrollToTop, scrollWithOffset } from 'functions';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const NavLinksDesktop = () => {

  const classes = 'uppercase font-semibold text-sm text-dark text-bolder hover:text-secondary_light'

  return (
    <>
      <ul id='navlinks-desktop' className='hidden xl:flex gap-8 xl:gap-4 px-6 2xl:px-0 items-center justify-between'>
        {navLinksSections.map((navlink) => {
          return (
            <NavHashLink
              key={navlink.id}
              id={`navlink-${navlink.name}`}
              className={classes}
              to={navlink.href}
              scroll={
                scrollWithOffset}
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
              scroll={() => scrollToTop()}
            >
              {navlink.name}
            </NavLink>
          );
        })}
        <DarkModeButton />
      </ul>
    </>
  );
};

export default NavLinksDesktop;
