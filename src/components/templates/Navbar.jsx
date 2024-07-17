import { useState } from 'react'
import logoImage from '../../assets/images/logos/horizontal/logo-color.png'
import { FaBars } from "react-icons/fa"
import { GrCoatCheck, GrHome, GrIndicator, GrUser, GrMailOption, GrGroup } from "react-icons/gr";


import Container from '../containers/Container'
import { FaXmark } from 'react-icons/fa6';

const navlinks = [
  { id: '1', name: 'Inicio', href: '/', icon: GrHome },
  { id: '2', name: 'Quienes Somos', href: '/#nosotros', icon: GrUser },
  { id: '3', name: 'Servicios', href: '/#servicios', icon: GrCoatCheck },
  { id: '4', name: 'Sucursales', href: '/sucursales', icon: GrIndicator },
  { id: '5', name: 'Contacto', href: '/contacto', icon: GrMailOption },
]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
    setMenuOpen(!menuOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav id='nav' className='w-full h-[120px] mx-auto bg-light z-50  shadow-xl'>
        <Container className={'flex justify-between px-8 sm:px-12 md:px-0 mx-auto z-50'}>
          <div id='navbar' className='flex justify-between items-center h-[120px]'>
            <div id='logo'>
              <a href="/">
                <img alt='logo' src={logoImage} className='w-[240px] 2xl:w-[260px]' />
              </a>
            </div>

            {/* Desktop menu */}
            <ul id='navlinks-desktop' className='hidden sm:flex gap-8 xl:gap-4'>
              {navlinks.map((navlink) => {
                return (
                  <li key={navlink.id} >
                    <a className='uppercase font-semibold text-base xl:text-md text-dark  hover:text-secondary_light navlink' href={navlink.href}>{navlink.name}</a>
                  </li>
                )
              })}
              <li>
                <a className='uppercase font-semibold text-base xl:text-md text-primary  hover:text-primary' href='/franquicias'>Franquicias</a>
              </li>
            </ul>
            {/* Desktop menu */}

            {/* Menu button */}
            <div id='menu-button' onClick={toggleNav} className="sm:hidden z-40 flex gap-8 items-center w-[7%]">
              {!nav ? <FaBars size={30} className="text-secondary z-40" /> : <FaXmark size={36} className=" text-secondary dark:text-slate-100 z-30" />}
            </div>
            {/* Menu button */}

            {/* Mobile menu */}
            <div className={!nav ? "hidden" : "absolute top-[120px] left-0 w-full h-[89vh] overflow-hidden flex flex-col items-center bg-primary border-t-4 border-t-primary opacity-[99%] z-20 gap-4 animate__animated animate__fadeInDown p-12 py-0 z-30"}>
              <ul id='navlinks-mobile' className="grid grid-cols-2 gap-8 mt-28">
                {navlinks.map((navlink) => {
                  return (
                    <li key={navlink.id} className='shadow-xl text-xl p-6 rounded-2xl items-center flex justify-center bg-light h-[180px] border-2 border-primary_dark '>
                      <a href={navlink.href} onClick={toggleNav} className='grid gap-2 w-full h-full'>
                        <div className='flex items-center justify-center'>
                          {navlink.icon && <navlink.icon size={50} className='text-secondary' />}
                        </div>
                        <button className='text-secondary font-semibold uppercase tracking-wide'>{navlink.name}</button>
                      </a>
                    </li>
                  )
                })}
                <li className='shadow-xl text-xl p-6 rounded-lg items-center flex justify-center bg-light border-2 border-primary_dark h-[180px] '>
                  <a href='/franquicias' onClick={toggleNav} className='grid w-full h-full py-4'>
                    <GrGroup size={50} className='text-secondary mx-auto' />
                    <button className='text-secondary_dark font-semibold uppercase tracking-wide'>Franquicias</button>
                  </a>
                </li>
              </ul>
            </div>
            {/* Mobile menu */}
          </div>
        </Container>

        {/* Tablet menu */}
        <ul id='navlinks-tablet' className='hidden sm:flex xl:hidden gap-8 bg-primary justify-evenly py-5'>
          {navlinks.map((navlink) => {
            return (
              <a className='uppercase font-semibold text-md text-secondary_light  hover:text-secondary' key={navlink.id} href={navlink.href}>{navlink.name}</a>
            )
          })}
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