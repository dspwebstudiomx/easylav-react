import PropType from 'prop-types'

const Video = ({ src, type, title }) => {
  return (
    <video src={src} type={type} autoPlay loop width={210}
      title={title}></video>
  )
}
Video.propTypes = {
  src: PropType.string.isRequired,
  type: PropType.string.isRequired,
  title: PropType.string.isRequired,
}

export default Video