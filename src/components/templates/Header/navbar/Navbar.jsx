/*
  Navbar
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-12
*/

// Importaciones
import { Container, DarkModeButton, HeaderLine, Logo, MenuButton, NavLinksDesktop, NavLinksMobile, NavLinksTablet } from "components";
import { useState } from "react";

// Estilos
const NAVBAR_UI = {
  NAV: {
    BACKGROUND_COLOR: "bg-light",
    POSITION: "fixed top-0 z-50 h-[100px] sm:relative xl:fixed",
    SHADOW: "shadow-xl",
    WIDTH: "w-full",
  },
  CONTAINER: {
    DISPLAY: "flex justify-between items-center h-full w-full",
    MARGIN: "mx-auto",
    PADDING: "px-8 sm:px-8 md:px-8 xl:px-20 2xl:px-0",
  },
  NAVBAR: {
    DISPLAY: "flex items-center justify-between gap-4",
    WIDTH: "w-full",
    HEIGHT: "h-[100px]",
  },
  NAVLINKS: {
    DISPLAY: "flex items-center gap-4",
    FONT_WEIGHT: "font-semibold",
    FONT_SIZE: "text-base",
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
    nav: `${NAVBAR_UI.NAV.BACKGROUND_COLOR} ${NAVBAR_UI.NAV.POSITION} ${NAVBAR_UI.NAV.SHADOW} ${NAVBAR_UI.NAV.WIDTH}`,
    container: `${NAVBAR_UI.CONTAINER.DISPLAY} ${NAVBAR_UI.CONTAINER.MARGIN} ${NAVBAR_UI.CONTAINER.PADDING}`,
    navbar: `${NAVBAR_UI.NAVBAR.DISPLAY} ${NAVBAR_UI.NAVBAR.WIDTH} ${NAVBAR_UI.NAVBAR.HEIGHT}`,
    navlinks: `${NAVBAR_UI.NAVLINKS.DISPLAY} ${NAVBAR_UI.NAVLINKS.FONT_WEIGHT} ${NAVBAR_UI.NAVLINKS.FONT_SIZE}`
  }

  return (
    <nav id="nav" className={classes.nav}>
      <Container className={classes.container}>
        <div id="navbar" className={classes.navbar}>
          <Logo />
          <div className={classes.navlinks}>
            <NavLinksDesktop />
            <DarkModeButton />
            <MenuButton
              toggleNav={toggleNav}
              navigationLinks={navigationLinks}
            />
          </div>
          {navigationLinks && (
            <NavLinksMobile onLinkClick={handleLinkClick} />
          )}
        </div>
      </Container>
      <NavLinksTablet />
      <HeaderLine />
    </nav>
  );
};

export default Navbar;
