/*
  León - Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CentroLeon } from 'assets'
import { PageLayoutPlaces, SEOFriendly } from "components"

// Estructura
const Leon = () => {


  const image = {
    576: CentroLeon,
    1024: CentroLeon,
    1200: CentroLeon,
    1920: CentroLeon,
  }

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
        image_576={image[576]}
        image_1024={image[1024]}
        image_1200={image[1200]}
        image_1920={image[1920]}
      />
    </>
  )
}
export default Leon