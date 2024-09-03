import PropTypes from 'prop-types'

const Modal = ({ children, height }) => {
  return (
    <div id='modal' className='fixed inset-0 animate__animated animate__fadeIn animate__slow grid place-items-center z-50 w-full mx-auto'>
      <div id='modal-overlay' className='fixed inset-0 z-20 bg-dark opacity-40'></div>
      <div id='modal-window' className={`${height} fixed z-20 w-auto`}>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Modal