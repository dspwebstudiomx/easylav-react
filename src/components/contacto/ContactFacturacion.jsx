/*
Contact Form
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
*/

// Importaciones
import emailjs from '@emailjs/browser';
import { ButtonContainer, ButtonPrimary, SubmitButton } from 'components';
import { Field, Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import EmailErrorModal from '../modals/EmailErrorModal';
import EmailSuccessModal from '../modals/EmailSuccessModal';


// Componente
export default function ContactFacturacion() {

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

  const resetForm = (resetFormik) => {
    resetFormik();
    // Si tienes campos que no son manejados por Formik, reinícialos aquí
    if (form.current) {
      form.current.reset();
    }
  };


  return (
    <div id="formulario" className="text-xl">
      <Formik
        initialValues={{
          user_name: '',
          user_email: '',
          user_phone: '',
          user_RFC: '',
          user_zipcode: '',
          user_sucursal: '',
          user_CFDI: '',
          user_state: '',
          user_ticketnumber: '',
          user_dateservice: '',

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
              errors.user_phone = 'Solo se aceptan números y +52 al comienzo'
            } else if (/^[+]+[0-9]+$/.test(values.user_phone)) {
              errors.user_phone = "Número telefónico correcto"
            }
            if (!values.message) {
              errors.message = 'Mensaje requerido'
            }
            if (!values.message) {
              errors.message = 'Mensaje requerido'
            }
            if (!values.user_RFC) {
              errors.user_phone = 'Solo se aceptan número'
            } else if (/^[+]+[0-9]+$/.test(values.user_phone)) {
              errors.user_phone = "RFC correcto"
            }
            if (!values.message) {
              errors.message = 'Mensaje requerido'
            }
            if (!values.message) {
              errors.message = 'Mensaje requerido'
            }
            return errors;
          }
        }
        onSubmit={() => {
          resetForm
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form ref={form} onSubmit={sendEmail} enctype="multipart/form-data" className="flex flex-col gap-8 text-sm text-semibold text-dark tracking-wider p-20 bg-light border-2 border-primary">
            {/* Fields */}
            <div className="grid md:grid-cols-2 gap-6 text-sm font-semibold">
              <div className='grid sm:grid-cols-1 gap-8'>
                <h2 className='mx-auto text-2xl'>
                  Datos del cliente
                </h2>
                {/* Nombre o Razon Social */}
                <div id='formField_nombre' className="flex flex-col w-full">
                  <label htmlFor='user_name' className="mb-2">Nombre Completo o Razón Social<span className='text-required ml-1'>*</span></label>
                  <Field
                    id="user_name"
                    name="user_name"
                    className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    type="text"
                    required
                  />
                  {touched.user_name && errors.user_name && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_name}</span></p>}
                </div>
                {/* Nombre o Razon Social */}

                {/* RFC */}
                <div id='formField_RFC' className="flex flex-col w-full">
                  <label htmlFor="user_RFC" className="mb-2">RFC<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark border-2  border-secondary dark:border-primary p-2 outline-none"
                    type="text"
                    name="user_RFC"
                    id="user_RFC"
                    required
                  />
                  {touched.user_phone && errors.user_phone && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_phone}</span></p>}
                </div>
                {/* RFC */}
                <div id='formField_email' className="flex flex-col">
                  <label htmlFor="user_email" className="mb-2">Correo Electrónico<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                  />
                  {touched.user_email && errors.user_email && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_email}</span></p>}
                </div>
                <div id='formField_numerotelefonico' className="flex flex-col">
                  <label htmlFor="user_phone" className="mb-2">Número Telefónico<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark border-2  border-secondary dark:border-primary p-2 outline-none"
                    type="text"
                    name="user_phone"
                    id="user_phone"
                    required
                  />
                  {touched.user_phone && errors.user_phone && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_phone}</span></p>}

                </div>
                {/* Código Postal */}
                <div id='formField_zipcode' className="flex flex-col w-full">
                  <label htmlFor='user_zipcode' className="mb-2">Código Postal<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_zipcode"
                    name="user_zipcode"
                    required
                  />
                  {touched.userzipcodea && errors.user_zipcode && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* Código Postal */}
                {/* Ciudad */}
                <div id='formField_city' className="flex flex-col w-full">
                  <label htmlFor='user_city' className="mb-2">Ciudad<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_city"
                    name="user_city"
                    required
                  />
                  {touched.user_city && errors.user_city && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* Ciudad */}
                {/* Estado */}
                <div id='formField_state' className="flex flex-col w-full">
                  <label htmlFor='user_state' className="mb-2">Estado<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_state"
                    name="user_state"
                    required
                  />
                  {touched.user_state && errors.user_state && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* Estado */}
              </div>
              <div className='grid md:grid-cols-1 gap-8'>
                <h2 className='mx-auto text-2xl'>
                  Datos de venta
                </h2>
                {/* Date */}
                <div id='formField_dateservice' className="flex flex-col">
                  <label htmlFor='user_date' className="mb-2">Fecha del Servicio<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none text-dark"
                    id="user_date"
                    name="user_date"
                    type="date"
                    required
                  />
                  {touched.user_dateservice && errors.user_dateservice && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* Date */}
                {/* Número de ticket */}
                <div id='formField_number' className="flex flex-col">
                  <label htmlFor='user_ticketnumber' className="mb-2">Número de Ticket<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark text-right bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_ticketnumber"
                    name="user_ticketnumber"
                    type="number"
                    required
                  />
                  {touched.user_ticketnumber && errors.user_ticketnumber && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* Número de ticket */}
                {/* Sucursal */}
                <div id='formField_sucursal' className="flex flex-col">
                  <label htmlFor='user_sucursal' className="mb-2">Sucursal<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_sucursal"
                    name="user_sucursal"
                    required
                  />
                  {touched.user_sucursal && errors.user_sucursal && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* Sucursal */}
                {/* Forma de Pago */}
                <div id='formField_FormaPago' className="flex flex-col text-balance">
                  <label htmlFor='user_FormaPago' className="mb-2">Forma de Pago<span className='text-required ml-1'>*</span></label>
                  <select name="user_FormaPago" className='w-full rounded-md bg-light text-dark bg-light px-4 p-2 border-2  border-secondary dark:border-primary outline-none'>
                    <option>Efectivo</option>
                    <option>Tarjeta Crédito</option>
                    <option>Tarjeta Débito</option>
                  </select>
                </div>
                {/* Forma de Pago */}
                {/* Selector CFDI */}
                <div id='formField_CFDI' className="flex flex-col text-balance">
                  <label htmlFor='user_CFDI' className="mb-2">Comprobante Fiscal Digital por Internet (CFDI)<span className='text-required ml-1'>*</span></label>
                  <select name="user_CFDI" className='w-full rounded-md bg-light text-dark bg-light px-4 p-2 border-2  border-secondary dark:border-primary outline-none'>
                    <option>G01 - Adquisición de mercancías</option>
                    <option>G02 - Devoluciones, descuentos o bonificaciones</option>
                    <option selected>G03 - Gastos en general</option>
                    <option>I01 - Construcciones</option>
                    <option>I02 - Mobilario y equipo de oficina por inversiones</option>
                    <option>I03 - Equipo de transporte</option>
                    <option>I04 - Equipo de computo y accesorios</option>
                    <option>I05 - Dados, troqueles, moldes, matrices y herramental</option>
                    <option>I06 - Comunicaciones telefónicas</option>
                    <option>I07 - Comunicaciones satelitales</option>
                    <option>I08 - Otra maquinaria y equipo</option>
                    <option>D01 - Honorarios médicos, dentales y gastos hospitalarios.</option>
                    <option>D03 - Gastos funerales.</option>
                    <option>D04 - Donativos.</option>
                    <option>D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación).</option>
                    <option>D06 - Aportaciones voluntarias al SAR.</option>
                    <option>D07 - Primas por seguros de gastos médicos.</option>
                    <option>D08 - Gastos de transportación escolar obligatoria.</option>
                    <option>D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones.</option>
                    <option>D10 - Pagos por servicios educativos (colegiaturas)</option>
                    <option>P01 - Por definir</option>
                  </select>
                </div>
                {/* Selector CFDI */}
                {/* SubTotal */}
                <div id='formField_subtotal' className="flex flex-col">
                  <label htmlFor='user_subtotal' className="mb-2">Subtotal<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark text-right bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_subtotal"
                    name="user_subtotal"
                    type="number"
                    required
                  />
                  {touched.user_subtotal && errors.user_subtotal && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* SubTotal */}
                {/* IVA */}
                <div id='formField_IVA' className="flex flex-col">
                  <label htmlFor='user_IVA' className="mb-2">I.V.A<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark text-right bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_IVA"
                    name="user_IVA"
                    type="number"
                    required
                  />
                  {touched.user_IVA && errors.user_IVA && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* SubTotal */}
                {/* TotalPagar */}
                <div id='formField_TotalPagar' className="flex flex-col">
                  <label htmlFor='user_TotalPagar' className="mb-2">Total a pagar<span className='text-required ml-1'>*</span></label>
                  <Field
                    className="rounded-md bg-light text-dark text-right bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                    id="user_TotalPagar"
                    name="user_TotalPagar"
                    type="number"
                    required
                  />
                  {touched.user_TotalPagar && errors.user_TotalPagar && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
                </div>
                {/* SubTotal */}
              </div>
            </div>
            {/* Fields */}


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
            <ButtonContainer position='items-center justify-center'>
              <SubmitButton type='submit' />
              <ButtonPrimary width='w-auto' title='Borrar Información' onClick={() => resetForm()} type='submit' />
            </ButtonContainer>
          </Form>
        )
        }
      </Formik >
    </div>
  )
}