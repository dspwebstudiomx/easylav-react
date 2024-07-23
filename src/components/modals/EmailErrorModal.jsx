import { IoMdExit } from "react-icons/io"
import Button from "../buttons/Button"
import Modal from "../contacto/Modal"
import PropTypes from "prop-types"
import Spacing from "../layout/Spacing"

const EmailErrorModal = ({ onClick }) => {
  return (
    <Modal>
      <div className='bg-red_light text-red_dark text-xl p-12 xl:py-6 rounded-2xl border-2 border-red flex flex-col items-center justify-between'>
        <span className='text-left font-medium leading-snug'>Error al enviar el mensaje:</span>
        <span className='text-left font-normal leading-snug'>Favor de intentar nuevamente.</span>
        <Spacing height={'h-8'} />
        <Button
          themeButton={'bg-red_dark hover:bg-red'}
          title={'Cerrar'}
          icon={<IoMdExit />}
          type={'button'}
          width={'w-[240px]'}
          onClick={onClick}
        />
      </div>
    </Modal >
  )
}
EmailErrorModal.propTypes = {
  onClick: PropTypes.func
}

export default EmailErrorModal