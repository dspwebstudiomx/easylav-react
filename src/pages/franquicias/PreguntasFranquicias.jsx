import { memo, useState, useCallback } from 'react';
import { Accordion, ButtonContainer, ButtonSecondary } from 'components';
import { franquiciaDescripciones } from 'data';
import { FaRegBuilding } from 'react-icons/fa';

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
            <MemoizedAccordion
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
          aria-label="Ver la lista de sucursales"
        />
      </ButtonContainer>
    </div>
  );
};

const MemoizedAccordion = memo(Accordion);

export default PreguntasFranquicias;
