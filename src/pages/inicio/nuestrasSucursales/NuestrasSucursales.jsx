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
import { Container, Section, SucursalCard, TitleContainer, TitleH2 } from 'components';
import { localservices } from 'data';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide, Navigation, Pagination, Autoplay } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NuestrasSucursales = () => {
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

  return (
    <section className="bg-light dark:bg-dark py-12">
      <div className="flex flex-col items-center justify-center">
        {/* Títulos */}
        <div className="md:hidden">
          <TitleContainer title="Nuestras Sucursales" />
        </div>
        <div className="hidden md:block mx-auto">
          <TitleH2>Nuestras Sucursales</TitleH2>
        </div>

        {/* Carousel de Tarjetas Sucursales */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full">
          {sortedLocalServices.map((localservice) => (
            <SwiperSlide key={localservice.id}>
              <SucursalCard {...localservice} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

NuestrasSucursales.propTypes = {
  title: PropTypes.string,
};

export default NuestrasSucursales;
