/*
  Navbar
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-12
*/

// Importaciones
import { Container, DarkModeButton, HeaderLine, Logo, MenuButton, NavLinksDesktop, NavLinksMobile, NavLinksTablet } from "components";
import { NAVBAR_UI } from "constants/constants";
import { useState } from "react";

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
    <>
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
      </nav>
      <NavLinksTablet />
      <HeaderLine />
    </>
  );
};

export default Navbar;
