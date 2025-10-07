import { useState } from 'react';
import ContactInfo from './components/ContactInfo';
import ContactForm from './ContactForm';
import { EmailErrorModal, EmailSuccessModal } from 'components';

const Contacto = () => {
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Función para manejar el reinicio del formulario
  const handleResetForm = () => {
    console.log('Formulario reiniciado desde Contacto.jsx');
  };

  return (
    <article className="flex flex-col lg:flex-row gap-0 sm:gap-12 lg:gap-10 xl:gap-18 2xl:gap-24 w-full mx-auto mb-10 px-4 lg:px-0">
      <ContactInfo />
      <ContactForm
        showModal={showModal}
        setShowModal={setShowModal}
        setShowErrorModal={setShowErrorModal}
        onReset={handleResetForm} // Pasa la función de reinicio como prop
      />
      {/* Modals */}
      {showModal && (
        <EmailSuccessModal
          onClick={() => {
            setShowModal(false);
            handleResetForm(); // Llama a la función de reinicio
          }}
        />
      )}
      {showErrorModal && (
        <EmailErrorModal
          onClick={() => {
            setShowErrorModal(false);
          }}
        />
      )}
    </article>
  );
};

export default Contacto;
