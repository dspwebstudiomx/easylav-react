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
import { VistaLavanderiaDesdeEntrada_2_640 as defaultImage, HeroVideoLavadoras } from 'assets';
import { Button, ButtonContainer, Container } from 'components';
import Video from 'components/video/Video';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const height = 'h-[60vh]';

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
    <section
      id="inicio"
      className={`relative overflow-hidden w-full flex items-center justify-center ${height} py-20 sm:py-12 px-12 md:px-20 lg:px-0 xl:px-0 2xl:px-0`}>
      {/* Fondo: Video o Imagen Estática */}
      <div className={`absolute inset-0 z-0 w-full bg-dark left-0 ${height}`}>
        {isMobile ? (
          <img
            src={defaultImage}
            alt="Vista de lavandería Easylav con máquinas modernas"
            title="Lavandería Easylav - Soluciones de lavado y tintorería"
            className="absolute top-0 left-0 overflow-hidden object-cover object-center w-full h-full"
            loading="lazy"
          />
        ) : (
          <Video
            src={HeroVideoLavadoras}
            type="video/mp4"
            title="sucursal"
            className="absolute top-0 left-0 overflow-hidden object-cover object-center w-full h-full"
            defaultImage={defaultImage}
            alt="video sucursal"
          />
        )}
      </div>

      {/* Capa de opacidad */}
      <div className={`absolute top-0 inset-0 z-10 w-full bg-dark opacity-60 left-0 ${height}`}></div>

      {/* Contenido */}
      <Container className="relative z-20 flex flex-col justify-center items-center w-full h-full text-center sm:p-12 md:px-0">
        <h1 className="text-2xl md:text-3xl xl:text-4xl w-full lg:w-2/3 font-semibold tracking-wider text-light text-left">
          En <span className="mx-2 text-primary font-semibold">LAVANDERÍAS EASYLAV</span> no solo te brindamos
          soluciones para el lavado, secado y doblado de tu ropa, también tenemos servicio de tintorería para que tus
          prendas luzcan siempre de la mejor manera.
        </h1>
        <ButtonContainer position={'items-center sm:items-left'}>
          <Button title="Nuestros servicios" href="/#servicios" width={'w-full sm:w-[260px]'} variant="secondary" />
        </ButtonContainer>
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
