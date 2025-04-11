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

  const height = 'h-[80px] sm:h-[180px] md:h-[100px]';

  return (
    <>
      <nav id="nav" className={`fixed sm:relative xl:fixed top-0 left-0 w-full z-50 bg-light shadow-md ${height}`}>
        <Container className="bg-light">
          <div className={`flex sm:flex-col items-center justify-center w-full ${height} gap-2 px-6 xl:px-0`}>
            <div className={`flex flex-row items-center justify-between w-full ${height} gap-6 `}>
              <Logo />
              <div className="flex items-center gap-4">
                <NavLinksDesktop />
                <DarkModeButton />
                <MenuButton toggleNav={toggleNav} navigationLinks={navigationLinks} className="flex lg:hidden" />
                {navigationLinks && <NavLinksMobile onLinkClick={handleLinkClick} />}
              </div>
            </div>
            <NavLinksTablet />
          </div>
        </Container>
      </nav>
      <HeaderLine className="fixed top-[100px]" />
    </>
  );
};

export default Navbar;
