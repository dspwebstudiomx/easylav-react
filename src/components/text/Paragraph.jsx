/*
  Paragraph.jsx - Componente de Párrafo
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2022-08-30
  Descripción: Este componente es un párrafo estilizado que se utiliza en varias secciones del sitio web de Easylav. Proporciona una forma consistente de mostrar texto con un estilo específico.
  Este componente es parte de la biblioteca de componentes reutilizables del proyecto, diseñado para mantener la coherencia en el diseño y la tipografía a lo largo del sitio web.
*/

// Importaciones
import PropTypes from 'prop-types';

// Estructura
const Paragraph = ({ children, className }) => {
  return <p className={`text-lg leading-relaxed text-dark dark:text-light ${className}`}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
