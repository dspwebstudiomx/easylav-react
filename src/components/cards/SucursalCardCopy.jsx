'use client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import PropTypes from 'prop-types'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa6'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonCard from '../buttons/ButtonCard'

const SucursalCardCopy = ({ title, id, position, serviceday1, servicehour1, place, email, gmap }) => {

  const googleAPIKey = import.meta.env.VITE_GOOGLE_API_KEY

  return (
    <article id={`sucursal-${title}`} key={id} className='grid xl:grid-cols-2 gap-12 shadow-xl p-8 rounded-xl min-h-[400px] justify-start w-[420px] 2xl:w-[700px]'>

      {/* mapa */}
      <h3 className='text-center font-semibold text-xl uppercase mb-4 sm:hidden'>{title}</h3>
      <div className='rounded-lg w-[100%] h-[280px] sm:h-full'>
        <APIProvider apiKey={googleAPIKey}>
          <Map
            defaultCenter={position}
            zoom={17}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </APIProvider>
      </div>
      {/* mapa */}

      <div className='flex flex-col gap-5 items-start justify-center text-sm py-12'>
        <h3 className='text-center font-semibold text-xl uppercase mb-4 hidden sm:block'>{title}</h3>
        {/* Dirección */}
        <a href={gmap} target="_blank" rel="noopener noreferrer">
          <p className='w-full mx-auto text-pretty flex gap-4 items-center text-base'>
            <span className='text-secondary text-xl'><FaMapMarkerAlt size={24} /></span>
            <span>{place}</span>
          </p>
        </a>
        {/* Dirección */}
        {/* Horario */}
        <div className='w-full mx-auto text-pretty flex gap-4 items-center mb-2 font-normal'>
          <span className='text-secondary'><FaRegClock size={21} /></span>
          <div className='flex flex-col gap-3 xl:gap-2'>
            <div className='flex gap-2 flex-col text-sm'>
              <p className='text-base'>{serviceday1}</p>
              <p className='text-sm'>{servicehour1}</p>
            </div>
            {/* <div className='flex gap-2 flex-col  sm:flex-col lg:flex-row'>
              <p className='text-base'>{serviceday2}</p>
              <p className='text-base'>{servicehour2}</p>
            </div> */}
          </div>
        </div>
        {/* Horario */}
        <ButtonContainer position={'justify-center'}>
          <ButtonCard
            title={'Enviar correo'}
            href={`mailto:${email}`}
            icon={<FaEnvelope />}
            width={'w-[320px] sm:w-[210px] 2xl:w-[225px]'}
            type={'button'}
            height={'h-20 2xl:h-16'}
          />
        </ButtonContainer>
      </div>
    </article>
  )
}
SucursalCardCopy.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.object,
  gmap: PropTypes.string,
  serviceday1: PropTypes.string,
  serviceday2: PropTypes.string,
  servicehour1: PropTypes.string,
  email: PropTypes.string,
  servicehour2: PropTypes.string,
  place: PropTypes.string,
}

export default SucursalCardCopy