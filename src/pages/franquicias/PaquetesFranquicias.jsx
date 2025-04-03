// Importaciones
import {
  ButtonContainer,
  ButtonSecondary,
  ContactFormFranquicias,
  Container,
  Modal,
  Section,
  Spacing,
  TituloYDescripcion,
} from 'components';
import { paquetesFranquicias } from 'data';
import { useShowModal } from 'hooks';
import { useState } from 'react';
import { FaCheck, FaXmark } from 'react-icons/fa6';

// Estilos
const PAQUETES_FRANQUICIAS_UI = {
  PADDING: 'px-8 py-12 sm:py-12 md:px-20 lg:p-24',
  MARGIN: 'm-auto',
  BACKGROUND: 'bg-light dark:bg-dark',
  TEXT_COLOR: 'text-dark',
};
const styles = `${PAQUETES_FRANQUICIAS_UI.PADDING} ${PAQUETES_FRANQUICIAS_UI.MARGIN} ${PAQUETES_FRANQUICIAS_UI.BACKGROUND} ${PAQUETES_FRANQUICIAS_UI.TEXT_COLOR}`;

// Estructura
const PaquetesFranquicias = () => {
  const { showModal, setShowModal } = useShowModal();
  const [selectedPaquete, setSelectedPaquete] = useState(null);

  const handleOpenModal = (paquete) => {
    setSelectedPaquete(paquete);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPaquete(null);
    setShowModal(false);
  };

  return (
    <Section className={styles} id="paquetes-franquicias">
      <Container className="flex flex-col gap-12">
        <TituloYDescripcion
          title="¿Cómo son nuestras franquicias?"
          description="Conoce los diferentes paquetes de franquicias que ofrecemos y elige el que mejor se adapte a tus necesidades. Cada paquete incluye una variedad de características y beneficios diseñados para ayudarte a tener éxito en tu negocio."
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 2xl:gap-6 max-w-screen-2xl mx-auto">
          {paquetesFranquicias.map((paquete) => {
            // Validación de datos
            if (!paquete.nombre || !Array.isArray(paquete.caracteristicas)) {
              return null; // Ignorar paquetes inválidos
            }

            return (
              <li
                key={paquete.id}
                className="divide-y divide-primary_dark rounded-2xl border-primary_dark border-4 shadow-2xl dark:bg-light"
              >
                {/* Primera Parte */}
                <div className="p-8 flex flex-col gap-6">
                  <h2 className="text-2xl text-dark uppercase font-bold text-center lg:text-left gap-3">
                    <span className="sr-only">Plan </span>
                    {paquete.nombre}
                  </h2>
                  <p className="mt-2 text-base text-dark-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                {/* Primera Parte */}

                {/* Segunda Parte */}
                <div className="p-8 flex flex-col gap-6">
                  <p className="text-lg font-medium text-dark">
                    Que incluye <span className="text-secondary_dark">:</span>
                  </p>

                  <ul
                    className="space-y-2"
                    id={`lista-caracteristica-${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {paquete.caracteristicas.map((caracteristica, index) => (
                      <li key={`${paquete.id}-${index}`} className="text-dark flex gap-4 text-base">
                        <FaCheck className="text-secondary_dark" />
                        <span>{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonContainer position="justify-center items-center">
                    <ButtonSecondary
                      title={'Contactar'}
                      width={'w-full'}
                      onClick={() => handleOpenModal(paquete)}
                      distance="mx-1"
                      id={`boton-contactar-${paquete.nombre.replace(/\s+/g, '-').toLowerCase()}`}
                      aria-label={`Contactar para el paquete ${paquete.nombre}`}
                    />
                  </ButtonContainer>
                </div>
                {/* Segunda Parte */}
              </li>
            );
          })}
        </ul>
      </Container>

      {/* Modal */}
      {showModal && selectedPaquete && (
        <Modal width="w-[90vw] md:w-[60vw] lg:w-[40vw]">
          <div
            id="franquicias-formulario"
            className="z-40 mx-auto flex flex-col rounded-xl border-4 border-primary bg-light p-8"
          >
            <button id="button-close" onClick={handleCloseModal}>
              <FaXmark size={36} className="z-30 ml-auto text-primary_dark" />
            </button>
            <Spacing distance="my-4" />
            <ContactFormFranquicias paquete={selectedPaquete} />
          </div>
        </Modal>
      )}
      {/* Modal */}
    </Section>
  );
};

export default PaquetesFranquicias;
