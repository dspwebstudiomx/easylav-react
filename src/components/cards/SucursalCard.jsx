import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Badge } from 'components';
import PropTypes from 'prop-types';
import { FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegClock, FaWaze } from 'react-icons/fa6';

const SucursalCard = ({ title, id, position, serviceday1, servicehour1, place, email, gmap, width, titleMailto, badge, advertisement }) => {
  const googleAPIKey = import.meta.env.VITE_GOOGLE_API_KEY

  // Obtenemos la hora actual
  const currentTime = new Date()
  const currentHour = currentTime.getHours()
  const currentMinute = currentTime.getMinutes()

  // Definimos el horario de servicio
  const openHour = 7
  const openMinute = 30
  const closeHour = 21
  const closeMinute = 30

  // Comparamos la hora actual con el horario de servicio
  const isOpen = (currentHour > openHour || (currentHour === openHour && currentMinute >= openMinute))
    && (currentHour < closeHour || (currentHour === closeHour && currentMinute < closeMinute))

  return (
    <article id={`sucursal-${title}`} key={id} className={`relative ${width} flex flex-col justify-between gap-8 lg:gap-0 rounded-xl min-h-[432px] shadow-xl overflow-hidden bg-light dark:text-dark shadow-xl animate__animated animate__bounceIn animate__slower overflow-hidden`}>

      {/* mapa */}
      <div className='h-[150px] rounded-t-lg overflow-hidden'>
        <APIProvider apiKey={googleAPIKey}>
          <Map
            defaultCenter={position}
            zoom={17}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapTypeControl={false}
          />
        </APIProvider>
      </div>
      {/* mapa */}
      <div className='relative flex flex-col gap-3 justify-start px-6'>
        <h3 className='text-center font-semibold text-xl sm:text-base uppercase pb-4'>{title}</h3>
        {/* Dirección */}
        <a href={gmap} target="_blank" rel="noopener noreferrer" title={`sucursal ${title}`}>
          <p className='w-full mx-auto text-balance flex gap-4 items-center text-md sm:text-xs'>
            <span className='text-secondary text-xl'><FaMapMarkerAlt size={25} /></span>
            <span>{place}</span>
          </p>
        </a>
        {/* Dirección */}
        {/* Horario */}
        <div className='w-full mx-auto text-pretty flex gap-4 items-center mb-2'>
          <span className='text-secondary'><FaRegClock size={22} /></span>
          <div className='flex gap-3 xl:gap-2'>
            <div className='flex gap-1 flex-col text-xs'>
              <p className='text-md sm:text-sm'>{serviceday1}</p>
              <p className='text-md sm:text-sm'>{servicehour1}</p>
            </div>
          </div>
        </div>
        {/* Horario */}
      </div>
      {/* Badge */}
      <div>
        {
          !badge && (
            <div className='w-full'>
              {/* Enviar Correo */}
              <a href={`mailto:${email}`} title={titleMailto} type={'button'} className='w-full flex items-center justify-center gap-3 text-lg'  >
                <Badge backgroundColor='bg-secondary_light md:bg-secondary sm:hover:bg-secondary'>
                  <FaEnvelope />
                  <span className="">Enviar correo</span>
                </Badge>
              </a>
              {/* Enviar Correo */}

              <div className='flex md:hidden'>
                {/* Waze */}
                <a
                  href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ir a ${title} en Waze`}
                  className="w-auto flex flex-col items-center justify-center gap-2 text-lg bg-secondary w-full"
                >
                  <Badge backgroundColor='flex-col'>
                    <FaWaze size={32} />
                    <span>Waze</span>
                  </Badge>
                </a>
                {/* Waze */}

                {/* Google Maps */}
                <a
                  href={gmap}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ir a ${title} en Google Maps`}
                  className="w-auto flex flex-col items-center justify-center gap-2 text-lg bg-secondary_dark w-full"
                >
                  <Badge backgroundColor='flex-col'>
                    <FaMapMarkedAlt size={32} />
                    <span>Google Maps</span>
                  </Badge>
                </a>
                {/* Google Maps */}
              </div>
            </div>
          )
        }
        {
          badge && (
            <div className=''>
              <Badge backgroundColor='bg-secondary_light'>
                <p className='text-lg'>{badge}</p>
              </Badge>

              <div className='flex md:hidden'>
                {/* Waze */}
                <a
                  href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ir a ${title} en Waze`}
                  className="w-auto flex flex-col items-center justify-center gap-3 text-lg bg-secondary w-full"
                >
                  <Badge backgroundColor='flex-col'>
                    <FaWaze size={32} />
                    <span>Waze</span>
                  </Badge>
                </a>
                {/* Waze */}

                {/* Google Maps */}
                <a
                  href={gmap}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ir a ${title} en Google Maps`}
                  className="w-auto flex flex-col items-center justify-center gap-3 text-lg bg-secondary_dark w-full"
                >
                  <Badge backgroundColor='flex-col' >
                    <FaMapMarkedAlt size={32} />
                    <span className='text-center mx-auto'>Google Maps</span>
                  </Badge>
                </a>
                {/* Google Maps */}
              </div>


            </div>
          )
        }
      </div>
      {/* Badge */}


      {/* Bubbles */}
      {
        isOpen && (
          <div className='absolute right-3 top-3 border-2 border-primary bg-primary_dark rounded-lg px-4 py-2 text-light'>
            <p className='text-sm'>Abierto</p>
          </div>
        )
      }
      {
        !isOpen && (
          <div className='absolute right-3 top-3 border-2 border-red_dark bg-red_light rounded-lg px-4 py-2 text-red_dark'>
            <p className='text-sm'>Cerrado</p>
          </div>
        )
      }
      {
        advertisement && (
          <div className='absolute w-[280px] -left-14 top-0 border-2 border-secondary bg-secondary_light rounded-lg px-4 py-1 text-light rotate-[320deg] dark:bg-primary dark:border-primary_dark'>
            <p className='text-sm ml-8'>{advertisement}</p>
          </div>
        )
      }
      {/* Bubbles */}


    </article >
  )
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
}

export default SucursalCard