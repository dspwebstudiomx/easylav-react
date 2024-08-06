import image from "assets/images/images/annie-spratt-5TfCI4nj6B4-unsplash-640.jpg"
import { Container, HomeLayout, Loading, Section, SEOFriendly } from 'components'
import { lazy, Suspense } from "react"
const HeroInicio = lazy(() => import("./components/HeroInicio"))
const SobreNosotros = lazy(() => import("./components/SobreNosotros"))
const PorqueElegirnos = lazy(() => import("./components/PorqueElegirnos"))
const NuestrasSucursales = lazy(() => import("./nuestrasSucursales/NuestrasSucursales"))
const NuestrosServicios = lazy(() => import("./nuestrosServicios/NuestrosServicios"))
const Testimonios = lazy(() => import("./Testimonios/Testimonios"))
const Contacto = lazy(() => import("../../components/contacto/Contacto"))

const Inicio = () => {
  return (
    <Suspense fallback={<Loading />} >
      <HomeLayout>
        <SEOFriendly
          title="Inicio | Easylav: Tu lavandería ideal"
          url="easylav-react.netlify.app"
          description="En easylav tu ropa es nuestra pasión: limpieza impecable, planchado perfecto"
          author="dspwebstudio"
          keywords="lavandería Morelia, planchado Morelia"
          ogImage={image}
          ogImageAlt="canasta verde con ropa sucia"
          ogType="website"
        />
        <HeroInicio />
        <SobreNosotros />
        <NuestrosServicios />
        <PorqueElegirnos />
        <NuestrasSucursales />
        <Testimonios />
        <Section backgroundColor={'dark:bg-dark'} className={'dark:text-light'}>
          <Container className={'mx-auto'}>
            <Contacto />
          </Container>
        </Section>
      </HomeLayout>
    </Suspense>
  )
}

export default Inicio