import { Container, Section } from 'components'
import PropTypes from 'prop-types'

const BackgroundImage = ({ children, image_768, image_576, image_240, image_1024, image_1200, image_1920, height, opacity, image, backgroundColor }) => {
  return (
    <Section id='hero' className={`${height} relative overflow-hidden p-12 w-full z-0 xl:py-20`}>

      {/* Background Image */}
      <img
        src={image_768}
        srcSet={`
          ${image_576},
          ${image_768} 768w,
          ${image_1024} 1024w,
          ${image_1200} 1200w,
          ${image_1920} 1920w,
                      `}
        alt={image_240}
        className={`absolute inset-0 -z-20 h-full w-full object-cover object-center ${height} ${image}`}
        title={image_240 || image_768}
      />
      {/* Background Image */}

      {/* Overlay */}
      <div className={`absolute inset-0 -z-10 w-full h-full ${backgroundColor} ${opacity} top-0 left-0'`}></div>
      {/* Overlay */}

      {/* Content Container */}
      <Container id='heroContainer' className='mx-auto z-0'>
        {children}
      </Container>
    </Section>
  )
}
BackgroundImage.propTypes = {
  children: PropTypes.node,
  image_240: PropTypes.string,
  image_576: PropTypes.string,
  image_768: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  image_1920: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.string,
  opacity: PropTypes.string,
  backgroundColor: PropTypes.string,
}
export default BackgroundImage