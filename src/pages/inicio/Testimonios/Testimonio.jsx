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
      className="pt-12 pb-2 px-8 justify-between flex flex-col bg-light text-dark rounded-xl min-h-[360px] w-full shadow-xl mx-auto "
      key={TESTIMONY_ID}>
      {/* Testimonio */}
      <p id={`testimonio-parrafo-${PERSON_NAME_TESTIMONY}`} className="text-pretty text-lg mb-6">
        {TESTIMONY}
      </p>
      {/* Testimonio */}

      {/* Nombre & Estrella */}
      <div
        id={`contenedor-testimonio-${TESTIMONY_ID}`}
        className="flex flex-col lg:flex-row justify-between items-start w-full gap-2 text-dark dark:text-primary">
        <h3 className="font-semibold sm:text-lg uppercase text-dark">{PERSON_NAME_TESTIMONY}</h3>
        <div
          id={`contenedor-nombre_estrella-${TESTIMONY_ID}`}
          className="text-dark justify-between flex-col sm:flex-col mb-12">
          <div className="flex gap-2 text-dark justify-between items-center">
            {testimonio.estrellas.map((estrella) => (
              <span key={estrella.id} className="flex items-center justify-center gap-1">
                {estrella.icon && <estrella.icon size={18} className="text-secondary text-base" />}
              </span>
            ))}
            <h4 className="font-semibold md:text-lg text-dark text-base">{TESTIMONY_QUALIFICATION}</h4>
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
