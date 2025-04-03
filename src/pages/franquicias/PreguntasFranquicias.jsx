import { Accordion, ButtonContainer, ButtonSecondary } from 'components';
import { franquiciaDescripciones } from 'data';
import { FaRegBuilding } from 'react-icons/fa';

const PreguntasFranquicias = () => {
  return (
    <div className="lg:mt-12">
      {/* Title */}
      {/* Questions */}
      <ul className="grid sm:grid-cols-2 gap-8">
        {franquiciaDescripciones.map((description) => (
          <li key={description.id} id={`descripcion-${description.id}`} className="text-dark">
            <Accordion height="h-[120px]" title={description.title} description={description.description} />
          </li>
        ))}
      </ul>
      <ButtonContainer position={'justify-center sm:justify-center items-center my-20'}>
        <ButtonSecondary
          href={'/sucursales'}
          title={'Ver Sucursales'}
          icon={<FaRegBuilding />}
          width={''}
          name="ver sucursales"
        />
      </ButtonContainer>
      {/* Questions */}
    </div>
  );
};

export default PreguntasFranquicias;
