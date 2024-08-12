import { Lavadero, LavarRopa, Planchar } from "assets";

export const services = [
  {
    id: 1,
    title: "Lavado Regular",
    description:
      "Confía en nosotros para mantener tus prendas limpias y frescas semana tras semana. Utilizamos técnicas avanzadas para eliminar las manchas y preservar la calidad de tus telas.",
    image: Lavadero,
    idLink: "lavado-regular",
    alt: "lavadora trabajando",
  },
  {
    id: 2,
    title: "Lavado Especializado",
    description:
      "¿Tienes prendas delicadas o difíciles de limpiar? Nuestro servicio especializado está diseñado para manejar incluso los textiles más sensibles, asegurando resultados excepcionales",
    image: LavarRopa,
    idLink: "lavado-especializado",
    alt: "playera lavandose a mano",
  },
  {
    id: 3,
    title: "Planchado y Doblez",
    description:
      "El toque final perfecto para tus prendas. Nuestro servicio de planchado garantiza que cada artículo luzca impecable y listo para usar.",
    image: Planchar,
    idLink: "planchado-y-doblez",
    alt: "plancha sacando vapor",
  },
];
