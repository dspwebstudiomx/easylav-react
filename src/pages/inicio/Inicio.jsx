import HomeLayout from "../../components/layout/HomeLayout"
import HeroInicio from "./components/HeroInicio"
import { Helmet } from "react-helmet"
import Container from "../../components/containers/Container"
import ScrollToTopButton from "../../components/buttons/ScrollToTopButton"
import Section from "../../components/templates/Section"
import { lazy, Suspense } from "react"
import Loading from "../../components/Loading"
const SobreNosotros = lazy(() => import("./components/SobreNosotros"))
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
        <NuestrasSucursales />
        <Testimonios />
        <Section>
          <Container className={'mx-auto'}>
            <Contacto />
          </Container>
        </Section>
      </HomeLayout>
      <ScrollToTopButton />
    </Suspense>

  )
}

export default Inicio