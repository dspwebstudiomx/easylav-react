import { BorderCenter, Container, Section, SucursalCard, TitleH2 } from 'components';
import { localservices } from 'data';
import isOpen from 'hooks/useGetServiceHour';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
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
    <Section>
      <Container>
        <BorderCenter >
          <TitleH2>Nuestras Sucursales</TitleH2>
        </BorderCenter>
        <Swiper
          modules={[Navigation]}
          className="mySwiper"
          keyboard={true}
          spaceBetween={0}
          autoplay={{
            delay: 6000,
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
              slidesPerView: 3,
              spaceBetweenSlides: 60,
              touchRatio: 1
            },
            1920: {
              slidesPerView: 2,
              spaceBetweenSlides: 40,
              touchRatio: 1
            },
          }}
        >
          {sortedLocalServices.map((localservice) => (
            <SwiperSlide key={localservice.id}>
              <SucursalCard
                key={localservice.id}
                position={localservice.position}
                place={localservice.place}
                gmap={localservice.gmap}
                title={localservice.title}
                serviceday1={localservice.serviceday1}
                servicehour1={localservice.servicehour1}
                email={localservice.email}
                badge={localservice.badge}
                advertisement={localservice.advertisement}
                image={localservice.image}
                openHour={localservice.openHour}
                closeHour={localservice.closeHour}
                openMinute={localservice.openMinute}
                closeMinute={localservice.closeMinute}
                isOpen={isOpen}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  )
}

NuestrasSucursales.propTypes = {
  title: PropTypes.string,
}

export default NuestrasSucursales;