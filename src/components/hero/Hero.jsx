import PropTypes from 'prop-types'
import Section from '../templates/Section'
import Container from '../containers/Container'



const Hero = ({ children, backgroundColor, backgroundImage, height, titleSection, opacity, opacityColor, textColor }) => {
  return (
    <Section id={`seccion-${titleSection}`} backgroundImage={backgroundImage} height={height} backgroundColor={backgroundColor} className={`${textColor} relative overflow-hidden z-0 flex items-center justify-center`}>
      <div id={`imagen-${titleSection}`} className='inset-0 -z-20 h-full object-cover object-center absolute top:0'>
        <img src={backgroundImage} alt={titleSection} className='h-full object-cover w-full' />
      </div>
      <div id={`opacidad-${titleSection}`} className={`${opacity} absolute inset-0 -z-10 ${opacityColor}`}></div>
      <Container id={`contenido-${titleSection}`} className={'ml-0'}>
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
  textColor: PropTypes.string
}

export default Hero