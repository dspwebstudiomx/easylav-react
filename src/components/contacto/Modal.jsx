import PropTypes from 'prop-types';

const Modal = ({ children, height, width, className, gap }) => {
  return (
    <div
      id="modal"
      className="fixed inset-0 animate__animated animate__fadeIn animate__slow grid place-items-center mt-20 w-[100vw] mx-auto z-[10000]">
      <div id="modal-overlay" className="fixed inset-0 bg-dark opacity-80 z-50"></div>
      <div
        id="modal-window"
        className={`${height} ${width} z-[1010] overflow-y-auto flex flex-col ${className} ${gap}`}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  gap: PropTypes.string,
};

export default Modal;
