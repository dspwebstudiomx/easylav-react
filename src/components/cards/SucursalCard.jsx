'use client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import PropTypes from 'prop-types'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa6'
import Badge from '../badge/Badge'

const SucursalCard = ({ title, id, position, serviceday1, servicehour1, place, email, gmap, width, titleMailto, badge }) => {
  const googleAPIKey = import.meta.env.VITE_GOOGLE_API_KEY

  return (
    <article id={`sucursal-${title}`} key={id} className={`tarjeta ${width} flex flex-col justify-between gap-8 border-2 border-primary rounded-xl min-h-[490px]`}>

      {/* mapa */}
      <div className='h-[180px] rounded-t-lg overflow-hidden'>
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

      <div className='flex flex-col gap-3 justify-center px-6'>
        <h3 className='text-center font-semibold text-base uppercase pb-4'>{title}</h3>
        {/* Dirección */}
        <a href={gmap} target="_blank" rel="noopener noreferrer" title={`sucursal ${title}`}>
          <p className='w-full mx-auto text-balance flex gap-4 items-center text-sm'>
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
              <p className='text-sm'>{serviceday1}</p>
              <p className='text-sm'>{servicehour1}</p>
            </div>
            {/* <div className='flex gap-2 flex-col  sm:flex-col lg:flex-row'>
              <p className='text-base'>{serviceday2}</p>
              <p className='text-base'>{servicehour2}</p>
            </div> */}
          </div>
        </div>
        {/* Horario */}
      </div>
      {!badge && (
        <Badge backgroundColor='bg-secondary'>
          <a href={`mailto:${email}`} title={titleMailto} type={'button'} className='w-full flex items-center justify-center gap-3 text-lg'  >
            <FaEnvelope />
            <span className="">Enviar correo</span>
          </a>
        </Badge>

      )
      }
      {badge && (
        <Badge backgroundColor='bg-primary'>
          <p>{badge}</p>
        </Badge>
      )
      }

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