import { Container, Section, Spacing, SucursalCard, TitleContainer, TitleH2 } from 'components';
import { localservices } from 'data';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const NuestrasSucursales = () => {
  // Ordenar localservices alfabéticamente por el título
  const sortedLocalServices = localservices.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return (
    <Section className=''>
      <Container>
        {/* Títulos */}
        <div className='md:hidden'>
          <TitleContainer title='Nuestras Sucursales'/>
        </div>
        <div className='hidden md:block mx-auto'>
          <TitleH2>Nuestras Sucursales</TitleH2>
        </div>
        {/* Títulos */}

        <Spacing distance='mt-12' />

        {/* Carousel de Tarjetas Sucursales */}
        <Swiper
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
          navigation={true}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetweenSlides: 20,
              touchRatio: 1
            },
            768: {
              slidesPerView: 2,
              spaceBetweenSlides: 20,
              touchRatio: 1
            },
            1024: {
              slidesPerView: 4,
              spaceBetweenSlides: 20,
              touchRatio: 1
            },
            1920: {
              slidesPerView: 4,
              spaceBetweenSlides: 40,
              touchRatio: 1
            },
          }}
        >
          {sortedLocalServices.map((localservice) => (
            <SwiperSlide key={localservice.title}>
              <SucursalCard key={localservice.title} {...localservice} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Carousel de Tarjetas Sucursales */}

      </Container>
    </Section>
  )
}

NuestrasSucursales.propTypes = {
  title: PropTypes.string,
}

export default NuestrasSucursales;