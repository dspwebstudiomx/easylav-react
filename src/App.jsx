// Importaciones
import PoliticaCookies from 'pages/politica-cookies/PoliticaCookies';
import { Footer, Header, ScrollToTopButton } from 'components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import { lazy } from 'react';
import '../node_modules/animate.css/animate.css';
import './App.css';
// import Loading from './components/Loading';

// Carga diferida de las páginas
const Inicio = lazy(() => import('pages/inicio/Inicio'));
const Sucursales = lazy(() => import('pages/sucursales/Sucursales'));
const ContactoPagina = lazy(() => import('pages/contacto/ContactoPagina'));
const Franquicias = lazy(() => import('pages/franquicias/Franquicias'));
const GuiaEstilos = lazy(() => import('pages/guia-estilos/GuiaEstilos'));
const NotFound = lazy(() => import('pages/404/NotFound'));
const Test = lazy(() => import('pages/test/Test'));
const PoliticaPrivacidad = lazy(() => import('pages/politica-privacidad/PoliticaPrivacidad'));
const PreguntasFrecuentesPage = lazy(() => import('pages/preguntas-frecuentes/PreguntasFrecuentesPage'));
const TerminosCondiciones = lazy(() => import('pages/terminos-condiciones/TerminosCondiciones'));
const Facturacion = lazy(() => import('pages/facturacion/Facturacion'));
const Morelia = lazy(() => import('pages/sucursales/Morelia/Morelia'));
const Leon = lazy(() => import('pages/sucursales/Leon/Leon'));
const Guadalajara = lazy(() => import('pages/sucursales/Guadalajara/Guadalajara'));
const UsosBeneficios = lazy(() => import('pages/usos-beneficios/UsosBeneficios'));

/* Estructura principal 


  Notas:

  - Esta es la estructura principal de la aplicación. Aquí se definen las rutas y se carga el componente de carga mientras se espera la carga de los componentes.
  - Se utiliza React Router para manejar la navegación entre las diferentes páginas de la aplicación.
  - Se utiliza Suspense para mostrar un componente de carga mientras se cargan los componentes de las páginas.
  - Se utiliza lazy para cargar los componentes de las páginas de forma diferida, lo que mejora el rendimiento de la aplicación al reducir el tamaño del paquete inicial.
  - Se utiliza BrowserRouter para manejar la navegación en la aplicación.
  - Se utiliza el componente Loading para mostrar un mensaje de carga mientras se cargan los componentes de las páginas.
  - Se utiliza el componente NotFound para manejar las rutas no encontradas.
  - Se utiliza el componente ContactoPagina para manejar la página de contacto.
  - Se utiliza el componente Sucursales para manejar la página de sucursales.
  - Se utiliza el componente PoliticaPrivacidad para manejar la página de política de privacidad.
  - Se utiliza el componente PoliticaCookies para manejar la página de política de cookies. 
  - Se utiliza el componente Franquicias para manejar la página de franquicias.
  - Se utiliza el componente GuiaEstilos para manejar la página de guía de estilos.
  - Se utiliza el componente TerminosCondiciones para manejar la página de términos y condiciones.     
*/

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Suspense fallback={<Loading />}> */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto/" element={<ContactoPagina />} />
        <Route path="/sucursales/" element={<Sucursales />} />
        <Route path="/politica-privacidad/" element={<PoliticaPrivacidad />} />
        <Route path="/politica-cookies/" element={<PoliticaCookies />} />
        <Route path="/franquicias/" element={<Franquicias />} />
        <Route path="/terminos-condiciones/" element={<TerminosCondiciones />} />
        <Route path="/preguntas-frecuentes/" element={<PreguntasFrecuentesPage />} />
        <Route path="/facturacion/" element={<Facturacion />} />
        <Route path="/guia-estilos/" element={<GuiaEstilos />} />
        <Route path="/sucursales/morelia" element={<Morelia />} />
        <Route path="/sucursales/leon" element={<Leon />} />
        <Route path="/sucursales/guadalajara" element={<Guadalajara />} />
        <Route path="/usos-y-condiciones" element={<UsosBeneficios />} />
        <Route path="/test/" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Suspense> */}
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}
