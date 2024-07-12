import PropTypes from 'prop-types'

const Modal = ({ children }) => {
  return (
    <div id='modal' className='fixed inset-0 flex justify-center items-center z-0'>
      <div id='modal-overlay' className='fixed inset-0 z-0 bg-black opacity-25'></div>
      <div id='modal-window' className='fixed w-[75%] sm:w-[50%] lg:w-[400px] h-auto bg-slate-100 rounded-xl text-slate-900 flex flex-col items-center justify-center z-3 p-12 py-6 lg:p-8 border-blue-500 border-4 shadow-2xl mb-24'>
        {children}
      </div>
    </div >
  )
}
Modal.propTypes = {
  children: PropTypes.node,
}

export default Modal