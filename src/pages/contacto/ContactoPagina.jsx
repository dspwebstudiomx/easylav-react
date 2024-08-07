import { scrollToTop } from "functions"
import { Helmet } from "react-helmet"
import Contacto from "../../components/contacto/Contacto"
import PageLayout from "../../components/layout/PageLayout"

const ContactoPagina = () => {
  scrollToTop()
  return (
    <PageLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contacto | Easylav</title>
        <link rel="canonical" href="https://easylav-react.netlify.app/contacto" />
      </Helmet>
      <Contacto />
    </PageLayout>
  )
}

export default ContactoPagina