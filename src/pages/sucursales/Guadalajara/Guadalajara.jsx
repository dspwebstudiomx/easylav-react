/*
  Guadalajara - Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CentroGuadalajara as image } from 'assets'
import { PageLayoutPlaces, SEOFriendly } from "components"

// Estructura
const Guadalajara = () => {

  return (
    <>
      <SEOFriendly
        title="Morelia | Sucursales EasyLav: Tu lavandería ideal"
        url="easylav-react.netlify.app/sucursales/morelia"
        description="Conoce nuestras sucursales en Guadalajara, Jalisco. EasyLav, siempre juntos"
        author="dspwebstudio"
        keywords="lavandería Morelia, planchado Morelia"
        ogImage={image}
        ogImageAlt="Zócalo de Guadalajara, Jalisco con vista hacia la catedral"
        ogType="website"
      />
      <PageLayoutPlaces
        city='Guadalajara'
        image_576={image}
        image_1024={image}
        image_1200={image}
        image_1920={image}
      />
    </>
  )
}
export default Guadalajara