import { Navbar } from 'components';
import Snowfall from '../../Snowfall';

const Header = () => {
  return (
    <header id="header" className="fixed sm:relative lg:fixed top-0 left-0 w-full h-[100px] z-[1000]">
      <Snowfall />
      <Navbar />
    </header>
  );
};
export default Header;
