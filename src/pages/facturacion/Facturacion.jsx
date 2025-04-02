//Importaciones
import { CatedralMorelia } from 'assets';
import { BorderLeft, ContactFacturacion, Container, PageLayout, SEOFriendly, TitleH1 } from 'components';

// Estilos
const FACTURACION_UI = {
  TITLEH1: {
    COLOR: 'text- dark:text-light',
    FONT_SIZE: 'text-3xl md:text-4xl',
    FONT_WEIGHT: 'font-semibold',
    LETTER_SPACING: 'tracking-wide',
  },
  CONTAINER: {
    DISPLAY: 'grid 2xl:grid-cols-2 sm:gap-8',
  },
  COLUMNA_1: {
    DISPLAY: 'flex flex-col gap-2',
  },
  COLUMNA_2: {
    DISPLAY: 'grid justify-items-center sm:grid-cols-2 gap-12',
    HEIGHT: 'lg:h-auto md:h-[500px]',
    MARGIN: 'mx-auto mt-24 sm:mt-8 2xl:mt-40 mx-auto',
    PADDING: 'p-0',
    WIDTH: 'w-full',
  },
  UL: {
    DISPLAY: 'flex flex-col gap-0',
  },
  IMAGE: {
    WIDTH: 'w-[280px] lg:w-[360px]',
  },
};

const styles = `${FACTURACION_UI.TITLEH1.COLOR} ${FACTURACION_UI.TITLEH1.FONT_SIZE} ${FACTURACION_UI.TITLEH1.FONT_WEIGHT} ${FACTURACION_UI.TITLEH1.LETTER_SPACING}`;

//Estructura
const Facturacion = () => {
  return (
    <PageLayout>
      <SEOFriendly
        title="Facturación | Easylav: Tu lavandería ideal"
        url="easylav-react.netlify.app/facturacion"
        description="En easylav tu ropa es nuestra pasión: limpieza impecable, planchado perfecto"
        author="dspwebstudio"
        keywords="lavandería, planchado"
        ogImage={CatedralMorelia}
        ogImageAlt="canasta verde con ropa sucia"
        ogType="website"
      />
      <Container>
        <div className="mx-auto">
          <div className="w-auto px-4 sm:px-0">
            <div className="mx-auto mb-[60px] lg:mb-0 flex  flex-col gap-4">
              <BorderLeft>
                <TitleH1 className={styles} textColor="text-dark dark:text-light w-2/3">
                  Facturación
                </TitleH1>
              </BorderLeft>
              <h3 className="text-xl font-semibold sm:text-2xl mt-8 text-dark dark:text-light">
                {' '}
                Favor de proporcionar los siguientes datos para que te hagamos llegar tu factura.
              </h3>
            </div>
          </div>
        </div>
        <ContactFacturacion />
      </Container>
    </PageLayout>
  );
};

export default Facturacion;
