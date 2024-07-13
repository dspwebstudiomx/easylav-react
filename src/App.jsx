import { Suspense, lazy } from 'react'
import { HashRouter, Route, Routes } from "react-router-dom"
import './App.css'
// import 'animate.css'
// import '../node_modules/animate.css/animate.css'
// import ScrollToTop from './Functions/ScrolltoTop'
import Loading from './components/Loading'
const Inicio = lazy(() => import('./pages/inicio/Inicio'))
const Sucursales = lazy(() => import('./pages/sucursales/Sucursales'))
const ContactoPagina = lazy(() => import('./pages/contacto/ContactoPagina'))
const Franquicias = lazy(() => import('./pages/franquicias/Franquicias'))
const NotFound = lazy(() => import('./pages/404/NotFound'))
const PoliticaPrivacidad = lazy(() => import('./pages/politica-privacidad/PoliticaPrivacidad'))
const TerminosCondiciones = lazy(() => import('./pages/terminos-condiciones/TerminosCondiciones'))


export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<ContactoPagina />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/franquicias" element={<Franquicias />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter >
  )
}
