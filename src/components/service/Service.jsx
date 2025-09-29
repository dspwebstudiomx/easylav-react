/*
  Service - Component
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
*/

// Importaciones
import { ButtonContainer, ButtonSecondary, Modal, TitleH2, TitleH3 } from 'components';
import { useShowModal } from 'hooks';
import PropTypes from 'prop-types';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

// Estilos
const SERVICE_UI = {
  ELEMENT: {
    CLASSNAME: `grid grid-grow gap-4 items-center justify-center shadow-2xl rounded-xl p-4 w-full bg-light dark:border-4 dark:border-primary mx-auto`,
    DIV_VIDEO: 'mx-auto w-32 sm:w-22 md:w-32',
    DIV_TITLEH3: 'mx-auto text-primary',
  },
  IMAGE: 'p-0 w-20 mx-auto text-center',
  PARAGRAPH: 'text-dark text-[12px] hidden',
};

// Estructura
const Service = ({ service }) => {
  const { showModal, setShowModal } = useShowModal();

  return (
    <li id={service.idLink} className={SERVICE_UI.ELEMENT.CLASSNAME}>
      <Link onClick={() => setShowModal(true)} title={service.title} alt={service.alt}>
        <div className={SERVICE_UI.ELEMENT.DIV_VIDEO}>
          <img className={SERVICE_UI.IMAGE} src={service.image} title={service.title} alt={service.alt} />
        </div>
        <div className={`${SERVICE_UI.ELEMENT.DIV_TITLEH3} my-2`}>
          <TitleH3 justify="justify-center" color="text-dark" textTransform="uppercase">
            {service.title}
          </TitleH3>
        </div>
      </Link>
      {/* Modal */}
      {showModal && (
        <Modal width="w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[30vw]" height="h-auto">
          <div
            id="modal-servicio"
            className="z-40 mx-auto flex h-full flex-col justify-center gap-8 rounded-xl border-4 border-primary bg-light p-8 sm:p-12">
            <button id="button-close" onClick={() => setShowModal(false)} className="">
              <FaXmark size={36} className="z-30 ml-auto text-primary_dark" />
            </button>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
                <img src={service.image} title={service.title} alt={service.alt} width={80} />
                <TitleH2 align="justify-center">{service.title}</TitleH2>
              </div>
            </div>

            <p className="text-dark text-pretty">{service.description_1}</p>
            <p className="text-dark text-pretty">{service.description_2}</p>
            <ButtonContainer position="justify-center items-center">
              <ButtonSecondary
                title="Conócenos"
                href="/sucursales"
                width="w-full md:w-[210px]"
                name="botón conócenos"
              />
            </ButtonContainer>
          </div>
        </Modal>
      )}
      {/* Modal */}
    </li>
  );
};

Service.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    idLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description_1: PropTypes.string.isRequired,
    description_2: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service;
