/*
  Franquicias
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
*/

// Importaciones
import { canastaderopa_640, Placeholder } from "assets";
import { Banner, BorderLeft, ButtonContainer, ButtonSecondary, ContactFormFranquicias, ImageResponsive, Modal, PageLayout, TitleH1 } from "components";
import DescriptionWithBulletPoint from "components/list/DescriptionWithBulletPoint";
import { BANNER_UI, FRANQUICIAS_PROPS, FRANQUICIAS_UI } from "constants/constants";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaInfoCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { franquiciaDescripciones } from "../../data/franquiciaDescripciones";

// Estructura
const Franquicias = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
    document.body.style.overflow = showModal ? "auto" : "hidden";
  };

  const img1 = canastaderopa_640;
  const img2 = Placeholder;

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
      <div className={FRANQUICIAS_UI.CONTAINER.DISPLAY} id={FRANQUICIAS_PROPS.CONTAINER.ID}>
        {/* Columna 1 */}
        <div id={FRANQUICIAS_PROPS.COLUMNA_1.ID} className={FRANQUICIAS_UI.COLUMNA_1.DISPLAY}>
          <BorderLeft>
            <TitleH1 className={''}>
              Quieres una franquicia?
            </TitleH1>
          </BorderLeft>
          <ul id={FRANQUICIAS_PROPS.COLUMNA_1.UL} className={`${FRANQUICIAS_UI.UL.DISPLAY}`}>
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
          <Banner themeColor={BANNER_UI.THEME}>
            En resumen, invertir en la franquicia de Lavanderías Easylav
            representa una oportunidad estratégica y rentable en un mercado en
            crecimiento, respaldada por un modelo de negocio comprobado, una
            marca reconocida y un soporte integral.
          </Banner>
          <ButtonContainer position={"justify-center sm:justify-center my-12 sm:my-6"}          >
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
        <div id="columma-2" className={`${FRANQUICIAS_UI.COLUMNA_2.DISPLAY} ${FRANQUICIAS_UI.COLUMNA_2.HEIGHT} ${FRANQUICIAS_UI.COLUMNA_2.MARGIN} ${FRANQUICIAS_UI.COLUMNA_2.PADDING} ${FRANQUICIAS_UI.COLUMNA_2.WIDTH}`}
        >
          <div className="h-auto rotate-[0deg]">
            <ImageResponsive
              src={img1}
              className={"shadow-xl"}
              imageAlt={"Placeholder"}
              image_640={img1}
              image_1024={img1}
              image_1920={img1}
              width={380}
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
              width={380}
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
              width={380}
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
              width={380}
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
              width={380}
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
              width={380}
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
