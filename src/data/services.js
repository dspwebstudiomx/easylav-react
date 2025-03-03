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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ratione nobis provident expedita, velit dolores ipsum ipsa corporis vel quod, eaque totam odit eius rem soluta praesentium.",
    image: Lavadero,
    alt: "lavadora trabajando",
  },
  {
    id: 2,
    title: "Secado",
    idLink: "secado",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ratione nobis provident expedita, velit dolores ipsum ipsa corporis vel quod, eaque totam odit eius rem soluta praesentium.",
    image: LavadoraInteligente,
    alt: "playera lavandose a mano",
  },
  {
    id: 3,
    title: "Por encargo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ratione nobis provident expedita, velit dolores ipsum ipsa corporis vel quod, eaque totam odit eius rem soluta praesentium.",
    image: PilaToallas,
    idLink: "por-encargo",
    alt: "plegado de toallas",
  },
  {
    id: 4,
    title: "Plegado",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ratione nobis provident expedita, velit dolores ipsum ipsa corporis vel quod, eaque totam odit eius rem soluta praesentium.",
    image: Toalla,
    idLink: "plegado",
    alt: "plegado de toallas",
  },
  {
    id: 5,
    title: "Tintorería",
    description:
      "LLorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam ratione nobis provident expedita, velit dolores ipsum ipsa corporis vel quod, eaque totam odit eius rem soluta praesentium.",
    image: Planchar,
    idLink: "tintoreria",
    alt: "plancha sacando vapor",
  },
];
