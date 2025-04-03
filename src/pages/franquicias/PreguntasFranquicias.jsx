import { Accordion, ButtonContainer, ButtonSecondary } from 'components';
import { franquiciaDescripciones } from 'data';
import { FaRegBuilding } from 'react-icons/fa';
import { useState, useCallback } from 'react';

const PreguntasFranquicias = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = useCallback((id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="lg:mt-12">
      <ul className="grid sm:grid-cols-2 gap-8">
        {franquiciaDescripciones.map((description) => (
          <li key={description.id} id={`descripcion-${description.id}`} className="text-dark">
            <Accordion
              height="h-[120px]"
              title={description.title}
              description={description.description}
              isOpen={activeAccordion === description.id}
              onToggle={() => handleAccordionToggle(description.id)}
            />
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
    </div>
  );
};

export default PreguntasFranquicias;
