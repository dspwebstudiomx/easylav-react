// Inicio.jsx //

//Importaciones
import { VistaLavanderiaDesdeEntrada_2_640 as image } from 'assets';
import { Container, HomeLayout, Loading, Section, SEOFriendly } from 'components';
import { lazy, Suspense } from 'react';
import ProgramasDeLealtad from './components/ProgramasDeLealtad';
import Equipamiento from './components/Equipamiento';

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
      title="Inicio | Easylav - Lavandería a Domicilio"
      url="https://easylav.mx/"
      description="En Easylav, nos apasiona cuidar de tu ropa. Ofrecemos limpieza impecable y planchado perfecto para que tus prendas luzcan siempre como nuevas. Descubre nuestro servicio de lavandería de calidad superior, con atención a los detalles y resultados excepcionales. ¡Tu ropa merece lo mejor!"
      author="dspwebstudio"
      publisher="dspwebstudio.com"
      keywords="lavanderia en Morelia, lavanderia en Leon, lavanderia en Guadalajara, lavanderia a domicilio, servicio de lavanderia, planchado de ropa, limpieza de ropa, Easylav"
      ogImage={image}
      ogImageAlt="canasta verde con ropa sucia"
      ogType="website"
    />
    <Suspense fallback={<Loading />}>
      <HomeLayout>
        <HeroInicioVideo />
        <QuienesSomos />
        {/* <SobreNosotros /> */}
        <NuestrosServicios />
        <ProgramasDeLealtad />
        <Equipamiento />
        <NuestrasSucursales />
        <PorqueElegirnos />
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
