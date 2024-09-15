// MenuButton.js
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const MenuButton = ({ navigationLinks, toggleNav }) => {
  return (
    <button
      id="menu-button"
      onClick={toggleNav}
      className="z-40 flex w-[32px] items-center gap-8 sm:hidden"
      type="button"
    >
      {!navigationLinks ? (
        <FaBars size={30} className="z-40 text-secondary_dark" />
      ) : (
        <FaXmark
          size={36}
          className="dark:text-slate-100 z-30 text-secondary_dark"
        />
      )}
    </button>
  );
};
MenuButton.propTypes = {
  navigationLinks: PropTypes.bool.isRequired,
  toggleNav: PropTypes.any.isRequired,
};

export default MenuButton;
