import PropType from 'prop-types';
import { useState } from 'react';

const Video = ({ src, type, title, className, defaultImage, height }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  return (
    <div className='w-full grid place-items-center video-container'>
      {!isVideoReady && (
        <img
          src={defaultImage}
          alt="Imagen de video predeterminada"
        />
      )}
      <video
        src={src}
        type={type}
        autoPlay
        loop
        muted
        title={title}
        className={`${className} ${height}`}
        onCanPlay={handleVideoReady} // Evento que se dispara cuando el video está listo
      ></video>
    </div>
  );
};

Video.propTypes = {
  src: PropType.string.isRequired,
  type: PropType.string.isRequired,
  title: PropType.string.isRequired,
  className: PropType.string,
  defaultImage: PropType.string,
  height: PropType.string,
};

export default Video;