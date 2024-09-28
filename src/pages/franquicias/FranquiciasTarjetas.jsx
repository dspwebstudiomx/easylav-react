import { VistaDentroLavanderia_640 as image } from 'assets';
import { Accordion, BorderLeft, ButtonContainer, ButtonPrimary, ButtonSecondary, PageLayout, SEOFriendly, TitleH1, TitleH3 } from "components";
import { FRANQUICIAS_UI } from "constants/constants";
import { franquiciaDescripciones } from "data";
import { FaHome } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";


const PreguntasFrecuentes = () => {

  const styles = `${FRANQUICIAS_UI.TITLEH1.COLOR} ${FRANQUICIAS_UI.TITLEH1.FONT_SIZE} ${FRANQUICIAS_UI.TITLEH1.FONT_WEIGHT} ${FRANQUICIAS_UI.TITLEH1.LETTER_SPACING}`
  return (
    <>
      <SEOFriendly
        title="Franquicias | Easylav: Tu lavandería ideal"
        url="easylav-react.netlify.app/franquicias"
        description="En easylav tu ropa es nuestra pasión: limpieza impecable, planchado perfecto"
        author="dspwebstudio"
        keywords="lavandería, planchado"
        ogImage={image}
        ogImageAlt="canasta verde con ropa sucia"
        ogType="website"
      />
      <PageLayout>
        <div className="flex flex-col sm:gap-12">
          {/* Title */}
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] lg:mb-20 flex  flex-col gap-4">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Franquicias
              </span>
              <BorderLeft>
                <TitleH1 className={styles} textColor="text-dark dark:text-light">
                  Tienes alguna duda?
                </TitleH1>
              </BorderLeft>
              <TitleH3>Puedes ver las preguntas más frecuentes:</TitleH3>
            </div>
          </div>
          {/* Title */}

          {/* Questions */}
          <ul className="w-full sm:grid grid-cols-2 gap-8 gap-y-2 sm:gap-y-8">
            {franquiciaDescripciones.map(description => {
              return (
                <li key={description.id} id={`descripcion-${description.id}`} className="bg-light text-dark">
                  <Accordion
                    title={description.title}
                    description={description.description}
                  />
                </li>
              )
            })}
          </ul>
          {/* Questions */}
        </div>
        <ButtonContainer position={'justify-center'}>
          <ButtonPrimary href={'/'} title={'Regresar a inicio'} icon={<FaHome />} width={''} />
          <ButtonSecondary href={'/contacto'} title={'Ir a contacto'} icon={<FaRegBuilding />} width={''} />
        </ButtonContainer>
      </PageLayout >
    </>
  );
};
export default PreguntasFrecuentes;

