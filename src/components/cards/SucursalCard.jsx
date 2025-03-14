import classNames from 'classnames';
import { BackgroundImageSection, Badge, Modal, Spacing, TitleH3 } from 'components';
import { useShowModal } from "hooks";
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaMagnifyingGlass, FaRegClock, FaWaze, FaXmark } from 'react-icons/fa6';

// Estilos
const SUCURSAL_CARD_UI = {
  ARTICLE: {
    ANIMATION: "animate__animated animate__fadeIn animate__slower ",
    BACKGROUND: "bg-light",
    COLOR: "text-dark",
    DISPLAY: "flex flex-col relative mx-auto",
    HEIGHT: "min-h-[360px]",
    JUSTIFY: "justify-between",
    OVERFLOW: "overflow-hidden",
    ROUNDED: "rounded-xl",
    SHADOW: "shadow-xl",
    WIDTH: "w-[80%] md:w-[280px] lg:w-[320px]",
  },
  ICON: {
    SIZE: '30',
    COLOR: 'text-secondary'
  },
  TEXT: {
    FONT_SIZE: "text-base",
    COLOR: "text-dark",
    LINE_HEIGHT: "leading-2",
  },
  CONTENT: {
    SECTION: "flex flex-col justify-start gap-3 p-4 px-10",
    TITLE: "flex items-center justify-center mx-auto",
    DESCRIPTION: {
      CONTAINER: "flex flex-col gap-4 my-4 justify-center",
      INFO: "flex gap-6 justify-center"
    },
    BADGE: {
      CONTAINER: 'absolute -left-14 top-0 w-[280px] rotate-[320deg] rounded-lg border-2 border-secondary bg-secondary_light px-4 py-1 text-light flex items-center text-sm',
      PARAGRAPH: 'ml-8'
    }
  }
}

const styles =
{
  article: `${SUCURSAL_CARD_UI.ARTICLE.ANIMATION} ${SUCURSAL_CARD_UI.ARTICLE.BACKGROUND} ${SUCURSAL_CARD_UI.ARTICLE.COLOR} ${SUCURSAL_CARD_UI.ARTICLE.DISPLAY} ${SUCURSAL_CARD_UI.ARTICLE.HEIGHT} ${SUCURSAL_CARD_UI.ARTICLE.JUSTIFY} ${SUCURSAL_CARD_UI.ARTICLE.OVERFLOW} ${SUCURSAL_CARD_UI.ARTICLE.ROUNDED} ${SUCURSAL_CARD_UI.ARTICLE.SHADOW} ${SUCURSAL_CARD_UI.ARTICLE.WIDTH}`,
  content: {
    section: SUCURSAL_CARD_UI.CONTENT.SECTION,
    title: SUCURSAL_CARD_UI.CONTENT.TITLE,
    icon: {
      size: SUCURSAL_CARD_UI.ICON.SIZE,
      color: SUCURSAL_CARD_UI.ICON.COLOR
    },
    text: `${SUCURSAL_CARD_UI.TEXT.FONT_SIZE} ${SUCURSAL_CARD_UI.TEXT.COLOR} ${SUCURSAL_CARD_UI.TEXT.LINE_HEIGHT}`,
    description: {
      container: SUCURSAL_CARD_UI.CONTENT.DESCRIPTION.CONTAINER,
      info: SUCURSAL_CARD_UI.CONTENT.DESCRIPTION.INFO
    },
    badge: {
      container: SUCURSAL_CARD_UI.CONTENT.BADGE.CONTAINER,
      paragraph: SUCURSAL_CARD_UI.CONTENT.BADGE.PARAGRAPH,
    }
  },

}

// Funciones

// Utility function to determine if the branch is open
const isBranchCurrentlyOpen = (openHour, openMinute, closeHour, closeMinute) => {
  const currentTime = new Date();
  const currentTimeInMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;
  return currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
};

// Function to render the open/closed badge
const renderOpenClosedBadge = (isOpen) => (
  <div className={`rounded-lg border-2 font-medium ${isOpen ? ' border-primary_darkcontrast bg-primary text-primary_darkcontrast' : 'border-red_dark bg-red_light text-red'} px-4 py-2 text-sm`}>
    <p>{isOpen ? 'Abierto' : 'Cerrado'}</p>
  </div>
);

// Function to render Waze and Google Maps links
const renderMapLinks = (position, title, gmap) => (
  <div className='flex md:hidden'>
    <a href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`} target='_blank' rel='noopener noreferrer' title={`Ir a ${title} en Waze`} className='flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary text-sm'>
      <Badge flexDirection='flex-col'>
        <FaWaze size={24} />
        <span>Waze</span>
      </Badge>
    </a>
    <a href={gmap} target='_blank' rel='noopener noreferrer' title={`Ir a ${title} en Google Maps`} className='flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary_dark text-lg text-sm'>
      <Badge flexDirection='flex-col'>
        <FaMapMarkedAlt size={24} />
        <span>Google Maps</span>
      </Badge>
    </a>
  </div>
);

// Estructura
const SucursalCard = (props) => {

  const { title, position, place, gmap, badge, advertisement, image, serviceday1, servicehour1, openHour, closeHour, openMinute, closeMinute } = props;
  const isOpen = useMemo(() => isBranchCurrentlyOpen(openHour, openMinute, closeHour, closeMinute), [openHour, openMinute, closeHour, closeMinute]);
  const { showModal, setShowModal } = useShowModal()

  return (
    <article id={`sucursal-${title}`} key={title} className={classNames(styles.article, { 'z-10': showModal })}>

      {/* Imagen */}
      <BackgroundImageSection
        id={`sucursal-${title}`}
        image={image}
        image_240={image}
        image_576={image}
        image_768={image}
        image_1024={image}
        image_1200={image}
        image_1920={image}
        height='h-[210px]'
        opacity='opacity-30 hover:opacity-60'
        backgroundColor='bg-dark'
        className='p-3'>
        <div id={`open-closed-zoom-${title}`} className='flex justify-end items-start h-full'>
          {/* Badge Horario Abierto/Cerrado */}
          {renderOpenClosedBadge(isOpen)}
        </div>
        <div className='flex justify-end items-end h-full'>
          <button onClick={() => setShowModal(true)} id='zoom' className='text-light rounded-full border-2 border-light p-2 opacity-40 bg-dark hover:bg-secondary hover:opacity-100 cursor-pointer'>
            <FaMagnifyingGlass />
          </button>
        </div>
      </BackgroundImageSection>
      {/* Imagen */}

      {/* Descripción */}
      <section className='flex flex-col gap-4 justify-between items-start min-h-[320px] '>
        <div className='p-8 flex flex-col gap-4'>
          {/* Título */}
          <TitleH3 justify='justify-center mb-4' color='text-dark'>
            {title}
          </TitleH3>
          {/* Título */}

          {/* Dirección */}
          <a className={styles.content.description.info} href={gmap} target='_blank' rel='noopener noreferrer' title={`Sucursal ${title}`}>
            <FaMapMarkerAlt size={styles.content.icon.size} className={styles.content.icon.color} />
            <span className={styles.content.text}>{place}</span>
          </a>
          {/* Dirección */}

          {/* Horario */}
          <div className={styles.content.description.info}>
            <FaRegClock size={styles.content.icon.size} className={styles.content.icon.color} />
            <div className={styles.content.text}>
              <span>{serviceday1}</span>
              <span>{servicehour1}</span>
            </div>
          </div>
          {/* Horario */}
        </div>

        {/* Advertisement */}
        {advertisement ? (
          <section className='w-full'>
            <Badge backgroundColor='bg-gradient-to-r from-secondary_dark to-secondary_light md:bg-secondary'>
              <p className='text-base uppercase px-8'>{advertisement}</p>
            </Badge>
            {renderMapLinks(position, title, gmap)}
          </section>
        ) : (
          <div className='w-full'>
            {renderMapLinks(position, title, gmap)}
          </div>
        )}
        {/* Advertisement */}
      </section>
      {/* Descripción */}

      {/* Badge*/}
      {badge && (
        <section className={styles.content.badge.container}>
          <p className={styles.content.badge.paragraph}>{badge}</p>
        </section>
      )}
      {/* Badge*/}

      {/* Modal */}
      {showModal && (
        <Modal width='w-[90vw] md:w-[60vw] lg:w-auto z-50'>
          <div id='imagen-sucursal' className="mx-auto flex flex-col rounded-xl border-4 border-primary bg-light p-8">
            <button id="button-close" onClick={() => setShowModal(false)}>
              <FaXmark
                size={36}
                className="z-30 ml-auto text-primary_dark"
              />
            </button>
            <Spacing distance='my-4' />
            <div className="flex flex-col items-center justify-center gap-8">
              <img src={image} alt={title} className="w-auto h-[50vh] object-cover" />
              <TitleH3>{title}</TitleH3>
            </div>
          </div>
        </Modal>
      )}
      {/* Modal */}
    </article>
  );
}

SucursalCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.object,
  gmap: PropTypes.string,
  openHour: PropTypes.number,
  closeHour: PropTypes.number,
  openMinute: PropTypes.number,
  closeMinute: PropTypes.number,
  place: PropTypes.string,
  badge: PropTypes.string,
  advertisement: PropTypes.string,
  serviceday1: PropTypes.string,
  servicehour1: PropTypes.string,
  image: PropTypes.string,
};

export default SucursalCard;
