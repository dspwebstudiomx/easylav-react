// Inicio.jsx //

//Importaciones
import { VistaLavanderiaDesdeEntrada_2_640 as image } from 'assets';
import { Container, HomeLayout, Loading, Section, SEOFriendly } from 'components';
import { lazy, Suspense } from 'react';
import ProgramasDeLealtad from './components/ProgramasDeLealtad';
import Equipamiento from './components/Equipamiento';
import Recomendaciones from './components/Recomendaciones';

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
      title="Inicio | Easylav - Lavanderías en Morelia y León"
      url="https://easylav.mx/"
      description="En Easylav, nos apasiona cuidar de tu ropa. Ofrecemos limpieza impecable y planchado perfecto para que tus prendas luzcan siempre como nuevas. Descubre nuestro servicio de lavandería de calidad superior, con atención a los detalles y resultados excepcionales. ¡Tu ropa merece lo mejor!"
      author="dspwebstudio"
      publisher="dspwebstudio.com"
      keywords="lavanderia en Morelia, lavanderia en Leon, servicio de lavanderia, planchado de ropa, limpieza de ropa, Easylav"
      ogImage={image}
      ogImageAlt="canasta verde con ropa sucia"
      ogType="website"
    />
    <HomeLayout id="inicio" className="dark:bg-dark">
      <Suspense fallback={<Loading />}>
        <HeroInicioVideo />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <QuienesSomos />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <NuestrosServicios />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProgramasDeLealtad />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Equipamiento />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Recomendaciones />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <NuestrasSucursales />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <PorqueElegirnos />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CarouselTestimonios />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Section backgroundColor="bg-light dark:bg-dark" className="">
          <Container className="">
            <Contacto />
          </Container>
        </Section>
      </Suspense>
    </HomeLayout>
  </>
);

export default Inicio;
