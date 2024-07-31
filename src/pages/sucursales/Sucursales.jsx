import PageLayout from "../../components/layout/PageLayout"
import Spacing from "../../components/layout/Spacing"
import TitleH2 from "../../components/title/TitleH2"
import CityCardGenerator from "./components/CityCardGenerator"
import BorderLeft from "../../components/borders/BorderLeft"
import SEOFriendly from "../../components/SEOFriendly"
import image from "../../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-640.jpg"

const Sucursales = () => {
  return (
    <PageLayout id={'Sucursales'} >
      <SEOFriendly
        title="Sucursales | Easylav: Tu lavandería ideal"
        url="easylav-react.netlify.app"
        description="En easylav tu ropa es nuestra pasión: limpieza impecable, planchado perfecto"
        author="dspwebstudio"
        keywords="lavandería Morelia, planchado Morelia"
        ogImage={image}
        ogImageAlt="canasta verde con ropa sucia"
        ogType="website"
      />
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