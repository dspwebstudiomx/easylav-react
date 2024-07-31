import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link';
import { navlinks } from '../../data/Navlinks';
import Container from '../containers/Container'
import { FaBars } from "react-icons/fa"
import { FaXmark } from 'react-icons/fa6';
import { GrGroup } from 'react-icons/gr';
import logoImage from '../../assets/images/logos/horizontal/logo-color.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
    setMenuOpen(!menuOpen);
  };
  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* Navbar */}
      <nav id='nav' className='fixed top-0 w-full h-[120px] mx-auto bg-light z-50  shadow-xl md:px-12 xl:px-0'>
        <Container className={'flex justify-between px-8 sm:px-0 md:px-0 mx-auto z-50'}>
          <div id='navbar' className='flex justify-between items-center h-[120px]'>
            <div id='logo'>
              <a href="/">
                <img alt='logo' src={logoImage} className='w-[210px] 2xl:w-[260px]' />
              </a>
            </div>

            {/* Desktop menu */}
            <ul id='navlinks-desktop' className='hidden xl:flex gap-8 xl:gap-4 px-6 2xl:px-0'>
              {/* <Link className='uppercase font-semibold text-base xl:text-md text-dark  hover:text-secondary_light navlink' to={'/'}>Inicio</Link> */}
              {navlinks.map((navlink) => {
                return (
                  <NavHashLink scroll={element => scrollWithOffset(element, 120)} key={navlink.id} id={`link-${navlink.linkId}`} className='uppercase font-semibold text-base xl:text-md text-dark  hover:text-secondary_light navlink' to={navlink.href}>{navlink.name}</NavHashLink>
                )
              })}
              <li>
                <NavLink className='uppercase font-semibold text-base xl:text-md text-primary  hover:text-primary' to='/franquicias'>Franquicias</NavLink>
              </li>
            </ul>
            {/* Desktop menu */}

            {/* Menu button */}
            <div id='menu-button' onClick={toggleNav} className="md:hidden z-40 flex gap-8 items-center w-[7%]">
              {!nav ? <FaBars size={30} className="text-secondary z-40" /> : <FaXmark size={36} className=" text-secondary dark:text-slate-100 z-30" />}
            </div>
            {/* Menu button */}

            {/* Mobile menu */}
            <div className={!nav ? "hidden" : "absolute top-[124px] left-0 w-full h-[95vh] sm:h-[65vh] overflow-hidden flex flex-col items-center justify-start bg-primary border-t-4 border-t-primary opacity-[99%] z-20 animate__animated animate__fadeInDown z-30 px-8"}>
              <ul id='navlinks-mobile' className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 w-full px-2 py-8 gap-3">
                {navlinks.map((navlink) => {
                  return (
                    <li id={`navlink-${navlink.linkId}`} key={navlink.id} className='shadow-xl text-base rounded-2xl items-center flex justify-center bg-light h-[100%] border-4 border-primary_dark p-4'>
                      <NavHashLink scroll={element => scrollWithOffset(element, 98)} id={`link-${navlink.linkId}`} to={navlink.href} onClick={toggleNav} className='flex flex-col w-full h-full py-2 items-center justify-center gap-4'>
                        <div className='flex items-center justify-center'>
                          {navlink.icon && <navlink.icon size={32} className='text-secondary' />}
                        </div>
                        <button className='text-secondary text-base font-bold uppercase tracking-wide'>{navlink.name}</button>
                      </NavHashLink>
                    </li>
                  )
                })}
                <li id='navlink-franquicias' className='shadow-xl text-base p-2 rounded-2xl items-center flex flex-col justify-center bg-light h-[100%] border-4 border-primary_dark '>
                  <NavHashLink id='link-franquicia' to='/franquicias'>
                    <div className='flex flex-col items-center justify-center gap-5 py-4'>
                      <GrGroup size={32} className='text-secondary' />
                      <button className='text-secondary text-base font-bold uppercase tracking-wide'>Franquicias</button>
                    </div>
                  </NavHashLink>
                </li>
              </ul>
            </div>
            {/* Mobile menu */}
          </div>
        </Container>

        {menuOpen && (
          <style>
            {`
          body {
            overflow-y: hidden;
            }
            `}
          </style>
        )}
      </nav >
      {/* Navbar */}

      {/* Line */}
      <div className='bg-gradient-to-r from-primary to-secondary h-1 '></div>
      {/* Line */}

      {/* Tablet menu */}
      <ul id='navlinks-tablet' className='hidden md:flex fixed top-[120px] w-full z-30 xl:hidden gap-8 bg-primary justify-evenly p-5 px-8'>
        {navlinks.map((navlink) => {
          return (
            <NavHashLink scroll={element => scrollWithOffset(element, 160)} key={navlink.id} id={`link-${navlink.linkId}`} className='uppercase font-semibold text-base xl:text-md text-dark  hover:text-secondary_light navlink' to={navlink.href}>{navlink.name}</NavHashLink>
          )
        })}
        <li id={'navlink-franquicias'}>
          <NavLink id='link-franquicias' className='uppercase font-semibold text-base xl:text-md text-secondary  hover:text-secondary_dark' to='/franquicias'>Franquicias</NavLink>
        </li>
      </ul>
      {/* Tablet menu */}
    </>
  )
}

export default Navbar