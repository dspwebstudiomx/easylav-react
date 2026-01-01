/*
  Sucursales.jsx - Página de sucursales de Easylav
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-26
  Descripción: Página que muestra las sucursales de Easylav.
  Incluye enlaces a las sucursales de León y Morelia.
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-27
  --------------------------------------------------
  Cambios realizados: Se ha añadido la función scrollToTop para mejorar la navegación.
  --------------------------------------------------
  
*/

// Importaciones
import { leon_card as leon, catedral_morelia_card as morelia } from 'assets';
import { BackgroundCard, Banner, PageLayout, SEOFriendly, TitleH1 } from 'components';
import { scrollToTop } from 'functions';

// Estructuracls
const Sucursales = () => {
  scrollToTop();

  // Obtener la fecha actual
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // Los meses en JavaScript son 0-indexados
  const currentDay = today.getDate();

  // Verificar si la fecha actual coincide con los días festivos
  const isHoliday =
    (currentMonth === 12 && (currentDay === 24 || currentDay === 25 || currentDay === 31)) ||
    (currentMonth === 1 && currentDay === 1);

  // Constante para width y height iguales
  const cardWidth = 'w-[260px] md:w-[300px] 2xl:w-[400px]';
  const cardHeight = 'h-[180px] md:h-[210px] 2xl:h-[260px]';

  return (
    <>
      <SEOFriendly
        title="Lavanderías en Morelia y León | Easylav - Lavado y Planchado"
        url="https://easylav.mx/sucursales"
        description="Descubre las mejores lavanderías en Morelia y León con Easylav. Ofrecemos servicios de lavado, planchado profesional, atención personalizada y rapidez. Encuentra nuestras sucursales estratégicamente ubicadas para brindarte comodidad y calidad. ¡Visítanos hoy!"
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="lavandería en Morelia, lavandería en León, servicio de lavandería, planchado profesional, lavado de ropa, lavandería cerca de mí, lavandería económica, lavandería rápida, lavandería a domicilio, Easylav Morelia, Easylav León, mejores lavanderías en Morelia, mejores lavanderías en León, lavandería autoservicio, lavandería con planchado, lavandería 24 horas"
        ogImage={morelia}
        ogImageAlt="Sucursal de lavandería Easylav en Morelia"
        ogType="website"
      />
      <PageLayout id={'Sucursales'}>
        <TitleH1 attr="sr-only" align="align">
          ¡Visita nuestras sucursales en Morelia y León! Descubre servicios de lavandería rápidos, económicos y de alta
          calidad con Easylav. ¡Estamos cerca de ti!
        </TitleH1>

        <div className="grid gap-20">
          <article className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center justify-center mx-auto w-full h-auto">
            <BackgroundCard
              image={morelia}
              title="Morelia"
              href="/sucursales/morelia"
              className="flex justify-center items-center"
              rounded="rounded-lg"
              width={cardWidth}
              height={cardHeight}
              alt="Tarjeta con la imagen de Catedral de Morelia"
            />
            <BackgroundCard
              image={leon}
              title="León"
              href="/sucursales/leon"
              rounded="rounded-lg"
              width={cardWidth}
              height={cardHeight}
              alt="Tarjeta con la imagen del centro de León"
            />
            {/* <BackgroundCard image={CentroGuadalajara} title="Guadalajara" href="/sucursales/guadalajara" rounded="rounded-lg"  width={cardWidth} height={cardHeight} alt="Tarjeta con la imagen del centro de Guadalajara"/> */}
          </article>
          {/* Mostrar el Banner solo en días festivos */}
          {isHoliday && (
            <Banner variant="primary">
              <div className="">
                Queremos informarte que nuestras sucursales permanecerán cerradas los días{' '}
                <strong className="text-primary_darkcontrast">25 de Diciembre </strong> y el {''}
                <strong className="text-primary_darkcontrast">1 de Enero</strong> por días festivos. Te invitamos a
                visitarnos en otra fecha para disfrutar de nuestros servicios de lavandería de alta calidad. <br />
                <br />
                <div className="mx-auto text-center mt-12">
                  <strong className="text-primary_darkcontrast text-2xl">¡Gracias por tu comprensión!</strong>
                </div>
              </div>
            </Banner>
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default Sucursales;
