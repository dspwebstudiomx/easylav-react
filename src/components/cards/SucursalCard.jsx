/*
  Loading
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-28
*/

// Importaciones
import { Badge, TitleH4 } from 'components';
import { SUCURSAL_CARD_UI } from 'constants/constants';
import isOpen from 'hooks/useGetServiceHour';
import PropTypes from 'prop-types';
import { FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegClock, FaWaze } from 'react-icons/fa6';

// Estructura
const SucursalCard = ({
  title,
  id,
  position,
  serviceday1,
  servicehour1,
  place,
  gmap,
  width,
  badge,
  advertisement,
  image,
}) => {

  const styles = {
    article: `${SUCURSAL_CARD_UI.ARTICLE.ANIMATION} ${SUCURSAL_CARD_UI.ARTICLE.BACKGROUND} ${SUCURSAL_CARD_UI.ARTICLE.COLOR} ${SUCURSAL_CARD_UI.ARTICLE.DISPLAY} ${SUCURSAL_CARD_UI.ARTICLE.HEIGHT} ${SUCURSAL_CARD_UI.ARTICLE.JUSTIFY} ${SUCURSAL_CARD_UI.ARTICLE.OVERFLOW} ${SUCURSAL_CARD_UI.ARTICLE.ROUNDED} ${SUCURSAL_CARD_UI.ARTICLE.SHADOW} ${SUCURSAL_CARD_UI.ARTICLE.WIDTH}`,
    data: `${SUCURSAL_CARD_UI.PARAGRAPH.COLOR} ${SUCURSAL_CARD_UI.PARAGRAPH.FONT_SIZE} ${SUCURSAL_CARD_UI.PARAGRAPH.FONT_WEIGHT} ${SUCURSAL_CARD_UI.PARAGRAPH.LETTER_SPACING} ${SUCURSAL_CARD_UI.PARAGRAPH.LINE_HEIGHT} ${SUCURSAL_CARD_UI.PARAGRAPH.JUSTIFY}`,
    image: `${SUCURSAL_CARD_UI.IMAGE.CONTAINER.HEIGHT} ${SUCURSAL_CARD_UI.IMAGE.CONTAINER.OVERFLOW} ${SUCURSAL_CARD_UI.IMAGE.CONTAINER.ROUNDED} ${SUCURSAL_CARD_UI.IMAGE.CONTAINER.WIDTH}`,
  }

  return (
    <article id={`sucursal-${title}`} key={id} className={`${styles.article} ${width}`} >

      {/* Imagen Sucursal */}
      <div className={styles.image}>
        <div className='absolute bg-dark opacity-40 w-full h-[180px]'></div>
        <img src={image} alt={title} className='-z-10 w-full h-[180px] object-cover object-center' />
      </div>
      {/* Imagen Sucursal */}

      {/* Contenido */}
      <div className='flex flex-col justify-start gap-3 p-4 px-10'>
        <div className='flex items-center justify-center mx-auto'>
          <TitleH4 title={title} />
        </div>
        <div className='flex flex-col gap-4 my-4'>

          {/* Dirección */}
          <a
            href={gmap}
            target='_blank'
            rel='noopener noreferrer'
            title={`sucursal ${title}`}
            className=''
          >
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

      {/* Badge */}
      <section>
        {!badge && (
          <div className='w-full'>
            {/* Enviar Correo */}
            {/* <a
              href={`mailto:${email}`}
              title={titleMailto}
              type={'button'}
              className='flex w-full items-center justify-center gap-3 text-base'
            >
              <Badge flexDirection='flex-row' backgroundColor='bg-gradient-to-r from-secondary_dark to-secondary_light md:bg-secondary sm:hover:bg-secondary dark:bg-primary dark:hover:bg-primary_dark'>
                <FaEnvelope size={24} />
                <span className=''>Enviar correo</span>
              </Badge>
            </a> */}
            {/* Enviar Correo */}

            <div className='flex md:hidden'>
              {/* Waze */}
              <a
                href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
                target='_blank'
                rel='noopener noreferrer'
                title={`Ir a ${title} en Waze`}
                className='flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary text-sm'
              >
                <Badge flexDirection='flex-col' backgroundColor=''>
                  <FaWaze size={24} />
                  <span>Waze</span>
                </Badge>
              </a>
              {/* Waze */}

              {/* Google Maps */}
              <a
                href={gmap}
                target='_blank'
                rel='noopener noreferrer'
                title={`Ir a ${title} en Google Maps`}
                className='flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary_dark text-lg text-sm'
              >
                <Badge flexDirection='flex-col' backgroundColor=''>
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
            <Badge backgroundColor='bg-gradient-to-r from-secondary_dark to-secondary_light md:bg-secondary '>
              <p className='text-base'>{badge}</p>
            </Badge>
            <div className='flex md:hidden'>
              {/* Waze */}
              <a
                href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
                target='_blank'
                rel='noopener noreferrer'
                title={`Ir a ${title} en Waze`}
                className='flex w-auto w-full flex-col items-center justify-center gap-2 bg-secondary text-sm'

              >
                <Badge flexDirection='flex-col' backgroundColor=''>
                  <FaWaze size={24} />
                  <span>Waze</span>
                </Badge>
              </a>
              {/* Waze */}

              {/* Google Maps */}
              <a
                href={gmap}
                target='_blank'
                rel='noopener noreferrer'
                title={`Ir a ${title} en Google Maps`}
                className='flex w-auto w-full flex-col items-center justify-center gap-3 bg-secondary_dark text-sm'
              >
                <Badge flexDirection='flex-col' backgroundColor=''>
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

      {/* Badge Horario Abierto/Cerrado */}
      {isOpen ? (
        <div className='absolute right-3 top-3 rounded-lg border-2 border-primary bg-primary_dark px-4 py-2 text-light dark:bg-secondary_light dark:border-secondary text-sm'>
          <p className=''>Abierto</p>
        </div>
      ) : <div className='absolute right-3 top-3 rounded-lg border-2 border-red_dark bg-red_light px-4 py-2 text-red_dark text-sm'>
        <p className=''>Cerrado</p>
      </div>
      }
      {/* Badge Horario Abierto/Cerrado */}

      {/* Badge Aviso */}
      {advertisement && (
        <div className='absolute -left-14 top-0 w-[280px] rotate-[320deg] rounded-lg border-2 border-secondary bg-secondary_light px-4 py-1 text-light dark:border-primary_dark dark:bg-primary flex items-center text-sm'>
          <p className='ml-8 '>{advertisement}</p>
        </div>
      )}
      {/* Badge Aviso */}
    </article>
  );
}
SucursalCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  width: PropTypes.string,
  position: PropTypes.object,
  gmap: PropTypes.string,
  serviceday1: PropTypes.string,
  servicehour1: PropTypes.string,
  email: PropTypes.string,
  place: PropTypes.string,
  titleMailto: PropTypes.string,
  badge: PropTypes.string,
  advertisement: PropTypes.string,
  image: PropTypes.string,
};

export default SucursalCard