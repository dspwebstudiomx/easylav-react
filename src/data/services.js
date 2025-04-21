import { Lavadero, LavadoraInteligente, PilaToallas, Toalla, LavarRopa } from 'assets';

export const services = [
  {
    id: 1,
    title: 'Autoservicio',
    idLink: 'autoservicio',
    description_1:
      'Donde tú mismo realizas el proceso de lavado y/o secado con ayuda de nuestro personal capacitado, el cual siempre está para servirte y ayudarte en la cantidad de ropa y producto a utilizar. Contamos con báscula para colocar la cantidad de ropa adecuada para la limpieza y cuidado ideal de tu ropa. ',
    description_2:
      'Los ciclos de operación de nuestros equipos son de aproximadamente 30 minutos en el lavado y 50 minutos en el secado.',
    image: Lavadero,
    alt: 'lavadora trabajando',
  },
  {
    id: 2,
    title: 'Secado',
    idLink: 'secado',
    description_1:
      'Cuando solo requieren este servicio la ropa puede llegar más húmeda o mojada que lo normal evitando que se seque por completo. En estos casos les recomendamos usar el servicio de CENTRIFUGADO, para que la ropa se pueda secar de la mejor manera posible.',
    description_2: '',
    image: LavadoraInteligente,
    alt: 'playera lavandose a mano',
  },
  {
    id: 3,
    title: 'Por encargo',
    description_1:
      'El personal en la sucursal se encarga del proceso de lavado, secado y plegado (Doblado) de tu ropa.',
    description_2:
      'Cuando no tienes tiempo de lavar tu ropa, puedes dejarnos tu ropa, donde la carga es de 5 kilos es la carga en ropa de vestir y 3 kilos en ropa de cama; nosotros nos encargamos de procesar y estará lista en aproximadamente 3 horas o más dependiendo la carga de trabajo, o el horario.',
    image: PilaToallas,
    idLink: 'por-encargo',
    alt: 'plegado de toallas',
  },
  {
    id: 4,
    title: 'Plegado',
    description_1:
      'El servicio de plegado es un servicio adicional que ofrecemos para que tu ropa esté lista para usar. Este servicio es ideal para quienes buscan una solución rápida y conveniente para mantener su ropa organizada y lista para usar.',
    description_2: '',
    image: Toalla,
    idLink: 'plegado',
    alt: 'plegado de toallas',
  },
  {
    id: 5,
    title: 'Tintorería',
    description_1:
      'Además de nuestro servicio de lavandería, contamos con tintorería profesional para el cuidado de tus prendas más delicadas. Ya sea un traje, vestido, abrigo o cualquier prenda especial, nuestro servicio garantiza limpieza profunda, protección de las telas y un acabado impecable.',
    description_2: 'Calidad y comodidad en un solo lugar.',
    image: LavarRopa,
    idLink: 'tintoreria',
    alt: 'plancha sacando vapor',
  },
];
