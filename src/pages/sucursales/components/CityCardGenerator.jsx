import PropTypes from 'prop-types'
// import SucursalCard from '../../../components/cards/SucursalCard'
import SucursalCard from '../../../components/cards/SucursalCard'
import { localservices } from '../../../data/sucursales'

const CityCardGenerator = ({ city }) => {
  const ciudad = localservices.filter(localservice => localservice.city === city)
  ciudad.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <article className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 items-center justify-center'>
      {
        ciudad.map((localservice) =>
          <SucursalCard
            key={localservice.title}
            position={localservice.position}
            place={localservice.place}
            gmap={localservice.gmap}
            title={localservice.title}
            serviceday1={localservice.serviceday1}
            serviceday2={localservice.serviceday2}
            servicehour1={localservice.servicehour1}
            servicehour2={localservice.servicehour2}
            email={localservice.email}
            badge={localservice.badge}
          />)
      }
    </article>
  )
}
CityCardGenerator.propTypes = {
  city: PropTypes.string
}

export default CityCardGenerator