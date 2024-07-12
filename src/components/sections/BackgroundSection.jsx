import PropTypes from 'prop-types'

const BackgroundSection = ({ id, background, opacity, children, className }) => {
  return (
    <section id={id} className={`relative overflow-hidden w-auto z-0 flex items-center min-h-fit ${className}`}>

      {/* Background Image */}
      <img
        className='inset-0 -z-10 h-full w-full object-cover object-center opacity-100 absolute top:0'
        src={background}
        alt='hero image'
      />
      {/* Background Image */}

      {/* Overlay */}
      <div className={`absolute inset-0 z-0 w-full h-full bg-black ${opacity}`}></div>
      {/* Overlay */}

      {/* Content Container */}
      <div id="heroContainer" className="mx-auto flex flex-col md:items-start z-10">
        <div className="max-w-screen-lg lg:mx-0 mb-6 mx-5 text-white flex flex-col gap-4">
          {children}
        </div>
        {/* Content Container */}
      </div>
    </section >
  )
}
BackgroundSection.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.string.isRequired
};
export default BackgroundSection