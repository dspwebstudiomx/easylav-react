import image from "assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-640.jpg";
import { PageLayout, SEOFriendly, Spacing, SucursalCardPerCity } from "components";
import { scrollToTop } from "functions";

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
      <SucursalCardPerCity title='Morelia' city='Morelia' />
      <Spacing height={"h-12"} />
      <SucursalCardPerCity title='Morelia' city='León' />
    </PageLayout>
  );
};

export default Sucursales;
