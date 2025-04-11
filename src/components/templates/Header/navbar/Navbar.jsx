/*
  Navbar
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-12
*/

// Importaciones
import {
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
      className="fixed shadow-md dark:shadow-none z-[9999] w-[100vw] h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] flex justify-between items-center px-6 md:px-8 lg:px-12 xl:px-32 bg-light">
      <Logo />
      <div className="flex items-center justify-between w-auto">
        <NavLinksDesktop className="hidden lg:flex gap-6 text-sm md:text-base lg:text-lg font-semibold" />
        <DarkModeButton className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800" />
        <MenuButton toggleNav={toggleNav} navigationLinks={navigationLinks} className="flex lg:hidden" />
        {navigationLinks && (
          <NavLinksMobile
            className="flex flex-col gap-4 text-base sm:text-lg font-medium lg:hidden"
            onLinkClick={handleLinkClick}
          />
        )}
      </div>
      <NavLinksTablet className="hidden sm:flex gap-4 text-sm md:text-base font-medium lg:hidden" />
      <HeaderLine />
    </nav>
  );
};

export default Navbar;
