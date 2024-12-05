/*
  Testimonio
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
  const PERSON_NAME_TESTIMONY = testimonio.nombre
  const TESTIMONY = testimonio.testimonio
  const TESTIMONY_ID = testimonio.id
  const TESTIMONY_QUALIFICATION = testimonio.calificacion

  return (
    <article id={`testimonio-${PERSON_NAME_TESTIMONY}`} className={TESTIMONIAL_UI.ARTICLE_CLASSNAME} key={TESTIMONY_ID}>
      {/* Testimonio */}
      <p id={`testimonio-parrafo-${PERSON_NAME_TESTIMONY}`} className={TESTIMONIAL_UI.PARAGRAPH_CLASSNAME}>{TESTIMONY}</p>
      {/* Testimonio */}

      {/* Nombre & Estrella */}
      <div id={`contenedor-testimonio-${TESTIMONY_ID}`} className={TESTIMONIAL_UI.CONTAINER_CLASSNAME}>
        <h3 className={TESTIMONIAL_UI.NAME_CLASSNAME}>{PERSON_NAME_TESTIMONY}</h3>
        <div id={`contenedor-nombre_estrella-${TESTIMONY_ID}`} className={TESTIMONIAL_UI.NUMBER_STAR_CONTAINER_CLASSNAME}>
          <div className='flex gap-2 text-secondary justify-center items-center'>
            {testimonio.estrellas.map((estrella) => (
              <span key={estrella.id} className={TESTIMONIAL_UI.STARS_CONTAINER_CLASSNAME}>
                {estrella.icon && <estrella.icon size={12} className={TESTIMONIAL_UI.STARS_CLASSNAME} />}
              </span>
            ))}
            <h4 className={TESTIMONIAL_UI.QUALIFICATION_CLASSNAME}>{TESTIMONY_QUALIFICATION}</h4>
          </div>
        </div>
      </div>
      {/* Nombre & Estrella */}
    </article>
  )
}
Testimonio.propTypes = {
  testimonio: PropTypes.object.isRequired
}

export default Testimonio