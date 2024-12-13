import PoliticaCookies from 'pages/politica-cookies/PoliticaCookies';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/animate.css/animate.css';
import './App.css';
import Loading from "./components/Loading";

const Inicio = lazy(() => import("pages/inicio/Inicio"));
const Sucursales = lazy(() => import("pages/sucursales/Sucursales"));
const ContactoPagina = lazy(() => import("pages/contacto/ContactoPagina"));
const FranquiciasTarjetas = lazy(() => import("pages/franquicias/FranquiciasTarjetas"));
const GuiaEstilos = lazy(() => import("pages/guia-estilos/GuiaEstilos"));
const NotFound = lazy(() => import("pages/404/NotFound"));
const Test = lazy(() => import("pages/test/Test"));
const PoliticaPrivacidad = lazy(() => import("pages/politica-privacidad/PoliticaPrivacidad"));
const PreguntasFrecuentes = lazy(() => import("pages/preguntas-frecuentes/PreguntasFrecuentes"));
const TerminosCondiciones = lazy(() => import("pages/terminos-condiciones/TerminosCondiciones"));
const Facturacion = lazy(() => import("pages/facturacion/Facturacion"));
const Morelia = lazy(() => import("pages/sucursales/Morelia/Morelia"));
const Leon = lazy(() => import("pages/sucursales/Leon/Leon"));
const Guadalajara = lazy(() => import("pages/sucursales/Guadalajara/Guadalajara"));


export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto/' element={<ContactoPagina />} />
          <Route path='/sucursales/' element={<Sucursales />} />
          <Route path='/politica-privacidad/' element={<PoliticaPrivacidad />} />
          <Route path='/politica-cookies/' element={<PoliticaCookies />} />
          <Route path='/franquicias/' element={<FranquiciasTarjetas />} />
          <Route path='/terminos-condiciones/' element={<TerminosCondiciones />} />
          <Route path='/preguntas-frecuentes/' element={<PreguntasFrecuentes />} />
          <Route path='/facturacion/' element={<Facturacion />} />
          <Route path='/guia-estilos/' element={<GuiaEstilos />} />
          <Route path='/sucursales/morelia' element={<Morelia />} />
          <Route path='/sucursales/leon' element={<Leon />} />
          <Route path='/sucursales/guadalajara' element={<Guadalajara />} />
          <Route path='/test/' element={<Test />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}
