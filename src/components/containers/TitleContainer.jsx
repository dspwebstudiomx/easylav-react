/*
  Title Container
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-01
*/

// Importaciones
import { BorderLeft, TitleH2 } from 'components';
import propTypes from 'prop-types';

// Estructura
const TitleContainer = ({ title, id }) => {
  return (
    <header className="w-full">
      <BorderLeft>
        <TitleH2 id={id} justify="justify-start" className="w-full">
          {title}
        </TitleH2>
      </BorderLeft>
    </header>
  );
};
TitleContainer.propTypes = {
  title: propTypes.string.isRequired,
  id: propTypes.string,
};

export default TitleContainer;
