import { useState } from 'react';
import { Container, HeaderLine, Logo, MenuButton, NavLinksDesktop, NavLinksMobile, NavLinksTablet } from '../../../components';

const Navbar = () => {
  const [navigationLinks, setNavigationLinks] = useState(false);
  const toggleNav = () => {
    setNavigationLinks(!navigationLinks);
  };

  return (
    <>
      <nav id='nav' className='fixed top-0 w-full h-[100px] bg-light z-50 shadow-xl'>
        <Container className={'flex justify-center px-8 sm:px-0  md:px-12 xl:px-0 mx-auto'}>
          <div id='navbar' className='flex justify-between items-center h-[120px]'>
            <Logo />
            <NavLinksDesktop />
            <MenuButton toggleNav={toggleNav} navigationLinks={navigationLinks} />
            {navigationLinks && <NavLinksMobile />}
          </div>
        </Container>
      </nav>
      <NavLinksTablet />
      <HeaderLine />
    </>
  );
};

export default Navbar;
