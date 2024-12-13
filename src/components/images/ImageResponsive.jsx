/*
  Imagen Responsiva
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-04
*/

// Importaciones
import PropTypes from 'prop-types'

// Estructura
const ImageResponsive = ({ ...props }) => {

  const { image_640, image_1024, image_1920, imageAlt, className, width, height } = props
  return (
    <picture>
      <source srcSet={image_640} media="(max-width: 767px)" />
      <source srcSet={image_1024} media="(max-width: 1024px) " />
      <source srcSet={image_1920} media="(min-width: 1025px) " />
      <img
        title={imageAlt}
        src={image_640}
        className={`${className}  ${width} ${height}`}
        alt={imageAlt}
      />
    </picture>
  )
}
ImageResponsive.propTypes = {
  image_640: PropTypes.string.isRequired,
  image_1024: PropTypes.string,
  image_1920: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ImageResponsive