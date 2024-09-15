import image from "assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-640.jpg";
import { PageLayout, SEOFriendly, Spacing, SucursalCardPerCity } from "components";
import { scrollToTop } from "functions";

const Sucursales = () => {
  scrollToTop();
  return (
    <>
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
      <PageLayout id={"Sucursales"}>
        <SucursalCardPerCity city='Morelia' />
        <Spacing height={"h-8"} />
        <SucursalCardPerCity city='León' />
      </PageLayout>
    </>

  );
};

export default Sucursales;
