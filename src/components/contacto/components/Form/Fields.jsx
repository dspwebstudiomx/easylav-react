import { Field } from 'formik';
import PropTypes from 'prop-types';

const Fields = ({ errors, touched }) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      {/* Nombre Completo */}
      <div className="flex flex-col xl:w-[50%] w-full">
        <label htmlFor="user_name" className="mb-2">
          Nombre Completo<span className="text-required ml-1">*</span>
        </label>
        <Field
          id="user_name"
          name="user_name"
          className="rounded-md border-2 border-primary p-2 outline-none  bg-light text-dark"
          type="text"
          placeholder="Nombre Completo"
          required
        />
        {touched.user_name && errors.user_name && (
          <p className="mt-2 text-required text-xs">
            * <span className="text-dark">{errors.user_name}</span>
          </p>
        )}
      </div>
      {/* Nombre Completo */}

      {/* Ciudad */}
      <div className="flex flex-col xl:w-[45%] w-full">
        <label htmlFor="user_city" className="mb-2">
          Ciudad<span className="text-required ml-1">*</span>
        </label>
        <Field
          className="rounded-md border-2 border-primary p-2 outline-none bg-light text-dark"
          id="user_city"
          name="user_city"
          placeholder="Ciudad"
          required
        />
        {touched.user_city && errors.user_city && (
          <p className="mt-2 text-required text-xs">
            * <span className="text-dark">{errors.user_city}</span>
          </p>
        )}
      </div>
      {/* Ciudad */}

      <div className='flex flex-wrap justify-between gap-3'>
        <div className='flex flex-col xl:w-[50%] w-full'>
          <label htmlFor='user_email' className='mb-2'>Correo Electrónico<span className='text-required ml-1'>*</span></label>
          <Field
            className='rounded-md border-2 border-primary p-2 outline-none  bg-light text-dark'
            id='user_email'
            name='user_email'
            type='email'
            placeholder='Correo electrónico'
            required
          />
          {touched.user_email && errors.user_email && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_email}</span></p>}

        </div>
        <div className='flex flex-col xl:w-[45%] w-full'>
          <label htmlFor='user_phone' className='mb-2'>Número Telefónico<span className='text-required ml-1'>*</span></label>
          <Field
            className='rounded-md border-2 border-primary p-2 outline-none bg-light text-dark'
            type='text'
            name='user_phone'
            id='user_phone'
            placeholder='Número telefónico'
            required
          />
          {touched.user_phone && errors.user_phone && <p className='mt-2 text-required text-xs'>* <span className='text-dark'>{errors.user_phone}</span></p>}

        </div>
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor='message' className='mb-2'>Mensaje<span className='text-required ml-1'>*</span></label>
        <textarea
          type='text'
          name='message'
          id='message'
          className='rounded-md border-2 border-primary h-40 max-h-32 min-h-32 outline-none p-2 bg-light text-dark'
          required
        />
        {touched.message && errors.message && <p className='mt-2 text-blue-400 text-xs'>* {errors.message}</p>}

      </div>
      {/* rest of the fields */}
    </div>
  );
};
Fields.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired
}

export default Fields;
