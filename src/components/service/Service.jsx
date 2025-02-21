import { Modal, Paragraph, Spacing, TitleH2, TitleH3 } from 'components';
import { useShowModal } from 'hooks';
import PropTypes from 'prop-types';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SERVICE_UI = {
  ELEMENT: {
    CLASSNAME:
      `flex flex-col gap-4 items-center justify-center shadow-2xl rounded-xl p-8 w-[260px] xl:w-[200px] bg-light dark:border-4 dark:border-primary`,
    DIV_VIDEO: "mx-auto w-32 sm:w-24 md:w-40",
    DIV_TITLEH3: "mx-auto text-primary",
  },
  IMAGE: "p-2",
  PARAGRAPH: "text-dark text-[16px] hidden",
};

const Service = ({ service }) => {
  const { showModal, setShowModal } = useShowModal()

  return (
    <li id={service.idLink} className={SERVICE_UI.ELEMENT.CLASSNAME}>
      <Link onClick={() => setShowModal(true)}>
        <div className={SERVICE_UI.ELEMENT.DIV_VIDEO}>
          <img className={SERVICE_UI.IMAGE} src={service.image} title={service.alt} alt={service.alt} />
        </div>
        <div className={`${SERVICE_UI.ELEMENT.DIV_TITLEH3} my-2`}>
          <TitleH3 justify="text-center" color="text-secondary_dark">{service.title}</TitleH3>
        </div>
        <p className={SERVICE_UI.PARAGRAPH}>
          {service.description}
        </p>
      </Link>
      {/* Modal */}
      {showModal && (
        <Modal width='w-[90vw] md:w-[60vw] lg:w-[40vw]'>
          <div id="modal-servicio" className="z-40 mx-auto flex flex-col rounded-xl border-4 border-primary bg-light p-6 sm:p-12 pb-20">
            <button id="button-close" onClick={() => setShowModal(false)}>
              <FaXmark
                size={36}
                className="z-30 ml-auto text-primary_dark z-50"
              />
            </button>
            <Spacing distance='my-4' />
            <div className='flex flex-col sm:flex-row gap-8 justify-start items-center'>
              <img src={service.image} title={service.alt} alt={service.alt} width={120} />
              <TitleH2>{service.title}</TitleH2>
            </div>
            <Spacing distance='my-4' />
            <Paragraph>
              {service.description}
            </Paragraph>
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
