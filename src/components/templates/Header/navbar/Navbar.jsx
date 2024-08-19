import { Container, DarkModeButton, HeaderLine, Logo, MenuButton, NavLinksDesktop, NavLinksMobile, NavLinksTablet } from "components";
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
    navbar: "flex h-[100px] items-center justify-between gap-4"
  }

  return (
    <>
      <nav id="nav" className={classes.nav}>
        <Container className={classes.container}>
          <div id="navbar" className={classes.navbar}>
            <Logo />
            <div className="flex justify-end gap-4">
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
