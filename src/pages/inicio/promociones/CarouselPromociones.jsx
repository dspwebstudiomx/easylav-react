import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CarouselPromociones = () => {
  return (
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
          <img src="https://placehold.co/1920x600" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1920x600" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1940x600" alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </div >
  )
}

export default CarouselPromociones