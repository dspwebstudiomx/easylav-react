import { Badge, TitleH4 } from 'components';
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
    WIDTH: "w-[260px] 2xl:w-[280px]",
  },
  IMAGE: {
    CONTAINER: {
      HEIGHT: "",
      OVERFLOW: "overflow-hidden",
      ROUNDED: "rounded-t-lg",
      WIDTH: "w-full",
    },
  },
  PARAGRAPH: {
    FONT_SIZE: "text-base",
    COLOR: "text-dark",
    LINE_HEIGHT: "leading-2",
  },
  ICON: {
    SIZE: 20,
  },
};

const styles = {
  article: `${SUCURSAL_CARD_UI.ARTICLE.ANIMATION} ${SUCURSAL_CARD_UI.ARTICLE.BACKGROUND} ${SUCURSAL_CARD_UI.ARTICLE.COLOR} ${SUCURSAL_CARD_UI.ARTICLE.DISPLAY} ${SUCURSAL_CARD_UI.ARTICLE.HEIGHT} ${SUCURSAL_CARD_UI.ARTICLE.JUSTIFY} ${SUCURSAL_CARD_UI.ARTICLE.OVERFLOW} ${SUCURSAL_CARD_UI.ARTICLE.ROUNDED} ${SUCURSAL_CARD_UI.ARTICLE.SHADOW} ${SUCURSAL_CARD_UI.ARTICLE.WIDTH}`,
  data: `${SUCURSAL_CARD_UI.PARAGRAPH.COLOR} ${SUCURSAL_CARD_UI.PARAGRAPH.FONT_SIZE} ${SUCURSAL_CARD_UI.PARAGRAPH.LINE_HEIGHT}`,
  image: `${SUCURSAL_CARD_UI.IMAGE.CONTAINER.OVERFLOW} ${SUCURSAL_CARD_UI.IMAGE.CONTAINER.ROUNDED} ${SUCURSAL_CARD_UI.IMAGE.CONTAINER.WIDTH}`,
};

// Utility function to determine if the branch is open
const isBranchOpen = (openHour, openMinute, closeHour, closeMinute) => {
  const currentTime = new Date();
  const currentTimeInMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
  const openTime = openHour * 60 + openMinute;
  const closeTime = closeHour * 60 + closeMinute;
  return currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
};

// Function to render the open/closed badge
const renderOpenClosedBadge = (isOpen) => (
  <div className={`absolute right-3 top-3 rounded-lg border-2 ${isOpen ? 'border-primary bg-primary_dark' : 'border-red_dark bg-red_light'} px-4 py-2 text-light text-sm`}>
    <p>{isOpen ? 'Abierto' : 'Cerrado'}</p>
  </div>
);

// Estructura
const SucursalCard = ({
  title,
  id,
  position,
  place,
  gmap,
  badge,
  advertisement,
  image,
  serviceday1,
  servicehour1,
  openHour,
  closeHour,
  openMinute,
  closeMinute,
}) => {
  const isOpen = isBranchOpen(openHour, openMinute, closeHour, closeMinute);

  return (
    <article id={`sucursal-${title}`} key={id} className={`${styles.article} w-full`}>
      {/* Imagen Sucursal */}
      <div className={styles.image}>
        <div className='absolute bg-dark opacity-40 h-[180px]'></div>
        <img src={image} alt={`sucursal ${title}`} title={`sucursal ${title}`} className='-z-10 w-full h-[210px] object-cover object-center' />
      </div>
      {/* Imagen Sucursal */}

      {/* Contenido */}
      <div className='flex flex-col justify-start gap-3 p-4 px-10'>
        <div className='flex items-center justify-center mx-auto'>
          <TitleH4 title={title} />
        </div>
        <div className='flex flex-col gap-4 my-4'>
          {/* Dirección */}
          <a href={gmap} target='_blank' rel='noopener noreferrer' title={`sucursal ${title}`}>
            <div className='flex gap-4'>
              <span className='text-secondary'>
                <FaMapMarkerAlt size={SUCURSAL_CARD_UI.ICON.SIZE} />
              </span>
              <span className={styles.data}>{place}</span>
            </div>
          </a>
          {/* Dirección */}

          {/* Horario */}
          <div className='mx-auto mb-2 flex w-full items-center gap-4'>
            <span className='text-secondary'>
              <FaRegClock size={SUCURSAL_CARD_UI.ICON.SIZE} />
            </span>
            <div className='flex gap-3 xl:gap-2'>
              <div className='flex flex-col gap-1'>
                <span className={styles.data}>{serviceday1}</span>
                <span className={styles.data}>{servicehour1}</span>
              </div>
            </div>
          </div>
          {/* Horario */}
        </div>
      </div>
      {/* Contenido */}

      {/* Badge Horario Abierto/Cerrado */}
      {renderOpenClosedBadge(isOpen)}

      {/* Badge Aviso */}
      {advertisement && (
        <div className='absolute -left-14 top-0 w-[280px] rotate-[320deg] rounded-lg border-2 border-secondary bg-secondary_light px-4 py-1 text-light flex items-center text-sm'>
          <p className='ml-8'>{advertisement}</p>
        </div>
      )}
      {/* Badge Aviso */}

      {/* Badge */}
      <section>
        {!badge && (
          <div className='w-full'>
            <div className='flex md:hidden'>
              {/* Waze */}
              <a href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`} target='_blank' rel='noopener noreferrer' title={`Ir a ${title} en Waze`} className='flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary text-sm'>
                <Badge flexDirection='flex-col'>
                  <FaWaze size={24} />
                  <span>Waze</span>
                </Badge>
              </a>
              {/* Waze */}

              {/* Google Maps */}
              <a href={gmap} target='_blank' rel='noopener noreferrer' title={`Ir a ${title} en Google Maps`} className='flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary_dark text-lg text-sm'>
                <Badge flexDirection='flex-col'>
                  <FaMapMarkedAlt size={24} />
                  <span>Google Maps</span>
                </Badge>
              </a>
              {/* Google Maps */}
            </div>
          </div>
        )}
        {badge && (
          <div className=''>
            <Badge backgroundColor='bg-gradient-to-r from-secondary_dark to-secondary_light md:bg-secondary'>
              <p className='text-base'>{badge}</p>
            </Badge>
            <div className='flex md:hidden'>
              {/* Waze */}
              <a href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`} target='_blank' rel='noopener noreferrer' title={`Ir a ${title} en Waze`} className='flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary text-sm'>
                <Badge flexDirection='flex-col'>
                  <FaWaze size={24} />
                  <span>Waze</span>
                </Badge>
              </a>
              {/* Waze */}

              {/* Google Maps */}
              <a href={gmap} target='_blank' rel='noopener noreferrer' title={`Ir a ${title} en Google Maps`} className='flex w-auto w-full flex-col items-center justify-center gap-3 bg-secondary_dark text-sm'>
                <Badge flexDirection='flex-col'>
                  <FaMapMarkedAlt size={24} />
                  <span className='mx-auto text-center'>Google Maps</span>
                </Badge>
              </a>
              {/* Google Maps */}
            </div>
          </div>
        )}
      </section>
      {/* Badge */}
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
