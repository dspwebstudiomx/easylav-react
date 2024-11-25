/*
  Sucursales - Página
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CentroLeon as leon, catedral_morelia_card as morelia } from 'assets';
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 place-items-center">
          <BackgroundCard image={morelia} title='Morelia' href='/sucursales/morelia' height='h-[280px]' rounded='rounded-lg' />
          <BackgroundCard image={leon} title='León' href='/sucursales/leon' rounded='rounded-lg' height='h-[280px]' />
          {/* <BackgroundCard image={guadalajara} title='Guadalajara' href='/sucursales/guadalajara' height='h-[280px]' rounded='rounded-lg' /> */}
        </div>
      </PageLayout>
    </>

  );
};
export default Sucursales;
