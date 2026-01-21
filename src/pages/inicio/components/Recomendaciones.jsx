// Importaciones
import { Container, Paragraph, ParagraphContainer, Section, TitleContainer, TwoColumnsContainer } from 'components';
import { FaLayerGroup, FaClock, FaTshirt } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Constantes Internas
const recomendaciones = [
  {
    id: 1,
    title: 'Separar las prendas',
    description:
      'Por color, tamaño, tipo de tejido y nivel de suciedad. Esto evita decoloraciones y protege las telas más delicadas.',
    icon: FaLayerGroup,
  },
  {
    id: 2,
    title: 'Considerar el tiempo de secado ',
    description:
      'Para ciertas prendas. Las toallas y los pantalones de mezclilla absorben mucha agua, por lo que en algunos casos podría ser necesario un tiempo extra de secado.',
    icon: FaClock,
  },
  {
    id: 3,
    title: 'Secado adecuado para prendas especiales. ',
    description:
      'Algunas telas no quedan completamente secas con el ciclo regular. En estos casos, es mejor dejarlas secar al aire libre para evitar daños al exponerlas a un nuevo ciclo de calor.',
    icon: FaTshirt,
  },
];

const Recomendacion = ({ title, description, icon: Icon }) => {
  return (
    <li className="p-12 border-1 shadow-xl rounded-2xl min-h-[460px]">
      <TwoColumnsContainer gridOrder="flex-col">
        <div className="flex flex-col gap-6 text-dark dark:text-light w-full items-center">
          <Icon className="text-secondary_dark dark:text-primary w-12 h-12" />
          <span className="font-semibold block text-base md:text-xl uppercase">{title}</span>
        </div>
        <Paragraph>{description}</Paragraph>
      </TwoColumnsContainer>
    </li>
  );
};

// Estructura principal
const Recomendaciones = () => {
  return (
    <Section>
      <Container className="grid">
        <div className="grid gap-6">
          <TitleContainer title="Recomendaciones" />
          <ParagraphContainer>
            <Paragraph>Para cuidar mejor tu ropa y garantizar los mejores resultados, te recomendamos:</Paragraph>
          </ParagraphContainer>
        </div>
        <ul
          id="listado-de-recomendaciones"
          className="grid lg:grid-cols-3 gap-14 items-start justify-start w-full my-16">
          {recomendaciones.map((recomendacion) => (
            <Recomendacion
              key={recomendacion.id}
              title={recomendacion.title}
              icon={recomendacion.icon}
              description={recomendacion.description}
            />
          ))}
        </ul>
        <ParagraphContainer distance="gap-12">
          <Paragraph className="mt-12">
            <span className="mr-2 font-semibold text-2xl">Importante:</span>
            <br />
            <br />
            La cantidad de ropa que laves y seques influye en el resultado final. Te recomendamos elegir el servicio
            adecuado para que tu ropa quede tal como la necesitas.
          </Paragraph>
          <Paragraph className="text-center mt-12">
            <span className="text-secondary_dark dark:text-secondary_light text-xl md:text-3xl font-semibold">
              ¡Estamos aquí para ayudarte a cuidar tu ropa y facilitar tu día!
            </span>
          </Paragraph>
        </ParagraphContainer>
      </Container>
    </Section>
  );
};

export default Recomendaciones;

// PropTypes
Recomendacion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};
