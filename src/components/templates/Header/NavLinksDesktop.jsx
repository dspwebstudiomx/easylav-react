
import { NavHashLink } from 'react-router-hash-link';
import { navlinks } from '../../../data/navlinks';
import { scrollWithOffset } from '../../../functions/scrollWithOffset';

const NavLinksDesktop = () => {

  const classes = 'uppercase font-semibold text-sm text-dark  hover:text-secondary_light navlink'

  return (
    <ul id='navlinks-desktop' className='hidden xl:flex gap-8 xl:gap-4 px-6 2xl:px-0'>
      {navlinks.map((navlink) => {
        return (
          <NavHashLink
            scroll={scrollWithOffset}
            key={navlink.id}
            id={`link-${navlink.linkId}`}
            className={classes}
            to={navlink.href}
          >
            {navlink.name}
          </NavHashLink>
        );
      })}
      <li>
        <NavHashLink className={classes} to='/franquicias'>Franquicias</NavHashLink>
      </li>
    </ul>
  );
};

export default NavLinksDesktop;
