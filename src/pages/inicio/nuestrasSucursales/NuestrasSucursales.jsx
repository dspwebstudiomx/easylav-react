/*
  Nuestras Sucursales.jsx - Componente de Carousel de Tarjetas de Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-10-03
  Descripción: Componente que representa carousel de tarjetas de sucursal con información relevante.
  Incluye una imagen de fondo, título, dirección, horario de atención y un botón para ver más detalles.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-27
*/

// Importaciones
import { Container, Section, Spacing, SucursalCard, TitleContainer, TitleH2 } from 'components';
import { localservices } from 'data';
import PropTypes from 'prop-types';
import { useState } from 'react';

// Estructura del componente
const NuestrasSucursales = () => {
  // Estado para el índice actual del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Verifica si localservices tiene datos
  if (!localservices || localservices.length === 0) {
    return (
      <Section className="bg-light dark:bg-dark py-12">
        <Container className="flex flex-col items-center justify-center">
          <TitleH2>No hay sucursales disponibles</TitleH2>
        </Container>
      </Section>
    );
  }

  // Ordenar localservices alfabéticamente por el título
  const sortedLocalServices = localservices.sort((a, b) => a.title.localeCompare(b.title));

  // Función para manejar el desplazamiento del carrusel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sortedLocalServices.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sortedLocalServices.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Section className="bg-light dark:bg-dark py-12">
      <Container className="flex flex-col items-center justify-center">
        {/* Títulos */}
        <div className="md:hidden">
          <TitleContainer title="Nuestras Sucursales" />
        </div>
        <div className="hidden md:block mx-auto">
          <TitleH2>Nuestras Sucursales</TitleH2>
        </div>

        <Spacing distance="mt-12" />

        {/* Carousel de Tarjetas Sucursales */}
        <div className="relative w-full max-w-4xl overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${sortedLocalServices.length * 100}%`,
            }}>
            {sortedLocalServices.map((localservice) => (
              <div key={localservice.id} className="w-full flex-shrink-0">
                <SucursalCard {...localservice} />
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
            &#8594;
          </button>
        </div>
      </Container>
    </Section>
  );
};

NuestrasSucursales.propTypes = {
  title: PropTypes.string,
};

export default NuestrasSucursales;
