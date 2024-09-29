/*
  Background Card - Componente
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import BackgroundImageSection from "components/sections/BackgroundImageSection"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

// Estructura
const BackgroundCard = ({ id, title, image, href }) => {
  return (
    <Link to={href} id={`sucursal-${title}`} className="w-[300px] h-full shadow-2xl rounded-lg">
      <BackgroundImageSection
        id={id}
        image_768={image}
        image_576={image}
        image_240={image}
        image_1024={image}
        image_1200={image}
        image_1920={image}
        height='h-[full]'
        opacity='opacity-40 hover:opacity-50'
        backgroundColor='bg-dark'
      >
        <h2 className="text-light uppercase text-2xl font-semibold tracking-wide">{title}</h2>
      </BackgroundImageSection>
    </Link>
  )
}
BackgroundCard.propTypes = {
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
}

export default BackgroundCard