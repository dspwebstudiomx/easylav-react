import { CatedralMorelia } from "assets"
import { BorderLeft, PageLayout, SEOFriendly, TitleH1 } from "components"

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
      <BorderLeft>
        <TitleH1 className={''}>
          Quieres una franquicia?
        </TitleH1>
      </BorderLeft>
    </PageLayout>
  )
}

export default Facturacion