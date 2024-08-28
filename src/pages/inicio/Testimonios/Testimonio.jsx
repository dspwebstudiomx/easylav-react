/*Testimonio
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-28
*/

// Importaciones
import { TESTIMONIAL_UI } from 'constants/constants'
import PropTypes from 'prop-types'


//Estructura
const Testimonio = ({ testimonio }) => {

  //Constantes de Datos
  const NAME_PERSON_TESTIMONY = testimonio.nombre
  const TESTIMONY = testimonio.testimonio
  const TESTIMONY_ID = testimonio.id
  const TESTIMONY_QUALIFICATION = testimonio.calificacion

  return (
    <article id={`testimonio-${NAME_PERSON_TESTIMONY}`} className={TESTIMONIAL_UI.ARTICLE_CLASSNAME} key={TESTIMONY_ID}>
      <p id={`testimonio-parrafo-${NAME_PERSON_TESTIMONY}`} className={TESTIMONIAL_UI.PARAGRAPH_CLASSNAME}>{TESTIMONY}</p>
      <div id={`contenedor-testimonio-${TESTIMONY_ID}`} className={TESTIMONIAL_UI.CONTAINER_CLASSNAME}>
        <h3 className={TESTIMONIAL_UI.NAME_CLASSNAME}>{NAME_PERSON_TESTIMONY}</h3>
        <div id={`contenedor-nombre_estrella-${TESTIMONY_ID}`} className={TESTIMONIAL_UI.NUMBER_STAR_CONTAINER_CLASSNAME}>
          <div className='flex gap-2 text-secondary'>
            {testimonio.estrellas.map((estrella) => (
              <span key={estrella.id} className={TESTIMONIAL_UI.STARS_CONTAINER_CLASSNAME}>
                {estrella.icon && <estrella.icon size={16} className={TESTIMONIAL_UI.STARS_CLASSNAME} />}
              </span>
            ))}
            <h4 className={TESTIMONIAL_UI.QUALIFICATION_CLASSNAME}>{TESTIMONY_QUALIFICATION}</h4>
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