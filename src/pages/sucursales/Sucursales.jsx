import PageLayout from "../../components/layout/PageLayout"
import Spacing from "../../components/layout/Spacing"
import TitleH2 from "../../components/title/TitleH2"
import CityCardGenerator from "./components/CityCardGenerator"
import BorderLeft from "../../components/borders/BorderLeft"

const Sucursales = () => {
  return (
    <PageLayout id={'Sucursales'} >
      <BorderLeft>
        <TitleH2 title={'Morelia'} />
      </BorderLeft>
      < CityCardGenerator city={'Morelia'} />
      <Spacing height={'h-12'} />
      <BorderLeft>
        <TitleH2 title={'León'} />
      </BorderLeft>
      <CityCardGenerator city={'León'} />
    </PageLayout>
  )
}

export default Sucursales