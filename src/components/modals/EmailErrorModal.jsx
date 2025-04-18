import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { IoMdExit } from 'react-icons/io';
import Button from '../buttons/Button';
import Modal from '../contacto/Modal';

const EmailErrorModal = ({ onClick }) => {
  useEffect(() => {
    // Agregar clase para deshabilitar el scroll
    document.body.classList.add('no-scroll');

    // Limpiar la clase al desmontar el componente
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <Modal>
      <div className="w-[40vw] bg-red_light text-red_dark text-xl p-12 xl:py-6 rounded-2xl border-2 border-red flex items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="text-left font-semibold leading-snug text-xl">Error al enviar el mensaje</span>
          <span className="text-left font-normal leading-snug text-base">Favor de intentar nuevamente.</span>
        </div>
        <Button
          variant="warning"
          textColor="text-light"
          title={'Cerrar'}
          icon={<IoMdExit />}
          type={'button'}
          width="w-[240px]"
          onClick={onClick}
          distance="mx-1"
        />
      </div>
    </Modal>
  );
};

EmailErrorModal.propTypes = {
  onClick: PropTypes.func,
};

export default EmailErrorModal;
