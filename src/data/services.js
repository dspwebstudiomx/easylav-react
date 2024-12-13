import {
  Lavadero,
  LavadoraInteligente,
  PilaToallas,
  Planchar,
  Toalla,
} from "assets";

export const services = [
  {
    id: 1,
    title: "Lavado",
    idLink: "lavado",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquid nulla et distinctio ad, enim quis omnis expedita molestiae architecto magnam.",
    image: Lavadero,
    alt: "lavadora trabajando",
  },
  {
    id: 2,
    title: "Secado",
    idLink: "secado",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquid nulla et distinctio ad, enim quis omnis expedita molestiae architecto magnam.",
    image: LavadoraInteligente,
    alt: "playera lavandose a mano",
  },
  {
    id: 3,
    title: "Por encargo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquid nulla et distinctio ad, enim quis omnis expedita molestiae architecto magnam.",
    image: PilaToallas,
    idLink: "por-encargo",
    alt: "plegado de toallas",
  },
  {
    id: 4,
    title: "Plegado",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquid nulla et distinctio ad, enim quis omnis expedita molestiae architecto magnam.",
    image: Toalla,
    idLink: "plegado",
    alt: "plegado de toallas",
  },
  {
    id: 5,
    title: "Tintorería",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aliquid nulla et distinctio ad, enim quis omnis expedita molestiae architecto magnam.",
    image: Planchar,
    idLink: "tintoreria",
    alt: "plancha sacando vapor",
  },
];
