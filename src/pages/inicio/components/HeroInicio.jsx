import {
  HeroInicioImage1_1024x500,
  HeroInicioImage1_1920x500,
  HeroInicioImage1_478x600,
  VistaLavadorasySecadorasConDosMesas_640,
  VistaLavanderiaDesdeEntrada_2_640,
} from 'assets';
import { ButtonContainer, ButtonSecondary, Container, ImageResponsive } from 'components';
import { HEROINICIO_UI } from 'constants/constants';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroInicio = () => {
  const styles = {};
  return (
    <section id="inicio" className={`relative overflow-hidden w-full ${HEROINICIO_UI.HEIGHT}`}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop
        rollbar={{ draggable: true }}
        className={`-z-10 ${HEROINICIO_UI.HEIGHT}`}>
        <SwiperSlide>
          <ImageResponsive
            image_640={HeroInicioImage1_478x600}
            image_1024={HeroInicioImage1_1024x500}
            image_1920={HeroInicioImage1_1920x500}
            imageAlt="sucursal lavadoras"
            className={''}
            width={'w-full'}
            height={HEROINICIO_UI.HEIGHT}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageResponsive
            image_640={VistaLavadorasySecadorasConDosMesas_640}
            image_1024={VistaLavadorasySecadorasConDosMesas_640}
            image_1920={VistaLavadorasySecadorasConDosMesas_640}
            imageAlt="sucursal lavadoras"
            className={''}
            width={'w-full'}
            height={HEROINICIO_UI.HEIGHT}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageResponsive
            image_640={VistaLavanderiaDesdeEntrada_2_640}
            image_1024={VistaLavanderiaDesdeEntrada_2_640}
            image_1920={VistaLavanderiaDesdeEntrada_2_640}
            imageAlt="sucursal lavadoras"
            className={''}
            width={'w-full'}
            height={HEROINICIO_UI.HEIGHT}
          />
        </SwiperSlide>
      </Swiper>
      <div className={`absolute inset-0 z-10 w-full bg-dark opacity-60 left-0 ${HEROINICIO_UI.HEIGHT}`}></div>
      <div className={`absolute inset-0 top-0 z-20 p-8 py-20 sm:p-20 ${HEROINICIO_UI.HEIGHT} w-full flex items-center`}>
        <Container>
          <div className="w-full xl:w-2/3 flex flex-col gap-12 items-center sm:items-start justify-center">
            <h1 className={styles.title}>
              En <span className="mx-2 text-primary">LAVANDERÍAS EASYLAV</span> no solo te brindamos soluciones para el
              lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus prendas luzcan
              siempre de la mejor manera.{' '}
            </h1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in architecto, quibusdam earum
              placeat officiis ea molestias esse consequuntur aliquam culpa tempora ut dolorum nisi quaerat autem
              quisquam. Asperiores temporibus adipisci fugiat et sed incidunt maiores magnam iste voluptate sunt.
            </p>
            <ButtonContainer position={'items-center'}>
              <ButtonSecondary title="Nuestros servicios" href="/#servicios" width={'w-[340px]'} />
            </ButtonContainer>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroInicio;
