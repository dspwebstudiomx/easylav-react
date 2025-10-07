// Importaciones
import { LogoHorizontalColor } from 'assets';
import { scrollToTop } from 'functions';
import { NavLink } from 'react-router-dom';

// Estructura

const Logo = () => {
  const handleClick = () => {
    scrollToTop();
  };
  return (
    <NavLink to={'/'} onClick={handleClick}>
      <img
        alt="logo easylav a color"
        src={LogoHorizontalColor}
        className="w-[200px] md:w-[280px] z-40"
        title="logo easylav a color"
        aria-label="logo easylav"
      />
    </NavLink>
  );
};

export default Logo;
