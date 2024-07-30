import HomeLayout from "../../components/layout/HomeLayout"
import HeroInicio from "./components/HeroInicio"
import { Helmet } from "react-helmet"
import Container from "../../components/containers/Container"
import Section from "../../components/templates/Section"
import { lazy, Suspense } from "react"
import Loading from "../../components/Loading"
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Inicio | Easylav</title>
          <link rel="canonical" href="https://easylav-react.netlify.app/" />
        </Helmet>
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