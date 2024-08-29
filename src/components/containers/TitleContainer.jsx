import { BorderBottom, BorderLeft, TitleH2 } from 'components'
import { SECTION_UI, SUCURSAL_SECTION_UI } from 'constants/constants'
import propTypes from 'prop-types'

const TitleContainer = ({ title }) => {
  return (
    <div className='flex justify-center'>
      <div className='sm:hidden'>
        <BorderLeft>
          <TitleH2
            title={title}
            justify={SUCURSAL_SECTION_UI.TITLEH2_JUSTIFY}
          />
        </BorderLeft>
      </div>
      <div className='hidden sm:block'>
        <BorderBottom justify={SECTION_UI.BORDER_JUSTIFY}>
          <TitleH2
            title={title}
            justify={SUCURSAL_SECTION_UI.TITLEH2_JUSTIFY}
          />
        </BorderBottom>
      </div>
    </div>
  )
}
TitleContainer.propTypes = {
  title: propTypes.string.isRequired
}

export default TitleContainer