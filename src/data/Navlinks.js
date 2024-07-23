import {
  GrCoatCheck,
  GrHome,
  GrIndicator,
  GrMailOption,
  GrUser,
} from "react-icons/gr";

export const navlinks = [
  { id: "1", name: "Inicio", href: "/", icon: GrHome, linkId: "inicio" },
  {
    id: "2",
    name: "Quienes Somos",
    href: "/#nosotros",
    icon: GrUser,
    linkId: "Nosotros",
  },
  {
    id: "3",
    name: "Servicios",
    href: "/#servicios",
    icon: GrCoatCheck,
    linkId: "servicios",
  },
  {
    id: "4",
    name: "Sucursales",
    href: "/sucursales",
    icon: GrIndicator,
    linkId: "sucursales",
  },
  {
    id: "5",
    name: "Contacto",
    href: "/contacto",
    icon: GrMailOption,
    linkId: "contacto",
  },
];

export const linksServicios = [
  {
    id: "1",
    name: "Lavado Regular",
    href: "/#lavado-regular",
    linkId: "lavado-regular",
  },
  {
    id: "2",
    name: "Lavado Especial",
    href: "/#lavado-especializado",
    linkId: "lavado-especializado",
  },
  {
    id: "3",
    name: "Planchado y Doblez",
    href: "/#planchado-y-doblez",
    linkId: "planchado-y-doblez",
  },
];

export const otrosLinks = [
  {
    id: "1",
    name: "Política de Privacidad",
    href: "/politica-privacidad",
    linkId: "politica-privacidad",
  },
  {
    id: "2",
    name: "Política de Cookies",
    href: "/politica-cookies",
    linkId: "politica-cookies",
  },
  {
    id: "3",
    name: "Términos y Condiciones",
    href: "/terminos-condiciones",
    linkId: "terminos-condiciones",
  },
  {
    id: "4",
    name: "Preguntas Frecuentes",
    href: "/preguntas-frecuentes",
    linkId: "preguntas-frecuentes",
  },
];
