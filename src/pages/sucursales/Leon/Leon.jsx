/*
  León - Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { Camisas as image } from 'assets'
import { PageLayoutPlaces, SEOFriendly } from "components"

// Estructura
const Leon = () => {

  return (
    <>
      <SEOFriendly
        title="León | Sucursales EasyLav: Tu lavandería ideal"
        url="easylav-react.netlify.app/sucursales/leon"
        description="Conoce nuestras sucursales en León, Guanajuato. EasyLav, siempre juntos"
        author="dspwebstudio"
        keywords="lavandería León, planchado León"
        ogImage={image}
        ogImageAlt="canasta verde con ropa sucia"
        ogType="website"
      />
      <PageLayoutPlaces
        city='León'
        image_576={image}
        image_1024={image}
        image_1200={image}
        image_1920={image}
      />
    </>
  )
}
export default Leon