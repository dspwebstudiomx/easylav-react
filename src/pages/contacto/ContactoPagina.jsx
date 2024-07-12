import PageLayout from "../../components/layout/PageLayout"
import Contacto from "../../components/contacto/Contacto"
import TitleH1 from "../../components/title/TitleH1"
import BorderCenter from "../../components/borders/BorderCenter"
import { Helmet } from "react-helmet"

const ContactoPagina = () => {
  return (
    <PageLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contacto | Easylav</title>
        <link rel="canonical" href="https://easylav-react.netlify.app/contacto" />
      </Helmet>
      <div className="mx-auto mb-20">
        <BorderCenter>
          <TitleH1 title="Contacto" />
        </BorderCenter>
      </div>
      <Contacto />
    </PageLayout>
  )
}

export default ContactoPagina