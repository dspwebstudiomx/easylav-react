/*
  Sucursales - Página
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
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
        title="Sucursales | Easylav: Tu lavandería ideal"
        url="easylav-react.netlify.app/sucursales"
        description="En easylav tu ropa es nuestra pasión: limpieza impecable, planchado perfecto"
        author="dspwebstudio"
        keywords="lavandería, planchado, sucursales lavandería"
        ogImage={morelia}
        ogImageAlt="canasta verde con ropa sucia"
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
