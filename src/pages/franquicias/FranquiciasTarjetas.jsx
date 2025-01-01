//! Colocar imagen en el formulario de contacto

import { VistaDentroLavanderia_640 as image } from 'assets';
import { Accordion, BorderLeft, ButtonContainer, ButtonPrimary, ButtonSecondary, ContactFormFranquicias, Container, Footer, ImageResponsive, Modal, Navbar, SEOFriendly, Spacing, TitleH1 } from "components";
import { FRANQUICIAS_UI } from "constants/constants";
import { franquiciaDescripciones, franquiciasImagenes, paquetesFranquicias } from "data";
import { useState } from 'react';
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { FaCheck, FaRegBuilding, FaXmark } from "react-icons/fa6";


const FranquiciasTarjetas = () => {

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
      <Navbar />
      <div className='bg-light mt-[100px] pb-[100px]'>
        {/* Banner */}
        <section className="bg-secondary_dark text-light">
          <div className="mx-auto max-w-screen-2xl px-4 py-32 lg:flex lg:h-2xl lg:items-center">
            <div className="mx-auto text-center">
              <h1
                className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              >
                <span className="sm:block">  ¿Estás interesado en adquirir una franquicia?</span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="#"
                >
                  Get Started
                </a>

                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}

        {/* Paquetes de Franquicias */}
        <section className="p-12 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto bg-light text-dark">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 xl:grid-cols-4 md:gap-8 max-w-screen-2xl mx-auto">

            {paquetesFranquicias.map(paquete => {
              return (
                <li key={paquete.id} className="divide-y divide-primary_dark rounded-2xl border-primary_dark border-4 shadow-2xl hover:-translate-y-1 hover:scale-105">

                  {/* Primera Parte */}
                  <div className="p-8 flex flex-col gap-6">
                    <h2 className="text-3xl text-secondary_dark uppercase font-bold text-left">
                      {paquete.nombre}
                      <span className="sr-only">Plan</span>
                    </h2>
                    <p className="mt-2 text-dark-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <ButtonSecondary title={"Contactar"}
                      width={"w-full 2xl:w-2/3 mx-auto"}
                      onClick={handleModalToggle}
                      icon={''}
                      distance='mx-1' />
                  </div>
                  {/* Primera Parte */}

                  {/* Segunda Parte */}
                  <div className="p-8">
                    <p className="text-lg font-medium text-gray-900 sm:text-xl">Que incluye <span className='text-secondary_dark'>:</span></p>

                    <ul className="mt-2 space-y-2 sm:mt-4" id={`lista-caracteristica-${paquete.nombre}`}>
                      {paquete.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className="text-gray-700 flex gap-4 ">
                          <FaCheck className='text-secondary_dark' />
                          <span>{caracteristica}</span></li>
                      ))}
                    </ul>
                  </div>
                  {/* Segunda Parte */}

                </li>
              )
            })}


          </ul>
        </section>
        {/* Paquetes de Franquicias */}

        {/* Contenido */}
        <Container className="flex flex-col sm:gap-12 gap-0">
          {/* Title */}
          <div className="w-full px-4 sm:px-0">
            <div className="mx-auto mb-[60px] lg:mb-0 flex  flex-col gap-4">
              <span className="mb-2 block text-2xl font-semibold text-primary">
                Franquicias
              </span>
              <BorderLeft>
                <TitleH1 className={styles} textColor="text-dark dark:text-light w-2/3">
                  ¿Estás interesado en adquirir una franquicia?
                </TitleH1>
              </BorderLeft>
              <h3 className='text-xl font-semibold sm:text-2xl mt-8 text-dark dark:text-light'>Visita cada punto para ver la información relacionada.</h3>
            </div>
          </div>
          {/* Title */}
          <div className=''>
            {/* Questions */}
            <ul className="grid sm:grid-cols-2 gap-8">
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
            <ButtonContainer position={"justify-center sm:justify-center items-center my-20"}          >
              <ButtonSecondary href={'/sucursales'} title={'Ver Sucursales'} icon={<FaRegBuilding />} width={'min-w-[240px] sm:w-[140px]'} name='ver sucursales' />
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
          <ButtonContainer position={'items-center sm:justify-center my-8'}>
            <ButtonPrimary href={'/#inicio'} title={'Regresar a inicio'} icon={<FaHome />} width={'min-w-[240px]'} name='Regresar a inicio' />
            <ButtonSecondary title={"Solicita más información"}
              width={"w-[340px]"}
              onClick={handleModalToggle}
              icon={<FaInfoCircle />}
              distance='mx-1' />

          </ButtonContainer>
        </Container>
        {/* Contenido */}

      </div>
      <Footer />
      {/* Modal */}
      {showModal && (
        <Modal width='w-[90vw] md:w-[60vw] lg:w-[40vw]'>
          <div
            id="franquicias-formulario"
            className="z-40 mx-auto flex flex-col rounded-xl border-4 border-primary bg-light p-8"
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
      {/* Modal */}

    </>
  );
};
export default FranquiciasTarjetas;

