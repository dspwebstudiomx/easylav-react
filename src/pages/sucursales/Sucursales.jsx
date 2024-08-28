import image from "assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-640.jpg";
import {
  BorderBottom,
  PageLayout,
  SEOFriendly,
  Spacing,
  TitleH2,
} from "components";
import { scrollToTop } from "functions";
import CityCardGenerator from "./components/CityCardGenerator";

const Sucursales = () => {
  scrollToTop();
  return (
    <PageLayout id={"Sucursales"}>
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
      <BorderBottom justify={"mx-auto"}>
        <TitleH2 title="Morelia" />
      </BorderBottom>
      <CityCardGenerator city={"Morelia"} />
      <Spacing height={"h-12"} />
      <BorderBottom justify={"mx-auto"}>
        <TitleH2 title="León" />
      </BorderBottom>
      <CityCardGenerator city={"León"} />
    </PageLayout>
  );
};

export default Sucursales;
