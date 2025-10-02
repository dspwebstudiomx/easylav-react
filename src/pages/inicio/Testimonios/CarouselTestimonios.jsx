/*
  Carousel Testimonios - Componente
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-12
*/

// Importaciones
import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Container, Section } from 'components';
import { testimonios } from 'data';
import PropTypes from 'prop-types';
// ...eliminadas importaciones de Swiper
import Testimonio from './Testimonio';

// Estilos
const styles = {
  // backgroundColor: 'bg-primary_light dark:bg-primary',
  // backgroundColor: 'bg-secondary_dark dark:bg-primary',
};

// Hook para detectar breakpoints
function useTestimoniosPorVista() {
  const getCount = () => {
    const w = window.innerWidth;
    if (w >= 1280) return 3; // 2xl
    if (w >= 1024) return 3; // xl
    if (w >= 768) return 2; // md
    return 1;
  };
  const [count, setCount] = React.useState(getCount());
  React.useEffect(() => {
    const handleResize = () => setCount(getCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return count;
}

const CarouselTestimonios = () => {
  const [current, setCurrent] = React.useState(0);
  const total = testimonios.length;
  const testimoniosPorVista = useTestimoniosPorVista();
  const maxIndex = total - testimoniosPorVista;
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));

  // Autoplay: avanzar cada 5 segundos
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex, testimoniosPorVista, total]);

  // Obtener los testimonios a mostrar respetando la cantidad según el dispositivo
  const visibles = Array.from({ length: testimoniosPorVista }, (_, i) => {
    return testimonios[(current + i) % total];
  });

  return (
    <Section backgroundColor={styles.backgroundColor}>
      <Container>
        <div className="relative w-full flex flex-col items-center py-8">
          {/* Botones de desplazamiento arriba y centrados */}
          <div className="flex items-center justify-center w-full gap-2">
            <button
              onClick={prevSlide}
              className="p-0 flex items-center justify-center w-14 h-14 text-center bg-primary w-50 h-50 rounded-full shadow-lg hover:bg-gray-100 transition border border-gray-300 dark:bg-secondary dark:border-light dark:text-light"
              aria-label="Anterior">
              <MdArrowBack className="text-2xl" />
            </button>
            <div className="flex flex-row justify-center items-stretch gap-6 w-full px-8">
              {visibles.map((testimonio, idx) => (
                <Testimonio key={testimonio.id || idx} testimonio={testimonio} />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-0 flex items-center justify-center w-14 h-14 text-center bg-primary rounded-full shadow-lg hover:bg-gray-100 transition border border-gray-300 dark:bg-secondary dark:border-light dark:text-light"
              aria-label="Siguiente">
              <MdArrowForward className="text-2xl" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// Propiedades
CarouselTestimonios.propTypes = {
  title: PropTypes.string,
};

export default CarouselTestimonios;
