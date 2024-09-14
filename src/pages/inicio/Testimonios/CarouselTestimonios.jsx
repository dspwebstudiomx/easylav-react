import { testimonios } from 'data';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonio from './Testimonio';

// const styles = { swiperslide: 'w-[420px] mx-auto' }

const CarouselTestimonios = () => {
  return (
    <>
      <div className='py-12 2xl:hidden bg-section dark:bg-dark'>
        <Swiper
          modules={[Pagination, Autoplay, Scrollbar]}
          className="mySwiper shadow-xl"
          spaceBetween={50}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
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
              spaceBetweenSlides: 30,
              touchRatio: 1
            },
            1024: {
              slidesPerView: 3,
              spaceBetweenSlides: 30,
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
      <div className='pt-20 bg-section hidden 2xl:block'>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          navigation={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='swiper bg-primary'
        >
          <SwiperSlide>
            <img src="https://placehold.co/1240x600" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://placehold.co/1240x600" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://placehold.co/1240x600" alt="Slide 1" />
          </SwiperSlide>
        </Swiper>
      </div >
    </>
  )
}

CarouselTestimonios.propTypes = {
  title: PropTypes.string,
}

export default CarouselTestimonios