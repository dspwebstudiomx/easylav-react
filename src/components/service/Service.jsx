/*
  Service - Component
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
*/

// Importaciones
import { ButtonContainer, ButtonSecondary, Modal, Paragraph, TitleH2, TitleH3 } from 'components';
import { useShowModal } from 'hooks';
import PropTypes from 'prop-types';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

// Estilos
const SERVICE_UI = {
  ELEMENT: {
    CLASSNAME:
      `flex flex-col gap-4 items-center justify-center shadow-2xl rounded-xl p-8 w-[200px] xl:w-[100px] bg-light dark:border-4 dark:border-primary`,
    DIV_VIDEO: "mx-auto w-32 sm:w-24 md:w-40",
    DIV_TITLEH3: "mx-auto text-primary",
  },
  IMAGE: "p-2",
  PARAGRAPH: "text-dark text-[16px] hidden",
};

// Estructura
const Service = ({ service }) => {
  const { showModal, setShowModal } = useShowModal()

  return (
    <li id={service.idLink} className={SERVICE_UI.ELEMENT.CLASSNAME}>
      <Link onClick={() => setShowModal(true)}>
        <div className={SERVICE_UI.ELEMENT.DIV_VIDEO}>
          <img className={SERVICE_UI.IMAGE} src={service.image} title={service.alt} alt={service.alt} />
        </div>
        <div className={`${SERVICE_UI.ELEMENT.DIV_TITLEH3} my-2`}>
          <TitleH3 justify="text-center" color="text-dark">{service.title}</TitleH3>
        </div>
        <p className={SERVICE_UI.PARAGRAPH}>
          {service.description}
        </p>
      </Link>
      {/* Modal */}
      {showModal && (
        <Modal width='w-[90vw] md:w-[60vw] lg:w-[60vw]'>
          <div id="modal-servicio" className="z-40 mx-auto flex flex-col gap-8 rounded-xl border-4 border-primary bg-light p-8 sm:p-12 h-[90vh] sm:h-auto justify-center">
            <button id="button-close" onClick={() => setShowModal(false)} className=''>
              <FaXmark
                size={36}
                className="z-30 ml-auto text-primary_dark z-50"
              />
            </button>
            <div className='flex flex-col sm:flex-row justify-between'>
              <div className='flex flex-col sm:flex-row gap-8 justify-start items-center'>
                <img src={service.image} title={service.alt} alt={service.alt} width={40} />
                <TitleH2>{service.title}</TitleH2>
              </div>
            </div>
            <Paragraph>
              <span className='text-dark mt-4'>
                {service.description}
              </span>
            </Paragraph>
            <ButtonContainer position='justify-center sm:justify-end items-center'>
              <ButtonSecondary
                title='Conócenos'
                href='/sucursales'
                width='w-full md:w-[210px]'
                name='botón conócenos'
              />
            </ButtonContainer>
          </div>
        </Modal>
      )}
      {/* Modal */}
    </li>
  )
}

Service.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    idLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service;
