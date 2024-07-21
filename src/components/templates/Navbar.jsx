import { useState } from 'react'
import logoImage from '../../assets/images/logos/horizontal/logo-color.png'
import { FaBars } from "react-icons/fa"
import Container from '../containers/Container'
import { FaXmark } from 'react-icons/fa6';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { navlinks } from '../../data/Navlinks';
import { GrGroup } from 'react-icons/gr';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
    setMenuOpen(!menuOpen);
    window.scrollTo({ behavior: 'smooth' });
  };

  return (
    <>
      <nav id='nav' className='w-full h-[120px] mx-auto bg-light z-50  shadow-xl'>
        <Container className={'flex justify-between px-8 sm:px-12 md:px-0 mx-auto z-50'}>
          <div id='navbar' className='flex justify-between items-center h-[120px] sm:px-16 2xl:px-0'>
            <div id='logo'>
              <a href="/">
                <img alt='logo' src={logoImage} className='w-[240px] 2xl:w-[260px]' />
              </a>
            </div>

            {/* Desktop menu */}
            <ul id='navlinks-desktop' className='hidden xl:flex gap-8 xl:gap-4 px-6 2xl:px-0'>
              {navlinks.map((navlink) => {
                return (
                  <li key={navlink.id} id={`navlink-${navlink.linkId}`} >
                    <NavHashLink id={`link-${navlink.linkId}`} activeClassName='text-primary' className='uppercase font-semibold text-base xl:text-md text-dark  hover:text-secondary_light navlink' to={navlink.href}>{navlink.name}</NavHashLink>
                  </li>
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
            <div className={!nav ? "hidden" : "absolute top-[120px] left-0 w-full h-[85vh] sm:h-[55vh] overflow-hidden flex flex-col bg-primary border-t-4 border-t-primary opacity-[99%] z-20 animate__animated animate__fadeInDown z-30 px-8 py-20"}>
              <ul id='navlinks-mobile' className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 w-full h-full justify-center items-center py-12 gap-6">
                {navlinks.map((navlink) => {
                  return (
                    <li id={`navlink-${navlink.linkId}`} key={navlink.id} className='shadow-xl text-base p-2 rounded-2xl items-center flex justify-center bg-light h-[100%] border-2 border-primary_dark '>
                      <NavHashLink id={`link-${navlink.linkId}`} to={navlink.href} onClick={toggleNav} className='flex flex-col w-full h-full py-6 items-center justify-center gap-4'>
                        <div className='flex items-center justify-center'>
                          {navlink.icon && <navlink.icon size={50} className='text-secondary' />}
                        </div>
                        <button className='text-secondary text-xl font-bold uppercase tracking-wide'>{navlink.name}</button>
                      </NavHashLink>
                    </li>
                  )
                })}
                <li id='navlink-franquicias' className='shadow-xl text-base p-6 rounded-2xl items-center flex justify-center bg-light h-[100%] border-2 border-primary_dark '>
                  <NavLink id='link-franquicias' to='/franquicias' onClick={toggleNav} className='flex flex-col w-full h-full py-6 items-center justify-between'>
                    <GrGroup size={50} className='text-secondary mx-auto' />
                    <button className='text-secondary text-xl font-bold uppercase tracking-wide'>Franquicias</button>
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Mobile menu */}
          </div>
        </Container>

        {/* Tablet menu */}
        <ul id='navlinks-tablet' className='hidden md:flex xl:hidden gap-8 bg-primary justify-evenly p-5 px-8'>
          {navlinks.map((navlink) => {
            return (
              <li id={`navlink-${navlink.linkId}`} key={navlink.id}>
                <NavHashLink id={`link-${navlink.linkId}`} to={navlink.href} className='uppercase font-semibold text-md text-light hover:text-secondary'>{navlink.name}</NavHashLink>
              </li>
            )
          })}
          <li id={'navlink-franquicias'}>
            <NavLink id='link-franquicias' className='uppercase font-semibold text-base xl:text-md text-secondary  hover:text-secondary_dark' to='/franquicias'>Franquicias</NavLink>
          </li>
        </ul>
        {/* Tablet menu */}
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

      <div className='bg-gradient-to-r from-primary to-secondary h-1 '></div>
    </>
  )
}

export default Navbar