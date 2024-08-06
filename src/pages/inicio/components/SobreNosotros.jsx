import { Placeholder } from 'assets'
import { BorderLeft, Container, Section, TitleH2 } from 'components'

const SobreNosotros = () => {
  return (
    <Section id={'nosotros'} backgroundColor={'dark:bg-dark'} height={'h-auto'} className={'dark:text-light'} >
      <Container className={'mx-auto'} id='nosotros-container' >
        <div className='grid sm:grid-cols-2 gap-x-20 gap-y-16'>
          <div className='grid place-content-center gap-8'>
            <BorderLeft>
              <TitleH2 title={'Sobre Nosotros'} />
            </BorderLeft>
            <p className='text-balance 2xl:text-xl'>
              En <span className='text-secondary font-semibold'>Easylav</span>, somos un equipo apasionado por el cuidado de la ropa. Con muchos años de experiencia, hemos perfeccionado nuestra técnica para asegurarnos de que cada prenda se vea y se sienta como nueva. Usamos solo los mejores equipos y productos porque creemos que tu ropa merece lo mejor.
            </p>
          </div>
          <div className='justify-end items-center'>
            <img src={Placeholder} alt="mujer en servicio de lavado" width={520} className='shadow-image' title='mujer en servicio de lavado' />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default SobreNosotros