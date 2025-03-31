/*
  ModeloNegocio.jsx - Componente de Sección en Franquicias
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-28
  Descripción: 
  Modificado por: Daniel Pérez
  Fecha de modificación: 2025-03-31
*/

// Importaciones
import { Container, Paragraph, Section, TitleH3, TitleContainer, Spacing } from 'components';
import { FaCheck, FaComputer } from 'react-icons/fa6';
import { MdAttachMoney } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { GrMoney } from 'react-icons/gr';

// Base de Datos
const tarjetasModeloNegocio = [
  {
    id: 1,
    titulo: 'Inversión Inicial',
    descripcion:
      'La inversión inicial incluye el canon de entrada, adecuación del local, equipamiento y stock inicial.',
    icon: <MdAttachMoney size={52} className="text-primary mx-auto" />,
    caracteristicas: [
      'Canon de entrada: $XX,XXX',
      'Adecuación del local: $YY,YYY',
      'Equipamiento: $ZZ,ZZZ',
      'Stock inicial: $AA,AAA',
    ],
  },
  {
    id: 2,
    titulo: 'Costos Operativos',
    descripcion: 'Los costos operativos mensuales incluyen alquiler, servicios, personal, marketing y otros gastos.',
    icon: <GrMoney size={52} className="text-primary mx-auto" />,
    caracteristicas: ['Alquiler: $BB,BBB', 'Servicios: $CC,CCC', 'Personal: $DD,DDD', 'Marketing: $EE,EEE'],
  },
  {
    id: 3,
    titulo: 'Márgenes de Ganancia',
    descripcion:
      'Easylav ofrece márgenes de ganancia atractivos gracias a su modelo de negocio eficiente y alta demanda de servicios.',
    icon: <GiReceiveMoney size={52} className="text-primary mx-auto" />,
    caracteristicas: ['Margen bruto promedio: XX%', 'Retorno de inversión estimado: XX años'],
  },
  {
    id: 4,
    titulo: 'Soporte de Easylav',
    descripcion: 'Easylav apoya a sus franquiciados con capacitación, marketing, tecnología y gestión.',
    icon: <FaComputer size={52} className="text-primary mx-auto" />,
    caracteristicas: [
      'Capacitación inicial y continua',
      'Soporte de marketing y publicidad',
      'Plataforma tecnológica avanzada',
      'Asesoramiento en gestión y operaciones',
    ],
  },
];

// Estructura
const ModeloNegocio = () => {
  return (
    <Section className="">
      <Container className="flex flex-col gap-12">
        <TitleContainer title="Modelo de Negocio Detallado" />
        <Paragraph>
          El modelo de franquicia de Easylav está diseñado para ofrecer una alta rentabilidad y sostenibilidad. Aquí te
          explicamos cómo funciona:
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {tarjetasModeloNegocio.map((tarjeta) => (
            <article
              key={tarjeta.id}
              className="shadow-2xl p-8 rounded-2xl bg-light transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              {tarjeta.icon}
              <Spacing distance="h-4" />
              <TitleH3 textTransform="base" fontSize="text-2xl" justify="justify-center" color="text-secondary_dark">
                {tarjeta.titulo}
              </TitleH3>
              <Spacing distance="h-12" />
              <p className="text-gray-700 text-dark">{tarjeta.descripcion}</p>
              <ul className="flex flex-col gap-2 text-dark list-none border-4 border-primary rounded-2xl p-6 mt-10 h-auto">
                {tarjeta.caracteristicas.map((caracteristica, index) => (
                  <li key={`${tarjeta.id}-${index}`} className="flex gap-3 text-base items-center">
                    <FaCheck className="text-secondary_dark" />
                    <span>{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ModeloNegocio;
