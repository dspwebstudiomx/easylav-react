/*
  Franquicias.jsx - Componente Principal de Franquicias
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-07-15
  Descripción: Este proyecto es una plataforma web para la franquicia de lavandería Easylav, que ofrece servicios de lavandería y planchado a domicilio. El sitio web incluye información sobre la franquicia, paquetes, modelo de negocio, soporte y capacitación, así como testimonios de franquiciados.
  Este componente es parte de la sección de franquicias del sitio web de Easylav, diseñado para atraer a potenciales franquiciados y proporcionarles información clara y concisa sobre el modelo de negocio.
  --------------------------
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-31
  -------------------------  
  Fecha de modificación: 2025-04-01
  Modificación: Se han añadido nuevos componentes relacionados con la franquicia, incluyendo PreguntasFranquicias, BannerFranquicias, ImagenesFranquicias y SobreNuestrasFranquicias para mejorar la interacción del usuario y la presentación de información.
  Modificado por: Daniel Pérez
  --------------------------
   Fecha de modificación: 2025-04-03
   Modificación: Se han realizado ajustes en la estructura del componente para mejorar la legibilidad y el rendimiento. Se ha añadido un componente de carga para mejorar la experiencia del usuario mientras se cargan los componentes de forma diferida.
   Modificado por: Daniel Pérez
*/

// Importaciones
import { VistaDentroLavanderia_640 as image } from 'assets';
import { SEOFriendly, HomeLayout, Loading, Footer } from 'components';
import { lazy, Suspense } from 'react';

// Constantes
const PaquetesFranquicias = lazy(() => import('./PaquetesFranquicias'));
const ImagenesFranquicias = lazy(() => import('./ImagenesFranquicias'));
const SobreNuestrasFranquicias = lazy(() => import('./SobreNuestrasFranquicias'));
const QuieresUnaFranquicia = lazy(() => import('pages/inicio/franquicias/QuieresUnaFranquicia'));

// Estructura
const Franquicias = () => {
  return (
    <>
      {/* Metadatos para SEO */}
      <SEOFriendly
        title="Franquicias de Lavandería | Easylav - Tu Oportunidad de Negocio Ideal"
        url="https://easylav.mx/franquicias"
        description="En Easylav, ofrecemos franquicias de lavandería con limpieza impecable y planchado perfecto. Descubre cómo puedes ser parte de nuestro éxito."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="franquicias de lavandería, negocio de lavandería, Easylav, planchado, limpieza"
        ogImage={image}
        ogImageAlt="Canasta verde con ropa sucia"
        ogType="website"
      />

      {/* Layout principal */}
      <HomeLayout className="pb-16 sm:pb-20 lg:pb-24 min-h-screen">
        <div className="flex flex-col gap-8">
          {/* Contenido principal */}
          <Suspense fallback={<Loading />}>
            <QuieresUnaFranquicia />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <SobreNuestrasFranquicias />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <PaquetesFranquicias />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <ImagenesFranquicias />
          </Suspense>
        </div>
        <Footer />
      </HomeLayout>
    </>
  );
};

export default Franquicias;
