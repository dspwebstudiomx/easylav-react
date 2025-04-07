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

// Estilos
const NAVBAR_UI = {
  NAV: {
    BACKGROUND_COLOR: 'bg-light',
    POSITION: 'z-40 fixed top-0 flex flex-col justify-center sm:absolute',
    SHADOW: 'shadow-xl',
    WIDTH: 'w-full',
    HEIGHT: 'h-[110px] sm:h-[150px] xl:h-[110px]',
  },
  CONTAINER: {
    DISPLAY: 'flex gap-12 justify-between items-center',
    MARGIN: 'mx-auto',
    PADDING: 'p-6 sm:px-8 lg:px-12 2xl:px-0',
    WIDTH: 'w-full',
    HEIGHT: 'h-full',
  },
  NAVBAR: {
    DISPLAY: 'flex items-center justify-between gap-4',
    WIDTH: 'w-full',
    HEIGHT: 'h-full',
  },
  NAVLINKS: {
    DISPLAY: 'flex items-center justify-between gap-4',
    FONT_WEIGHT: 'font-semibold',
    FONT_SIZE: 'text-base',
  },
};

// Estructura
const Navbar = () => {
  const [navigationLinks, setNavigationLinks] = useState(false);
  const toggleNav = () => {
    setNavigationLinks(!navigationLinks);
  };

  const handleLinkClick = () => {
    toggleNav();
  };

  const classes = {
    nav: `${NAVBAR_UI.NAV.BACKGROUND_COLOR} ${NAVBAR_UI.NAV.POSITION} ${NAVBAR_UI.NAV.SHADOW} ${NAVBAR_UI.NAV.WIDTH} ${NAVBAR_UI.NAV.HEIGHT}`,
    container: `${NAVBAR_UI.CONTAINER.DISPLAY} ${NAVBAR_UI.CONTAINER.MARGIN} ${NAVBAR_UI.CONTAINER.PADDING} ${NAVBAR_UI.CONTAINER.WIDTH} ${NAVBAR_UI.CONTAINER.HEIGHT}`,
    navbar: `${NAVBAR_UI.NAVBAR.DISPLAY} ${NAVBAR_UI.NAVBAR.WIDTH} ${NAVBAR_UI.NAVBAR.HEIGHT}`,
    navlinks: `${NAVBAR_UI.NAVLINKS.DISPLAY} ${NAVBAR_UI.NAVLINKS.FONT_WEIGHT} ${NAVBAR_UI.NAVLINKS.FONT_SIZE}`,
  };

  return (
    <nav id="nav" className={classes.nav}>
      <Container className={classes.container}>
        <div id="navbar" className={classes.navbar}>
          <Logo />
          <div className={classes.navlinks}>
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
