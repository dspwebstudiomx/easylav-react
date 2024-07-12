import Proptypes from 'prop-types'

const TitleH2 = ({ title }) => {
  return (
    <h2 className='font-semibold text-4xl'>{title}</h2>
  )
}
TitleH2.propTypes = {
  title: Proptypes.string.isRequired,
}

export default TitleH2