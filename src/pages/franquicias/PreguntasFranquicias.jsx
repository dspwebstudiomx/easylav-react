import { memo, useState, useCallback } from 'react';
import { Accordion } from 'components';
import { franquiciaDescripciones } from 'data';

const PreguntasFranquicias = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = useCallback((id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  }, []);

  return (
    <article className="lg:mt-12 mx-auto w-full">
      <ul className="grid sm:grid-cols-2 gap-8">
        {franquiciaDescripciones.map((description) => (
          <li key={description.id} id={`descripcion-${description.id}`} className="text-dark">
            <MemorizedAccordion
              height="h-[120px]"
              title={description.title}
              description={description.description}
              isOpen={activeAccordion === description.id}
              onToggle={() => handleAccordionToggle(description.id)}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

const MemorizedAccordion = memo(Accordion);

export default PreguntasFranquicias;
