/*
  Morelia - Sucursales
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
*/

// Importaciones
import { CatedralMorelia } from 'assets';
import { PageLayoutPlaces, SEOFriendly } from 'components';

const Morelia = () => {
  const image = {
    576: CatedralMorelia,
    1024: CatedralMorelia,
    1200: CatedralMorelia,
    1920: CatedralMorelia,
  };

  return (
    <>
      <SEOFriendly
        title="Morelia | Sucursales EasyLav: Tu lavandería ideal"
        url="https://easylav.mx/sucursales/morelia"
        description="Visita nuestras modernas sucursales de EasyLav en Morelia, Michoacán, y descubre servicios de lavandería, tintorería y planchado con la mejor calidad y atención. ¡Te esperamos!"
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        robots="index, follow"
        canonical="https://easylav.mx/sucursales/morelia"
        keywords="lavandería en Morelia, lavanderías en Morelia Michoacán, tintorería Morelia, planchado en Morelia, lavado de ropa Morelia, EasyLav Morelia, lavandería express Morelia, servicios de lavandería Morelia"
        ogImage={image[576]}
        ogImageAlt="Vista de la Catedral de Morelia entre calles."
        ogType="website"
      />
      <PageLayoutPlaces
        city="Morelia"
        image_576={image[576]}
        image_1024={image[1024]}
        image_1200={image[1200]}
        image_1920={image[1920]}
      />
    </>
  );
};
export default Morelia;
