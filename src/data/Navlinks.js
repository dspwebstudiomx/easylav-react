import {
  GrCoatCheck,
  GrGroup,
  GrHome,
  GrIndicator,
  GrMailOption,
  GrUser,
} from "react-icons/gr";

const navLinksSections = [
  {
    id: 1,
    name: "Inicio",
    href: "/#inicio",
    icon: GrHome,
    linkId: "inicio",
  },
  {
    id: 2,
    name: "Quienes Somos",
    href: "/#nosotros",
    icon: GrUser,
    linkId: "Nosotros",
  },
  {
    id: 3,
    name: "Servicios",
    href: "/#servicios",
    icon: GrCoatCheck,
    linkId: "servicios",
  },
];
const navLinksPages = [
  {
    id: 1,
    name: "Sucursales",
    href: "/sucursales",
    icon: GrIndicator,
    linkId: "sucursales",
  },
  {
    id: 2,
    name: "Contacto",
    href: "/contacto",
    icon: GrMailOption,
    linkId: "contacto",
  },
  {
    id: 3,
    name: "Franquicias",
    href: "/franquicias",
    icon: GrGroup,
    linkId: "franquicias",
  },
];

const linksServicios = [
  {
    id: 1,
    name: "Lavado Regular",
    href: "/#lavado-regular",
    linkId: "lavado-regular",
  },
  {
    id: 2,
    name: "Lavado Especial",
    href: "/#lavado-especializado",
    linkId: "lavado-especializado",
  },
  {
    id: 3,
    name: "Planchado y Doblez",
    href: "/#planchado-y-doblez",
    linkId: "planchado-y-doblez",
  },
];

const linksPoliticas = [
  {
    id: 1,
    name: "Política de Privacidad",
    href: "/politica-privacidad",
    linkId: "politica-privacidad",
  },
  {
    id: 2,
    name: "Política de Cookies",
    href: "/politica-cookies",
    linkId: "politica-cookies",
  },
];
const linksTerminos = [
  {
    id: 1,
    name: "Términos y Condiciones",
    href: "/terminos-condiciones",
    linkId: "terminos-condiciones",
  },
  {
    id: 2,
    name: "Preguntas Frecuentes",
    href: "/preguntas-frecuentes",
    linkId: "preguntas-frecuentes",
  },
  {
    id: 3,
    name: "Facturación",
    href: "/facturacion",
    linkId: "facturacion",
  },
];
export {
  linksPoliticas,
  linksServicios,
  linksTerminos,
  navLinksPages,
  navLinksSections,
};
