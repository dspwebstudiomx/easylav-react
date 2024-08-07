// Testimonios.js
import PropTypes from 'prop-types'

const Testimonio = ({ testimonio }) => {
  return (
    <article className='shadow-xl p-6 flex flex-col justify-between bg-light text-dark rounded-lg' key={testimonio.id}>
      <p className='text-pretty text-base'><span></span>{testimonio.testimonio}</p>
      <div className='flex flex-col sm:flex-row lg:flex-row mt-6 gap-2 justify-between sm:items-center'>
        <h3 className='font-semibold text-lg'>{testimonio.nombre}</h3>
        <div className='text-dark'>
          <div className='flex gap-2 text-secondary'>
            {testimonio.estrellas.map((estrella) => {
              return (
                <span key={estrella.id} className='flex items-center'>
                  {estrella.icon && <estrella.icon size={16} className='text-secondary dark:text-primary' />}
                </span>
              )
            })}
            <h4 className="font-semibold text-lg">{testimonio.calificacion}</h4>
          </div>
        </div>
      </div>
    </article>
  )
}
Testimonio.propTypes = {
  testimonio: PropTypes.object.isRequired
}

export default Testimonio;