import PropTypes from 'prop-types'

const Modal = ({ children, width, height }) => {
  return (
    <div id='modal' className='fixed inset-0 animate__animated animate__fadeIn animate__slow grid place-items-center mt-12 z-50'>
      <div id='modal-overlay' className='fixed inset-0 z-20 bg-dark opacity-40'></div>
      <div id='modal-window' className={`${width} ${height} fixed rounded-xl text-dark flex flex-col items-center justify-center z-20 p-12 lg:p-8 border-primary border-4 shadow-2xl mb-24 bg-light gap-16 text-xl h-[100vh] sm:h-auto`}>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  setShowModal: PropTypes.any,
}

export default Modal