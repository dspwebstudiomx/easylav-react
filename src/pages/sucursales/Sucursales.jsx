/*
  Sucursales.jsx - Página de sucursales de Easylav
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
  Descripción: Página que muestra las sucursales de Easylav.
  Incluye enlaces a las sucursales de León y Morelia.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-27
  --------------------------------------------------
  Cambios realizados: Se ha añadido la función scrollToTop para mejorar la navegación.
  --------------------------------------------------
  
*/

// Importaciones
import { leon_card as leon, catedral_morelia_card as morelia } from 'assets';
import { BackgroundCard, PageLayout, SEOFriendly, TitleH1 } from 'components';
import { scrollToTop } from 'functions';

// Estructuracls
const Sucursales = () => {
  scrollToTop();
  return (
    <>
      <SEOFriendly
        title="Lavanderías en Morelia y León | Easylav - Lavado y Planchado"
        url="https://easylav.mx/sucursales"
        description="Descubre las mejores lavanderías en Morelia y León con Easylav. Ofrecemos servicios de lavado, planchado profesional, atención personalizada y rapidez. Encuentra nuestras sucursales estratégicamente ubicadas para brindarte comodidad y calidad. ¡Visítanos hoy!"
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="lavandería en Morelia, lavandería en León, servicio de lavandería, planchado profesional, lavado de ropa, lavandería cerca de mí, lavandería económica, lavandería rápida, lavandería a domicilio, Easylav Morelia, Easylav León, mejores lavanderías en Morelia, mejores lavanderías en León, lavandería autoservicio, lavandería con planchado, lavandería 24 horas"
        ogImage={morelia}
        ogImageAlt="Sucursal de lavandería Easylav en Morelia"
        ogType="website"
      />
      <PageLayout id={'Sucursales'}>
        <TitleH1 attr="sr-only" align="align">
          ¡Visita nuestras sucursales en Morelia y León! Descubre servicios de lavandería rápidos, económicos y de alta
          calidad con Easylav. ¡Estamos cerca de ti!
        </TitleH1>
        <div className="flex flex-col sm:flex-row gap-8 place-items-center justify-center mx-auto w-full">
          <BackgroundCard
            image={morelia}
            title="Morelia"
            href="/sucursales/morelia"
            className="flex justify-center items-center"
            rounded="rounded-lg"
            width="w-[300px]"
            height="h-[210px]"
            alt="Tarjeta con la imagen de Catedral de Morelia"
          />
          <BackgroundCard
            image={leon}
            title="León"
            href="/sucursales/leon"
            rounded="rounded-lg"
            width="w-[300px]"
            height="h-[210px]"
            alt="Tarjeta con la imagen del centro de León"
          />
        </div>
      </PageLayout>
    </>
  );
};
export default Sucursales;
