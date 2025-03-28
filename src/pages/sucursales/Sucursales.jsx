/*
  Sucursales.jsx - Página de sucursales de Easylav
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
  Descripción: Página que muestra las sucursales de Easylav.
  Incluye enlaces a las sucursales de León y Morelia.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-27
*/

// Importaciones
import { leon_card as leon, catedral_morelia_card as morelia } from 'assets';
import { BackgroundCard, PageLayout, SEOFriendly } from "components";
import { scrollToTop } from "functions";

// Estructuracls
const Sucursales = () => {
  scrollToTop();
  return (
    <>
      <SEOFriendly
        title="Sucursales Lavanderías en Morelia | Easylav - Lavado y Planchado"
        url="easylav-react.netlify.app/sucursales"
        description="Descubre nuestras sucursales de lavandería en Morelia y León. En Easylav ofrecemos limpieza impecable, planchado perfecto y atención personalizada. ¡Visítanos hoy!"
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="lavandería, sucursales lavandería, lavandería en Morelia, lavandería en León, servicio de planchado, Easylav"
        ogImage={morelia}
        ogImageAlt="Sucursal de lavandería Easylav en Morelia"
        ogType="website"
      />
      <PageLayout id={"Sucursales"}>
        <div className="flex flex-wrap gap-8 place-items-center justify-center">
          <BackgroundCard
            image={morelia}
            title='Morelia'
            href='/sucursales/morelia'
            height='h-[210px]'
            rounded='rounded-lg'
            width='w-[260px] xl:w-[320px]'
            className='flex justify-center items-center'
          />
          <BackgroundCard image={leon} title='León' href='/sucursales/leon' rounded='rounded-lg' height='h-[210px]' width='w-[260px] xl:w-[320px]' />
          {/* <BackgroundCard image={guadalajara} title='Guadalajara' href='/sucursales/guadalajara' height='h-[280px]' rounded='rounded-lg' /> */}
        </div>
      </PageLayout>
    </>

  );
};
export default Sucursales;
