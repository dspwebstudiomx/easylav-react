/*
  CityCardGenerator - Generador de Tarjetas de Sucursal por Ciudad
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
  Descripción: Componente que genera tarjetas de sucursal para una ciudad específica.
  Utiliza el componente SucursalCard para mostrar la información de cada sucursal.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2024-09-26
*/

// Importaciones
import { SucursalCard } from 'components';
import { localservices } from 'data';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const CityCardGenerator = ({ city }) => {
  const ciudad = useMemo(() => {
    return localservices.filter((localservice) => localservice.city === city);
  }, [city]);
  ciudad.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <article className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center z-0 mx-auto overflow-hidden">
      {ciudad.map((localservice) => (
        <SucursalCard key={localservice.id} {...localservice} />
      ))}
    </article>
  );
};
CityCardGenerator.propTypes = {
  city: PropTypes.string,
};

export default CityCardGenerator;
