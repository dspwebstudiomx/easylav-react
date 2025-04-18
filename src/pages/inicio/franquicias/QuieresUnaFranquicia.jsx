/*
QuieresUnaFranquicia.jsx - Componente de la sección "Quieres una franquicia" en la página de inicio.
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
Descripción: Este componente muestra información sobre la franquicia de lavandería, incluyendo un título, un párrafo descriptivo y un botón para obtener más información. Utiliza un fondo de imagen y estilos personalizados.
==========================
Fecha modificación: 2025-03-27
Modificado por: Daniel Pérez
Descripción: Se han realizado cambios en los estilos y la estructura del componente para mejorar la presentación y la legibilidad. Además, se ha optimizado el uso de imágenes y se han ajustado los colores y tamaños para una mejor experiencia de usuario.
*/

// Importaciones
import { VistaLavanderiaDesdeEntrada_1_640 } from 'assets';
import { BackgroundImageSection, Button, ButtonContainer, ContactFormFranquicias, Modal, TitleH1 } from 'components';
import { useShowModal } from 'hooks';
import { memo, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

const QuieresUnaFranquicia = () => {
  const images = {
    image_576: VistaLavanderiaDesdeEntrada_1_640,
    image_1024: VistaLavanderiaDesdeEntrada_1_640,
    image_1200: VistaLavanderiaDesdeEntrada_1_640,
    image_1920: VistaLavanderiaDesdeEntrada_1_640,
  };

  const { showModal, setShowModal } = useShowModal();
  const [selectedPaquete, setSelectedPaquete] = useState(null);

  const handleOpenModal = (paquete) => {
    setSelectedPaquete(paquete); // Establece el paquete seleccionado
    setShowModal(true); // Muestra el modal
  };

  const handleCloseModal = () => {
    setSelectedPaquete(null); // Limpia el paquete seleccionado
    setShowModal(false); // Oculta el modal
  };

  return (
    <BackgroundImageSection
      height="h-full"
      opacity="bg-dark opacity-50"
      titleColor="text-primary"
      textColor="text-dark"
      image=""
      backgroundColor="dark"
      image_1024={images.image_1024}
      image_1200={images.image_1200}
      image_576={images.image_576}
      image_1920={images.image_1920}
      align="items-center justify-center">
      <section id="hero-inicio_container" className="grid gap-x-8 px-8 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <article id="hero-inicio_info_container" className="flex flex-col gap-8 w-full mx-auto">
          <TitleH1 attr="sr-only" align="text-center">
            En Easylav, ofrecemos franquicias de lavandería con limpieza impecable y planchado perfecto. Descubre cómo
            puedes ser parte de nuestro éxito.
          </TitleH1>
          <span className="text-light uppercase text-3xl lg:text-4xl font-semibold mx-auto">
            ¿Estás listo para emprender un negocio rentable y en crecimiento?
          </span>
          <p className="text-light text-xl lg:text-2xl block">
            Únete a una franquicia de lavandería con alta demanda y un modelo de negocio probado. Con nuestro respaldo y
            tecnología avanzada, podrás ofrecer un servicio excepcional que atrae clientes y asegura tu éxito. ¡Invierte
            en tu futuro con Easylav!
          </p>
          <ButtonContainer position="justify-start items-center" distance="mt-12">
            <Button
              title={'Solicita más información'}
              width={''}
              onClick={() => handleOpenModal({ nombre: 'Paquete Básico' })} // Pasa un paquete válido
              distance="mx-1"
              id="boton-contactar-paquete-basico" // ID estático para evitar errores
              aria-label="Contactar para el paquete básico"
              variant="secondary"
            />
          </ButtonContainer>
        </article>
      </section>
      {/* Modal */}
      {showModal && selectedPaquete && (
        <Modal width="w-[90vw] md:w-[60vw] lg:w-[40vw]">
          <div
            id="franquicias-formulario"
            className="z-40 mx-auto flex flex-col rounded-xl border-4 border-primary bg-light p-8 gap-8">
            <button id="button-close" onClick={handleCloseModal}>
              <FaXmark size={36} className="z-30 ml-auto text-primary_dark" />
            </button>
            <ContactFormFranquicias paquete={selectedPaquete} />
          </div>
        </Modal>
      )}
      {/* Modal */}
    </BackgroundImageSection>
  );
};

const MemoizedQuieresUnaFranquicia = memo(QuieresUnaFranquicia, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children;
});
export default MemoizedQuieresUnaFranquicia;
