'use client'
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import PropTypes from 'prop-types'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhone, FaRegClock } from 'react-icons/fa6'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'
const SucursalCard = ({ title, id, position, serviceday1, serviceday2, servicehour1, servicehour2, place, phoneNumber }) => {
  return (
    <article id={`sucursal-${title}`} key={id} className='flex flex-col gap-8 border-2 p-8 border-primary rounded-xl'>
      <APIProvider apiKey='AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik'>
        <h3 className='text-center font-semibold text-xl xl:text-2xl'>{title}</h3>
        {/* mapa */}
        <div className='h-[180px] rounded-lg'>
          <Map center={position} zoom={17} id={`gmap-${title}`}>
            <AdvancedMarker position={position}>
              <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
          </Map>
        </div>
        {/* mapa */}
        {/* Dirección */}

        <p className='w-full mx-auto text-pretty flex gap-3 items-center'>
          <span className='text-secondary text-xl'><FaMapMarkerAlt /></span>
          <p>{place}</p>
        </p>
        {/* Dirección */}
        {/* Horario */}
        <div className='w-full mx-auto text-pretty flex gap-4 items-center'>
          <span className='text-secondary'><FaRegClock /></span>
          <div className='flex flex-col gap-3 xl:gap-1'>
            <div className='flex gap-1 flex-col lg:flex-row'>
              <p>{serviceday1}</p>
              <p>{servicehour1}</p>
            </div>
            <div className='flex flex-col gap-1 lg:flex-row'>
              <p>{serviceday2}</p>
              <p>{servicehour2}</p>
            </div>
          </div>
        </div>
        {/* Horario */}

        <ButtonContainer position={'justify-center'}>
          <ButtonSecondary title={'Llámame'} href={phoneNumber} border={'border-2 border-primary'} icon={<FaPhone />} width={'w-[210px]'} />
        </ButtonContainer>
      </APIProvider>
    </article>
  )
}
SucursalCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.string,
  gmap: PropTypes.string,
  serviceday1: PropTypes.string,
  serviceday2: PropTypes.string,
  servicehour1: PropTypes.string,
  servicehour2: PropTypes.string,
  place: PropTypes.string,
  phoneNumber: PropTypes.string
}

export default SucursalCard