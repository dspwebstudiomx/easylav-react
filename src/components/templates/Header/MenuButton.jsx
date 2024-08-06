// MenuButton.js
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';

const MenuButton = ({ navigationLinks, toggleNav }) => {

  return (
    <div id='menu-button' onClick={toggleNav} className="md:hidden z-40 flex gap-8 items-center w-[7%]">
      {!navigationLinks ? <FaBars size={30} className="text-secondary z-40" /> : <FaXmark size={36} className=" text-secondary dark:text-slate-100 z-30" />}
    </div>
  );
};
MenuButton.propTypes = {
  navigationLinks: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired
}

export default MenuButton;