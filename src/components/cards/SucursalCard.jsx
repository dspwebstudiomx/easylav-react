import { Badge, TitleH3 } from 'components';
import PropTypes from 'prop-types';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegClock, FaWaze } from 'react-icons/fa6';

// Estilos
const SUCURSAL_CARD_UI = {
  ARTICLE: {
    ANIMATION: "animate__animated animate__fadeIn animate__slower ",
    BACKGROUND: "bg-light",
    COLOR: "text-dark",
    DISPLAY: "flex flex-col relative mx-auto",
    HEIGHT: "min-h-[560px]",
    JUSTIFY: "justify-between",
    OVERFLOW: "overflow-hidden",
    ROUNDED: "rounded-xl",
    SHADOW: "shadow-xl",
    WIDTH: "w-[280px] 2xl:w-[340px]",
  },
  IMAGE: {
    CONTAINER: {
      WIDTH: "w-full",
      OVERFLOW: "overflow-hidden",
      ROUNDED: "rounded-t-lg",
      OVERLAY: "absolute bg-dark opacity-40 h-[180px]",
      IMG: "-z-10 w-full h-[210px] object-cover object-center"
    },
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
  image: {
    section: `${SUCURSAL_CARD_UI.IMAGE.CONTAINER.OVERFLOW} ${SUCURSAL_CARD_UI.IMAGE.CONTAINER.ROUNDED} ${SUCURSAL_CARD_UI.IMAGE.CONTAINER.WIDTH}`,
    overlay: SUCURSAL_CARD_UI.IMAGE.CONTAINER.OVERLAY,
    img: SUCURSAL_CARD_UI.IMAGE.CONTAINER.IMG
  },
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
  <div className={`absolute right-3 top-3 rounded-lg border-2 font-medium ${isOpen ? ' border-primary_darkcontrast bg-primary text-primary_darkcontrast' : 'border-red_dark bg-red_light text-red'} px-4 py-2 text-sm`}>
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
const SucursalCard = ({ title, position, place, gmap, badge, advertisement, image, serviceday1, servicehour1, openHour, closeHour, openMinute, closeMinute }) => {
  const isOpen = isBranchCurrentlyOpen(openHour, openMinute, closeHour, closeMinute);

  return (
    <article id={`sucursal-${title}`} key={title} className={styles.article}>

      {/* Imagen Sucursal */}
      <div className={styles.image.section}>
        <div className={styles.image.opacity}></div>
        <img className={styles.image.img} src={image} alt={`Sucursal ${title}`} title={`Sucursal ${title}`} />
      </div>
      {/* Imagen Sucursal */}

      {/* Contenido */}
      <div className={styles.content.section}>

        {/* Título */}
        <div className={styles.content.title}>
          <TitleH3>
            {title}
          </TitleH3>
        </div>
        {/* Título */}

        {/* Descripción */}
        <div className={styles.content.description.container}>

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
        {/* Descripción */}
      </div>
      {/* Contenido */}

      {/* Badge Horario Abierto/Cerrado */}
      {renderOpenClosedBadge(isOpen)}

      {/* Badge Aviso */}
      {
        badge && (
          <div className={styles.content.badge.container}>
            <p className={styles.content.badge.paragraph}>{badge}</p>
          </div>
        )
      }
      {/* Badge Aviso */}

      {/* Badge */}
      <section>
        {advertisement ? (
          <>
            <Badge backgroundColor='bg-gradient-to-r from-secondary_dark to-secondary_light md:bg-secondary'>
              <p className='text-base uppercase px-8 py-2'>{advertisement}</p>
            </Badge>
            {renderMapLinks(position, title, gmap)}
          </>
        ) : (
          <div className='w-full'>
            {renderMapLinks(position, title, gmap)}
          </div>
        )}
      </section>
      {/* Badge */}
    </article >
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

SucursalCard.defaultProps = {
  title: 'Sucursal',
  id: 'default-id',
  position: { lat: 0, lng: 0 },
  gmap: '#',
  openHour: 0,
  closeHour: 0,
  openMinute: 0,
  closeMinute: 0,
  place: 'Ubicación no disponible',
  badge: '',
  advertisement: '',
  serviceday1: 'Día no disponible',
  servicehour1: 'Horario no disponible',
  image: 'default-image.jpg',
};

export default SucursalCard;
