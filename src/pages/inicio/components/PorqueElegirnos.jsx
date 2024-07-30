import Section from '../../../components/templates/Section'
import Container from '../../../components/containers/Container'
import imageSection from '../../../assets/images/images/Placeholder.webp'
import { TbPoint } from 'react-icons/tb';
import PropTypes from 'prop-types'
import BorderLeft from '../../../components/borders/BorderLeft';
import TitleH2 from '../../../components/title/TitleH2';

const PorqueElegirnos = () => {
  return (
    <Section id={'seccion-porquelegirnos'}>
      <Container className={'mx-auto'}>
        <article className='grid sm:grid-cols-2 gap-x-20 gap-y-16 mx-auto'>
          <div className='grid place-content-center gap-12'>
            <BorderLeft>
              <TitleH2 title='Por qué Elegirnos' />
            </BorderLeft>
            <div className='text-balance text-2xl flex flex-col gap-6'>
              <div className='flex gap-2'>
                <span className='text-primary text-3xl'><TbPoint /></span>
                <span className='font-semibold'>Compromiso con la Calidad</span>
              </div>
              <div className='ml-8 text-xl'>
                Utilizamos solo productos y técnicas de lavado <br></br> de primera categoría.
              </div>
            </div>
            <div className='text-balance text-2xl flex flex-col gap-6'>
              <div className='flex gap-2'>
                <span className='text-primary text-3xl'><TbPoint /></span>
                <span className='font-semibold'>Experiencia y Profesionalismo</span>
              </div>
              <div className='ml-8 text-xl'>
                Nuestro equipo está altamente capacitado y comprometido con tu satisfacción.
              </div>
            </div>
          </div>
          <div className='justify-end items-center'>
            <img src={imageSection} alt="alt" width={520} className='shadow-image rounded' />
          </div>
        </article>
      </Container>
    </Section>
  )
}
PorqueElegirnos.propTypes = {
  id: PropTypes.string.isRequired
}

export default PorqueElegirnos