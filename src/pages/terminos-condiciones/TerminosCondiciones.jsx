import { Helmet } from "react-helmet"
import BorderCenter from "../../components/borders/BorderCenter"
import PageLayout from "../../components/layout/PageLayout"
import TitleH1 from "../../components/title/TitleH1"

const TerminosCondiciones = () => {
  return (
    <PageLayout id={'Terminos-y-Condiciones'}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terminos y Condiciones | Easylav</title>
        <link rel="canonical" href="https://easylav-react.netlify.app/terminos-condiciones" />
      </Helmet>
      <BorderCenter>
        <TitleH1 title='Terminos y condiciones' />
      </BorderCenter>
    </PageLayout>
  )
}

export default TerminosCondiciones