// Inicio.jsx //

//Importaciones
import { canastaderopa_640 } from 'assets';
import { Container, HomeLayout, Loading, ScrollToTopButton, Section, SectionBanner, SEOFriendly } from 'components';
import { scrollWithOffset } from 'functions';
import { lazy, Suspense } from 'react';
import { NavHashLink } from 'react-router-hash-link';
// const HeroInicio = lazy(() => import('./components/HeroInicio'));
const HeroInicioVideo = lazy(() => import('./components/HeroInicioVideo'));
const NuestrosServicios = lazy(() => import('./nuestrosServicios/NuestrosServicios'));
const PorqueElegirnos = lazy(() => import('./components/PorqueElegirnos'));
const NuestrasSucursales = lazy(() => import('./nuestrasSucursales/NuestrasSucursales'));
const SobreNosotros = lazy(() => import('./components/SobreNosotros'));
const QuieresUnaFranquicia = lazy(() => import('./franquicias/QuieresUnaFranquicia'));
const CarouselTestimonios = lazy(() => import('./Testimonios/CarouselTestimonios'));
const Contacto = lazy(() => import('../../components/contacto/Contacto'));

//Constantes de estilos - TailwindCSS
const SECTION_BACKGROUNDCOLOR_CLASSNAME = 'dark:bg-dark'
const SECTION_CLASSNAME = 'dark:text-light'
const CONTAINER_CLASSNAME = 'mx-auto'

//Constantes de SEO Friendly
const TITLE = 'Inicio | Easylav: Tu lavandería ideal'
const DESCRIPTION = 'En easylav tu ropa es nuestra pasión: limpieza impecable, planchado perfecto'
const KEYWORDS = 'lavandería, lavado, planchado, ropa'
const URL = 'easylav-react.netlify.app'
const AUTHOR = 'dspwebstudio'
const OG_IMAGE = canastaderopa_640
const OG_IMAGE_ALT = 'canasta verde con ropa sucia'
const OG_TYPE = 'website'
// const ROBOTS = 'index, follow'


const Inicio = () => (
  <Suspense fallback={<Loading />}>
    <HomeLayout>
      <SEOFriendly
        title={TITLE}
        url={URL}
        description={DESCRIPTION}
        author={AUTHOR}
        keywords={KEYWORDS}
        ogImage={OG_IMAGE}
        ogImageAlt={OG_IMAGE_ALT}
        ogType={OG_TYPE} />
      {/* <HeroInicio /> */}
      <HeroInicioVideo />
      <SectionBanner themeColor='primary' themeColorDark='secondary'>
        <NavHashLink
          id={'navlink-to-iretiticateme'}
          to={'/sucursales/morelia/#sucursal-Iretiticateme'}
          scroll={scrollWithOffset}
          title={`navlink-to-iretiticateme`}
        >
          <span className='block text-base'>Nueva sucursal</span>
          <span className='block text-2xl'>Iretiticateme</span>
        </NavHashLink>
      </SectionBanner>
      <NuestrosServicios />
      <PorqueElegirnos />
      <SobreNosotros />
      <NuestrasSucursales />
      <CarouselTestimonios />
      <QuieresUnaFranquicia />
      <Section backgroundColor={SECTION_BACKGROUNDCOLOR_CLASSNAME} className={SECTION_CLASSNAME}>
        <Container className={CONTAINER_CLASSNAME}>
          <Contacto />
        </Container>
      </Section>
    </HomeLayout>
    <ScrollToTopButton />
  </Suspense>
);

export default Inicio
