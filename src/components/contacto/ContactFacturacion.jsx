/*
ContactFacturacion.jsx - Formulario de contacto para facturación
=====================================
Creado por : Daniel Pérez
Fecha: 2024-08-25
Descripción: Este componente es un formulario de contacto para la sección de facturación. Permite a los usuarios enviar sus datos y recibir una factura por correo electrónico. El formulario incluye validaciones y envía un correo electrónico utilizando EmailJS.
El formulario incluye campos para el nombre, RFC, correo electrónico, número de teléfono, dirección, fecha del servicio, número de ticket, sucursal, CFDI, forma de pago y totales. También incluye un botón para enviar el formulario y otro para borrar los datos ingresados. Al enviar el formulario, se muestra un modal de éxito o error según el resultado del envío.
*/

// Importaciones
import emailjs from '@emailjs/browser';
import { ButtonContainer, ButtonPrimary, Spacing } from 'components';
import { localservices } from 'data';
import { Field, Form, Formik } from 'formik';
import { scrollToTop } from 'functions';
import { useEffect, useRef, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa6';
import EmailErrorModal from '../modals/EmailErrorModal';
import EmailSuccessModal from '../modals/EmailSuccessModal';

// Componente
export default function ContactFacturacion() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showCardDigitsInput, setShowCardDigitsInput] = useState(false);
  const [cardDigits, setCardDigits] = useState(''); // Estado para los últimos 4 dígitos
  const [paymentMethod, setPaymentMethod] = useState(); // Estado para la forma de pago

  const handlePaymentChange = (event) => {
    const selectedPayment = event.target.value;
    setPaymentMethod(selectedPayment); // Actualiza el estado de la forma de pago
    setShowCardDigitsInput(selectedPayment === 'Tarjeta Débito' || selectedPayment === 'Tarjeta Crédito');
  };

  const handleCardDigitsChange = (event) => {
    setCardDigits(event.target.value); // Actualiza el estado con el valor del input
  };

  // Ordenar localservices alfabéticamente por el título
  const sortedLocalServices = [...localservices].sort((a, b) => a.title.localeCompare(b.title));

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
      .sendForm('service_facturacion', 'template_facturacion', form.current, {
        publicKey: 'ZbK-tAT_FCSlxO0ZF',
      })
      .then(
        () => {
          setShowModal(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setShowErrorModal(true);
        }
      );
  };
  if (showModal) {
    document.body.classList.add('modal-active');
  } else {
    document.body.classList.remove('modal-active');
  }

  return (
    <div id="formulario" className="">
      <Formik
        initialValues={{
          user_name: '',
          user_RFC: '',
          user_email: '',
          user_phone: '',
          user_street: '',
          user_number: '',
          user_zipcode: '',
          user_state: '',
          user_city: '',
          user_dateservice: '',
          user_ticketnumber: '',
          user_sucursal: '',
          user_CFDI: '',
          user_payment: paymentMethod,
          user_subtotal: '',
          user_IVA: '',
          user_total: '',
          user_CSF: '',
          card_digits: cardDigits, // Añade el estado de cardDigits aquí
        }}
        validate={(values) => {
          let errors = {};
          if (!values.user_name) {
            errors.user_name = 'Solo debe de contener letras';
          } else if (values.user_name.length < 2) {
            errors.user_name = 'Ingrese al menos 2 letras';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
            errors.user_name = 'No debe de contener números';
          } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
            errors.user_name = 'Nombre Correcto';
          }

          if (!values.user_city) {
            errors.user_city = 'Solo debe de contener letras';
          } else if (values.user_city.length < 2) {
            errors.user_city = 'Ingrese al menos 2 letras';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_city)) {
            errors.user_city = 'No debe de contener números';
          } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_city)) {
            errors.user_city = 'Ciudad correcta ';
          }

          if (!values.user_email) {
            errors.user_email = 'Requerido';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
            errors.user_email = 'Email no valido';
          } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
            errors.user_email = 'Email correcto';
          }
          if (!values.user_phone) {
            errors.user_phone = 'Solo se aceptan números y símbolo + al comienzo';
          } else if (!/^[+]+[0-9]+$/.test(values.user_phone)) {
            errors.user_phone = 'Hace falta el simbolo de + al comienzo';
          } else if (/^[+]+[0-9]+$/.test(values.user_phone)) {
            errors.user_phone = 'Número telefónico correcto';
          }
          if (!values.message) {
            errors.message = 'Mensaje requerido';
          }
          return errors;
        }}
        onSubmit={() => {}}
      >
        {({ errors, touched, resetForm }) => (
          <Form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col mx-auto gap-8 text-sm text-dark dark:text-light tracking-wider pb-20 xl:w-4/5 shadow-2xl p-12 rounded-2xl mt-20"
          >
            {/* Fields */}

            {/* Datos del Usuario */}
            <div id="datos-usuario">
              <h2 className="text-xl uppercase font-bold text-center text-dark dark:text-primary_dark mb-12">
                Datos del usuario
              </h2>
              <div id="campos-datos-usuario" className="flex flex-col w-[280px] sm:w-full mx-auto text-left">
                {/* Nombre Completo / Razón  - RFC  */}
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Nombre o Razon Social */}
                  <div id="formField_name" className="flex flex-col">
                    <label htmlFor="user_name" className="mb-2">
                      Nombre Completo o Razón Social<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      id="user_name"
                      name="user_name"
                      className="rounded-md bg-light text-dark px-4 border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      type="text"
                      required
                    />
                    {touched.user_name && errors.user_name && (
                      <p className="mt-2 text-required text-xs">
                        * <span className="text-dark dark:text-light">{errors.user_name}</span>
                      </p>
                    )}
                  </div>
                  {/* Nombre o Razon Social */}

                  {/* RFC */}
                  <div id="formField_RFC" className="flex flex-col">
                    <label htmlFor="user_RFC" className="mb-2">
                      RFC<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      type="text"
                      name="user_RFC"
                      id="user_RFC"
                      required
                    />
                    {touched.user_RFC && errors.user_RFC && (
                      <p className="mt-2 text-required text-xs">
                        * <span className="text-dark dark:text-light">{errors.user_phone}</span>
                      </p>
                    )}
                  </div>
                  {/* RFC */}
                </div>
                {/* Nombre Completo / Razón  - RFC  */}

                {/* Correo Electrónico - Número Telefónico */}
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  {/* Email */}
                  <div id="formField_email" className="flex flex-col">
                    <label htmlFor="user_email" className="mb-2">
                      Correo Electrónico<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark px-4 border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                    />
                    {touched.user_email && errors.user_email && (
                      <p className="mt-2 text-required text-xs">
                        * <span className="text-dark dark:text-light">{errors.user_email}</span>
                      </p>
                    )}
                  </div>
                  {/* Email */}

                  {/* Numero telefonico */}
                  <div id="formField_phone" className="flex flex-col">
                    <label htmlFor="user_phone" className="mb-2">
                      Número Telefónico<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      type="text"
                      name="user_phone"
                      id="user_phone"
                      required
                    />
                    {touched.user_phone && errors.user_phone && (
                      <p className="mt-2 text-required text-xs">
                        * <span className="text-dark dark:text-light">{errors.user_phone}</span>
                      </p>
                    )}
                  </div>
                  {/* Numero telefonico */}
                </div>
                {/* Correo Electrónico - Número Telefónico */}

                {/* Calle - Número - Ciudad */}
                <div className="grid sm:grid-cols-3 w-full gap-8 mt-8">
                  {/* Calle */}
                  <div id="formField_street" className="flex flex-col">
                    <label htmlFor="user_street" className="mb-2">
                      Calle<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark px-4 border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      id="user_street"
                      name="user_street"
                      required
                    />
                    {touched.user_street && errors.user_street && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark dark:text-light">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* Calle */}
                  {/* Numero */}
                  <div id="formField_number" className="flex flex-col">
                    <label htmlFor="user_number" className="mb-2">
                      Número<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      type="number"
                      name="user_number"
                      id="user_number"
                      required
                    />
                    {touched.user_number && errors.user_number && (
                      <p className="mt-2 text-required text-xs">
                        * <span className="text-dark dark:text-light">{errors.user_phone}</span>
                      </p>
                    )}
                  </div>
                  {/* Numero */}

                  {/* Ciudad */}
                  <div id="formField_city" className="flex flex-col">
                    <label htmlFor="user_city" className="mb-2">
                      Ciudad<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark px-4 border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      id="user_city"
                      name="user_city"
                      required
                    />
                    {touched.user_city && errors.user_city && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark dark:text-light">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* Ciudad */}
                </div>
                {/* Calle - Número - Ciudad */}

                {/* Código Postal - Estado */}
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  {/* Código Postal */}
                  <div id="formField_zipcode" className="flex flex-col">
                    <label htmlFor="user_zipcode" className="mb-2">
                      Código Postal<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark px-4 border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      id="user_zipcode"
                      name="user_zipcode"
                      required
                    />
                    {touched.userzipcode && errors.user_zipcode && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark dark:text-light">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* Código Postal */}

                  {/* Estado */}
                  <div id="formField_state" className="flex flex-col">
                    <label htmlFor="user_state" className="mb-2">
                      Estado<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark px-4 border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      id="user_state"
                      name="user_state"
                      required
                    />
                    {touched.user_state && errors.user_state && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* Estado */}
                </div>
                {/* Código Postal - Estado */}
              </div>
            </div>
            {/* Datos del Usuario */}

            <Spacing distance="h-12" />

            {/* Datos de Compra */}
            <div id="datos de compra" className="flex flex-col mx-auto w-[280px] sm:w-full">
              <h2 className="text-xl uppercase font-bold text-center text-dark dark:text-primary_dark mb-12">
                Datos de Compra
              </h2>
              <div id="campos-datos-compra" className="flex flex-col">
                {/* Fecha de Compra - Número de Ticket */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Date */}
                  <div id="formField_dateservice" className="flex flex-col">
                    <label htmlFor="user_dateservice" className="mb-2">
                      Fecha del Servicio<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none text-dark w-[280px] md:w-auto"
                      id="user_dateservice"
                      name="user_dateservice"
                      type="date"
                      required
                    />
                    {touched.user_dateservice && errors.user_dateservice && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* Date */}
                  {/* Número de ticket */}
                  <div id="formField_number" className="flex flex-col">
                    <label htmlFor="user_ticketnumber" className="mb-2">
                      Número de Ticket<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark text-right px-4 border-2  border-secondary dark:border-primary p-2 outline-none w-[280px] md:w-auto"
                      id="user_ticketnumber"
                      name="user_ticketnumber"
                      type="number"
                      required
                    />
                    {touched.user_ticketnumber && errors.user_ticketnumber && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* Número de ticket */}
                </div>
                {/* Fecha de Compra - Número de Ticket */}

                {/* Sucursal - Selector CFDI */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {/* Sucursal */}
                  <div id="formField_sucursal" className="flex flex-col">
                    <label htmlFor="user_sucursal" className="mb-2">
                      Sucursal<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      as="select"
                      name="user_sucursal"
                      className="rounded-md bg-light text-dark px-4 p-2 border-2  border-secondary dark:border-primary outline-none w-[280px] md:w-auto"
                    >
                      <option defaultValue={'Escoge tu sucursal'} selected>
                        Escoge tu sucursal
                      </option>
                      {sortedLocalServices.map((localservice) => {
                        return <option key={localservice.id}>{localservice.title}</option>;
                      })}
                    </Field>
                    {touched.user_sucursal && errors.user_sucursal && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* Sucursal */}
                  {/* Selector CFDI */}
                  <div id="formField_CFDI" className="flex flex-col">
                    <label htmlFor="user_CFDI" className="mb-2">
                      Comprobante Fiscal Digital por Internet (CFDI)<span className="text-required ml-1">*</span>
                    </label>
                    <select
                      name="user_CFDI"
                      className="rounded-md bg-light text-dark px-4 p-2 border-2  border-secondary dark:border-primary outline-none w-[280px] md:w-auto"
                    >
                      <option>G01 - Adquisición de mercancías</option>
                      <option>G02 - Devoluciones, descuentos o bonificaciones</option>
                      <option defaultValue={'G03 - Gastos en general'} selected>
                        G03 - Gastos en general
                      </option>
                      <option>I01 - Construcciones</option>
                      <option>I02 - Mobilario y equipo de oficina por inversiones</option>
                      <option>I03 - Equipo de transporte</option>
                      <option>I04 - Equipo de computo y accesorios</option>
                      <option>I05 - Dados, troqueles, moldes, matrices y herramental</option>
                      <option>I06 - Comunicaciones telefónicas</option>
                      <option>I07 - Comunicaciones satelitales</option>
                      <option>I08 - Otra maquinaria y equipo</option>
                      <option>D01 - Honorarios médicos, dentales y gastos hospitalarios</option>
                      <option>D03 - Gastos funerales</option>
                      <option>D04 - Donativos</option>
                      <option>
                        D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)
                      </option>
                      <option>D06 - Aportaciones voluntarias al SAR</option>
                      <option>D07 - Primas por seguros de gastos médicos</option>
                      <option>D08 - Gastos de transportación escolar obligatoria</option>
                      <option>
                        D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones
                      </option>
                      <option>D10 - Pagos por servicios educativos (colegiaturas)</option>
                      <option>P01 - Por definir</option>
                    </select>
                  </div>
                  {/* Selector CFDI */}
                </div>
                {/* Sucursal - Selector CFDI */}

                {/* Forma de Pago - Subtotal */}
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  {/* Forma de Pago */}
                  <div id="formField_payment" className="flex flex-col w-full">
                    <label htmlFor="user_payment" className="mb-2">
                      Forma de Pago<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      as="select"
                      name="user_payment"
                      className="rounded-md bg-light text-dark px-4 p-2 border-2 border-secondary dark:border-primary outline-none"
                      onChange={handlePaymentChange}
                    >
                      <option value="" defaultValue={'Seleccione'}>
                        Seleccione
                      </option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Tarjeta Crédito">Tarjeta Crédito</option>
                      <option value="Tarjeta Débito">Tarjeta Débito</option>
                    </Field>
                  </div>
                  {/* Forma de Pago */}

                  {/* SubTotal */}
                  <div id="formField_subtotal" className="flex flex-col">
                    <label htmlFor="user_subtotal" className="mb-2">
                      Subtotal<span className="text-required">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark text-right px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                      id="user_subtotal"
                      name="user_subtotal"
                      type="number"
                      required
                    />
                    {touched.user_subtotal && errors.user_subtotal && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* SubTotal */}
                </div>
                {/* Forma de Pago - Subtotal */}

                {/* IVA - Total a Pagar */}
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  {/* IVA */}
                  <div id="formField_IVA" className="flex flex-col">
                    <label htmlFor="user_IVA" className="mb-2">
                      I.V.A<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark text-right px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                      id="user_IVA"
                      name="user_IVA"
                      type="number"
                      required
                    />
                    {touched.user_IVA && errors.user_IVA && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* IVA */}
                  {/* Total a Pagar */}
                  <div id="formField_total" className="flex flex-col">
                    <label htmlFor="user_total" className="mb-2">
                      Total a pagar<span className="text-required ml-1">*</span>
                    </label>
                    <Field
                      className="rounded-md bg-light text-dark text-right px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
                      id="user_total"
                      name="user_total"
                      type="number"
                      required
                    />
                    {touched.user_total && errors.user_total && (
                      <p className="mt-2 text-required text-xs">
                        *<span className="text-dark">{errors.user_city}</span>{' '}
                      </p>
                    )}
                  </div>
                  {/* Total a Pagar */}
                </div>
                {/* IVA - Total a Pagar */}
              </div>
            </div>
            {/* 
            <form encType="multipart/form-data" method="post" onSubmit={sendEmail} className='flex flex-col  w-[280px] mx-auto mt-12'>
              <label htmlFor='user_total' className="mb-2">Añadir archivo</label>
              <input type="file" name="my_file" />
            </form> */}
            {/* Datos de Compra */}

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Input para los últimos 4 dígitos de la tarjeta */}
              {showCardDigitsInput && (
                <div id="formField_lastFourDigitsCard" className="flex flex-col">
                  <label htmlFor="user_lastFourDigitsCard" className="mb-2">
                    Últimos 4 dígitos de la tarjeta<span className="text-required ml-1">*</span>
                  </label>
                  <Field
                    className="rounded-md bg-light text-dark border-2 border-secondary dark:border-primary p-2 outline-none"
                    id="user_lastFourDigitsCard"
                    name="user_lastFourDigitsCard"
                    type="number"
                    maxLength="4"
                    value={cardDigits} // Mantiene el valor del input
                    onChange={handleCardDigitsChange} // Maneja el cambio del input
                    required
                  />
                  {touched.user_lastFourDigitsCard && errors.user_lastFourDigitsCard && (
                    <p className="mt-2 text-required text-xs">
                      * <span className="text-dark dark:text-light">{errors.user_lastFourDigitsCard}</span>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Fields */}

            {/* Submit Button */}
            <ButtonContainer position="items-center justify-center" distance="mt-12">
              <button
                type="submit"
                value="Submit"
                className="flex gap-2 justify-center items-center text-light text-xl bg-secondary_dark py-4 px-6 rounded border-l-secondary_light border-l-4 border-t-secondary_light border-r-secondary_dark border-t-4 hover:border-t-secondary_light hover:border-l-secondary dark:border-l-primary dark:border-t-primary_light dark:hover:border-l-primary dark:bg-primary font-semibold"
              >
                <span>
                  <FaRegEnvelope />
                </span>
                <span>Enviar mensaje</span>
              </button>
              <ButtonPrimary
                width="w-[230px]"
                title="Borrar"
                onClick={() => [resetForm(), scrollToTop()]}
                type="button"
                icon={<FaTrashAlt />}
              />
            </ButtonContainer>

            {/* Submit Button */}

            {/* Modals */}
            {showModal && (
              <EmailSuccessModal
                onClick={() => {
                  setShowModal(false);
                  resetForm();
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
            {/* Modals */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
