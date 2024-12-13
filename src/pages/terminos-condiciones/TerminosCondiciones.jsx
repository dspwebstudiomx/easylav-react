/*
  Franquicias
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

import { CatedralMorelia } from "assets";
import { BorderLeft, PageLayout, SEOFriendly, TitleH1 } from "components";
import { FRANQUICIAS_PROPS, FRANQUICIAS_UI } from "constants/constants";



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
        <div className={FRANQUICIAS_UI.CONTAINER.DISPLAY} id={FRANQUICIAS_PROPS.CONTAINER.ID}>
          {/* Columna 1 */}
          <div id='terminos-condiciones' className={''}>
            <BorderLeft>
              <TitleH1 className={''}>
                Quieres una franquicia?
              </TitleH1>
            </BorderLeft>


          </div>
          {/* Columna 1 */}
        </div>
      </PageLayout>
    </>

  );
};

export default Franquicias;
