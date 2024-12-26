import PropType from 'prop-types'

const Video = ({ src, type, title, className }) => {
  return (
    <div className='2xl:w-2/3 grid place-items-center h-full'>
      <video src={src} type={type} autoPlay loop muted title={title} className={`${className} w-auto h-full object-cover`}></video>
    </div>
  )
}
Video.propTypes = {
  src: PropType.string.isRequired,
  type: PropType.string.isRequired,
  title: PropType.string.isRequired,
  className: PropType.string,
}

export default Video