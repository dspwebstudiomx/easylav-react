import { navLinksPages, navLinksSections } from 'data/navlinks';
import { scrollWithOffset, scrollToTop } from 'functions'; // Importamos scrollToTop
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const NavLinksDesktop = () => {
  const location = useLocation();

  return (
    <ul
      id="navlinks-desktop"
      className="hidden items-center justify-between gap-8 px-6 xl:flex xl:gap-4 2xl:px-0 uppercase text-bolder">
      {navLinksSections.map((navlink) => {
        return (
          <NavHashLink
            key={navlink.id}
            id={`navlink ${navlink.name}`}
            className={({ isActive }) =>
              `hover:text-secondary_dark cursor-pointer ${isActive ? 'text-primary_dark' : ''}`
            }
            to={navlink.href}
            scroll={scrollWithOffset}
            title={`Ir a ${navlink.linkId}`}
            onClick={() => {
              if (location.pathname === navlink.href) {
                scrollToTop();
              }
            }}>
            {navlink.name}
          </NavHashLink>
        );
      })}
      {navLinksPages.map((navlink) => {
        return (
          <NavLink
            key={navlink.id}
            id={`navlink-${navlink.name}`}
            className={({ isActive }) =>
              `hover:text-secondary_dark last:text-secondary_dark last:hover:text-primary_dark cursor-pointer ${
                isActive ? 'text-primary_dark' : ''
              }`
            }
            to={navlink.href}
            title={`Ir a ${navlink.linkId}`}
            onClick={() => {
              if (location.pathname === navlink.href) {
                scrollToTop(); // Usamos tu función scrollToTop
              }
            }}>
            {navlink.name}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavLinksDesktop;
