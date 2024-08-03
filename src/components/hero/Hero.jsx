import PropTypes from 'prop-types'
import Container from '../containers/Container'
import Section from '../templates/Section'



const Hero = ({ children, backgroundColor, backgroundImage, height, titleSection, opacity, opacityColor, textColor, imageAlt }) => {
  return (
    <Section id={titleSection} backgroundImage={backgroundImage} height={height} backgroundColor={backgroundColor} className={`${textColor} relative overflow-hidden z-0 flex items-center justify-center`}>
      <div id={`imagen-${titleSection}`} className='inset-0 -z-20 h-full object-cover object-center absolute top:0'>
        <img src={backgroundImage} alt={imageAlt} className='h-full object-cover w-full' title={imageAlt} />
      </div>
      <div id={`opacidad-${titleSection}`} className={`${opacity} absolute inset-0 -z-10 ${opacityColor}`}></div>
      <Container id={`contenido-${titleSection}`}>
        {children}
      </Container>
    </Section>
  )
}
Hero.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  height: PropTypes.string,
  titleSection: PropTypes.string,
  opacity: PropTypes.string,
  opacityColor: PropTypes.string,
  textColor: PropTypes.string,
  imageAlt: PropTypes.string.isRequired
}

export default Hero