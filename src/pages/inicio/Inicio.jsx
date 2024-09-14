// Inicio.jsx //

//Importaciones
import { canastaderopa_640 } from 'assets';
import { BackgroundSection, Container, HomeLayout, Loading, Section, SEOFriendly, TitleH3 } from 'components';
import { lazy, Suspense } from 'react';
import CarouselTestimonios from './Testimonios/CarouselTestimonios';
const HeroInicio = lazy(() => import('./components/HeroInicio'));
const SobreNosotros = lazy(() => import('./components/SobreNosotros'));
const NuestrosServicios = lazy(() => import('./nuestrosServicios/NuestrosServicios'));
const PorqueElegirnos = lazy(() => import('./components/PorqueElegirnos'));
const NuestrasSucursales = lazy(() => import('./nuestrasSucursales/NuestrasSucursales'));
const Contacto = lazy(() => import('../../components/contacto/Contacto'));
// const CarouselPromociones = lazy(() => import('./Testimonios/CarouselTestimonios'));

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

      <HeroInicio />
      <SobreNosotros />
      <NuestrosServicios />
      <PorqueElegirnos />
      <NuestrasSucursales />
      {/* <Testimonios /> */}
      <CarouselTestimonios />
      <Section backgroundColor={SECTION_BACKGROUNDCOLOR_CLASSNAME} className={SECTION_CLASSNAME}>
        <Container className={CONTAINER_CLASSNAME}>
          <Contacto />
        </Container>
      </Section>
      <BackgroundSection background={'../../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-1920.jpg'} className='h-80 text-dark' opacity="opacity-60">
        <TitleH3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus.</TitleH3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quo optio, nobis temporibus recusandae qui aliquid, ut sed alias tempora totam distinctio atque facere quaerat quisquam repudiandae dolore autem porro. Accusamus fugiat quidem voluptatibus, saepe eveniet corrupti distinctio adipisci aspernatur.</p>
      </BackgroundSection>
    </HomeLayout>
  </Suspense>
);

export default Inicio
