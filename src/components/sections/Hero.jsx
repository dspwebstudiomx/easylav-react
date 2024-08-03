import PropTypes from 'prop-types'
import Container from '../containers/Container'
import Section from '../templates/Section'


const Hero = ({ children, backgroundColor, backgroundImage, height, titleSection, opacity, opacityColor, textColor }) => {
  return (
    <Section id={`seccion-${titleSection}`} backgroundImage={backgroundImage} height={height} backgroundColor={backgroundColor} className={`${textColor} relative overflow-hidden z-0 flex items-center`}>
      <div id={`imagen-${titleSection}`} className='inset-0 -z-20 h-full object-cover object-center absolute top:0'>
        <img src={backgroundImage} alt={titleSection} className='h-full object-cover' />
      </div>
      <div id={`opacidad-${titleSection}`} className={`${opacity} absolute inset-0 -z-10 ${opacityColor}`}></div>
      <Container id={`contenido-${titleSection}`}>
        {children}
      </Container>
    </Section>
  )
}
Hero.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  height: PropTypes.string,
  titleSection: PropTypes.string.isRequired,
  opacity: PropTypes.string,
  opacityColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Hero