import { useState } from 'react';
import { Container } from '../../../components';
import HeaderLine from './HeaderLine';
import Logo from './Logo';
import MenuButton from './MenuButton';
import NavLinksDesktop from './NavLinksDesktop';
import NavLinksMobile from './NavLinksMobile';
import NavLinksTablet from './NavLinksTablet';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav id='nav' className='fixed top-0 w-full h-[100px] mx-auto bg-light z-50  shadow-xl md:px-12 xl:px-0'>
        <Container className={'flex justify-center px-8 sm:px-0 md:px-0 mx-auto z-50'}>
          <div id='navbar' className='flex justify-between items-center h-[120px]'>
            <Logo />
            <NavLinksDesktop />
            <MenuButton toggleNav={toggleNav} />
            {nav && <NavLinksMobile />}
          </div>
        </Container>
      </nav>
      <NavLinksTablet />
      <HeaderLine />
    </>
  );
};

export default Navbar;
