import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link
      to="/"
      type="information"
      className="uppercase font-semibold flex gap-2 justify-center items-center text-light text-base bg-primary_dark rounded w-full px-8 py-6"
      onClick={() => window.scrollTo(0, 0)}>
      <span>
        <IoHomeOutline size={28} />
      </span>
      {/* <span>Ir a inicio</span> */}
    </Link>
  );
};
export default HomeButton;
