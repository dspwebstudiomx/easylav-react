'use client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import PropTypes from 'prop-types'
import { FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegClock, FaWaze } from 'react-icons/fa6'
import Badge from '../badge/Badge'

const SucursalCard = ({ title, id, position, serviceday1, servicehour1, place, email, gmap, width, titleMailto, badge }) => {
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
    <article id={`sucursal-${title}`} key={id} className={`relative ${width} flex flex-col justify-between gap-8 rounded-xl min-h-[490px] shadow-xl overflow-hidden`}>

      {/* mapa */}
      <div className='h-[200px] rounded-t-lg overflow-hidden'>
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
          <p className='w-full mx-auto text-balance flex gap-4 items-center text-md sm:text-sm'>
            <span className='text-secondary text-xl'><FaMapMarkerAlt size={25} /></span>
            <span>{place}</span>
          </p>
        </a>
        {/* Dirección */}
        {/* Horario */}
        <div className='w-full mx-auto text-pretty flex gap-4 items-center mb-2'>
          <span className='text-secondary'><FaRegClock size={22} /></span>
          <div className='flex gap-3 xl:gap-2'>
            <div className='flex gap-1 flex-col'>
              <p className='text-md sm:text-sm'>{serviceday1}</p>
              <p className='text-md sm:text-sm'>{servicehour1}</p>
            </div>
          </div>
        </div>
        {/* Horario */}
      </div>
      <div>
        {
          !badge && (
            <div className='w-full'>
              {/* Enviar Correo */}
              <Badge backgroundColor='bg-secondary_light md:bg-secondary'>
                <a href={`mailto:${email}`} title={titleMailto} type={'button'} className='w-full flex items-center justify-center gap-3 text-lg'  >
                  <FaEnvelope />
                  <span className="">Enviar correo</span>
                </a>
              </Badge>
              {/* Enviar Correo */}

              <div className='flex md:hidden'>
                {/* Waze */}
                <Badge backgroundColor='bg-secondary'>
                  <a
                    href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Ir a ${title} en Waze`}
                    className="w-auto flex items-center justify-center gap-3 text-lg"
                  >
                    <FaWaze size={32} />
                    <span>Waze</span>
                  </a>
                </Badge>
                {/* Waze */}

                {/* Google Maps */}
                <Badge backgroundColor='bg-secondary_dark'>
                  <a
                    href={gmap}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Ir a ${title} en Google Maps`}
                    className="w-auto flex items-center justify-center gap-3 text-lg"
                  >
                    <FaMapMarkedAlt size={32} />
                    <span>Google Maps</span>
                  </a>
                </Badge>
                {/* Google Maps */}
              </div>
            </div>
          )
        }
        {
          badge && (
            <>
              <Badge backgroundColor='bg-secondary_light'>
                <p>{badge}</p>
              </Badge>
              <div className='block md:hidden'>
                <Badge backgroundColor='bg-secondary'>
                  <a
                    href={`https://waze.com/ul?ll=${position.lat},${position.lng}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Ir a ${title} en Waze`}
                    className="w-full flex items-center justify-center gap-3 text-lg"
                  >
                    <FaWaze size={32} />
                    <span>Ir en Waze</span>
                  </a>
                </Badge>
                <Badge backgroundColor='bg-secondary_dark'>
                  <a
                    href={gmap}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Ir a ${title} en Google Maps`}
                    className="w-full flex items-center justify-center gap-3 text-lg"
                  >
                    <FaMapMarkedAlt size={32} />
                    <span>Ir en Google Maps</span>
                  </a>
                </Badge>

              </div>
            </>
          )
        }
      </div>
      <div className='absolute right-3 top-3 border-2 border-primary bg-primary_dark rounded-lg px-4 py-2 text-light'>
        {isOpen ? <p className='text-sm text-green-500'>Abierto</p> : <p className='text-sm text-red-500'>Cerrado</p>}
      </div>

    </article>
  )
}
SucursalCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  width: PropTypes.string,
  position: PropTypes.object,
  gmap: PropTypes.string,
  serviceday1: PropTypes.string,
  serviceday2: PropTypes.string,
  servicehour1: PropTypes.string,
  email: PropTypes.string,
  servicehour2: PropTypes.string,
  place: PropTypes.string,
  titleMailto: PropTypes.string,
  badge: PropTypes.string,
}

export default SucursalCard