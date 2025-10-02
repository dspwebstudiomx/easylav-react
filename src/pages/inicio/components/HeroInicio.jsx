import {
  HeroInicioImage1_1024x500,
  HeroInicioImage1_1920x500,
  HeroInicioImage1_478x600,
  VistaLavadorasySecadorasConDosMesas_640,
  VistaLavanderiaDesdeEntrada_2_640,
} from 'assets';
import { ButtonContainer, ButtonSecondary, Container, ImageResponsive } from 'components';
import { HEROINICIO_UI } from 'constants/constants';
import { useState } from 'react';

const HeroInicio = () => {
  const images = [
    {
      image_640: HeroInicioImage1_478x600,
      image_1024: HeroInicioImage1_1024x500,
      image_1920: HeroInicioImage1_1920x500,
      alt: 'sucursal lavadoras',
    },
    {
      image_640: VistaLavadorasySecadorasConDosMesas_640,
      image_1024: VistaLavadorasySecadorasConDosMesas_640,
      image_1920: VistaLavadorasySecadorasConDosMesas_640,
      alt: 'sucursal lavadoras',
    },
    {
      image_640: VistaLavanderiaDesdeEntrada_2_640,
      image_1024: VistaLavanderiaDesdeEntrada_2_640,
      image_1920: VistaLavanderiaDesdeEntrada_2_640,
      alt: 'sucursal lavadoras',
    },
  ];
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  return (
    <section id="inicio" className={`relative overflow-hidden w-full ${HEROINICIO_UI.HEIGHT}`}>
      <div className={`relative w-full h-full ${HEROINICIO_UI.HEIGHT}`}>
        <ImageResponsive
          image_640={images[current].image_640}
          image_1024={images[current].image_1024}
          image_1920={images[current].image_1920}
          imageAlt={images[current].alt}
          className={'transition-all duration-700 w-full h-full object-cover'}
          width={'w-full'}
          height={HEROINICIO_UI.HEIGHT}
        />
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-30 hover:bg-black/70 transition"
          onClick={prevSlide}
          aria-label="Anterior">
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 z-30 hover:bg-black/70 transition"
          onClick={nextSlide}
          aria-label="Siguiente">
          &#8594;
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-primary' : 'bg-white/50'} border border-primary`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className={`absolute inset-0 z-10 w-full bg-dark opacity-60 left-0 ${HEROINICIO_UI.HEIGHT}`}></div>
      <div className={`absolute inset-0 top-0 z-20 p-8 py-20 sm:p-20 ${HEROINICIO_UI.HEIGHT} w-full flex items-center`}>
        <Container>
          <div className="w-full xl:w-2/3 flex flex-col gap-12 items-center sm:items-start justify-center">
            <h1 className="text-white text-2xl sm:text-4xl font-bold text-center sm:text-left leading-tight">
              En <span className="mx-2 text-primary">LAVANDERÍAS EASYLAV</span> no solo te brindamos soluciones para el
              lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus prendas luzcan
              siempre de la mejor manera.{' '}
            </h1>
            <p className="text-white text-lg sm:text-xl text-center sm:text-left">
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
