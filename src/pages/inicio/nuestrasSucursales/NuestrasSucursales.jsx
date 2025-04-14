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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <Section className="bg-light dark:bg-dark py-12">
      <Container className="flex flex-col items-center justify-center w-3/4 mx-auto">
        {/* Títulos */}
        <div className="md:hidden">
          <TitleContainer title="Nuestras Sucursales" />
        </div>
        <div className="hidden md:block mx-auto">
          <TitleH2>Nuestras Sucursales</TitleH2>
        </div>

        {/* Carousel de Tarjetas Sucursales */}

        <Swiper
          modules={[Pagination, Autoplay]}
          className={'mySwyper mt-20'}
          keyboard={true}
          spaceBetween={40}
          navigation={false}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          loop={true}
          pagination={{ clickable: true, draggable: true, dynamicBullets: true }}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetweenSlides: 30,
              touchRatio: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetweenSlides: 30,
              touchRatio: 1,
            },
            1024: {
              slidesPerView: 3,
              spaceBetweenSlides: 0,
              touchRatio: 1,
            },
            1210: {
              slidesPerView: 3,
              spaceBetweenSlides: 0,
              touchRatio: 1,
            },
            1920: {
              slidesPerView: 3,
              spaceBetweenSlides: 0,
              touchRatio: 1,
            },
          }}>
          {sortedLocalServices.map((localservice) => (
            <SwiperSlide key={localservice.id}>
              <SucursalCard {...localservice} disableZoom={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

NuestrasSucursales.propTypes = {
  title: PropTypes.string,
};

export default NuestrasSucursales;
