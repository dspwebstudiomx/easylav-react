import PropTypes from "prop-types"
import { IoMdExit } from "react-icons/io"
import Button from "../buttons/Button"
import Modal from "../contacto/Modal"

const EmailSuccessModal = ({ onClick }) => {
  return (
    <Modal>
      <div className='bg-primary_light text-primary_dark text-xl p-12 py-12 xl:py-6 rounded-2xl border-2 border-primary flex gap-5 items-center justify-between'>
        <p className="text-primary_dark text-base">Mensaje enviado satisfactoriamente</p>
        <Button
          backgroundColor="bg-primary_dark"
          textColor="text-light"
          title={'Cerrar'}
          icon={<IoMdExit />}
          type={'button'}
          width={'w-[240px]'}
          onClick={onClick}
          distance="mx-1"
        />
      </div>
    </Modal>
  )
}
EmailSuccessModal.propTypes = {
  onClick: PropTypes.func
}

export default EmailSuccessModal