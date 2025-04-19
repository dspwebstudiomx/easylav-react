/*
Contact Form
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { Button } from 'components';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FaTrash, FaEnvelope } from 'react-icons/fa6';

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  user_name: Yup.string()
    .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'Solo debe de contener letras')
    .min(2, 'Ingrese al menos 2 letras')
    .required('Nombre requerido'),
  user_city: Yup.string()
    .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'Solo debe de contener letras')
    .min(2, 'Ingrese al menos 2 letras')
    .required('Ciudad requerida'),
  user_email: Yup.string().email('Email no válido').required('Correo electrónico requerido'),
  user_phone: Yup.string()
    .matches(/^[+]+[0-9]+$/, 'Solo se aceptan números y símbolo + al comienzo')
    .required('Número telefónico requerido'),
  message: Yup.string().required('Mensaje requerido'),
});

// Variables de entorno para EmailJS
let serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
let templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
let publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Componente
const ContactForm = ({ setShowModal, setShowErrorModal, onReset }) => {
  const sendEmail = (values, { resetForm }) => {
    console.log('Valores enviados:', values); // Verifica los valores enviados
    emailjs.send(serviceID, templateID, values, publicKey).then(
      () => {
        console.log('Correo enviado exitosamente');
        setShowModal(true); // Muestra el modal de éxito
        resetForm(); // Limpia el formulario
        if (onReset) onReset(); // Llama a la función de reinicio pasada como prop
      },
      (error) => {
        console.error('Error al enviar el correo:', error.text);
        setShowErrorModal(true); // Muestra el modal de error
      }
    );
  };

  return (
    <section
      id="formulario"
      className="relative border-4 border-secondary dark:border-primary_dark rounded-2xl p-6 lg:py-8 bg-secondary_light/30 dark:bg-primary_light w-full h-auto overflow-hidden text-dark animate__animated animate__bounceInRight animate__slowest mx-auto flex flex-col justify-center">
      <Formik
        initialValues={{
          user_name: '',
          user_city: '',
          user_email: '',
          user_phone: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}>
        {({ errors, touched, resetForm }) => (
          <Form className="flex flex-col gap-8 text-sm text-dark tracking-wider">
            {/* Fields */}
            <div className="flex flex-wrap gap-3 text-sm items-center justify-center">
              <div id="formField_nombre" className="flex flex-col sm:w-[50%] md:w-full w-full text-sm">
                <label htmlFor="user_name" className="mb-2">
                  Nombre Completo<span className="text-required ml-1">*</span>
                </label>
                <Field
                  id="user_name"
                  name="user_name"
                  className="rounded-md bg-light text-slate-900 bg-slate-200 border-2 border-secondary dark:border-primary p-2 outline-none"
                  type="text"
                  required
                />
                {touched.user_name && errors.user_name && (
                  <p className="mt-2 text-required text-xs">
                    * <span className="text-dark">{errors.user_name}</span>
                  </p>
                )}
              </div>
              <div id="formField_ciudad" className="flex flex-col sm:w-[45%] md:w-full w-full">
                <label htmlFor="user_city" className="mb-2 text-sm">
                  Ciudad<span className="text-required ml-1">*</span>
                </label>
                <Field
                  className="rounded-md bg-light text-slate-900 bg-slate-200 border-2 border-secondary dark:border-primary p-2 outline-none"
                  id="user_city"
                  name="user_city"
                  required
                />
                {touched.user_city && errors.user_city && (
                  <p className="mt-2 text-required text-xs">
                    *<span className="text-dark">{errors.user_city}</span>{' '}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <div id="formField_email" className="flex flex-col sm:w-[50%] md:w-full w-full">
                <label htmlFor="user_email" className="mb-2 text-sm">
                  Correo Electrónico<span className="text-required ml-1">*</span>
                </label>
                <Field
                  className="rounded-md bg-light text-slate-900 bg-slate-200 border-2 border-secondary dark:border-primary p-2 outline-none"
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                />
                {touched.user_email && errors.user_email && (
                  <p className="mt-2 text-required text-xs">
                    * <span className="text-dark">{errors.user_email}</span>
                  </p>
                )}
              </div>
              <div id="formField_ numerotelefonico" className="flex flex-col sm:w-[45%] md:w-full w-full">
                <label htmlFor="user_phone" className="mb-2 text-sm">
                  Número Telefónico<span className="text-required ml-1">*</span>
                </label>
                <Field
                  className="rounded-md bg-light text-slate-900 border-2 border-secondary dark:border-primary p-2 outline-none"
                  type="text"
                  name="user_phone"
                  id="user_phone"
                  required
                />
                {touched.user_phone && errors.user_phone && (
                  <p className="mt-2 text-required text-xs">
                    * <span className="text-dark">{errors.user_phone}</span>
                  </p>
                )}
              </div>
            </div>
            <div id="formField_mensaje" className="flex flex-col w-full">
              <label htmlFor="message" className="mb-2">
                Mensaje<span className="text-required ml-1">*</span>
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                className="rounded-md bg-light text-slate-900 bg-slate-200 p-2 border-2 border-secondary dark:border-primary h-40 min-h-40 max-h-40 2xl:max-h-28 2xl:min-h-28 outline-none"
                required
              />
              {touched.message && errors.message && <p className="mt-2 text-required text-xs">* {errors.message}</p>}
            </div>
            {/* Fields */}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <Button width="w-full sm:w-[50%]" type="submit" variant="primary" title="Enviar" icon={<FaEnvelope />} />
              <Button
                width="w-full sm:w-[50%]"
                title="Reiniciar"
                type="button"
                variant="secondary"
                icon={<FaTrash size={24} />}
                onClick={() => {
                  resetForm(); // Reinicia el formulario
                  if (onReset) onReset(); // Llama a la función de reinicio pasada como prop
                }}
              />
            </div>
            {/* Submit Button */}
          </Form>
        )}
      </Formik>
    </section>
  );
};

ContactForm.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func.isRequired,
  setShowErrorModal: PropTypes.func.isRequired,
  onReset: PropTypes.func,
};

export default ContactForm;
