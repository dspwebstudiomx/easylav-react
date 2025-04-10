/*
  Navbar
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-12
*/

// Importaciones
import {
  Container,
  DarkModeButton,
  HeaderLine,
  Logo,
  MenuButton,
  NavLinksDesktop,
  NavLinksMobile,
  NavLinksTablet,
} from 'components';
import { useState } from 'react';

// Estructura
const Navbar = () => {
  const [navigationLinks, setNavigationLinks] = useState(false);
  const toggleNav = () => {
    setNavigationLinks(!navigationLinks);
  };

  const handleLinkClick = () => {
    toggleNav();
  };

  return (
    <nav
      id="nav"
      className="bg-light z-40 fixed top-0 flex flex-col justify-center sm:absolute xl:fixed shadow-xl w-full h-[110px] sm:h-[150px] xl:h-[110px]">
      <Container className="flex gap-12 justify-between items-center mx-auto p-6 sm:px-8 lg:px-12 2xl:px-0 w-full h-full">
        <div id="navbar" className="flex items-center justify-between gap-4 w-full h-full">
          <Logo />
          <div className="flex items-center justify-between gap-4 font-semibold text-base">
            <NavLinksDesktop />
            <DarkModeButton />
            <MenuButton toggleNav={toggleNav} navigationLinks={navigationLinks} />
          </div>
          {navigationLinks && <NavLinksMobile onLinkClick={handleLinkClick} />}
        </div>
      </Container>
      <NavLinksTablet />
      <HeaderLine />
    </nav>
  );
};

export default Navbar;
