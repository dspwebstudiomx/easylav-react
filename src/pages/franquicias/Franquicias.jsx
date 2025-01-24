// Importaciones
import { VistaDentroLavanderia_640 as image } from 'assets';
import { Accordion, BorderLeft, ButtonContainer, ButtonPrimary, ButtonSecondary, ContactFormFranquicias, Container, Footer, ImageResponsive, Modal, Navbar, ScrollToTopButton, Section, SEOFriendly, Spacing, TitleH2 } from "components";
import { franquiciaDescripciones, franquiciasImagenes } from "data";
import { useShowModal } from 'hooks';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { FaRegBuilding, FaXmark } from 'react-icons/fa6';
import PaquetesFranquicias from './PaquetesFranquicias';

// Props


//Estilos
const FRANQUICIAS_UI = {
  TITLEH1: {
    COLOR: "text- dark:text-light",
    FONT_SIZE: "text-3xl md:text-4xl",
    FONT_WEIGHT: "font-semibold",
    LETTER_SPACING: "tracking-wide",
  },
  CONTAINER: {
    DISPLAY: "grid 2xl:grid-cols-2 sm:gap-8",
  },
  COLUMNA_1: {
    DISPLAY: "flex flex-col gap-2",
  },
  COLUMNA_2: {
    DISPLAY: "grid justify-items-center sm:grid-cols-2 gap-12",
    HEIGHT: "lg:h-auto md:h-[500px]",
    MARGIN: "mx-auto mt-24 sm:mt-8 2xl:mt-40 mx-auto",
    PADDING: "p-0",
    WIDTH: "w-full",
  },
  UL: {
    DISPLAY: "flex flex-col gap-0",
  },
  IMAGE: {
    WIDTH: "w-[280px] lg:w-[360px]",
  },
};

const styles = `${FRANQUICIAS_UI.TITLEH1.COLOR} ${FRANQUICIAS_UI.TITLEH1.FONT_SIZE} ${FRANQUICIAS_UI.TITLEH1.FONT_WEIGHT} ${FRANQUICIAS_UI.TITLEH1.LETTER_SPACING}`

// Estructura
const Franquicias = () => {

  const { showModal, setShowModal } = useShowModal()
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
      <div className='bg-light mt-[80px] sm:mt-0 xl:mt-[80px] dark:bg-dark'>
        {/* Banner */}
        <section className="bg-secondary_dark text-light px-8 dark:bg-primary_dark">
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
                <ButtonPrimary title='Conoce lo que ofrecemos' href='#sobre-nuestras-franquicias' width={"w-[340px]"} />
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}

        {/* Paquetes de Franquicias */}
        <PaquetesFranquicias />
        {/* Paquetes de Franquicias */}

        {/* Contenido */}
        <Section className="flex flex-col sm:gap-12" id='sobre-nuestras-franquicias'>
          <Container>
            {/* Title */}
            <div className="w-full px-4 sm:px-0">
              <div className="mx-auto mb-[60px] lg:mb-0 flex  flex-col gap-0">
                <BorderLeft>
                  <TitleH2 className={styles} textColor="text-dark dark:text-light w-full">
                    SOBRE NUESTRAS FRANQUICIAS
                  </TitleH2>
                </BorderLeft>
                <h3 className='text-xl font-semibold sm:text-2xl mt-8 text-dark dark:text-light'>Visita cada punto para ver la información relacionada.</h3>
              </div>
            </div>
            {/* Title */}
            <div className='lg:mt-12'>
              {/* Questions */}
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {franquiciaDescripciones.map(description => {
                  return (
                    <li key={description.id} id={`descripcion-${description.id}`} className=" text-dark">
                      <Accordion
                        height='h-[130px]'
                        title={description.title}
                        description={description.description}
                      />
                    </li>
                  )
                })}
              </ul>
              <ButtonContainer position={"justify-center sm:justify-center items-center my-20"}          >
                <ButtonSecondary href={'/sucursales'} title={'Ver Sucursales'} icon={<FaRegBuilding />} width={'min-w-[340px] sm:w-[140px]'} name='ver sucursales' />
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
              <ButtonPrimary href={'/#inicio'} title={'Regresar a inicio'} icon={<FaHome />} width={'min-w-[340px]'} name='Regresar a inicio' />
              <ButtonSecondary title={"Solicita más información"}
                width={"w-[340px]"}
                onClick={() => setShowModal(true)}
                icon={<FaInfoCircle />}
                distance='mx-1'
                id='mas-informacion'
              />
            </ButtonContainer>
          </Container>
        </Section>
        {/* Contenido */}

      </div>
      <ScrollToTopButton />
      <Footer />
      {/* Modal */}
      {showModal && (
        <Modal width='w-[90vw] md:w-[60vw] lg:w-[40vw]'>
          <div
            id="franquicias-formulario"
            className="z-40 mx-auto flex flex-col rounded-xl border-4 border-primary bg-light p-8"
          >
            <button id="button-close" onClick={() => setShowModal(false)}>
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
export default Franquicias

