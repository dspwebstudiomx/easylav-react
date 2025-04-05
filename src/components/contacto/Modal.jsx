import PropTypes from 'prop-types';

const Modal = ({ children, height, width }) => {
  return (
    <div
      id="modal"
      className="fixed inset-0 animate__animated animate__fadeIn animate__slow grid place-items-center mt-20 w-[100vw] mx-auto z-[999]"
    >
      <div id="modal-overlay" className="fixed inset-0 bg-dark opacity-80 z-40"></div>
      <div id="modal-window" className={`${height} ${width} z-50 overflow-y-auto`}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Modal;
