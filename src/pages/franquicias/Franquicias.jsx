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
*/

// Importaciones
import { VistaDentroLavanderia_640 as image } from 'assets';
import { PageLayout, SEOFriendly } from 'components';
import PaquetesFranquicias from './PaquetesFranquicias';
import ModeloNegocio from './ModeloNegocio';
import SoporteCapacitacion from './SoporteCapacitacion';
import TestimoniosFranquicias from './TestimoniosFranquicias';
import ImagenesFranquicias from './ImagenesFranquicias';
import BannerFranquicias from './BannerFranquicias';
import SobreNuestrasFranquicias from './SobreNuestrasFranquicias';

// Estructura
const Franquicias = () => {
  return (
    <>
      <SEOFriendly
        title="Franquicias de Lavandería | Easylav - Tu Oportunidad de Negocio Ideal"
        url="easylav-react.netlify.app/franquicias"
        description="En Easylav, ofrecemos franquicias de lavandería con limpieza impecable y planchado perfecto. Descubre cómo puedes ser parte de nuestro éxito."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="franquicias de lavandería, negocio de lavandería, Easylav, planchado, limpieza"
        ogImage={image}
        ogImageAlt="Canasta verde con ropa sucia"
        ogType="website"
      />
      <PageLayout>
        <BannerFranquicias />
        <PaquetesFranquicias />
        <ImagenesFranquicias />
        <SobreNuestrasFranquicias />
        <ModeloNegocio />
        <SoporteCapacitacion />
        <TestimoniosFranquicias />
      </PageLayout>
    </>
  );
};

export default Franquicias;
