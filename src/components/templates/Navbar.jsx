import { useState } from 'react'
import logoImage from '../../assets/images/logos/horizontal/logo-color.png'
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import Container from '../containers/Container'

const navlinks = [
  { id: '1', name: 'Inicio', href: '/' },
  { id: '2', name: 'Quienes Somos', href: '/#nosotros' },
  { id: '3', name: 'Servicios', href: '/#servicios' },
  { id: '4', name: 'Sucursales', href: '/sucursales' },
  { id: '5', name: 'Contacto', href: '/contacto' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  return (
    <>
      <nav id='nav' className='w-full h-[120px] mx-auto bg-light z-50  shadow-xl'>
        <Container className={'flex justify-between px-8 md:px-0 mx-auto'}>
          <div id='navbar' className='flex justify-between items-center h-[120px]'>
            <div id='logo'>
              <a href="/">
                <img alt='logo' src={logoImage} className='w-[180px] md:w-[210px] lg:w-[240px] 2xl:w-[260px]' />
              </a>
            </div>

            {/* Desktop menu */}
            <ul id='navlinks-desktop' className='hidden xl:flex gap-8 xl:gap-4'>
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
              {!nav ? <FaBars size={30} className="text-secondary z-40" /> : <FaXmark size={32} className="animate__animated animate__fadeInRight absolute top-[160px] right-[40px] text-light dark:text-slate-100 z-30" />}
            </div>
            {/* Menu button */}

            {/* Mobile menu */}
            <div className={!nav ? "hidden" : "absolute top-[120px] left-0 w-full h-[89vh] overflow-hidden flex flex-col items-center bg-secondary opacity-[99%] z-20 gap-4 animate__animated animate__fadeInRight"}>
              <ul id='navlinks-mobile' className="flex flex-col gap-8 mt-28">
                {navlinks.map((navlink) => {
                  return (
                    <li key={navlink.id} className='border-2 border-primary_light text-2xl py-6 rounded-lg items-center flex justify-center w-[80vw]'>
                      <a href={navlink.href} onClick={toggleNav}>
                        <button className='text-light '>{navlink.name}</button>
                      </a>
                    </li>
                  )
                })}
                <li className='border-2 border-primary_light text-2xl py-6 rounded-lg items-center flex justify-center w-[80vw]'>
                  <a href='/franquicias' onClick={toggleNav}>
                    <button className='text-light '>Franquicias</button>
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
            return <a className='uppercase font-semibold text-md text-secondary  hover:text-secondary' key={navlink.id} href={navlink.href}>{navlink.name}</a>
          })}
        </ul>
        {/* Tablet menu */}
      </nav >

      <div className='bg-gradient-to-r from-primary to-secondary h-1 '></div>
    </>
  )
}

export default Navbar