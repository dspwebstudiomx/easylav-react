import PropTypes from 'prop-types'
// import SucursalCard from '../../../components/cards/SucursalCard'
import { localservices } from '../../../data/sucursales'
import SucursalCardCopy from '../../../components/cards/SucursalCardCopy'

const CityCardGenerator = ({ city }) => {
  const ciudad = localservices.filter(localservice => localservice.city === city)
  ciudad.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <article className='grid sm:grid-cols-2 gap-12 items-center justify-center'>
      {
        ciudad.map((localservice) =>
          <SucursalCardCopy
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
          />)
      }
    </article>
  )
}
CityCardGenerator.propTypes = {
  city: PropTypes.string
}

export default CityCardGenerator