import { Hero640, Placeholder } from "assets"
import { BorderLeft, ButtonContainer, ButtonSecondary, ContactFormFranquicias, Modal, PageLayout, TextWithBulletPoint, TitleH1 } from "components"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { FaInfoCircle } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { franquiciaDescripciones } from '../../data/franquiciaDescripciones'

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
        <link rel="canonical" href="https://easylav-react.netlify.app/sucursales" />
      </Helmet>
      <div className="grid xl:grid-cols-2 gap-0">

        {/* Columna 1 */}
        <div id="columma-1" className="flex flex-col gap-12 items-start">
          <BorderLeft>
            <TitleH1 title="¿Quieres una Franquícia?" />
          </BorderLeft>
          <ul className="flex flex-col gap-8 text-xl">
            {franquiciaDescripciones.map(descripcion => {
              return (
                <TextWithBulletPoint texto={descripcion.texto} key={descripcion.id} />
              )
            })}
          </ul>
          <p className="bg-primary_light text-lg p-8 rounded-xl text-dark border-2 border-primary_dark">En resumen, invertir en la franquicia de Lavanderías Easylav representa una oportunidad estratégica y rentable en un mercado en crecimiento, respaldada por un modelo de negocio comprobado, una marca reconocida y un soporte integral.</p>
          <ButtonContainer position={"justify-center sm:justify-center my-12 sm:my-6"}>
            <ButtonSecondary title={"Solicita más información"} width={"w-[340px]"} onClick={handleModalToggle} icon={<FaInfoCircle />} />
          </ButtonContainer>
        </div>
        {/* Columna 1 */}

        {/* Columna 2 */}
        <div id="columma-2" className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 bg-red-100 gap-20 sm:gap-32 mt-24 md:p-12 lg:p-0 place-items-end sm:mr-9 mx-auto">
          <div className="rotate-[25deg] bg-secondary h-auto w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img src={Hero640} alt="image" width={320} className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto shadow-2xl" />
          </div>
          <div className="rotate-[15deg] bg-secondary h-auto w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img src={Placeholder} alt="image" width={320} className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto shadow-2xl" />
          </div>
          <div className="rotate-[-20deg] bg-secondary h-auto w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img src={Hero640} alt="image" width={320} className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto shadow-2xl" />
          </div>
          <div className="rotate-[-35deg] bg-secondary h-auto w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px]">
            <img src={Placeholder} alt="image" width={320} className="w-[250px] md:w-[280px] lg:w-[320px] xl:w-[380px] h-auto shadow-2xl" />
          </div>
        </div>
        {/* Columna 2 */}

        {showModal &&
          <Modal>
            <div id="franquicias-formualario" className="z-40 flex flex-col w-[90%] 2xl:w-1/2 bg-light p-8 rounded-xl border-4 border-primary mx-auto">
              <button
                id="button-close"
                onClick={handleModalToggle}
              >
                <FaXmark size={36} className=" text-secondary z-30 ml-auto mb-3" />
              </button>
              <ContactFormFranquicias />
            </div>
          </Modal>
        }

      </div>
    </PageLayout>
  )
}

export default Franquicias