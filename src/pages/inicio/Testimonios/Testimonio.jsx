// Testimonios.js
import PropTypes from 'prop-types'

const Testimonio = ({ testimonio }) => {

  const classes = {
    article: 'shadow-xl p-6 flex flex-col justify-between bg-light text-dark rounded-lg',
    paragraph: 'text-pretty text-base text-lg',
    contenedor: 'flex flex-row lg:flex-row mt-6 gap-6 justify-start sm:items-center',
    nombre: 'font-semibold text-lg',
    contenedorNombreEstrella: 'text-dark',
    estrellasContenedor: 'flex items-center',
    estrellas: 'text-secondary dark:text-primary',
    numero: "font-semibold text-lg text-[#0e0e0e]"
  }

  return (
    <article id={`testimonio-${testimonio.nombre}`} className={classes.article} key={testimonio.id}>
      <p id={`testimonio-parrafo-${testimonio.nombre}`} className={classes.paragraph}>{testimonio.testimonio}</p>
      <div id={`contenedor-testimonio-${testimonio.id}`} className={classes.contenedor}>
        <h3 className={classes.nombre}>{testimonio.nombre}</h3>
        <div id={`contenedor-nombre_estrella-${testimonio.id}`} className={classes.contenedorNombreEstrella}>
          <div className='flex gap-2 text-secondary'>
            {testimonio.estrellas.map((estrella) => {
              return (
                <span key={estrella.id} className={classes.estrellasContenedor}>
                  {estrella.icon && <estrella.icon size={16} className={classes.estrellas} />}
                </span>
              )
            })}
            <h4 className={classes.numero}>{testimonio.calificacion}</h4>
          </div>
        </div>
      </div>
    </article>
  )
}
Testimonio.propTypes = {
  testimonio: PropTypes.object.isRequired
}

export default Testimonio