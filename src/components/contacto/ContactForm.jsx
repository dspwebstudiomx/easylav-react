import { useRef, useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa6"
import { Formik, Field, Form } from 'formik';
import emailjs from '@emailjs/browser';
import Modal from './Modal';
import { IoMdExit } from "react-icons/io";
import Button from '../buttons/Button';
import ButtonSecondary from '../buttons/ButtonSecondary';
import ButtonContainer from '../containers/ButtonContainer';


export default function ContactForm() {

  const form = useRef();
  const [showModal, setShowModal] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_easylav', 'template_easylav', form.current, {
        publicKey: 'dO-yqTYETkfD9vvLv',
      })
      .then(
        () => {
          console.log("SUCCESS!")
          setShowModal(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    // e.target.reset();
  };
  if (showModal) {
    document.body.classList.add('modal-active')
  } else {
    document.body.classList.remove('modal-active')
  }


  return (
    <article id="formulario" className="border-4  border-primary_dark rounded-2xl px-8 py-10 pb-14 bg-primary_light dark:bg-slate-700  text-slate-100 w-full ">
      <Formik
        initialValues={{
          user_name: '',
          user_surname: '',
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
        {({ errors, touched }) => (
          <Form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8">
            <h2 className="text-3xl mb-2 text-center lg:hidden">Formulario</h2>

            {/* Fields */}
            <div className="flex flex-wrap justify-between gap-3">
              <div className="flex flex-col xl:w-[50%] w-full">
                <label htmlFor='user_name' className="mb-2">Nombre<span className='text-required ml-1'>*</span></label>
                <Field
                  id="user_name"
                  name="user_name"
                  className="rounded-md text-slate-900 bg-slate-200 p-4 border-2 border-primary xl:p-2 outline-none"
                  type="text"
                  required
                />
                {touched.user_name && errors.user_name && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_name}</span></p>}
              </div>
              <div className="flex flex-col xl:w-[45%] w-full">
                <label htmlFor='user_city' className="mb-2">Ciudad<span className='text-required ml-1'>*</span></label>
                <Field
                  className="rounded-md text-slate-900 bg-slate-200 border-2 border-primary p-4 xl:p-2 outline-none"
                  id="user_city"
                  name="user_city"
                  required
                />
                {touched.user_city && errors.user_city && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}

              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="flex flex-col xl:w-[50%] w-full">
                <label htmlFor="user_email" className="mb-2">Correo Electrónico<span className='text-required ml-1'>*</span></label>
                <Field
                  className="rounded-md text-slate-900 bg-slate-200 border-2 border-primary p-4 xl:p-2 outline-none"
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                />
                {touched.user_email && errors.user_email && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_email}</span></p>}

              </div>
              <div className="flex flex-col xl:w-[45%] w-full">
                <label htmlFor="user_phone" className="mb-2">Número Telefónico<span className='text-required ml-1'>*</span></label>
                <Field
                  className="rounded-md text-slate-900 bg-slate-200 border-2 border-primary p-4 xl:p-2 outline-none"
                  type="text"
                  name="user_phone"
                  id="user_phone"
                  required
                />
                {touched.user_phone && errors.user_phone && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_phone}</span></p>}

              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message" className="mb-2">Mensaje<span className='text-required ml-1'>*</span></label>
              <textarea
                type="text"
                name="message"
                id="message"
                className="rounded-md text-slate-900 bg-slate-200 p-4 border-2 border-primary h-40 max-h-32 min-h-32 outline-none"
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
                border={'border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:border-t-secondary hover:border-l-secondary_dark'}
              />
            </ButtonContainer>
            {/* Submit Button */}

            {/* Modal */}
            {showModal &&
              <Modal>
                <h1 className='text-center sm:text-[16px] font-semibold leading-snug text-xl mb-6'>Mensaje enviado<br></br>satisfactoriamente</h1>
                <Button
                  texto='Cerrar'
                  iconRight={<IoMdExit />}
                  onclick={() => setShowModal(false)}
                  type={'button'}
                  themeButton={'border-l-secondary_dark border-l-4 border-t-secondary_light border-t-4 hover:border-t-secondary hover:border-l-secondary_dark'}
                />
              </Modal>
            }
            {/* Modal */}

          </Form>
        )
        }
      </Formik >
    </article >
  )
}