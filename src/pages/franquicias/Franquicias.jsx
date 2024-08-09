import { Hero640, Placeholder } from "assets";
import {
  BorderLeft,
  ButtonContainer,
  ButtonSecondary,
  ContactFormFranquicias,
  Modal,
  PageLayout,
  TextWithBulletPoint,
  TitleH1,
} from "components";
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
            <TitleH1 title="¿Quieres una Franquícia?" />
          </BorderLeft>
          <ul className="flex flex-col gap-8 text-xl">
            {franquiciaDescripciones.map((descripcion) => {
              return (
                <TextWithBulletPoint
                  texto={descripcion.texto}
                  key={descripcion.id}
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
            />
          </ButtonContainer>
        </div>
        {/* Columna 1 */}

        {/* Columna 2 */}
        <div
          id="columma-2"
          className="bg-red-100 mx-auto mt-24 grid place-items-end gap-20 sm:mr-9 sm:grid-cols-2 sm:gap-32 md:p-12 lg:grid-cols-2 lg:p-0 xl:grid-cols-1"
        >
          <div className="h-auto w-[250px] rotate-[25deg] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img
              src={Hero640}
              alt="image"
              width={320}
              className="animate__animated animate__zoomIn animate__slower h-auto w-[250px] shadow-2xl md:w-[280px] lg:w-[320px] xl:w-[380px]"
            />
          </div>
          <div className="h-auto w-[250px] rotate-[15deg] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img
              src={Placeholder}
              alt="image"
              width={320}
              className="animate__animated animate__zoomIn animate__slower h-auto w-[250px] shadow-2xl md:w-[280px] lg:w-[320px] xl:w-[380px]"
            />
          </div>
          <div className="h-auto w-[250px] rotate-[-20deg] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img
              src={Hero640}
              alt="image"
              width={320}
              className="animate__animated animate__zoomIn animate__slower h-auto w-[250px] shadow-2xl md:w-[280px] lg:w-[320px] xl:w-[380px]"
            />
          </div>
          <div className="h-auto w-[250px] rotate-[-35deg] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img
              src={Placeholder}
              alt="image"
              width={320}
              className="h-auto w-[250px] shadow-2xl md:w-[280px] lg:w-[320px] xl:w-[380px]"
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
