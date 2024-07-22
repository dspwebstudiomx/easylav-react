'use client'
import { APIProvider, Map } from '@vis.gl/react-google-maps'
import PropTypes from 'prop-types'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa6'
import ButtonContainer from '../containers/ButtonContainer'
import ButtonSecondary from '../buttons/ButtonSecondary'

const SucursalCard = ({ title, id, position, serviceday1, serviceday2, servicehour1, servicehour2, place, email }) => {
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
        <div className='w-full mx-auto text-pretty flex gap-4 items-center mb-2'>
          <span className='text-secondary'><FaRegClock /></span>
          <div className='flex flex-col gap-3 xl:gap-2'>
            <div className='flex gap-2 flex-col  sm:flex-col lg:flex-row'>
              <p className='text-base'>{serviceday1}</p>
              <p className='text-base'>{servicehour1}</p>
            </div>
            <div className='flex gap-2 flex-col  sm:flex-col lg:flex-row'>
              <p className='text-base'>{serviceday2}</p>
              <p className='text-base'>{servicehour2}</p>
            </div>
          </div>
        </div>
        {/* Horario */}
        <ButtonContainer position={'justify-center'}>
          <ButtonSecondary title={'Enviar correo'} href={`mailto:${email}`} icon={<FaEnvelope />} width={'lg:w-[210px] 2xl:w-[325px]'} type={'button'} />
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
  email: PropTypes.string,
  servicehour2: PropTypes.string,
  place: PropTypes.string,
}

export default SucursalCard