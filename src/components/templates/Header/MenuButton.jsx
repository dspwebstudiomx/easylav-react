// MenuButton.js
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';

const MenuButton = ({ navigationLinks, toggleNav }) => {

  return (
    <button id='menu-button' onClick={toggleNav} className="md:hidden z-40 flex gap-8 items-center w-[7%]" type="button">
      {!navigationLinks ? <FaBars size={30} className="text-secondary z-40" /> : <FaXmark size={36} className=" text-secondary dark:text-slate-100 z-30" />}
    </button>
  );
};
MenuButton.propTypes = {
  navigationLinks: PropTypes.bool.isRequired,
  toggleNav: PropTypes.any.isRequired
}

export default MenuButton;