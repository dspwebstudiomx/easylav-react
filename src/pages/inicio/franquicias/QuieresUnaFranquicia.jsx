/*
QuieresUnaFranquicia.jsx - Componente de la sección "Quieres una franquicia" en la página de inicio.
=====================================
Creado por : Daniel Pérez
Fecha: 2022-08-25
Descripción: Este componente muestra información sobre la franquicia de lavandería, incluyendo un título, un párrafo descriptivo y un botón para obtener más información. Utiliza un fondo de imagen y estilos personalizados.
==========================
Fecha modificación: 2025-03-27
Modificado por: Daniel Pérez
Descripción: Se han realizado cambios en los estilos y la estructura del componente para mejorar la presentación y la legibilidad. Además, se ha optimizado el uso de imágenes y se han ajustado los colores y tamaños para una mejor experiencia de usuario.
*/

// Importaciones
import { VistaLavanderiaDesdeEntrada_1_640 } from 'assets';
import { BackgroundImageSection, ButtonContainer, ButtonPrimary, TitleH1 } from 'components';
import { memo } from 'react';

const QuieresUnaFranquicia = () => {
  const images = {
    image_576: VistaLavanderiaDesdeEntrada_1_640,
    image_1024: VistaLavanderiaDesdeEntrada_1_640,
    image_1200: VistaLavanderiaDesdeEntrada_1_640,
    image_1920: VistaLavanderiaDesdeEntrada_1_640,
  };

  return (
    <BackgroundImageSection
      height="h-full"
      opacity="bg-dark opacity-70"
      titleColor="text-primary"
      textColor="text-dark"
      image=""
      backgroundColor="dark"
      image_1024={images.image_1024}
      image_1200={images.image_1200}
      image_576={images.image_576}
      image_1920={images.image_1920}
      align="items-center justify-center">
      <section id="hero-inicio_container" className="grid gap-x-8 px-8 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <article id="hero-inicio_info_container" className="flex flex-col gap-8 w-full mx-auto">
          <TitleH1 attr="sr-only" align="text-center">
            En Easylav, ofrecemos franquicias de lavandería con limpieza impecable y planchado perfecto. Descubre cómo
            puedes ser parte de nuestro éxito.
          </TitleH1>
          <span className="text-light uppercase text-3xl lg:text-4xl font-semibold mx-auto">
            ¿Estás listo para emprender un negocio rentable y en crecimiento?
          </span>
          <p className="text-light text-xl lg:text-2xl block">
            Imagina ser parte de una franquicia de lavandería, un sector que nunca pasa de moda y siempre tiene demanda.
            Con nuestra marca, no solo obtendrás un modelo de negocio probado y exitoso, sino también el respaldo y la
            capacitación necesaria para triunfar. Nuestros sistemas innovadores y tecnología de vanguardia te permitirán
            ofrecer un servicio excepcional, atrayendo a clientes que buscan calidad y conveniencia. No dejes pasar esta
            oportunidad de inversión segura que te brindará libertad financiera y la posibilidad de hacer crecer tu
            patrimonio. ¡Únete a nosotros y forma parte de un futuro brillante en el mundo de la lavandería!
          </p>
          <ButtonContainer position="justify-center" distance="mt-12">
            <ButtonPrimary
              title="Conoce más"
              href="/franquicias/#sobre-nuestras-franquicias"
              width="min-w-[340px]"
              arialabel="Conocer más sobre nuestras franquicias"
            />
          </ButtonContainer>
        </article>
      </section>
    </BackgroundImageSection>
  );
};

const MemoizedQuieresUnaFranquicia = memo(QuieresUnaFranquicia, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children;
});
export default MemoizedQuieresUnaFranquicia;
