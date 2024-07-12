import PageLayout from "../../components/layout/PageLayout"
import Contacto from "../../components/contacto/Contacto"
import TitleH1 from "../../components/title/TitleH1"
import BorderCenter from "../../components/borders/BorderCenter"

const ContactoPagina = () => {
  return (
    <PageLayout>
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