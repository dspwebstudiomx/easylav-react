import { Container } from 'components'
import PropTypes from 'prop-types'

const BackgroundImage = ({ children, image_768, image_576, image_240, image_1024, image_1200, height }) => {
  return (
    <section id='hero' className={`${height} relative overflow-hidden p-12 w-full z-0 flex items-center mt-20 xl:px-0 text-light`}>

      {/* Background Image */}
      <img
        src={image_768}
        srcSet={`
          ${image_576} 576w,
          ${image_768} 768w,
          ${image_1024} 1024w,
          ${image_1200} 1200w,
                      `}
        alt={image_240}
        className='absolute inset-0 -z-10 h-full w-full object-cover object-center'
        title={image_240 || image_768}
      />
      {/* Background Image */}

      {/* Overlay */}
      <div className='absolute inset-0 z-0 w-full h-full bg-black opacity-55'></div>
      {/* Overlay */}

      {/* Content Container */}
      <Container id='heroContainer' className='mx-auto flex flex-col md:items-start z-10 text-light'>
        {children}
      </Container>
    </section >
  )
}
BackgroundImage.propTypes = {
  children: PropTypes.node,
  image_240: PropTypes.string,
  image_576: PropTypes.string,
  image_768: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  height: PropTypes.string
}
export default BackgroundImage