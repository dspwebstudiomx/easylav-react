import PropTypes from 'prop-types';
import { IoMdExit } from 'react-icons/io';
import Button from '../buttons/Button';
import Modal from '../contacto/Modal';

const EmailSuccessModal = ({ onClick }) => {
  return (
    <Modal>
      <div className="bg-primary_light text-primary_dark text-xl p-12 py-12 xl:py-6 rounded-2xl border-2 border-primary flex gap-12 items-center justify-between">
        <div className="flex flex-col">
          <span className="text-left font-semibold leading-snug text-xl">Mensaje enviado satisfactoriamente</span>
          <span className="text-left font-normal leading-snug text-base">Pronto nos pondremos en contacto</span>
        </div>
        <Button
          variant="primary"
          title={'Cerrar'}
          icon={<IoMdExit />}
          type={'button'}
          width={'w-[180px]'}
          onClick={onClick}
          distance="mx-1"
        />
      </div>
    </Modal>
  );
};
EmailSuccessModal.propTypes = {
  onClick: PropTypes.func,
};

export default EmailSuccessModal;
