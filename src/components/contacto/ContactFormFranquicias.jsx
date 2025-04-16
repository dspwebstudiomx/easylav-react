import emailjs from '@emailjs/browser';
import { EmailErrorModal, EmailSuccessModal, HomeButton, Button } from 'components';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Fields from '../contacto/components/Form/Fields';
import { FaTrash } from 'react-icons/fa6';

export const ContactFormFranquicias = () => {
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const form = React.createRef();

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-active');
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  useEffect(() => {
    if (showErrorModal) {
      document.body.classList.add('modal-active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-active');
      document.body.style.overflow = 'unset';
    }
  }, [showErrorModal]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_Franquicias', 'template_franquicias', form.current, {
        publicKey: 'dO-yqTYETkfD9vvLv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowModal(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setShowErrorModal(true);
        }
      );
  };

  return (
    <article id="formulario" className="text-sm p-0 h-auto text-dark overflow-y-auto">
      <Formik
        initialValues={{
          user_name: '',
          user_city: '',
          user_email: '',
          user_phone: '',
          message: '',
        }}
        validate={(values) => {
          const errors = {};

          if (!values.user_name) {
            errors.user_name = 'El nombre es obligatorio.';
          } else if (values.user_name.length < 2) {
            errors.user_name = 'El nombre debe tener al menos 2 caracteres.';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
            errors.user_name = 'El nombre solo puede contener letras y espacios.';
          }

          if (!values.user_city) {
            errors.user_city = 'La ciudad es obligatoria.';
          } else if (values.user_city.length < 2) {
            errors.user_city = 'La ciudad debe tener al menos 2 caracteres.';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_city)) {
            errors.user_city = 'La ciudad solo puede contener letras y espacios.';
          }

          if (!values.user_email) {
            errors.user_email = 'El correo electrónico es obligatorio.';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
            errors.user_email = 'El correo electrónico no es válido.';
          }

          if (!values.user_phone) {
            errors.user_phone = 'El número de teléfono es obligatorio.';
          } else if (!/^[+]*[0-9]+$/.test(values.user_phone)) {
            errors.user_phone = 'El número de teléfono debe comenzar con "+" y contener solo números.';
          }

          if (!values.message) {
            errors.message = 'El mensaje es obligatorio.';
          } else if (values.message.length < 10) {
            errors.message = 'El mensaje debe tener al menos 10 caracteres.';
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values, resetForm);
        }}>
        {({ errors, touched, resetForm }) => (
          <Form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-sm items-between">
            <h2 className="text-xl font-semibold text-dark">¿Estás interesado en adquirir una franquicia?</h2>
            <Fields errors={errors} touched={touched} />
            <div className="mx-auto flex sm:flex-row gap-4 w-full shadow-none">
              <Button type="submit" variant="primary" title="Enviar mensaje" width="w-full" />
              <Button
                type="button"
                href=""
                width="w-20"
                variant="secondary"
                icon={<FaTrash size={28} />}
                title=""
                onClick={() => resetForm()}
                arialabel="Limpiar formulario"
              />
              <div className="hidden lg:block">
                <HomeButton text="Ir a inicio" />
              </div>
            </div>
            {showModal && (
              <EmailSuccessModal
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
              />
            )}
            {showErrorModal && <EmailErrorModal onClick={() => setShowErrorModal(false)} />}
          </Form>
        )}
      </Formik>
    </article>
  );
};
