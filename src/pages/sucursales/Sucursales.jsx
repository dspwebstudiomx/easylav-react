import PageLayout from "../../components/layout/PageLayout"
import Spacing from "../../components/layout/Spacing"
import TitleH2 from "../../components/title/TitleH2"
import CityCardGenerator from "./components/CityCardGenerator"
import BorderLeft from "../../components/borders/BorderLeft"
import { Helmet } from "react-helmet"

const Sucursales = () => {
  return (
    <PageLayout id={'Sucursales'} >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sucursales | Easylav</title>
        <link rel="canonical" href="https://easylav-react.netlify.app/sucursales" />
      </Helmet>
      <BorderLeft position={'mx-auto'}>
        <TitleH2 title={'Morelia'} />
      </BorderLeft>
      < CityCardGenerator city={'Morelia'} />
      <Spacing height={'h-12'} />
      <BorderLeft position={'mx-auto'}>
        <TitleH2 title={'León'} />
      </BorderLeft>
      <CityCardGenerator city={'León'} />
    </PageLayout>
  )
}

export default Sucursales