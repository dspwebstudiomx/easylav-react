import CityCardGenerator from "pages/sucursales/components/CityCardGenerator"
import PropTypes from 'prop-types'

const SucursalCardPerCity = ({ city }) => {
  return (
    <CityCardGenerator city={city} />
  )
}
SucursalCardPerCity.propTypes = {
  city: PropTypes.string.isRequired
}

export default SucursalCardPerCity