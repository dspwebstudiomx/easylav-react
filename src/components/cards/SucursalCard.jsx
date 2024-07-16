'use client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import PropTypes from 'prop-types'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhone, FaRegClock } from 'react-icons/fa6'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'

const SucursalCard = ({ title, id, position, serviceday1, serviceday2, servicehour1, servicehour2, place, phoneNumber }) => {
  return (
    <article id={`sucursal-${title}`} key={id} className='flex flex-col gap-8 border-2 p-8 border-primary rounded-xl'>
      <div>
        <h3 className='text-center font-semibold text-xl uppercase py-4'>{title}</h3>
        {/* mapa */}
        <div className='h-[180px] rounded-lg '>
          <APIProvider apiKey='AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik'>
            <Map
              defaultCenter={position}
              zoom={17}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
            />
          </APIProvider>
        </div>
        {/* mapa */}
      </div>
      <div className='flex flex-col gap-5 items-start justify-center'>
        {/* Dirección */}
        <p className='w-full mx-auto text-pretty flex gap-4 items-center text-base'>
          <span className='text-secondary text-xl'><FaMapMarkerAlt /></span>
          <span>{place}</span>
        </p>
        {/* Dirección */}
        {/* Horario */}
        <div className='w-full mx-auto text-pretty flex gap-4 items-center'>
          <span className='text-secondary'><FaRegClock /></span>
          <div className='flex flex-col gap-3 xl:gap-1'>
            <div className='flex gap-1 flex-col'>
              <p className='text-base'>{serviceday1}</p>
              <p className='text-base'>{servicehour1}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-base'>{serviceday2}</p>
              <p className='text-base'>{servicehour2}</p>
            </div>
          </div>
        </div>
        {/* Horario */}
        <ButtonContainer position={'justify-center'}>
          <ButtonSecondary title={'Llámame'} href={`tel:+52${phoneNumber}`} border={'border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:border-t-secondary hover:border-l-secondary_dark'} icon={<FaPhone />} width={'w-[210px]'} type={'button'} />
        </ButtonContainer>
      </div>

    </article>
  )
}
SucursalCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.object,
  gmap: PropTypes.string,
  serviceday1: PropTypes.string,
  serviceday2: PropTypes.string,
  servicehour1: PropTypes.string,
  phoneNumber: PropTypes.string,
  servicehour2: PropTypes.string,
  place: PropTypes.string,
}

export default SucursalCard