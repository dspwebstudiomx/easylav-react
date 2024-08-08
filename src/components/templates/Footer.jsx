import { linksPoliticas, linksServicios, linksTerminos, navlinks } from 'data';
import { scrollToTop, scrollWithOffset } from 'functions';
import { TbPoint } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Section, SocialLinks } from '..';
import logo from '../../assets/images/logos/horizontal/logo-blanco.png';
import { Container } from 'components'

const Footer = () => {

  return (
    <footer id='footer' className='text-base'>
      <div className='bg-gradient-to-r from-primary to-secondary h-2 '></div>
      <Section backgroundColor={'bg-secondary'} id={'footer-sections'} className={'py-24'} height={'h-auto'}>
        <Container className='text-light grid grid-cols-2 xl:grid-cols-5 mx-auto'>

          {/* Footer Sections */}
          <div id='footer-sections' className='flex flex-col gap-6 w-full'>
            <h3 className='text-primary uppercase leading-6 text-lg font-medium'>Secciones</h3>
            <ul className='flex flex-col gap-0'>
              {navlinks.map(navlink => {
                return (
                  <li key={navlink.id} id={`footer-navlink-${navlink.linkId}`}>
                    <NavHashLink
                      id={`footer-link-${navlink.linkId}`}
                      to={navlink.href}
                      className='text-white hover:text-primary flex items-center'
                      scroll={el => scrollWithOffset(el)}
                    >
                      <TbPoint className='text-primary text-2xl' size={32} />
                      <span className='ml-2'>{navlink.name}</span>
                    </NavHashLink>
                  </li>
                )
              })}
              <li>
                <Link
                  to='/franquicias'
                  className='text-white hover:text-primary flex items-center'
                  onClick={scrollToTop}
                >
                  <TbPoint
                    className='text-primary text-2xl'
                    size={32}
                  />
                  <span
                    className='ml-2'
                  >Franquicias
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Sections */}

          {/* Footer Services */}
          <div id='footer-services' className='flex flex-col gap-6 w-full'>
            <h3 className='text-primary uppercase leading-6 text-lg font-base'>Servicios</h3>
            <ul className='flex flex-col gap-0'>
              {linksServicios.map(linkServicio => {
                return (
                  <li key={linkServicio.id} id={`footer-navlink-${linkServicio.linkId}`}>
                    <NavHashLink
                      id={`footer-link-${linkServicio.linkId}`}
                      to={linkServicio.href}
                      className='text-white hover:text-primary flex items-center'
                      scroll={el => scrollWithOffset(el)}
                    >
                      <TbPoint
                        className='text-primary text-2xl' size={32}
                      />
                      <span className='ml-0'>{linkServicio.name}</span>
                    </NavHashLink>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* Footer Services */}

          {/* Footer Privacy */}
          <div id='footer-policies' className='flex flex-col gap-8 w-full'>
            <h3 className='text-primary uppercase leading-6 text-base font-medium'>Políticas de Privacidad, Política de Cookies</h3>
            <ul className='flex flex-col gap-0'>
              {linksPoliticas.map(link => {
                return (
                  <li key={link.id} id={`footer-navlink-${link.linkId}`}>
                    <NavHashLink id={`footer-link-${link.linkId}`} to={link.href} className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' size={32} title={`Visita ${link.name}`} onClick={scrollToTop} />
                      <span className='ml-2'>{link.name}</span>
                    </NavHashLink>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* Footer Privacy */}

          {/* Footer Terms */}
          <div className='grid gap-12'>
            <div id='footer-privacy-terms' className='flex flex-col gap-8 w-full'>
              <h3 className='text-primary uppercase leading-6 text-base font-medium'>Términos y Condiciones, Preguntas Frecuentes</h3>
              <ul className='flex flex-col gap-0'>
                {linksTerminos.map(link => {
                  return (
                    <li key={link.id} id={`footer-navlink-${link.linkId}`}>
                      <NavHashLink id={`footer-link-${link.linkId}`} to={link.href} className='text-white hover:text-primary flex items-center'><TbPoint className='text-primary text-2xl' size={32} title={`Visita ${link.name}`} onClick={scrollToTop} />
                        <span className='ml-2'>{link.name}</span>
                      </NavHashLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          {/* Footer Terms */}

          {/* Footer Logo */}
          <div className='flex flex-col gap-8'>
            <a id='footer-logo' className='sm:w-full flex flex-col gap-8 items-center' href='/'>
              <img src={logo} alt='logo easylav blanco' className='w-[260px] h-auto mx-auto  2xl:mr-0' title='logo easylav blanco' />
            </a>
            <SocialLinks position={'justify-center md:justify-end'} color={'text-light'} size={26} circleBorder={'border-2 rounded-[100px] border-light p-3'} gap={'gap-4'} hover={'hover:text-primary hover:border-primary'} />
          </div>
          {/* Footer Logo */}

        </Container>
      </Section >
      <div className='text-dark bg-primary_dark py-6'>
        <div className='flex justify-between 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto w-[65vw] flex-col sm:flex-row gap-4 text-center sm:text-left text-sm'>
          <h3>Derechos Reservados 2024</h3>
          <h3>Diseñado y Desarrollado por: <a href='https://dspwebstudio.com' target='_blank' className='text-secondary_dark font-semibold ml-2'>dspwebstudio.com</a></h3>
        </div>
      </div>
    </footer >
  )
}
export default Footer