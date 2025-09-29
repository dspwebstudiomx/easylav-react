// Inicio.jsx //

//Importaciones
import { VistaLavanderiaDesdeEntrada_2_640 as image } from 'assets';
import { Contacto, Container, HomeLayout, PreguntasFrecuentes, Section, SEOFriendly } from 'components';
import HeroInicioVideo from './components/HeroInicioVideo';
import QuienesSomos from './components/QuienesSomos';
import NuestrosServicios from './nuestrosServicios/NuestrosServicios';
import PorqueElegirnos from './components/PorqueElegirnos';
import ProgramasDeLealtad from './components/ProgramasDeLealtad';
import Equipamiento from './components/Equipamiento';
import Recomendaciones from './components/Recomendaciones';
import NuestrasSucursales from './nuestrasSucursales/NuestrasSucursales';
import CarouselTestimonios from './Testimonios/CarouselTestimonios';

// Constantes

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
      {/* Introducción */}
      <HeroInicioVideo />

      {/* Quiénes somos */}
      <QuienesSomos />
      {/* Servicios y beneficios */}
      <NuestrosServicios />
      {/* ¿Por qué elegirnos? */}
      <PorqueElegirnos />

      <ProgramasDeLealtad />

      <Equipamiento />

      {/* Información adicional */}

      <Recomendaciones />

      <NuestrasSucursales />

      <Section backgroundColor="dark:bg-dark" className="">
        <Container className="">
          <PreguntasFrecuentes />
        </Container>
      </Section>

      {/* Testimonios y contacto */}

      <CarouselTestimonios />

      <Section backgroundColor="dark:bg-dark" className="">
        <Container className="">
          <Contacto />
        </Container>
      </Section>
    </HomeLayout>
  </>
);

export default Inicio;
