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

// Estilos
const QUIERES_UNA_FRANQUICIA_UI = {
  THEME: 'dark',
  BACKGROUND: {
    OPACITY: 'opacity-80',
    COLOR: 'dark',
  },
  DISPLAY: {
    BUTTON: 'block',
    IMAGE: 'bg-fixed',
    PARAGRAPH: 'block text-xl',
  },
  COLOR: {
    BUTTON: 'primary',
    PARAGRAPH: 'light',
    TITLE: 'light',
  },
  BUTTON: {
    CONTAINER: 'mx-autoh',
    SIZE: '',
    HREF: '/franquicias',
    TEXT: {
      CONTENT: 'Conocer más',
      COLOR: 'light',
      SIZE: 'text-xl',
      TRANSFORM: '',
    },
  },
  CONTAINER: '',
  TITLE: {
    H2: {
      CONTENT: '¿Estás listo para emprender un negocio rentable y en crecimiento? ',
      TRANSFORM: 'uppercase',
      FONT_SIZE: 'text-3xl lg:text-4xl',
      FONT_WEIGHT: 'font-base',
      JUSTIFY: 'mx-auto',
    },
  },
};

// Estructura
const QuieresUnaFranquicia = () => {
  const styles = {
    button: `bg-${QUIERES_UNA_FRANQUICIA_UI.COLOR.BUTTON} px-8 py-4 w-[${QUIERES_UNA_FRANQUICIA_UI.BUTTON.SIZE}] text-${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.SIZE} rounded-lg ${QUIERES_UNA_FRANQUICIA_UI.DISPLAY.BUTTON} text-${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.SIZE} ${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.TRANSFORM} text-${QUIERES_UNA_FRANQUICIA_UI.BUTTON.TEXT.COLOR}`,
    paragraph: `text-${QUIERES_UNA_FRANQUICIA_UI.COLOR.PARAGRAPH} text-2xl ${QUIERES_UNA_FRANQUICIA_UI.DISPLAY.PARAGRAPH}`,
    buttonContainer: QUIERES_UNA_FRANQUICIA_UI.BUTTON.CONTAINER,
    span: `text-${QUIERES_UNA_FRANQUICIA_UI.COLOR.TITLE} ${QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.TRANSFORM} ${QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.FONT_SIZE} ${QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.FONT_WEIGHT} ${QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.JUSTIFY}`,
    container: QUIERES_UNA_FRANQUICIA_UI.CONTAINER,
  };
  const images = {
    image_576: VistaLavanderiaDesdeEntrada_1_640,
    image_1024: VistaLavanderiaDesdeEntrada_1_640,
    image_1200: VistaLavanderiaDesdeEntrada_1_640,
    image_1920: VistaLavanderiaDesdeEntrada_1_640,
  };
  return (
    <BackgroundImageSection
      height="h-full"
      opacity={`bg-${QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.COLOR} ${QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.OPACITY}`}
      titleColor="text-primary"
      textColor="text-dark"
      image={QUIERES_UNA_FRANQUICIA_UI.DISPLAY.IMAGE}
      backgroundColor={QUIERES_UNA_FRANQUICIA_UI.BACKGROUND.COLOR}
      image_1024={images.image_1024}
      image_1200={images.image_1200}
      image_576={images.image_576}
      image_1920={images.image_1920}
      align="items-center justify-center">
      <div id="hero-inicio_container" className={`grid md:grid-cols-1 gap-x-8`}>
        <div id="hero-inicio_info_container" className="flex flex-col gap-8 w-full mx-auto">
          <TitleH1 attr="sr-only">
            En Easylav, ofrecemos franquicias de lavandería con limpieza impecable y planchado perfecto. Descubre cómo
            puedes ser parte de nuestro éxito.
          </TitleH1>
          <span className={styles.span}>{QUIERES_UNA_FRANQUICIA_UI.TITLE.H2.CONTENT}</span>
          <p className={styles.paragraph}>
            Imagina ser parte de una franquicia de lavandería, un sector que nunca pasa de moda y siempre tiene demanda.
            Con nuestra marca, no solo obtendrás un modelo de negocio probado y exitoso, sino también el respaldo y la
            capacitación necesaria para triunfar. Nuestros sistemas innovadores y tecnología de vanguardia te permitirán
            ofrecer un servicio excepcional, atrayendo a clientes que buscan calidad y conveniencia. No dejes pasar esta
            oportunidad de inversión segura que te brindará libertad financiera y la posibilidad de hacer crecer tu
            patrimonio. ¡Únete a nosotros y forma parte de un futuro brillante en el mundo de la lavandería!
          </p>
          <ButtonContainer position={styles.buttonContainer} distance="mt-12">
            <ButtonPrimary
              title="Conoce más"
              href="/franquicias/#sobre-nuestras-franquicias"
              width={'min-w-[340px]'}
              arialabel="Conocer más sobre nuestras franquicias"
            />
          </ButtonContainer>
        </div>
      </div>
    </BackgroundImageSection>
  );
};

const MemoizedQuieresUnaFranquicia = memo(QuieresUnaFranquicia, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children;
});
export default MemoizedQuieresUnaFranquicia;
