
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const HomeButton = () => {
  return (
    <Link to="/" type='information' className='uppercase font-semibold flex gap-2 justify-center items-center text-light text-base bg-primary_dark rounded w-full px-8 py-4'>
      <span>
        <IoHomeOutline />
      </span>
      <span>Ir a inicio</span>
    </Link>
  );
};
export default HomeButton;

