import { Container, HeaderLine, Logo, MenuButton, NavLinksDesktop, NavLinksMobile, NavLinksTablet } from "components";
import { useState } from "react";


const Navbar = () => {
  const [navigationLinks, setNavigationLinks] = useState(false);
  const toggleNav = () => {
    setNavigationLinks(!navigationLinks);
  };

  const handleLinkClick = () => {
    toggleNav();
  };

  const classes = {
    nav: "fixed top-0 z-50 h-[100px] w-full bg-light shadow-xl sm:relative xl:fixed",
    container: "mx-auto flex justify-between px-8 sm:px-0 md:px-12 xl:px-0",
    navbar: "flex h-[120px] items-center justify-between"
  }

  return (
    <>
      <nav id="nav" className={classes.nav}>
        <Container className={classes.container}>
          <div id="navbar" className={classes.navbar}>
            <Logo />
            <NavLinksDesktop />
            <MenuButton
              toggleNav={toggleNav}
              navigationLinks={navigationLinks}
            />
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
