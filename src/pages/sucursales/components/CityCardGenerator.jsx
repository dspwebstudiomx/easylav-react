import { SucursalCard } from 'components'
import { localservices } from 'data'
import PropTypes from 'prop-types'

const CityCardGenerator = ({ city }) => {

  const ciudad = localservices.filter(localservice => localservice.city === city)
  ciudad.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <article className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 items-center justify-center'>
      {
        ciudad.map((localservice) =>
          <SucursalCard
            key={localservice.id}
            position={localservice.position}
            place={localservice.place}
            gmap={localservice.gmap}
            title={localservice.title}
            serviceday1={localservice.serviceday1}
            servicehour1={localservice.servicehour1}
            email={localservice.email}
            badge={localservice.badge}
            advertisement={localservice.advertisement}
            image={localservice.image}
            openHour={localservice.openHour}
            closeHour={localservice.closeHour}
            openMinute={localservice.openMinute}
            closeMinute={localservice.closeMinute}
          />
        )
      }
    </article>
  )
}
CityCardGenerator.propTypes = {
  city: PropTypes.string
}

export default CityCardGenerator