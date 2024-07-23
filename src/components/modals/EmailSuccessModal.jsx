import { IoMdExit } from "react-icons/io"
import Button from "../buttons/Button"
import Modal from "../contacto/Modal"
import PropTypes from "prop-types"

const EmailSuccessModal = ({ onClick }) => {
  return (
    <Modal>
      <div className='bg-primary_light text-primary_dark text-xl p-12 py-12 xl:py-6 rounded-2xl border-2 border-primary flex flex-col gap-8 flex-col items-center justify-between'>
        <h1 className='text-leftfont-medium leading-snug'>Mensaje enviado satisfactoriamente</h1>
        <Button
          themeButton={'bg-primary'}
          title={'Cerrar'}
          icon={<IoMdExit />}
          type={'button'}
          width={'w-[240px]'}
          onClick={onClick}
        />
      </div>
    </Modal>
  )
}
EmailSuccessModal.propTypes = {
  onClick: PropTypes.func
}

export default EmailSuccessModal