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
      <div className='py-12 bg-section dark:bg-dark'>
        <Swiper
          modules={[Pagination, Autoplay, Scrollbar]}
          className="mySwiper"
          spaceBetween={50}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          loop={true}
          pagination={{ clickable: true, draggable: true }}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetweenSlides: 30,
              touchRatio: 1
            },
            768: {
              slidesPerView: 2,
              spaceBetweenSlides: 20,
              touchRatio: 1
            },
            1024: {
              slidesPerView: 3,
              spaceBetweenSlides: 20,
              touchRatio: 1
            },
          }
          }
        >
          {testimonios.map((testimonio) => (
            <SwiperSlide key={testimonio.id}>
              {/* <img src="https://placehold.co/840x420" alt="Slide 1" /> */}
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