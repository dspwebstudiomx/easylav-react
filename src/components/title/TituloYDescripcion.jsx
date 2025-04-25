import { ParagraphContainer, TitleH3 } from 'components';
import PropTypes from 'prop-types';

const TituloYDescripcion = ({ title, children }) => {
  return (
    <article id={title} className="flex flex-col gap-8 my-6 w-full">
      <TitleH3 color="text-dark dark:text-primary_light">{title}</TitleH3>
      <ParagraphContainer>{children}</ParagraphContainer>
    </article>
  );
};
export default TituloYDescripcion;

// Propiedades
TituloYDescripcion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
