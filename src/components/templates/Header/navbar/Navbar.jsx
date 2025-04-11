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

  const height = 'h-[80px] xl:h-[110px]';

  return (
    <nav id="nav" className={`fixed top-0 left-0 w-full z-50 bg-light shadow-md ${height}`}>
      <Container className="">
        <div className={`flex flex-row items-center justify-between w-full ${height} gap-4 px-6`}>
          <Logo />
          <div className="flex flex-row items-center justify-end">
            <NavLinksDesktop />
            <DarkModeButton />
            <MenuButton toggleNav={toggleNav} navigationLinks={navigationLinks} className="flex lg:hidden" />
            {navigationLinks && <NavLinksMobile onLinkClick={handleLinkClick} />}
          </div>
          <NavLinksTablet className="hidden sm:flex gap-4 text-sm md:text-base font-medium lg:hidden" />
          <HeaderLine />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
