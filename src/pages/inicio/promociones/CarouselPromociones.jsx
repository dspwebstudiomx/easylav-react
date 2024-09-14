import { testimonios } from 'data';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonio from '../Testimonios/Testimonio';

// const styles = { swiperslide: 'w-[420px] mx-auto' }

const CarouselPromociones = () => {
  return (
    <>
      <div className='pt-4 2xl:hidden bg-light'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetweenSlides: 30,
              touchRatio: 1
            },
            768: {
              slidesPerView: 2,
              touchRatio: 0
            }
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
      <div className='pt-20 bg-light hidden 2xl:block'>
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

CarouselPromociones.propTypes = {
  title: PropTypes.string,
}

export default CarouselPromociones