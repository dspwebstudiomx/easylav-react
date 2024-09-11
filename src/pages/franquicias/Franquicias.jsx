import { canastaderopa_640, Placeholder } from "assets";
import { BorderLeft, ButtonContainer, ButtonSecondary, ContactFormFranquicias, ImageResponsive, Modal, PageLayout, TitleH1 } from "components";
import DescriptionWithBulletPoint from "components/list/DescriptionWithBulletPoint";
import { FRANQUICIAS_UI } from "constants/constants";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaInfoCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { franquiciaDescripciones } from "../../data/franquiciaDescripciones";

const Franquicias = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
    document.body.style.overflow = showModal ? "auto" : "hidden";
  };

  const img1 = canastaderopa_640;
  const img2 = Placeholder;

  const styles = `${FRANQUICIAS_UI.TITLEH1.COLOR} ${FRANQUICIAS_UI.TITLEH1.FONT_SIZE} ${FRANQUICIAS_UI.TITLEH1.FONT_WEIGHT} ${FRANQUICIAS_UI.TITLEH1.LETTER_SPACING}`

  return (
    <PageLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Franquicias | Easylav</title>
        <link
          rel="canonical"
          href="https://easylav-react.netlify.app/franquicias"
        />
      </Helmet>
      <div className="grid gap-0 xl:grid-cols-2">
        {/* Columna 1 */}
        <div id="columma-1" className="flex flex-col items-start gap-12">
          <BorderLeft>
            <TitleH1 className={styles} textColor="text-dark dark:text-light">
              Quieres una franquicia?
            </TitleH1>
          </BorderLeft>
          <ul className="flex flex-col gap-8 text-xl">
            {franquiciaDescripciones.map((descripcion) => {
              return (
                <DescriptionWithBulletPoint
                  texto={descripcion.texto}
                  key={descripcion.id}
                  id={descripcion.id}
                />
              );
            })}
          </ul>
          <p className="rounded-xl border-2 border-primary_dark bg-primary_light p-8 text-lg text-dark">
            En resumen, invertir en la franquicia de Lavanderías Easylav
            representa una oportunidad estratégica y rentable en un mercado en
            crecimiento, respaldada por un modelo de negocio comprobado, una
            marca reconocida y un soporte integral.
          </p>
          <ButtonContainer
            position={"justify-center sm:justify-center my-12 sm:my-6"}
          >
            <ButtonSecondary
              title={"Solicita más información"}
              width={"w-[340px]"}
              onClick={handleModalToggle}
              icon={<FaInfoCircle />}
              distance='mx-1'
            />
          </ButtonContainer>
        </div>
        {/* Columna 1 */}

        {/* Columna 2 */}
        <div
          id="columma-2"
          className="mx-auto mt-24 grid items-start gap-12 xl:gap-12 h-40 sm:mr-12 sm:grid-cols-2 md:p-0 lg:grid-cols-2 lg:p-0 xl:grid-cols-1 justify-center"
        >
          <div className="h-auto rotate-[0deg]">
            <ImageResponsive
              src={img1}
              className={"shadow-xl"}
              imageAlt={"Placeholder"}
              image_640={img1}
              image_1024={img1}
              image_1920={img1}
              width={320}
            />
          </div>
          <div className="h-auto rotate-[0deg]">
            <ImageResponsive
              src={img2}
              className={"shadow-xl"}
              imageAlt={"Placeholder"}
              image_640={img2}
              image_1024={img2}
              image_1920={img2}
              width={320}
            />
          </div>
          <div className="h-auto rotate-[0deg]">
            <ImageResponsive
              src={img1}
              className={"shadow-xl"}
              imageAlt={"Placeholder"}
              image_640={img1}
              image_1024={img1}
              image_1920={img1}
              width={320}
            />
          </div>
          <div className="h-auto rotate-[0deg]">
            <ImageResponsive
              src={img2}
              className={"shadow-xl"}
              imageAlt={"Placeholder"}
              image_640={img2}
              image_1024={img2}
              image_1920={img2}
              width={320}
            />
          </div>
        </div>
        {/* Columna 2 */}

        {showModal && (
          <Modal>
            <div
              id="franquicias-formualario"
              className="z-40 mx-auto flex w-[90%] flex-col rounded-xl border-4 border-primary bg-light p-8 2xl:w-1/2"
            >
              <button id="button-close" onClick={handleModalToggle}>
                <FaXmark
                  size={36}
                  className="z-30 mb-3 ml-auto text-secondary"
                />
              </button>
              <ContactFormFranquicias />
            </div>
          </Modal>
        )}
      </div>
    </PageLayout>
  );
};

export default Franquicias;
