import { FaEnvelope } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import BorderButtom from '../../../components/borders/BorderButtom';
import ButtonSecondary from '../../../components/buttons/ButtonSecondary';
import SucursalCardCopy from '../../../components/cards/SucursalCardCopy';
import ButtonContainer from '../../../components/containers/ButtonContainer';
import Container from '../../../components/containers/Container';
import Section from '../../../components/templates/Section';
import TitleH2 from '../../../components/text/TitleH2';
import { localservices } from '../../../data/sucursales';
// import { Navigation } from 'swiper/modules';
import '../../../../node_modules/swiper/modules/navigation.scss'; // Navigation module
import '../../../../node_modules/swiper/modules/pagination.scss';
import '../../../../node_modules/swiper/swiper.css';


const NuestrasSucursalesCopy = () => {

  return (
    <Section id="nuestras-sucursales" backgroundColor={''} height={''} className={''}>
      <Container className={'mx-auto'}>
        <BorderButtom justify={'mx-auto'} >
          <TitleH2 title="Sucursales" />
        </BorderButtom>
        <div className='mx-auto overflow-x-hidden w-full'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            // modules={[Navigation]}
            className="swiper"
            autoplay={true}
            touch={true}
            speed={200}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {localservices.map(localservice => {
              return (
                <SwiperSlide key={localservice.title} >
                  <SucursalCardCopy
                    title={localservice.title}
                    gmap={localservice.gmap}
                    position={localservice.position}
                    place={localservice.place}
                    serviceday1={localservice.serviceday1}
                    servicehour1={localservice.servicehour1}
                    ciudad={localservice.ciudad}
                    email={localservice.email}
                    width={'w-[350px]'}
                  />
                </SwiperSlide>
              )
            })}



          </Swiper>
        </div>
        <ButtonContainer position={'justify-center'} distance={'mt-16'}>
          <ButtonSecondary title={'Contáctanos'} href={'/contacto'} width={'w-[240px]'} icon={<FaEnvelope />} />
        </ButtonContainer>
      </Container>
    </Section >
  )
}

export default NuestrasSucursalesCopy;