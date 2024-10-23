import { CatedralMorelia } from "assets"
import { BorderBottom, ContactFacturacion, PageLayout, SEOFriendly, Spacing, TitleH1 } from "components"

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
      <BorderBottom >
        <TitleH1 className={'block mx-auto bg-red_light'} align='mx-auto'>
          Facturación
        </TitleH1>
      </BorderBottom>
      {/* <TitleH3>
        Favor de proporcionar los siguientes datos para que te hagamos llegar tu factura.
      // </TitleH3> */}
      <Spacing distance='mt-0' />
      <ContactFacturacion />
    </PageLayout>
  )
}

export default Facturacion