import { lazy } from "react";

const Inicio = lazy(() => import("pages/inicio/Inicio"));
const Sucursales = lazy(() => import("pages/sucursales/Sucursales"));
const ContactoPagina = lazy(() => import("pages/contacto/ContactoPagina"));
const Franquicias = lazy(() => import("pages/franquicias/FranquiciasTarjetas"));
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

export const routes = [
  { id: 1, path: "/", element: Inicio },
  { id: 2, path: "/sucursales", element: Sucursales },
  { id: 3, path: "/contacto", element: ContactoPagina },
  { id: 4, path: "/politica-privacidad", element: PoliticaPrivacidad },
  { id: 5, path: "/franquicias", element: Franquicias },
  { id: 6, path: "/terminos-condiciones", element: TerminosCondiciones },
  { id: 7, path: "/preguntas-frecuentes", element: PreguntasFrecuentes },
  { id: 8, path: "*", element: NotFound },
];
