/*
  Sucursales - Página
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CatedralMorelia as image, canastaderopa_640 as leon, CatedralMorelia as morelia } from 'assets';
import { BackgroundCard, PageLayout, SEOFriendly } from "components";
import { scrollToTop } from "functions";

// Estructura
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
        ogImage={image}
        ogImageAlt="canasta verde con ropa sucia"
        ogType="website"
      />
      <PageLayout id={"Sucursales"}>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-20 sm:gap-x-10">
          <BackgroundCard image={morelia} title='Morelia' href='/sucursales/morelia' />
          <BackgroundCard image={leon} title='León' href='/sucursales/leon' />
          {/* <BackgroundCard image={guadalajara} title='Guadalajara' href='/sucursales/guadalajara' /> */}
        </div>
      </PageLayout>
    </>

  );
};
export default Sucursales;
