// Importaciones
import {
  Container,
  Paragraph,
  ParagraphContainer,
  Section,
  Spacing,
  TitleContainer,
  TwoColumnsContainer,
} from 'components';
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
          <FaCheck size={32} className="text-secondary_dark" />
          <span className="font-semibold block text-2xl text-secondary_dark dark:text-secondary_light ">{title}</span>
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
      <Container className="grid gap-4 md:gap-8">
        <TitleContainer title="Recomendaciones" />
        <ParagraphContainer>
          <Paragraph>Para cuidar mejor tu ropa y garantizar los mejores resultados, te recomendamos:</Paragraph>
        </ParagraphContainer>
        <Spacing size="h-12" />

        <ul id="listado-de-recomendaciones" className="flex flex-col gap-12 items-start justify-start md:w-4/5">
          {recomendaciones.map((recomendacion) => (
            <Recomendacion key={recomendacion.id} title={recomendacion.title} description={recomendacion.description} />
          ))}
        </ul>
        <Spacing size="my-20" />

        <div className="error">
          <ParagraphContainer>
            <Paragraph>
              <span className="mr-2 font-semibold text-xl">Importante:</span>
              <br />
              <br />
              La cantidad de ropa que laves y seques influye en el resultado final. Te recomendamos elegir el servicio
              adecuado para que tu ropa quede tal como la necesitas.
            </Paragraph>
            <Spacing size="h-24" />
            <Paragraph>
              <div className="text-center">
                <span className="text-secondary_dark dark:text-secondary_light text-3xl font-semibold">
                  ¡Estamos aquí para ayudarte a cuidar tu ropa y facilitar tu día!
                </span>
              </div>
            </Paragraph>
          </ParagraphContainer>
        </div>
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
