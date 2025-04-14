import { Navbar, ThemeLine } from 'components';

const Header = () => {
  return (
    <header id="header" className="relative w-full h-[100px] z-[9999]">
      <Navbar />
      <ThemeLine className="fixed sm:relative top-[80px] sm:top-[10px] xl:top-[100px] xl:fixed" />
    </header>
  );
};
export default Header;
