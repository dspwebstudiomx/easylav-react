/*
  Franquicias
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { CatedralMorelia } from "assets";
import { BorderLeft, PageLayout, SEOFriendly, TextWithBulletPoint, TitleH1 } from "components";


// Estructura
const Franquicias = () => {
  return (
    <>
      <SEOFriendly
        title="Términos y Condiciones | Easylav: Tu lavandería ideal"
        url="easylav-react.netlify.app/terminos-condiciones"
        description="Conoce nuestros términos y condiciones"
        author="dspwebstudio" page
        keywords="terminos, condiciones, easylav"
        ogImage={CatedralMorelia}
        ogImageAlt="Catedral de Morelia"
        ogType="website"
      />
      <PageLayout>
        <div className={'flex flex-col gap-8'} id='terminos-condiciones'>
          <BorderLeft>
            <TitleH1 className={''}>
              Terminos y Condiciones
            </TitleH1>
          </BorderLeft>
          {/* Columna 1 */}
          <div id='terminos-condiciones' className={''}>
            <TextWithBulletPoint texto={'lorem'} />
          </div>
          {/* Columna 1 */}
        </div>
      </PageLayout>
    </>

  );
};

export default Franquicias;
