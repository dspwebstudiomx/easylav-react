import { HeroInicioImage1_1024x500, HeroInicioImage1_1920x500, HeroInicioImage1_478x600, HeroInicioImage2_1024x500, HeroInicioImage2_1920x500, HeroInicioImage2_478x600, HeroInicioImage3_1024x500, HeroInicioImage3_1920x500, HeroInicioImage3_478x600 } from 'assets'
import { ButtonContainer, ButtonPrimary, Container, ImageResponsive, TitleH1 } from 'components'
import { GENERAL_UI, HEROINICIO_UI } from 'constants/constants'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const HeroInicio = () => {


  const styles = {
    button: `bg-${HEROINICIO_UI.COLOR.BUTTON} px-6 py-4 w-[${HEROINICIO_UI.BUTTON.SIZE}] text-${HEROINICIO_UI.BUTTON.TEXT.SIZE} rounded-lg ${HEROINICIO_UI.DISPLAY.BUTTON}  text-${HEROINICIO_UI.BUTTON.TEXT.SIZE} text-${HEROINICIO_UI.BUTTON.TEXT.COLOR}`,
    paragraph: `text-${HEROINICIO_UI.COLOR.PARAGRAPH} text-lg ${HEROINICIO_UI.DISPLAY.PARAGRAPH}`,
    buttonContainer: 'place-content-center sm:place-content-start',
    titleH1: {
      textColor: `text-${HEROINICIO_UI.COLOR.TITLE}`,
      textTransform: GENERAL_UI.TITLEH1.TRANSFORM,

    },
    image: `relative overflow-hidden object-cover w-full object-center h-[600px] lg:h-[600px]`
  }
  return (
    <section id='inicio' className={`relative overflow-hidden w-full ${HEROINICIO_UI.HEIGHT}`}>
      <Swiper Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }
        }
        loop
        rollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={`-z-10 ${HEROINICIO_UI.HEIGHT}`}
      >
        <SwiperSlide>
          <ImageResponsive image_640={HeroInicioImage1_478x600} image_1024={HeroInicioImage1_1024x500} image_1920={HeroInicioImage1_1920x500} imageAlt='sucursal lavadoras' className={''} width={'w-full'} height={HEROINICIO_UI.HEIGHT} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageResponsive image_640={HeroInicioImage2_478x600} image_1024={HeroInicioImage2_1024x500} image_1920={HeroInicioImage2_1920x500} imageAlt='sucursal lavadoras' className={''} width={'w-full'} height={HEROINICIO_UI.HEIGHT} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageResponsive image_640={HeroInicioImage3_478x600} image_1024={HeroInicioImage3_1024x500} image_1920={HeroInicioImage3_1920x500} imageAlt='sucursal lavadoras' className={''} width={'w-full'} height={HEROINICIO_UI.HEIGHT} />
        </SwiperSlide>
      </Swiper>
      <div className={`absolute inset-0 z-10 w-full bg-dark opacity-60 left-0 ${HEROINICIO_UI.HEIGHT}`}></div>
      <div className={`absolute inset-0 top-0 z-20 p-8 py-20 sm:p-20 ${HEROINICIO_UI.HEIGHT}`}>
        <Container>
          <div className='w-full sm:w-2/3 flex flex-col gap-12'>
            <TitleH1 textColor={styles.titleH1.textColor} textTransform={styles.titleH1.textTransform} align={'center'}>En <span className='mx-2 text-primary'>LAVANDERÍAS EASYLAV</span> no solo te brindamos soluciones para el lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus prendas luzcan siempre de la mejor manera. </TitleH1>
            <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus in architecto, quibusdam earum placeat officiis ea molestias esse consequuntur aliquam culpa tempora ut dolorum nisi quaerat autem quisquam. Asperiores temporibus adipisci fugiat et sed incidunt maiores magnam iste voluptate sunt.</p>
            <ButtonContainer position={'items-center'}>
              <ButtonPrimary title='Nuestros servicios' href='/#servicios' />
            </ButtonContainer>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default HeroInicio