import { VistaDentroLavanderia_640 as image } from 'assets';
import { Accordion, BorderLeft, ButtonContainer, ButtonPrimary, ButtonSecondary, ContactFormFranquicias, ImageResponsive, Modal, PageLayout, SEOFriendly, Spacing, TitleH1 } from "components";
import { FRANQUICIAS_UI } from "constants/constants";
import { franquiciaDescripciones, franquiciasImagenes } from "data";
import { useState } from 'react';
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { FaRegBuilding, FaXmark } from "react-icons/fa6";


const PreguntasFrecuentes = () => {

  const styles = `${FRANQUICIAS_UI.TITLEH1.COLOR} ${FRANQUICIAS_UI.TITLEH1.FONT_SIZE} ${FRANQUICIAS_UI.TITLEH1.FONT_WEIGHT} ${FRANQUICIAS_UI.TITLEH1.LETTER_SPACING}`

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
    document.body.style.overflow = !showModal && "hidden";
  };

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
        <div className="flex flex-col sm:gap-12 gap-0">
          {/* Title */}
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] lg:mb-0flex  flex-col gap-4">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Franquicias
              </span>
              <BorderLeft>
                <TitleH1 className={styles} textColor="text-dark dark:text-light w-2/3">
                  ¿Estás interesado en adquirir una franquicia?
                </TitleH1>
              </BorderLeft>
              <h3 className='text-xl font-semibold sm:text-2xl mt-8 text-dark'>Visita cada punto para ver la información relacionada</h3>
            </div>
          </div>
          {/* Title */}
          <div className=''>
            {/* Questions */}
            <ul className="grid sm:grid-cols-2 gap-4">
              {franquiciaDescripciones.map(description => {
                return (
                  <li key={description.id} id={`descripcion-${description.id}`} className=" text-dark">
                    <Accordion
                      height='h-[120px]'
                      title={description.title}
                      description={description.description}
                    />
                  </li>
                )
              })}
            </ul>
            <ButtonContainer position={"justify-center sm:justify-center items-center my-12 sm:my-6 xl:my-20"}          >
              <ButtonSecondary
                title={"Solicita más información"}
                width={"w-[280px]"}
                onClick={handleModalToggle}
                icon={<FaInfoCircle />}
                distance='mx-1'
              />
            </ButtonContainer>
            {/* Questions */}

            <div id="franquicias-columma-2" className={`${FRANQUICIAS_UI.COLUMNA_2.DISPLAY} ${FRANQUICIAS_UI.COLUMNA_2.HEIGHT} ${FRANQUICIAS_UI.COLUMNA_2.MARGIN} ${FRANQUICIAS_UI.COLUMNA_2.PADDING} ${FRANQUICIAS_UI.COLUMNA_2.WIDTH}`}
            >
              {franquiciasImagenes.map(imagen => {
                return (
                  <div key={imagen.id} className="h-auto rotate-[0deg]">
                    <ImageResponsive
                      src={imagen.image_640}
                      className={`${FRANQUICIAS_UI.IMAGE.WIDTH}`}
                      imageAlt={imagen.image_640}
                      image_640={imagen.image_640}
                      image_1024={imagen.image_640}
                      image_1920={imagen.image_640}
                      width={380}
                    />
                  </div>
                )
              }
              )
              }
            </div>
          </div>
        </div>
        <ButtonContainer position={'items-center sm:justify-center my-8'}>
          <ButtonPrimary href={'/'} title={'Regresar a inicio'} icon={<FaHome />} width={'min-w-[300px]'} />
          <ButtonSecondary href={'/contacto'} title={'Ir a contacto'} icon={<FaRegBuilding />} width={'min-w-[300px] sm:w-[140px]'} />
        </ButtonContainer>
      </PageLayout >
      {showModal && (
        <Modal>
          <div
            id="franquicias-formualario"
            className="z-40 mx-auto flex w-[90%] flex-col rounded-xl border-4 border-primary bg-light p-8 2xl:w-1/2"
          >
            <button id="button-close" onClick={handleModalToggle}>
              <FaXmark
                size={36}
                className="z-30 ml-auto text-primary_dark"
              />
            </button>
            <Spacing distance='my-4' />
            <ContactFormFranquicias />
          </div>
        </Modal>
      )}
    </>
  );
};
export default PreguntasFrecuentes;

