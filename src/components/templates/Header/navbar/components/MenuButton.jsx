// MenuButton.js
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const MenuButton = ({ navigationLinks, toggleNav }) => (
  <button
    name="monstrar menú"
    title="mostrar menu"
    id="menu-button"
    onClick={toggleNav}
    className="flex w-[32px] items-center gap-8 sm:hidden"
    type="button">
    {!navigationLinks ? (
      <FaBars size={30} className=" text-secondary" />
    ) : (
      <FaXmark size={36} className="dark:text-slate-100 text-secondary" />
    )}
  </button>
);
MenuButton.propTypes = {
  navigationLinks: PropTypes.bool.isRequired,
  toggleNav: PropTypes.any.isRequired,
};

export default MenuButton;
