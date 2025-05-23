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
import { Banner } from 'components';
import CityCardGenerator from 'pages/sucursales/components/CityCardGenerator';
import PropTypes from 'prop-types';

// Lista de días festivos oficiales de México (formato MM-DD)
const mexicanHolidays = ['02-05', '03-21', '05-01', '09-16', '11-02', '11-20'];

// Lista de fechas específicas en las que las sucursales estarán completamente cerradas (formato MM-DD)
const closedDates = ['12-25', '01-01'];

/**
 * Verifica si hoy es un día festivo oficial en México.
 * @returns {boolean} `true` si hoy es un día festivo, `false` en caso contrario.
 */
const isMexicanHoliday = () => {
  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  return mexicanHolidays.includes(formattedDate);
};

/**
 * Verifica si hoy es una fecha específica en la que las sucursales estarán cerradas.
 * @returns {boolean} `true` si hoy es una fecha de cierre total, `false` en caso contrario.
 */
const isClosedDate = () => {
  const today = new Date();
  const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  return closedDates.includes(formattedDate);
};

// Estructura
// Componente de tarjeta de sucursal por ciudad
// Este componente utiliza el generador de tarjetas de sucursal para mostrar las sucursales de una ciudad específica
const SucursalCardPerCity = ({ city }) => {
  const isHoliday = isMexicanHoliday(); // Verifica si hoy es un día feriado
  const isClosed = isClosedDate(); // Verifica si hoy es una fecha de cierre total

  return (
    <div className="w-full flex flex-col items-center justify-start gap-24">
      <div className="flex flex-col items-center justify-start gap-4 w-4/5">
        {/* Banner de día cerrado (solo aparece en fechas específicas: 25 de diciembre y 1 de enero) */}
        {isClosed && (
          <Banner id="banner-dia-cerrado" variant="secondary">
            <h1 className="text-2xl font-bold text-center text-dark block">Nota:</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Las sucursales permanecerán cerradas durante este día. Muchas gracias de antemano!
            </p>
          </Banner>
        )}

        {/* Banner de día feriado (solo aparece si es un día feriado) */}
        {isHoliday && (
          <Banner id="banner-dia-feriado" variant="primary">
            <h1 className="text-2xl font-bold text-center text-dark block">Nota:</h1>
            <p className="text-dark text-pretty">
              Las sucursales permanecerán cerradas a partir de las 6 p.m durante este día. Muchas gracias de antemano!
            </p>
          </Banner>
        )}
      </div>
      <CityCardGenerator city={city} />
    </div>
  );
};

SucursalCardPerCity.propTypes = {
  city: PropTypes.string.isRequired,
};

export default SucursalCardPerCity;
