/*
  Sucursales - Página
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CentroGuadalajara as guadalajara, CentroLeon as leon, CatedralMorelia as morelia } from 'assets';
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
        keywords="lavandería, planchado"
        ogImage={morelia}
        ogImageAlt="canasta verde con ropa sucia"
        ogType="website"
      />
      <PageLayout id={"Sucursales"}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 place-items-center">
          <BackgroundCard image={morelia} title='Morelia' href='/sucursales/morelia' height='h-[280px]' />
          <BackgroundCard image={leon} title='León' href='/sucursales/leon' />
          <BackgroundCard image={guadalajara} title='Guadalajara' href='/sucursales/guadalajara' />
        </div>
      </PageLayout>
    </>

  );
};
export default Sucursales;
