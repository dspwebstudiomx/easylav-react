// Inicio.jsx //

//Importaciones
import { VistaLavanderiaDesdeEntrada_2_640 } from 'assets';
import { Container, HomeLayout, Loading, Section, SEOFriendly } from 'components';
import { lazy, Suspense } from 'react';

// Constantes
const HeroInicioVideo = lazy(() => import('./components/HeroInicioVideo'));
const NuestrosServicios = lazy(() => import('./nuestrosServicios/NuestrosServicios'));
const PorqueElegirnos = lazy(() => import('./components/PorqueElegirnos'));
const NuestrasSucursales = lazy(() => import('./nuestrasSucursales/NuestrasSucursales'));
const QuienesSomos = lazy(() => import('./components/QuienesSomos'));
const CarouselTestimonios = lazy(() => import('./Testimonios/CarouselTestimonios'));
const Contacto = lazy(() => import('../../components/contacto/Contacto'));

// Estructura
const Inicio = () => (
  <>
    <SEOFriendly
      title="Inicio | Easylav: Tu lavandería ideal"
      url="https://easylav.mx/"
      description="En Easylav, nos apasiona cuidar de tu ropa. Ofrecemos limpieza impecable y planchado perfecto para que tus prendas luzcan siempre como nuevas. Descubre nuestro servicio de lavandería de calidad superior, con atención a los detalles y resultados excepcionales. ¡Tu ropa merece lo mejor!"
      author="dspwebstudio"
      robots="index, follow"
      publisher="dspwebstudio.com"
      keywords="lavanderia en Morelia,"
      ogImage={VistaLavanderiaDesdeEntrada_2_640}
      ogImageAlt="canasta verde con ropa sucia"
      ogType="website"
    />
    <Suspense fallback={<Loading />}>
      <HomeLayout>
        <HeroInicioVideo />
        <QuienesSomos />
        {/* <SobreNosotros /> */}
        <NuestrosServicios />
        <PorqueElegirnos />
        <NuestrasSucursales />
        <CarouselTestimonios />
        <Section backgroundColor="bg-light dark:bg-dark" className="">
          <Container className="">
            <Contacto />
          </Container>
        </Section>
      </HomeLayout>
    </Suspense>
  </>
);

export default Inicio;
