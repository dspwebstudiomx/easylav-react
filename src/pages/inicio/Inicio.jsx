import HomeLayout from "../../components/layout/HomeLayout"
import SobreNosotros from "./components/SobreNosotros"
import NuestrasSucursales from "./components/NuestrasSucursales"
import NuestrosServicios from "./components/NuestrosServicios"
import Testimonios from "./components/Testimonios"
import Contacto from "../../components/contacto/Contacto"
import HeroInicio from "./components/HeroInicio"

const Inicio = () => {
  return (
    <HomeLayout>
      <HeroInicio />
      <SobreNosotros />
      <NuestrosServicios />
      <NuestrasSucursales />
      <Testimonios />
      <Contacto />
    </HomeLayout>
  )
}

export default Inicio