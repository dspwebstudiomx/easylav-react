
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { navlinks } from '../../../data/navlinks';

const NavLinksTablet = () => {

  const scrollWithOffset = (element) => {
    const offset = 160;
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <ul id='navlinks-tablet' className='hidden md:flex fixed top-[100px] w-full z-30 xl:hidden gap-8 bg-primary justify-evenly p-5 px-8'>
      {navlinks.map((navlink) => {
        return (
          <NavHashLink scroll={scrollWithOffset} key={navlink.id} id={`link-${navlink.linkId}`} className='uppercase font-semibold text-base xl:text-md text-dark  hover:text-secondary_light navlink' to={navlink.href}>{navlink.name}</NavHashLink>
        )
      })}
      <li id={'navlink-franquicias'}>
        <NavLink id='link-franquicias' className='uppercase font-semibold text-base xl:text-md text-secondary  hover:text-secondary_dark' to='/franquicias'>Franquicias</NavLink>
      </li>
    </ul>
  )
}

export default NavLinksTablet