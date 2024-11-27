/*
  Title Container
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
*/

// Importaciones
import { BorderLeft, TitleH2 } from 'components'
import { GENERAL_UI } from 'constants/constants'
import propTypes from 'prop-types'

// Estructura
const TitleContainer = ({ title }) => {
  return (
    <div className='w-1/3'>
      <BorderLeft>
        <TitleH2 justify={GENERAL_UI.TITLEH2.JUSTIFY}>
          {title}
        </TitleH2>
      </BorderLeft>
    </div>
  )
}
TitleContainer.propTypes = {
  title: propTypes.string.isRequired
}

export default TitleContainer