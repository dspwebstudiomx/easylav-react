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
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-between shadow-lg px-4 py-2 transition-all duration-300 ease-in-out bg-light h-[110px]">
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
