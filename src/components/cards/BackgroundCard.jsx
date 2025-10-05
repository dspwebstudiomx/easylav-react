/*
  Background Card - Componente
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import BackgroundImageSection from 'components/sections/BackgroundImageSection';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Estructura
const BackgroundCard = ({ id, title, image, href, rounded, height, width, className, alt }) => {
  return (
    <Link to={href} id={`sucursal-${title}`} className={`shadow-2xl rounded-lg ${width}`}>
      <BackgroundImageSection
        id={id}
        image_768={image}
        image_576={image}
        image_240={image}
        image_1024={image}
        image_1200={image}
        image_1920={image}
        opacity="opacity-30 hover:opacity-40"
        backgroundColor="bg-dark"
        rounded={rounded}
        height={height}
        width={width}
        title={`Ciudad de ${title}`}
        alt={alt}
        to={href}
        className={`flex justify-center items-center ${className}`}>
        <h2 className="text-light uppercase text-2xl font-semibold tracking-wide">{title}</h2>
      </BackgroundImageSection>
    </Link>
  );
};
BackgroundCard.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rounded: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default BackgroundCard;
