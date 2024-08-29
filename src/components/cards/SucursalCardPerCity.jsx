import { TitleContainer } from "components"
import CityCardGenerator from "pages/sucursales/components/CityCardGenerator"
import PropTypes from 'prop-types'

const SucursalCardPerCity = ({ title, city }) => {
  return (
    <>
      <TitleContainer title={title} />
      <CityCardGenerator city={city} />
    </>
  )
}
SucursalCardPerCity.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.object.isRequired
}

export default SucursalCardPerCity