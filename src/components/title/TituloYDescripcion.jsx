import { Paragraph, TitleContainer } from 'components';
import PropTypes from 'prop-types';

const TituloYDescripcion = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-12 mb-12">
      <TitleContainer title={title} />
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
export default TituloYDescripcion;

// Propiedades
TituloYDescripcion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
