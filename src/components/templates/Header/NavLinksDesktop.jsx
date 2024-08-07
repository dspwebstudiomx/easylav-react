// NavLinksDesktop.jsx
import { DarkModeButton } from 'components';
import { navlinks } from 'data';
import { NavHashLink } from 'react-router-hash-link';

const NavLinksDesktop = () => {

  const classes = 'uppercase font-semibold text-sm text-dark text-bolder hover:text-secondary_light'

  function scrollWithOffset(element) {
    const offset = 220;
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <ul id='navlinks-desktop' className='hidden xl:flex gap-8 xl:gap-4 px-6 2xl:px-0 items-center justify-between'>
        {navlinks.map((navlink) => {
          return (
            <NavHashLink
              key={navlink.id}
              id={`navlink-${navlink.name}`}
              className={classes}
              to={navlink.href}
              onClick={() => scrollWithOffset}
            >
              {navlink.name}
            </NavHashLink>
          );
        })}
        <li>
          <NavHashLink className={classes} to='/franquicias'>Franquicias</NavHashLink>
        </li>
        <DarkModeButton />
      </ul>
    </>
  );
};

export default NavLinksDesktop;
