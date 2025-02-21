// Importaciones
import { LogoHorizontalColor } from 'assets';
import { scrollWithOffset } from 'functions';
import { NavHashLink } from 'react-router-hash-link';

// Estructura
const Logo = () => {
  return (
    <NavHashLink to={'/#inicio'} scroll={scrollWithOffset} >
      <img
        alt='logo easylav a color'
        src={LogoHorizontalColor}
        className='w-[180px] 2xl:w-[240px]'
        title='logo easylav a color'
        aria-label='logo easylav'
      />
    </NavHashLink>
  )
};

export default Logo;