import { NavHashLink } from 'react-router-hash-link';
import logoImage from '../../../assets/images/logos/horizontal/logo-color.png';
import { scrollWithOffset } from '../../../functions/scrollWithOffset';

const Logo = () => {
  return (
    <div id='logo'>
      <NavHashLink to="/#inicio" scroll={scrollWithOffset}>
        <img alt='logo easylav a color' src={logoImage} className='w-[210px] 2xl:w-[160px]' title='logo easylav a color' />
      </NavHashLink>
    </div>
  );
};

export default Logo;
