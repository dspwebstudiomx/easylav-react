import PropTypes from 'prop-types'

const TitleH1 = ({ title }) => {
  return (
    <h1 className='text-4xl font-semibold'>{title}</h1>
  )
}
TitleH1.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TitleH1