import { GrCoatCheck, GrGroup, GrHome, GrIndicator, GrMailOption, GrUser } from 'react-icons/gr';

const navLinksSections = [
  {
    id: 1,
    name: 'Inicio',
    href: '/#inicio',
    icon: GrHome,
    linkId: 'inicio',
  },
  {
    id: 2,
    name: 'Quienes Somos',
    href: '/#quienes-somos',
    icon: GrUser,
    linkId: 'quienes-somos', // Actualizado para coincidir con el ID en el DOM
  },
  {
    id: 3,
    name: 'Servicios',
    href: '/#servicios',
    icon: GrCoatCheck,
    linkId: 'servicios',
  },
];
const navLinksPages = [
  {
    id: 1,
    name: 'Sucursales',
    href: '/sucursales',
    icon: GrIndicator,
    linkId: 'sucursales',
  },
  {
    id: 2,
    name: 'Contacto',
    href: '/contacto',
    icon: GrMailOption,
    linkId: 'contacto',
  },
  {
    id: 3,
    name: 'Franquicias',
    href: '/franquicias',
    icon: GrGroup,
    linkId: 'franquicias',
  },
];

const linksServicios = [
  {
    id: 1,
    name: 'Autoservicio',
    href: '/#autoservicio',
    linkId: 'autoservicio',
  },
  {
    id: 2,
    name: 'Secado',
    href: '/#secado',
    linkId: 'Secado',
  },
  {
    id: 3,
    name: 'Encargo',
    href: '/#por-encargo',
    linkId: 'Encargo',
  },
  {
    id: 4,
    name: 'Plegado',
    href: '/#plegado',
    linkId: 'Plegado',
  },
  {
    id: 5,
    name: 'Tintorería',
    href: '/#tintoreria',
    linkId: 'Tintoreria',
  },
];

const linksPoliticas = [
  {
    id: 1,
    name: 'Política de Privacidad',
    href: '/politica-privacidad',
    linkId: 'politica-privacidad',
    title: 'Visitar la sección de Política de Privacidad',
  },
  {
    id: 2,
    name: 'Política de Cookies',
    href: '/politica-cookies',
    linkId: 'politica-cookies',
    title: 'Visitar la sección de Política de Cookies',
  },
];
const linksTerminos = [
  {
    id: 1,
    name: 'Términos y Condiciones',
    href: '/terminos-condiciones',
    linkId: 'terminos-condiciones',
    title: 'Visitar la sección de Términos y Condiciones',
  },
  {
    id: 2,
    name: 'Preguntas Frecuentes',
    href: '/preguntas-frecuentes',
    linkId: 'preguntas-frecuentes',
    title: 'Visitar la sección de Preguntas Frecuentes',
  },
  {
    id: 3,
    name: 'Facturación',
    href: '/facturacion',
    linkId: 'facturacion',
    title: 'Visitar la sección de Facturación',
  },
];
export { linksPoliticas, linksServicios, linksTerminos, navLinksPages, navLinksSections };
