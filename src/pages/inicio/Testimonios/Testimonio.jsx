/*
  Testimonio
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-28
*/

// Importaciones
import PropTypes from 'prop-types';

//Estructura
const Testimonio = ({ testimonio }) => {
  //Constantes de Datos
  const PERSON_NAME_TESTIMONY = testimonio.nombre;
  const TESTIMONY = testimonio.testimonio;
  const TESTIMONY_ID = testimonio.id;
  const TESTIMONY_QUALIFICATION = testimonio.calificacion;

  return (
    <article
      id={`testimonio-${testimonio.nombre}`}
      className="pt-8 pb-2 px-8 flex flex-col justify-between bg-light text-dark rounded-lg h-[360px] sm:h-[300px] w-[80%] sm:w-full shadow-xl mx-auto"
      key={TESTIMONY_ID}>
      {/* Testimonio */}
      <p id={`testimonio-parrafo-${PERSON_NAME_TESTIMONY}`} className="text-pretty text-base">
        {TESTIMONY}
      </p>
      {/* Testimonio */}

      {/* Nombre & Estrella */}
      <div
        id={`contenedor-testimonio-${TESTIMONY_ID}`}
        className="flex flex-col justify-center items-center gap-2 text-dark dark:text-primary mt-2">
        <h3 className="font-semibold text-base uppercase mx-auto text-dark">{PERSON_NAME_TESTIMONY}</h3>
        <div
          id={`contenedor-nombre_estrella-${TESTIMONY_ID}`}
          className="text-dark justify-between flex-col sm:flex-col mb-6">
          <div className="flex gap-2 text-dark justify-center items-center">
            {testimonio.estrellas.map((estrella) => (
              <span key={estrella.id} className="flex items-center justify-center gap-1">
                {estrella.icon && <estrella.icon size={14} className="text-secondary dark:text-primary text-base" />}
              </span>
            ))}
            <h4 className="font-semibold md:text-sm text-dark text-base">{TESTIMONY_QUALIFICATION}</h4>
          </div>
        </div>
      </div>
      {/* Nombre & Estrella */}
    </article>
  );
};
Testimonio.propTypes = {
  testimonio: PropTypes.object.isRequired,
};

export default Testimonio;
