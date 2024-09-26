/*
  Morelia - Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CatedralMorelia as image } from 'assets'
import { PageLayoutPlaces, SEOFriendly } from "components"

const Morelia = () => {

  return (
    <>
      <SEOFriendly
        title="Morelia | Sucursales EasyLav: Tu lavandería ideal"
        url="easylav-react.netlify.app/sucursales/morelia"
        description="Conoce nuestras sucursales en Morelia, Michoacán. EasyLav, siempre juntos"
        author="dspwebstudio"
        keywords="lavandería Morelia, planchado Morelia"
        ogImage={image}
        ogImageAlt="Calle Benito Juaréz con vista a la Catedral de Morelia"
        ogType="website"
      />
      <PageLayoutPlaces
        city='Morelia'
        image_576={image}
        image_1024={image}
        image_1200={image}
        image_1920={image}
      />
    </>
  )
}
export default Morelia