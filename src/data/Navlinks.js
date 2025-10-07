import { GrCoatCheck, GrGroup, GrHome, GrIndicator, GrMailOption, GrUser } from 'react-icons/gr';

const navLinksSections = [
  {
    id: 1,
    name: 'Inicio',
    href: '/',
    icon: GrHome,
    linkId: 'inicio',
    alt: 'Inicio',
    title: 'Visitar la sección de Inicio',
  },
  {
    id: 2,
    name: 'Quienes Somos',
    href: '/#quienes-somos',
    icon: GrUser,
    linkId: 'quienes-somos',
    alt: 'Quienes Somos',
    title: 'Visitar la sección de Quienes Somos',
  },
  {
    id: 3,
    name: 'Servicios',
    href: '/#servicios',
    icon: GrCoatCheck,
    linkId: 'servicios',
    alt: 'Servicios',
    title: 'Visitar la sección de Servicios',
  },
];
const navLinksPages = [
  {
    id: 1,
    name: 'Sucursales',
    href: '/sucursales',
    icon: GrIndicator,
    linkId: 'sucursales',
    alt: 'Sucursales',
    title: 'Visitar la sección de Sucursales',
  },
  {
    id: 2,
    name: 'Contacto',
    href: '/contacto',
    icon: GrMailOption,
    linkId: 'contacto',
    alt: 'Contacto',
    title: 'Visitar la sección de Contacto',
  },
  {
    id: 3,
    name: 'Franquicias',
    href: '/franquicias',
    icon: GrGroup,
    linkId: 'franquicias',
    alt: 'Franquicias',
    title: 'Visitar la sección de Franquicias',
  },
];

const linksServicios = [
  {
    id: 1,
    name: 'Autoservicio',
    href: '/#autoservicio',
    linkId: 'autoservicio',
    title: 'Visitar la sección de Autoservicio',
    alt: 'Autoservicio',
  },
  {
    id: 2,
    name: 'Secado',
    href: '/#secado',
    linkId: 'Secado',
    title: 'Visitar la sección de Secado',
    alt: 'Secado',
  },
  {
    id: 3,
    name: 'Encargo',
    href: '/#por-encargo',
    linkId: 'Encargo',
    title: 'Visitar la sección de Encargo',
    alt: 'Encargo',
  },
  {
    id: 4,
    name: 'Plegado',
    href: '/#plegado',
    linkId: 'Plegado',
    title: 'Visitar la sección de Plegado',
    alt: 'Plegado',
  },
  {
    id: 5,
    name: 'Tintorería',
    href: '/#tintoreria',
    linkId: 'Tintoreria',
    title: 'Visitar la sección de Tintorería',
    alt: 'Tintorería',
  },
];

const linksPoliticas = [
  {
    id: 1,
    name: 'Política de Privacidad',
    href: '/politica-privacidad',
    linkId: 'politica-privacidad',
    title: 'Visitar la sección de Política de Privacidad',
    alt: 'Política de Privacidad',
  },
  {
    id: 2,
    name: 'Política de Cookies',
    href: '/politica-cookies',
    linkId: 'politica-cookies',
    title: 'Visitar la sección de Política de Cookies',
    alt: 'Política de Cookies',
  },
];
const linksTerminos = [
  {
    id: 1,
    name: 'Términos y Condiciones',
    href: '/terminos-condiciones',
    linkId: 'terminos-condiciones',
    title: 'Visitar la sección de Términos y Condiciones',
    alt: 'Términos y Condiciones',
  },
  {
    id: 2,
    name: 'Preguntas Frecuentes',
    href: '/preguntas-frecuentes',
    linkId: 'preguntas-frecuentes',
    title: 'Visitar la sección de Preguntas Frecuentes',
    alt: 'Preguntas Frecuentes',
  },
  {
    id: 3,
    name: 'Facturación',
    href: '/facturacion',
    linkId: 'facturacion',
    title: 'Visitar la sección de Facturación',
    alt: 'Facturación',
  },
];
export { linksPoliticas, linksServicios, linksTerminos, navLinksPages, navLinksSections };
