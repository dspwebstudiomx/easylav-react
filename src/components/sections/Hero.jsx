import React from 'react'
import Section from '../templates/Section'
import Container from '../containers/Container'
import Image from 'next/image'


const Hero = ({ children, backgroundColor, backgroundImage, height, titleSection, opacity, opacityColor, textColor }) => {
  return (
    <Section id={`seccion-${titleSection}`} backgroundImage={backgroundImage} height={height} backgroundColor={backgroundColor} className={`${textColor} relative overflow-hidden z-0 flex items-center`}>
      <div id={`imagen-${titleSection}`} className='inset-0 -z-20 h-full object-cover object-center absolute top:0'>
        <Image src={backgroundImage} alt={titleSection} className='h-full object-cover' />
      </div>
      <div id={`opacidad-${titleSection}`} className={`${opacity} absolute inset-0 -z-10 ${opacityColor}`}></div>
      <Container id={`contenido-${titleSection}`}>
        {children}
      </Container>
    </Section>
  )
}

export default Hero