import ScrollToTop from "functions/scrollToTop"
import { Helmet } from "react-helmet"
import Contacto from "../../components/contacto/Contacto"
import PageLayout from "../../components/layout/PageLayout"

const ContactoPagina = () => {
  return (
    <PageLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contacto | Easylav</title>
        <link rel="canonical" href="https://easylav-react.netlify.app/contacto" />
      </Helmet>
      <ScrollToTop />
      <Contacto />
    </PageLayout>
  )
}

export default ContactoPagina