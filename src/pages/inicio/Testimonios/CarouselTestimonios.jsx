import { testimonios } from 'data';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonio from './Testimonio';

// const styles = { swiperslide: 'w-[420px] mx-auto' }

const CarouselTestimonios = () => {
  return (
    <>
      <div className='py-12 bg-secondary_dark dark:bg-primary_dark dark:bg-dark overflow-visible'>
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
            1910: {
              slidesPerView: 4,
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
      </div >
    </>
  )
}

CarouselTestimonios.propTypes = {
  title: PropTypes.string,
}

export default CarouselTestimonios