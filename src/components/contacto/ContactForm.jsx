/*
Contact Form
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import emailjs from '@emailjs/browser';
import { Field, Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa6";
import ButtonSecondary from '../buttons/ButtonSecondary';
import ButtonContainer from '../containers/ButtonContainer';
import EmailErrorModal from '../modals/EmailErrorModal';
import EmailSuccessModal from '../modals/EmailSuccessModal';


// Componente
export default function ContactForm() {

  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-active');
      document.body.style.overflow = 'hidden'; // Add this line to prevent scrolling
    } else {
      document.body.classList.remove('modal-active');
      document.body.style.overflow = 'unset'; // Reset the overflow style
    }
  }, [showModal]);

  useEffect(() => {
    if (showErrorModal) {
      document.body.classList.add('modal-active');
      document.body.style.overflow = 'hidden'; // Add this line to prevent scrolling
    } else {
      document.body.classList.remove('modal-active');
      document.body.style.overflow = 'unset'; // Reset the overflow style
    }
  }, [showErrorModal]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_Contacto', 'template_contacto', form.current, {
        publicKey: 'dO-yqTYETkfD9vvLv',
      })
      .then(
        () => {
          setShowModal(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setShowErrorModal(true);
        },
      );
  };
  if (showModal) {
    document.body.classList.add('modal-active')
  } else {
    document.body.classList.remove('modal-active')
  }


  return (
    <div id="formulario" className="relative border-4   border-secondary dark:border-primary_dark rounded-2xl px-8 py-10 pb-14  bg-secondary_light/30 dark:bg-primary_light w-full text-dark ">
      <Formik
        initialValues={{
          user_name: '',
          user_city: '',
          user_email: '',
          user_phone: '',
          message: ''
        }}
        validate={
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
              errors.user_phone = "Hace falta el simbolo de + al comienzo"
            } else if (/^[+]+[0-9]+$/.test(values.user_phone)) {
              errors.user_phone = "Número telefónico correcto"
            }
            if (!values.message) {
              errors.message = 'Mensaje requerido'
            }
            return errors;
          }
        }
        onSubmit={() => {
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8 text-sm text-dark tracking-wider">
            {/* Fields */}
            <div className="flex flex-wrap justify-between gap-3 text-sm">
              <div id='formField_nombre' className="flex flex-col xl:w-[50%] w-full text-sm">
                <label htmlFor='user_name' className="mb-2">Nombre Completo<span className='text-required ml-1'>*</span></label>
                <Field
                  id="user_name"
                  name="user_name"
                  className="rounded-md bg-light text-slate-900 bg-slate-200 border-2  border-secondary dark:border-primary p-2 outline-none"
                  type="text"
                  required
                />
                {touched.user_name && errors.user_name && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_name}</span></p>}
              </div>
              <div id='formField_ciudad' className="flex flex-col xl:w-[45%] w-full">
                <label htmlFor='user_city' className="mb-2 text-sm">Ciudad<span className='text-required ml-1'>*</span></label>
                <Field
                  className="rounded-md bg-light text-slate-900 bg-slate-200 border-2  border-secondary dark:border-primary p-2 outline-none"
                  id="user_city"
                  name="user_city"
                  required
                />
                {touched.user_city && errors.user_city && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}

              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <div id='formField_email' className="flex flex-col xl:w-[50%] w-full">
                <label htmlFor="user_email" className="mb-2 text-sm">Correo Electrónico<span className='text-required ml-1'>*</span></label>
                <Field
                  className="rounded-md bg-light text-slate-900 bg-slate-200 border-2  border-secondary dark:border-primary p-2 outline-none"
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                />
                {touched.user_email && errors.user_email && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_email}</span></p>}

              </div>
              <div id='formField_ numerotelefonico' className="flex flex-col xl:w-[45%] w-full">
                <label htmlFor="user_phone" className="mb-2 text-sm">Número Telefónico<span className='text-required ml-1'>*</span></label>
                <Field
                  className="rounded-md bg-light text-slate-900 border-2  border-secondary dark:border-primary p-2 outline-none"
                  type="text"
                  name="user_phone"
                  id="user_phone"
                  required
                />
                {touched.user_phone && errors.user_phone && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_phone}</span></p>}

              </div>
            </div>
            <div id='formField_mensaje' className="flex flex-col w-full">
              <label htmlFor="message" className="mb-2">Mensaje<span className='text-required ml-1'>*</span></label>
              <textarea
                type="text"
                name="message"
                id="message"
                className="rounded-md bg-light text-slate-900 bg-slate-200 p-2 border-2  border-secondary dark:border-primary h-40 max-h-20 min-h-20 lg:min-h-40 lg:max-h-40 2xl:max-h-28 2xl:min-h-28 outline-none"
                required
              />
              {touched.message && errors.message && <p className='mt-2 text-blue-400 text-xs'>* {errors.message}</p>}

            </div>
            {/* Fields */}

            {/* Submit Button */}
            <ButtonContainer position={'justify-center'}>
              <ButtonSecondary
                title={'Enviar mensaje'}
                icon={<FaRegEnvelope />}
                type={'submit'}
                width={'w-[240px]'}
                distance='mx-1'
              />
            </ButtonContainer>
            {/* Submit Button */}

            {/* Modals */}
            {showModal &&
              <EmailSuccessModal
                onClick={() => {
                  setShowModal(false);
                  resetForm()
                }}
              />
            }
            {showErrorModal &&
              <EmailErrorModal
                onClick={() => {
                  setShowErrorModal(false);
                }}
              />
            }
            {/* Modals */}
          </Form>
        )
        }
      </Formik >
    </div>
  )
}