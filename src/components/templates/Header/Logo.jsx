// Logo.jsx
import { scrollWithOffset } from 'functions';
import { NavHashLink } from 'react-router-hash-link';
import logoImage from '../../../assets/images/logos/horizontal/logo-color.png';

const Logo = () => {
  return (
    <div id='logo'>
      <NavHashLink to="/#inicio" scroll={scrollWithOffset}>
        <img alt='logo easylav a color' src={logoImage} className='w-[210px] 2xl:w-[180px]' title='logo easylav a color' aria-label='' />
      </NavHashLink>
    </div>
  );
};

export default Logo;
