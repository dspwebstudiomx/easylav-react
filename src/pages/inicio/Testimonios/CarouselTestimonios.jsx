/*
  Carousel Testimonios - Componente
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-08-12
*/

// Importaciones
import { Container, Section } from 'components';
import { testimonios } from 'data';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonio from './Testimonio';

// Estilos
const styles = {
  backgroundColor: 'bg-secondary_dark dark:bg-primary'
}

// Estructura
const CarouselTestimonios = () => {
  return (
    <Section backgroundColor={styles.backgroundColor}>
      <Container>
        <Swiper
          modules={[Pagination, Autoplay, Scrollbar]}
          className="mySwiper"
          keyboard={true}
          spaceBetween={40}
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
              touchRatio: 1
            },
            768: {
              slidesPerView: 2,
              spaceBetweenSlides: 30,
              touchRatio: 1
            },
            1024: {
              slidesPerView: 2,
              spaceBetweenSlides: 30,
              touchRatio: 1
            },
            1210: {
              slidesPerView: 3,
              spaceBetweenSlides: 30,
              touchRatio: 1
            },
            1920: {
              slidesPerView: 3,
              spaceBetweenSlides: 30,
              touchRatio: 1
            },
          }
          }
        >
          {testimonios.map((testimonio) => (
            <SwiperSlide key={testimonio.id}>
              <Testimonio testimonio={testimonio} />
            </SwiperSlide>
          )
          )}
        </Swiper>
      </Container>
    </Section >
  )
}

// Propiedades
CarouselTestimonios.propTypes = {
  title: PropTypes.string,
}

export default CarouselTestimonios