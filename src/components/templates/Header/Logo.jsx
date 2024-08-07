// Logo.jsx
import { LogoHorizontalColor } from 'assets';
import { NavHashLink } from 'react-router-hash-link';

const Logo = () => {
  return (
    <NavHashLink>
      <img
        alt='logo easylav a color'
        src={LogoHorizontalColor}
        className='w-[210px] 2xl:w-[180px]'
        title='logo easylav a color'
        aria-label='logo easylav'
      />
    </NavHashLink>
  )
};

export default Logo;