import {
  navLinksPages,
  navLinksSections,
} from 'data/navlinks';
import { scrollWithOffset } from 'functions';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const NavLinksTablet = () => {

  return (
    <ul id='navlinks-tablet' className='hidden md:flex fixed top-[100px] sm:relative sm:top-[0px] w-full z-30 xl:hidden gap-8 bg-primary justify-evenly p-5 px-8'>
      {navLinksSections.map((navlink) => {
        return (
          <NavHashLink scroll={scrollWithOffset} key={navlink.id} id={`link-${navlink.linkId}`} className='uppercase font-semibold text-base xl:text-md text-dark  hover:text-secondary_light navlink' to={navlink.href}>{navlink.name}</NavHashLink>
        )
      })}
      {navLinksPages.map((navlink) => {
        return (
          <NavLink scroll={scrollWithOffset} key={navlink.id} id={`link-${navlink.linkId}`} className='uppercase font-semibold text-base xl:text-md text-dark  hover:text-secondary_light navlink' to={navlink.href}>{navlink.name}</NavLink>
        )
      })}
    </ul>
  )
}

export default NavLinksTablet