import HomeLayout from "../../components/layout/HomeLayout"
import HeroInicio from "./components/HeroInicio"
import Container from "../../components/containers/Container"
import Section from "../../components/templates/Section"
import { lazy, Suspense } from "react"
import Loading from "../../components/Loading"
import SEOFriendly from "../../components/SEOFriendly"
import image from "../../assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-640.jpg"
// import NuestrasSucursalesCopy from "./components/NuestrasSucursalesCopy"
const SobreNosotros = lazy(() => import("./components/SobreNosotros"))
const PorqueElegirnos = lazy(() => import("./components/PorqueElegirnos"))
const NuestrasSucursales = lazy(() => import("./components/NuestrasSucursales"))
const NuestrosServicios = lazy(() => import("./components/NuestrosServicios"))
const Testimonios = lazy(() => import("./components/Testimonios"))
const Contacto = lazy(() => import("../../components/contacto/Contacto"))

const Inicio = () => {
  return (
    <Suspense fallback={<Loading />} >
      <HomeLayout>
        <SEOFriendly
          title="Inicio | Easylav"
          description="En easylav tu ropa es nuestra pasión: limpieza impecable, planchado perfecto"
          author="dspwebstudio"
          keywords="lavandería Morelia, planchado Morelia"
          ogImage={image}
          ogImageAlt="canasta verde con ropa sucia"
          url="easylav-react.netlify.app"
          ogType="website"
        />
        <HeroInicio />
        <SobreNosotros />
        <NuestrosServicios />
        <PorqueElegirnos />
        <NuestrasSucursales />
        <Testimonios />
        <Section>
          <Container className={'mx-auto'}>
            <Contacto />
          </Container>
        </Section>
      </HomeLayout>

    </Suspense>

  )
}

export default Inicio