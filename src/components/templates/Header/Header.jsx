import { Navbar } from 'components';
import Snowfall from '../../Snowfall';

const Header = () => {
  return (
    <header id="header" className="relative w-full h-[100px] z-[1000]">
      <Snowfall />
      <Navbar />
    </header>
  );
};
export default Header;
