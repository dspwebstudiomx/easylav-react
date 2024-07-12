import PropTypes from 'prop-types'

const FormModal = () => {
  const styles = {
    modal: 'fixed inset-0 flex justify-center items-center z-0',
    overlay: 'fixed inset-0 z-0',
    window: 'fixed w-1/4 h-[200px] bg-slate-100 rounded text-slate-900 flex flex-col items-center justify-center z-3 opacity-100 border-2 border-blue-500 border-xl ',
    title: 'text-center text-lg',
    button: 'mt-6 bg-gradient-to-r from-blue-500 to-blue-900  text-white rounded-md p-3 text-md hover:bg-slate-700 sm:w-[45%] w-[100%] mx-auto flex items-center justify-center'
  }

  return (
    <div id='modal' className={styles.modal}>
      <div id='modal-overlay' className={styles.overlay}></div>
      <div id='modal-window' className={styles.window}>
        <h1 className={styles.title}>Enviado exitosamente</h1>
        <button className={styles.button}>Cerrar</button>
      </div>
    </div>
  )
}
FormModal.propTypes = {
  onClose: PropTypes.func
}
export default FormModal