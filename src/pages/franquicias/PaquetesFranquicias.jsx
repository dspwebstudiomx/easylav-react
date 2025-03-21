// Importaciones
import { ButtonContainer, ButtonSecondary, ContactFormFranquicias, Container, Modal, Section, Spacing } from "components"
import { paquetesFranquicias } from "data"
import { useShowModal } from "hooks"


import { FaCheck, FaXmark } from "react-icons/fa6"

// Estilos
const PAQUETES_FRANQUICIAS_UI = {
  PADDING: "px-8 py-12 sm:py-12 md:px-20 lg:p-24 ",
  MARGIN: "m-auto",
  BACKGROUND: "bg-light dark:bg-dark",
  TEXT_COLOR: "text-dark"
}
const styles = `${PAQUETES_FRANQUICIAS_UI.PADDING} ${PAQUETES_FRANQUICIAS_UI.MARGIN} ${PAQUETES_FRANQUICIAS_UI.BACKGROUND} ${PAQUETES_FRANQUICIAS_UI.TEXT_COLOR}`


// Estructura
const PaquetesFranquicias = () => {

  const { showModal, setShowModal } = useShowModal()
  return (
    <Section className={styles} id='paquetes-franquicias'>
      <Container>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-4 md:gap-12 2xl:gap-6 max-w-screen-2xl mx-auto">

          {paquetesFranquicias.map(paquete => {
            return (
              <li key={paquete.id} className="divide-y divide-primary_dark rounded-2xl border-primary_dark border-4 shadow-2xl  dark:bg-light">

                {/* Primera Parte */}
                <div className="p-8 flex flex-col gap-6">
                  <h2 className="text-3xl text-dark uppercase font-bold text-center lg:text-left">
                    {paquete.nombre}
                    <span className="sr-only">Plan</span>
                  </h2>
                  <p className="mt-2 text-dark-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               
                </div>
                {/* Primera Parte */}

                {/* Segunda Parte */}
                <div className="p-8 flex flex-col gap-6">
                  <p className="text-lg font-medium text-gray-900 sm:text-xl">Que incluye <span className='text-secondary_dark'>:</span></p>

                  <ul className="mt-2 space-y-2 sm:mt-4" id={`lista-caracteristica-${paquete.nombre}`}>
                    {paquete.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="text-gray-700 flex gap-4 ">
                        <FaCheck className='text-secondary_dark' />
                        <span>{caracteristica}</span></li>
                    ))}
                  </ul>
                  <ButtonContainer position='justify-center items-center'>
                    <ButtonSecondary
                      title={"Contactar"}
                      width={"w-2"}
                      onClick={() => setShowModal(true)}
                      icon={''}
                      distance='mx-1'
                      id='boton-Contactar'
                    />
                  </ButtonContainer>
                </div>
                {/* Segunda Parte */}

              </li>
            )
          })}

        </ul>
      </Container>

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
    </Section>
  )
}

export default PaquetesFranquicias