// Importaciones
import { Container, Paragraph, ParagraphContainer, Section, TitleContainer, TwoColumnsContainer } from 'components';
import { FaCheck } from 'react-icons/fa6';
import PropTypes from 'prop-types';

// Constantes Internas
const recomendaciones = [
  {
    id: 1,
    title: 'Separar las prendas',
    description:
      'Por color, tamaño, tipo de tejido y nivel de suciedad. Esto evita decoloraciones y protege las telas más delicadas.',
  },
  {
    id: 2,
    title: 'Considerar el tiempo de secado ',
    description:
      'Para ciertas prendas. Las toallas y los pantalones de mezclilla absorben mucha agua, por lo que en algunos casos podría ser necesario un tiempo extra de secado.',
  },
  {
    id: 3,
    title: 'Secado adecuado para prendas especiales. ',
    description:
      'Algunas telas no quedan completamente secas con el ciclo regular. En estos casos, es mejor dejarlas secar al aire libre para evitar daños al exponerlas a un nuevo ciclo de calor.',
  },
];

// Componente para cada recomendación
const Recomendacion = ({ title, description }) => {
  return (
    <li className="">
      <TwoColumnsContainer>
        <div className="flex  gap-6 w-full text-dark dark:text-light">
          <FaCheck size={32} className="text-secondary_dark dark:text-primary" />
          <span className="font-semibold block text-xl uppercase">{title}</span>
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
        <ul id="listado-de-recomendaciones" className="flex flex-col gap-14 items-start justify-start w-full mt-12">
          {recomendaciones.map((recomendacion) => (
            <Recomendacion key={recomendacion.id} title={recomendacion.title} description={recomendacion.description} />
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
          <Paragraph>
            <div className="text-center mt-12">
              <span className="text-secondary_dark dark:text-secondary_light text-3xl font-semibold">
                ¡Estamos aquí para ayudarte a cuidar tu ropa y facilitar tu día!
              </span>
            </div>
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
};
