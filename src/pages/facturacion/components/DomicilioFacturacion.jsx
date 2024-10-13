import { Field } from 'formik'

const DomicilioFacturacion = () => {





  return (
    <>
      <h2 className='mx-auto text-2xl my-6'>
        Domicilio
      </h2>
      <div className='flex gap-8 justify-between w-full'>
        {/* Calle */}
        <div id='formField_street' className="flex flex-col xl:w-[65%] w-full">
          <label htmlFor='user_street' className="mb-2">Calle<span className='text-required ml-1'>*</span></label>
          <Field
            className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none text-dark"
            id="user_street"
            name="user_street"
            required
          />
          {touched.user_city && errors.user_city && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
        </div>
        {/* Calle */}

        {/* Número */}
        <div id='formField_number' className="flex flex-col xl:w-[25%]">
          <label htmlFor='user_number' className="mb-2">Número interior/exterior<span className='text-required ml-1'>*</span></label>
          <Field
            className="rounded-md bg-light text-dark text-right bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
            id="user_number"
            name="user_number"
            type="number"
            required
          />
          {touched.user_numero && errors.user_numero && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
        </div>
        {/* Número */}

        {/* Colonia */}
        <div id='formField_suburb' className="flex flex-col xl:w-[45%] w-full">
          <label htmlFor='user_suburb' className="mb-2">Colonia<span className='text-required ml-1'>*</span></label>
          <Field
            className="rounded-md bg-light text-dark bg-light px-4 border-2  border-secondary dark:border-primary p-2 outline-none"
            id="user_suburb"
            name="user_suburb"
            required
          />
          {touched.user_colonia && errors.user_colonia && <p className='mt-2 text-required text-xs'>*<span className='text-dark'>{errors.user_city}</span> </p>}
        </div>
        {/* Colonia */}

      </div>
    </>
  )
}

export default DomicilioFacturacion