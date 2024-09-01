import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/animate.css/animate.css';
import './App.css';
import Loading from "./components/Loading";
const Inicio = lazy(() => import("pages/inicio/Inicio"));
const Sucursales = lazy(() => import("pages/sucursales/Sucursales"));
const ContactoPagina = lazy(() => import("pages/contacto/ContactoPagina"));
const Franquicias = lazy(() => import("pages/franquicias/Franquicias"));
const GuiaEstilos = lazy(() => import("pages/guia-estilos/GuiaEstilos"));
const NotFound = lazy(() => import("pages/404/NotFound"));
const PoliticaPrivacidad = lazy(
  () => import("pages/politica-privacidad/PoliticaPrivacidad"),
);
const TerminosCondiciones = lazy(
  () => import("pages/terminos-condiciones/TerminosCondiciones"),
);
const PreguntasFrecuentes = lazy(
  () => import("pages/preguntas-frecuentes/PreguntasFrecuentes"),
);
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto/' element={<ContactoPagina />} />
          <Route path='/sucursales/' element={<Sucursales />} />
          <Route path='/politica-privacidad/' element={<PoliticaPrivacidad />} />
          <Route path='/franquicias/' element={<Franquicias />} />
          <Route path='/terminos-condiciones/' element={<TerminosCondiciones />} />
          <Route path='/preguntas-frecuentes/' element={<PreguntasFrecuentes />} />
          <Route path='/guia-estilos/' element={<GuiaEstilos />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}
