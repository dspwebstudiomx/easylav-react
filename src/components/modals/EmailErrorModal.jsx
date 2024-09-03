import PropTypes from "prop-types"
import { IoMdExit } from "react-icons/io"
import Button from "../buttons/Button"
import Modal from "../contacto/Modal"
import Spacing from "../layout/Spacing"

const EmailErrorModal = ({ onClick }) => {
  return (
    <Modal>
      <div className='bg-red_light text-red_dark text-xl p-12 xl:py-6 rounded-2xl border-2 border-red flex tems-center justify-between gap-6'>
        <div className="flex flex-col">
          <span className='text-left font-medium leading-snug text-base'>Error al enviar el mensaje:</span>
          <span className='text-left font-normal leading-snug text-sm'>Favor de intentar nuevamente.</span>
        </div>
        <Spacing height={'h-8'} />
        <Button
          backgroundColor="bg-red_dark"
          textColor="text-light"
          title={'Cerrar'}
          icon={<IoMdExit />}
          type={'button'}
          width={'w-[240px]'}
          onClick={onClick}
          distance="mx-1"
        />
      </div>
    </Modal >
  )
}
EmailErrorModal.propTypes = {
  onClick: PropTypes.func
}

export default EmailErrorModal