import { Container, DarkModeButton, HeaderLine, Logo, MenuButton, NavLinksDesktop, NavLinksMobile, NavLinksTablet } from 'components';
import { useState } from 'react';

const Navbar = () => {
  const [navigationLinks, setNavigationLinks] = useState(false);
  const toggleNav = () => {
    setNavigationLinks(!navigationLinks);
  };

  const handleLinkClick = () => {
    toggleNav();
  };

  return (
    <>
      <nav id='nav' className='fixed top-0 w-full h-[100px] bg-light z-50 shadow-xl'>
        <Container className={'flex justify-between px-8 sm:px-0  md:px-12 xl:px-0 mx-auto'}>
          <div id='navbar' className='flex items-center justify-between h-[120px]'>
            <Logo />
            <NavLinksDesktop />
            <MenuButton toggleNav={toggleNav} navigationLinks={navigationLinks} />
            {navigationLinks && (
              <NavLinksMobile
                onLinkClick={handleLinkClick}
              />
            )}
          </div>
        </Container>
      </nav>
      <DarkModeButton />
      <NavLinksTablet />
      <HeaderLine />
    </>
  );
};

export default Navbar;