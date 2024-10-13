import { CatedralMorelia } from "assets"
import { BorderBottom, ContactFacturacion, PageLayout, SEOFriendly, Spacing, TitleH1, TitleH3 } from "components"

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
        <TitleH1 className={'block w-full mx-auto bg-red_light'} align='mx-auto'>
          Facturación
        </TitleH1>
      </BorderBottom>
      <Spacing distance='mt-0' />
      <TitleH3>
        Favor de proporcionar los siguientes datos para que te hagamos llegar tu factura.
      </TitleH3>
      <Spacing distance='mt-6' />
      <div className="mr-auto w-full">
        <ContactFacturacion />
      </div>
    </PageLayout>
  )
}

export default Facturacion