import PropTypes from 'prop-types'

const Modal = ({ children, width, height, setShowModal }) => {
  const handleClose = () => {
    console.log("diste clic")
    setShowModal(false);
  }
  return (
    <div id='modal' className='fixed inset-0 flex justify-center items-center  z-0'>
      <div id='modal-overlay' className='fixed inset-0 z-10 bg-dark opacity-55' onClick={handleClose}></div>
      <div id='modal-window' className={`${width} ${height} fixed rounded-xl text-dark flex flex-col items-center justify-center z-20 p-12 py-6 lg:p-8 border-primary border-4 shadow-2xl mb-24 bg-light gap-10 text-xl`}>
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