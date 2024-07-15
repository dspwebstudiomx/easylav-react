import HomeLayout from "../../components/layout/HomeLayout"
import SobreNosotros from "./components/SobreNosotros"
import NuestrasSucursales from "./components/NuestrasSucursales"
import NuestrosServicios from "./components/NuestrosServicios"
import Testimonios from "./components/Testimonios"
import Contacto from "../../components/contacto/Contacto"
import HeroInicio from "./components/HeroInicio"
import { Helmet } from "react-helmet"
import Container from "../../components/containers/Container"
import ScrollToTopButton from "../../components/buttons/ScrollToTopButton"

const Inicio = () => {
  return (
    <>
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
        <Container>
          <Contacto />
        </Container>
      </HomeLayout>
      <ScrollToTopButton />
    </>

  )
}

export default Inicio