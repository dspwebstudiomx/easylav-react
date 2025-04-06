/*
  SucursalCard - Componente de Tarjeta de Sucursal
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
  Descripción: Componente que representa generador de tarjetas de sucursal con información relevante.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2024-09-26
*/

// Importaciones
import CityCardGenerator from 'pages/sucursales/components/CityCardGenerator';
import PropTypes from 'prop-types';

// Estructura
// Componente de tarjeta de sucursal por ciudad
// Este componente utiliza el generador de tarjetas de sucursal para mostrar las sucursales de una ciudad específica
const SucursalCardPerCity = ({ city }) => {
  return (
    <div className="error w-full">
      <CityCardGenerator city={city} />
    </div>
  );
};
SucursalCardPerCity.propTypes = {
  city: PropTypes.string.isRequired,
};

export default SucursalCardPerCity;
