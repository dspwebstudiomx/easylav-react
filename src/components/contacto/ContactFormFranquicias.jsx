import emailjs from '@emailjs/browser';
import { EmailErrorModal, EmailSuccessModal, SubmitButton } from 'components';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Fields from '../contacto/components/Form/Fields';


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
        },
      );
  };

  // if (showModal) {
  //   document.body.classList.add('modal-active')
  // } else {
  //   document.body.classList.remove('modal-active')
  // }

  return (
    <article id="formulario" className="border-4 border-primary_dark rounded-2xl bg-primary_light text-sm p-4 h-auto text-dark">
      <Formik
        initialValues={{
          user_name: '',
          user_city: '',
          user_email: '',
          user_phone: '',
          message: '',
        }}
        validate={() => {
          values => {
            let errors = {};
            if (!values.user_name) {
              errors.user_name = 'Solo debe de contener letras'
            } else if (values.user_name.length < 2) {
              errors.user_name = 'Ingrese al menos 2 letras'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
              errors.user_name = 'No debe de contener números'
            } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
              errors.user_name = 'Nombre Correcto'
            }

            if (!values.user_city) {
              errors.user_city = 'Solo debe de contener letras'
            } else if (values.user_city.length < 2) {
              errors.user_city = 'Ingrese al menos 2 letras'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_city)) {
              errors.user_city = 'No debe de contener números'
            } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_city)) {
              errors.user_city = 'Ciudad correcta '
            }

            if (!values.user_email) {
              errors.user_email = 'Requerido';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
              errors.user_email = 'Email no valido';
            } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
              errors.user_email = 'Email correcto';
            }
            if (!values.user_phone) {
              errors.user_phone = 'Solo se aceptan números y símbolo + al comienzo'
            } else if (!/^[+]+[0-9]+$/.test(values.user_phone)) {
              errors.user_phone = 'Hace falta el simbolo de + al comienzo'
            } else if (/^[+]+[0-9]+$/.test(values.user_phone)) {
              errors.user_phone = 'Número telefónico correcto'
            }
            if (!values.message) {
              errors.message = 'Mensaje requerido'
            }
            return errors;
          }

        }}
        onSubmit={() => { }}
      >
        {({ errors, touched, resetForm }) => (
          <Form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8 p-6 text-base">
            <Fields errors={errors} touched={touched} />
            <SubmitButton />
            {showModal && <EmailSuccessModal
              onClick={() => {
                setShowModal(false);
                resetForm()
              }}
            />}
            {showErrorModal && <EmailErrorModal onClick={() => setShowErrorModal(false)} />}
          </Form>
        )}
      </Formik>
    </article>
  );
};