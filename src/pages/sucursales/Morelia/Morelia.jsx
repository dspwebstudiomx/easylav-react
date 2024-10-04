/*
  Morelia - Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CatedralMorelia } from 'assets'
import { PageLayoutPlaces, SEOFriendly } from "components"

const Morelia = () => {

  const image = {
    576: CatedralMorelia,
    1024: CatedralMorelia,
    1200: CatedralMorelia,
    1920: CatedralMorelia,
  }

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
        image_576={image[576]}
        image_1024={image[1024]}
        image_1200={image[1200]}
        image_1920={image[1920]}
      />
    </>
  )
}
export default Morelia