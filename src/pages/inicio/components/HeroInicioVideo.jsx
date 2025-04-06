/*
  HeroInicioVideo.jsx - Inicio - Sección
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-10-18
  Descripción: Componente de video de fondo para la sección de inicio.
  Este componente utiliza un video de fondo y una imagen de respaldo para mostrar un mensaje de bienvenida y un botón de llamada a la acción.
  Modificado por: Daniel Pérez
  Fecha modificación: 2025-03-27
*/

// Importaciones
import { VistaLavanderiaDesdeEntrada_2_640 as defaultImage } from 'assets';
import video from 'assets/video/video1.mp4';
import { ButtonContainer, ButtonSecondary, Container } from 'components';
import Video from 'components/video/Video';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// Estilos
const HEROINICIO_UI = {
  HEIGHT: 'h-[82vh] sm:h-[500px] xl:h-[70vh]',
};

const styles = {
  button: 'bg-primary px-6 py-4 w-full text-xl rounded-lg block text-light',
  title: 'text-2xl md:text-4xl font-bold tracking-wider text-light',
  image: 'absolute top-0 left-0 overflow-hidden object-cover object-center w-full h-full',
};

// Estructura
const HeroInicioVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consideramos móvil si el ancho es menor o igual a 768px
    };

    handleResize(); // Ejecutar al cargar
    window.addEventListener('resize', handleResize); // Escuchar cambios de tamaño

    return () => {
      window.removeEventListener('resize', handleResize); // Limpiar el evento
    };
  }, []);

  return (
    <section id="inicio" className={`relative overflow-hidden w-full ${HEROINICIO_UI.HEIGHT}`}>
      {/* Fondo: Video o Imagen Estática */}
      <div className={`absolute inset-0 z-0 w-full bg-dark left-0 ${HEROINICIO_UI.HEIGHT}`}>
        {isMobile ? (
          <img src={defaultImage} alt="Lavandería Easylav" className={styles.image} loading="lazy" />
        ) : (
          <Video
            src={video}
            type="video/mp4"
            title="sucursal"
            className={styles.image}
            defaultImage={defaultImage}
            alt="video sucursal"
          />
        )}
      </div>

      {/* Capa de opacidad */}
      <div className={`absolute inset-0 z-10 w-full bg-dark opacity-70 left-0 ${HEROINICIO_UI.HEIGHT}`}></div>

      {/* Contenido */}
      <Container className={`absolute inset-0 z-20 py-20 ${HEROINICIO_UI.HEIGHT}`}>
        <div className="w-full flex md:w-2/3 flex-col gap-12 items-center sm:items-start justify-center">
          <h1 className={styles.title}>
            En <span className="mx-2 text-primary">LAVANDERÍAS EASYLAV</span> no solo te brindamos soluciones para el
            lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus prendas luzcan
            siempre de la mejor manera.
          </h1>
          <ButtonContainer position={'items-center sm:items-left'}>
            <ButtonSecondary title="Nuestros servicios" href="/#servicios" width={'w-full sm:w-[260px]'} />
          </ButtonContainer>
        </div>
      </Container>
    </section>
  );
};

HeroInicioVideo.propTypes = {
  id: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  image_240: PropTypes.string,
  image_576: PropTypes.string,
  image_768: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  image_1920: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.string,
  opacity: PropTypes.string,
  backgroundColor: PropTypes.string,
  rounded: PropTypes.string,
};

export default HeroInicioVideo;
