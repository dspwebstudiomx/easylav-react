import PropTypes from 'prop-types'
import SucursalCard from '../../../components/cards/SucursalCard'
import { localservices } from '../../../data/sucursales'

const CityCardGenerator = ({ city }) => {
  const ciudad = localservices.filter(localservice => localservice.city === city)
  return (
    <article className='grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-12 items-center justify-center'>
      {
        ciudad.map((localservice) =>
          <SucursalCard
            key={localservice.id}
            position={localservice.position}
            place={localservice.place}
            gmap={localservice.gmap}
            title={localservice.title}
            serviceday1={localservice.serviceday1}
            serviceday2={localservice.serviceday2}
            servicehour1={localservice.servicehour1}
            servicehour2={localservice.servicehour2}
          />)
      }
    </article>
  )
}
CityCardGenerator.propTypes = {
  city: PropTypes.string
}

export default CityCardGenerator