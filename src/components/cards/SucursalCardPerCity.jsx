import { TitleContainer } from "components"
import CityCardGenerator from "pages/sucursales/components/CityCardGenerator"
import PropTypes from 'prop-types'

const SucursalCardPerCity = ({ city }) => {
  return (
    <>
      <TitleContainer title={city} />
      <CityCardGenerator city={city} />
    </>
  )
}
SucursalCardPerCity.propTypes = {
  city: PropTypes.string.isRequired
}

export default SucursalCardPerCity