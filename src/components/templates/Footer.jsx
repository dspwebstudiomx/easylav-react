import Section from './Section'
import Container from '../containers/Container'
import logo from '../../assets/images/logos/horizontal/logo-blanco.png'
import { TbPoint } from 'react-icons/tb';
import SocialLinks from '../links/SocialLinks'

const Footer = () => {
  return (
    <footer id='footer'>
      <Section backgroundColor={'bg-secondary'} id={'footer-sections'} className={'py-24'} height={'h-auto'} >
        <Container className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl flex justify-between flex-col gap-y-12 mx-auto sm:flex-row sm:px-12 text-light' >

          {/* Footer Sections */}
          <div id='footer-sections' className='flex flex-col gap-8 w-full'>
            <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Secciones</h3>
            <ul className='flex flex-col gap-1'>
              <li><a href='/' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Inicio</span></a></li>
              <li><a href='/#nosotros' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Quienes Somos</span></a></li>
              <li><a href='/#servicios' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Servicios</span></a></li>
              <li><a href='/sucursales' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Sucursales</span></a></li>
              <li><a href='/contacto' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Contacto</span></a></li>
              <li><a href='/franquicias' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Franquicias</span></a></li>
            </ul>
          </div>
          {/* Footer Sections */}

          {/* Footer Services */}
          <div id='footer-services' className='flex flex-col gap-8 w-full'>
            <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Servicios</h3>
            <ul className='flex flex-col gap-1'>
              <li><a href='/#servicios' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Lavado Regular</span></a></li>
              <li><a href='/#servicios' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Lavado Especializado</span></a></li>
              <li><a href='/#servicios' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Planchado y Doblez</span></a></li>
            </ul>
          </div>
          {/* Footer Services */}

          {/* Footer Privacy & Terms */}
          <div id='footer-privacy-terms' className='flex flex-col gap-8 w-full xl:w-full'>
            <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Políticas y Términos</h3>
            <ul className='flex flex-col gap-1'>
              <li><a href='/politica-privacidad' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Política de Privacidad</span></a></li>
              <li><a href='/terminos-condiciones' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Términos y Condiciones</span></a></li>
            </ul>
          </div>
          {/* Footer Privacy & Terms */}

          {/* Footer Logo */}
          <a id='footer-logo' className='sm:w-full flex flex-col gap-8 items-center' href='/'>
            <img src={logo} alt='logo' className='w-[230px] h-auto mx-auto sm:mr-auto' />
            <SocialLinks color={'text-light'} size={24} circleBorder={'border-2 rounded-[100px] border-light p-3'} gap={'gap-4'} hover={'hover:text-primary hover:border-primary'} />
          </a>
          {/* Footer Logo */}

        </Container>
      </Section >
      <div className='text-dark bg-primary py-6'>
        <div className='flex justify-between 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto w-[80%] flex-col sm:flex-row gap-4 text-center sm:text-left text-sm'>
          <h3>Derechos Reservados 2024</h3>
          <h3>Diseñado y Desarrollado por: <a href='https://dspwebstudio.com' target='_blank' className='text-secondary font-semibold ml-2'>dspwebstudio.com</a></h3>
        </div>
      </div>
    </footer>
  )
}
export default Footer