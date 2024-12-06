import { CatedralMorelia } from "assets"
import { BorderLeft, ContactFacturacion, Container, PageLayout, SEOFriendly, TitleH1 } from "components"
import { FRANQUICIAS_UI } from "constants/constants"

const styles = `${FRANQUICIAS_UI.TITLEH1.COLOR} ${FRANQUICIAS_UI.TITLEH1.FONT_SIZE} ${FRANQUICIAS_UI.TITLEH1.FONT_WEIGHT} ${FRANQUICIAS_UI.TITLEH1.LETTER_SPACING}`

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
          <div className="w-full px-4 sm:px-0">
            <div className="mx-auto mb-[60px] lg:mb-0 flex  flex-col gap-4">
              <BorderLeft>
                <TitleH1 className={styles} textColor="text-dark dark:text-light w-2/3">
                  Facturación
                </TitleH1>
              </BorderLeft>
              <h3 className='text-xl font-semibold sm:text-2xl mt-8 text-dark dark:text-light'> Favor de proporcionar los siguientes datos para que te hagamos llegar tu factura.</h3>
            </div>
          </div>
        </div>
        <ContactFacturacion />
      </Container>
    </PageLayout>
  )
}

export default Facturacion