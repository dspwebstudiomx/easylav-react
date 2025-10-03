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
import { useState, useEffect } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Container, Section, SucursalCard, TitleContainer, TitleH2 } from 'components';
import { localservices } from 'data';
import PropTypes from 'prop-types';
// ...existing code...

const NuestrasSucursales = () => {
  // Ordenar: primero Morelia, luego el resto por ciudad y luego por título
  const sortedLocalServices = [...localservices].sort((a, b) => {
    if (a.city === 'Morelia' && b.city !== 'Morelia') return -1;
    if (a.city !== 'Morelia' && b.city === 'Morelia') return 1;
    const cityCompare = a.city.localeCompare(b.city);
    if (cityCompare !== 0) return cityCompare;
    return a.title.localeCompare(b.title);
  });

  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const total = sortedLocalServices.length;

  // Hook para adaptar la cantidad de sucursales visibles
  useEffect(() => {
    const updateSlidesToShow = () => {
      const w = window.innerWidth;
      if (w < 768) setSlidesToShow(1);
      else if (w < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Autoplay: avanzar cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  // Responsive: puedes usar window.innerWidth o un hook para ajustar slidesToShow
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Para mostrar los slides visibles
  const getVisibleSlides = () => {
    let slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(sortedLocalServices[(current + i) % total]);
    }
    return slides;
  };

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

  return (
    <Section className="dark:bg-dark py-12">
      <Container className="flex flex-col items-center justify-center w-full px-0 mx-auto ">
        {/* Títulos */}
        <div className="md:hidden">
          <TitleContainer title="Nuestras Sucursales" />
        </div>
        <div className="hidden md:block mx-auto">
          <TitleH2>Nuestras Sucursales</TitleH2>
        </div>

        {/* Carrusel TailwindCSS */}
        <div className="relative w-full mt-20 px-4 md:px-16">
          <div className="flex items-center justify-center md:gap-0 w-full">
            {getVisibleSlides().map((localservice) => (
              <div
                key={localservice.id}
                className="transition-all duration-500 ease-in-out w-full max-w-[310px] flex-shrink-0 px-7 mx-auto">
                <SucursalCard {...localservice} disableZoom={true} />
              </div>
            ))}
          </div>
          {/* Botones navegación */}
          <button
            className="hidden absolute left-0 top-1/2 -translate-y-1/2 p-0 sm:flex items-center justify-center w-14 h-14 text-center bg-primary rounded-full shadow-lg hover:bg-gray-100 transition border border-gray-300 dark:bg-secondary dark:border-light dark:text-light"
            onClick={prevSlide}
            aria-label="Anterior">
            <MdArrowBack className="text-2xl" />
          </button>
          <button
            className="hidden absolute right-0 top-1/2 -translate-y-1/2 p-0 sm:flex items-center justify-center w-14 h-14 text-center bg-primary rounded-full shadow-lg hover:bg-gray-100 transition border border-gray-300 dark:bg-secondary dark:border-light dark:text-light -mr-2"
            onClick={nextSlide}
            aria-label="Siguiente">
            <MdArrowForward className="text-2xl" />
          </button>
        </div>
        {/* Indicadores */}
        <div className="flex justify-center mt-4 gap-2">
          {sortedLocalServices.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-primary dark:bg-secondary_dark' : 'bg-primary_light dark:bg-secondary_light'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir a la sucursal ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

NuestrasSucursales.propTypes = {
  title: PropTypes.string,
};

export default NuestrasSucursales;
