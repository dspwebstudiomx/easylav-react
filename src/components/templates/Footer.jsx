import Section from './Section'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Container from '../containers/Container'
import logo from '../../assets/images/logos/horizontal/logo-blanco.png'
import { TbPoint } from 'react-icons/tb';
import SocialLinks from '../links/SocialLinks'
import { navlinks, otrosLinks, linksServicios } from '../../data/Navlinks'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id='footer' className='text-xl'>
      <Section backgroundColor={'bg-secondary'} id={'footer-sections'} className={'py-24'} height={'h-auto'}>
        <Container className='text-light grid grid-cols-2 lg:grid-cols-4 justify-between mx-auto w-[80vw]'>

          {/* Footer Sections */}
          <div id='footer-sections' className='flex flex-col gap-8 w-full'>
            <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Secciones</h3>
            <ul className='flex flex-col gap-3'>
              {navlinks.map(navlink => {
                return (
                  <li key={navlink.id} id={`footer-navlink-${navlink.linkId}`}>
                    <NavHashLink id={`footer-link-${navlink.linkId}`} to={navlink.href} className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' />
                      <span className='ml-2'>{navlink.name}</span>
                    </NavHashLink>
                  </li>
                )
              })}
              <li><Link onClick={scrollToTop} to='/franquicias' className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' /><span className='ml-2'>Franquicias</span></Link></li>
            </ul>
          </div>
          {/* Footer Sections */}

          {/* Footer Services */}
          <div id='footer-services' className='flex flex-col gap-8 w-full'>
            <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Servicios</h3>
            <ul className='flex flex-col gap-3'>
              {linksServicios.map(linkServicio => {
                return (
                  <li key={linkServicio.id} id={`footer-navlink-${linkServicio.linkId}`}>
                    <NavHashLink id={`footer-link-${linkServicio.linkId}`} to={linkServicio.href} className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' />
                      <span className='ml-2'>{linkServicio.name}</span>
                    </NavHashLink>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* Footer Services */}

          {/* Footer Privacy & Terms */}
          <div id='footer-privacy-terms' className='flex flex-col gap-8 w-full xl:w-full'>
            <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Políticas de Privacidad, Términos y Condiciones, Preguntas Frecuentes</h3>
            <ul className='flex flex-col gap-3'>
              {otrosLinks.map(otroLink => {
                return (
                  <li key={otroLink.id} id={`footer-navlink-${otroLink.linkId}`}>
                    <NavHashLink id={`footer-link-${otroLink.linkId}`} to={otroLink.href} className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' />
                      <span className='ml-2'>{otroLink.name}</span>
                    </NavHashLink>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* Footer Privacy & Terms */}

          {/* Footer Logo */}
          <div className='flex flex-col gap-8'>
            <a id='footer-logo' className='sm:w-full flex flex-col gap-8 items-center' href='/'>
              <img src={logo} alt='logo' className='w-[260px] h-auto mx-auto  2xl:mr-0' />
            </a>
            <SocialLinks position={'justify-end'} color={'text-light'} size={32} circleBorder={'border-2 rounded-[100px] border-light p-3'} gap={'gap-4'} hover={'hover:text-primary hover:border-primary'} />
          </div>
          {/* Footer Logo */}

        </Container>
      </Section >
      <div className='text-dark bg-primary py-6'>
        <div className='flex justify-between 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto w-[65vw] flex-col sm:flex-row gap-4 text-center sm:text-left text-sm'>
          <h3>Derechos Reservados 2024</h3>
          <h3>Diseñado y Desarrollado por: <a href='https://dspwebstudio.com' target='_blank' className='text-secondary font-semibold ml-2'>dspwebstudio.com</a></h3>
        </div>
      </div>
    </footer>
  )
}
export default Footer