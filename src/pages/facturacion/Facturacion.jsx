import { CatedralMorelia } from "assets"
import { PageLayout, SEOFriendly } from "components"

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
      <h1>Facturación</h1>
    </PageLayout>
  )
}

export default Facturacion