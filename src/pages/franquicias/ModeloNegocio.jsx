import { Container, Paragraph, Section, TitleH3, TitleContainer, Spacing } from 'components';
import { FaCheck } from 'react-icons/fa6';
import { MdAttachMoney } from 'react-icons/md';

const tarjetasModeloNegocio = [
  {
    id: 1,
    titulo: 'Inversión Inicial',
    descripcion:
      'La inversión inicial incluye el canon de entrada, adecuación del local, equipamiento y stock inicial.',
    caracteristicas: [
      'Canon de entrada: $XX,XXX',
      'Adecuación del local: $YY,YYY',
      'Equipamiento: $ZZ,ZZZ',
      'Stock inicial: $AA,AAA',
    ],
    icon: <MdAttachMoney />,
    iconSize: 32,
  },
  {
    id: 2,
    titulo: 'Costos Operativos',
    descripcion: 'Los costos operativos mensuales incluyen alquiler, servicios, personal, marketing y otros gastos.',
    caracteristicas: ['Alquiler: $BB,BBB', 'Servicios: $CC,CCC', 'Personal: $DD,DDD', 'Marketing: $EE,EEE'],
  },
  {
    id: 3,
    titulo: 'Márgenes de Ganancia',
    descripcion:
      'Easylav ofrece márgenes de ganancia atractivos gracias a su modelo de negocio eficiente y alta demanda de servicios.',
    caracteristicas: ['Margen bruto promedio: XX%', 'Retorno de inversión estimado: XX años'],
  },
  {
    id: 4,
    titulo: 'Soporte de Easylav',
    descripcion: 'Easylav apoya a sus franquiciados con capacitación, marketing, tecnología y gestión.',
    caracteristicas: [
      'Capacitación inicial y continua',
      'Soporte de marketing y publicidad',
      'Plataforma tecnológica avanzada',
      'Asesoramiento en gestión y operaciones',
    ],
  },
];

const ModeloNegocio = () => {
  return (
    <Section className="">
      <Container className="flex flex-col gap-12">
        <TitleContainer title="Modelo de Negocio Detallado" />
        <Paragraph>
          El modelo de franquicia de Easylav está diseñado para ofrecer una alta rentabilidad y sostenibilidad. Aquí te
          explicamos cómo funciona:
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {tarjetasModeloNegocio.map((tarjeta) => (
            <article key={tarjeta.id} className="shadow-2xl p-8 rounded-2xl bg-light">
              <img
                className={'text-secondary'}
                src="tarjeta.icon"
                title={tarjeta.title}
                alt={tarjeta.title}
                size={tarjeta.iconSize}
              />
              <TitleH3 textTransform="base" fontSize="text-2xl" justify="justify-center">
                {tarjeta.titulo}
              </TitleH3>
              <Spacing distance="h-4" />
              <p className="text-gray-700 text-dark">{tarjeta.descripcion}</p>
              <ul className="flex flex-col gap-2 bg-light text-dark list-none border-2 border-primary rounded-2xl p-6 mt-10">
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
