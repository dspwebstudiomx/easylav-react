/*
  León - Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CentroLeon } from 'assets';
import { PageLayoutPlaces, SEOFriendly } from 'components';

// Estructura
const Leon = () => {
  const image = {
    576: CentroLeon,
    1024: CentroLeon,
    1200: CentroLeon,
    1920: CentroLeon,
  };

  return (
    <>
      <SEOFriendly
        title="León | Sucursales EasyLav: Tu lavandería ideal"
        url="https://easylav.mx/sucursales/leon"
        description="Visita nuestras modernas sucursales de EasyLav en León, Guanajuato, y descubre servicios de lavandería, tintorería y planchado con la mejor calidad y atención. ¡Te esperamos!"
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        robots="index, follow"
        canonical="https://easylav.mx/sucursales/leon"
        keywords="lavandería en León, lavanderías en León Guanajuato, tintorería León, planchado en León, lavado de ropa León, EasyLav León, lavandería express León, servicios de lavandería León"
        ogImage={image[576]}
        ogImageAlt="Ceentro de León, Guanajuato"
        ogType="website"
      />
      <PageLayoutPlaces
        city="León"
        image_576={image[576]}
        image_1024={image[1024]}
        image_1200={image[1200]}
        image_1920={image[1920]}
      />
    </>
  );
};
export default Leon;
