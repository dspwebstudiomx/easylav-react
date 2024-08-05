import { GrGroup } from 'react-icons/gr';
import { NavHashLink } from 'react-router-hash-link';
import { navlinks } from '../../../data/Navlinks';
import { scrollWithOffset } from '../../../functions/scrollWithOffset';

const NavLinksMobile = () => {
  return (
    <div className='absolute top-[103px] left-0 w-full h-[95vh] sm:h-[65vh] overflow-hidden flex flex-col items-center justify-start bg-primary border-t-4 border-t-primary opacity-[99%] z-20 animate__animated animate__fadeInDown z-30 px-8'>
      <ul id='navlinks-mobile' className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 w-full px-2 py-8 gap-3'>
        {navlinks.map((navlink) => {
          return (
            <li id={`navlink-${navlink.linkId}`} key={navlink.id} className='shadow-xl text-base rounded-2xl items-center flex justify-center bg-light h-[100%] border-4 border-primary_dark p-4'>
              <NavHashLink scroll={element => scrollWithOffset(element, 98)} id={`link-${navlink.linkId}`} to={navlink.href} className='flex flex-col w-full h-full py-2 items-center justify-center gap-4'>
                <div className='flex items-center justify-center'>
                  {navlink.icon && <navlink.icon size={32} className='text-secondary' />}
                </div>
                <button className='text-secondary text-base font-bold uppercase tracking-wide'>{navlink.name}</button>
              </NavHashLink>
            </li>
          );
        })}
        <li id='navlink-franquicias' className='shadow-xl text-base p-2 rounded-2xl items-center flex flex-col justify-center bg-light h-[100%] border-4 border-primary_dark '>
          <NavHashLink id='link-franquicia' to='/franquicias'>
            <div className='flex flex-col items-center justify-center gap-5 py-4'>
              <GrGroup size={32} className='text-secondary' />
              <button className='text-secondary text-base font-bold uppercase tracking-wide'>Franquicias</button>
            </div>
          </NavHashLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinksMobile;
