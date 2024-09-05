import { Container, Paragraph, Section, TitleH3 } from 'components';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CarouselPromociones = () => {
  return (
    <Section>
      <Container>
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='swiper'
        >
          <SwiperSlide>
            <div className='w-[320px] sm:w-full'>
              <TitleH3 title='Hola Mundo' />
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum est dolores architecto laudantium molestiae commodi corrupti quos. Totam fugiat dolorum nobis asperiores sed quo accusantium deserunt corporis consectetur dicta!</Paragraph>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[320px] sm:w-full'>
              <TitleH3 title='Hola Mundo 2' />
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum est dolores architecto laudantium molestiae commodi corrupti quos. Totam fugiat dolorum nobis asperiores sed quo accusantium deserunt corporis consectetur dicta!</Paragraph>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[320px] sm:w-full'>
              <TitleH3 title='Hola Mundo 3' />
              <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cum est dolores architecto laudantium molestiae commodi corrupti quos. Totam fugiat dolorum nobis asperiores sed quo accusantium deserunt corporis consectetur dicta!</Paragraph>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section >
  )
}

CarouselPromociones.propTypes = {
  title: PropTypes.string,
}

export default CarouselPromociones