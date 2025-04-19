/*
  PreguntasFrecuentes - Component - Page
  ========================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-28
  Modificado: 2025-04-01
  Descripción: Se agregó lógica para controlar el estado de los acordeones, permitiendo que solo uno esté abierto a la vez.
*/

// Importaciones
import { memo, useState, useCallback } from 'react';
import { Accordion, BorderLeft, Button, ButtonContainer, PageLayout, TitleH1, TitleH3 } from 'components';
import { frequentQuestions } from 'data';
import { FaHome } from 'react-icons/fa';
import { FaRegBuilding } from 'react-icons/fa6';

// <Estructura></Estructura>
const PreguntasFrecuentes = () => {
  const [activeAccordion, setActiveAccordion] = useState(null); // Estado para rastrear el acordeón abierto

  const handleAccordionToggle = useCallback((id) => {
    setActiveAccordion((prev) => (prev === id ? null : id)); // Alternar el estado del acordeón
  }, []);

  return (
    <PageLayout id="preguntas-frecuentes">
      <div className="flex flex-col sm:gap-0">
        {/* Title */}
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] lg:mb-20 flex flex-col gap-4">
            <span className="mb-2 block text-lg font-semibold text-primary">Preguntas Frecuentes</span>
            <BorderLeft>
              <TitleH1 textColor="text-dark dark:text-light" align="items-left">
                Tienes alguna duda?
              </TitleH1>
            </BorderLeft>
            <TitleH3>Puedes ver las preguntas más frecuentes</TitleH3>
          </div>
        </div>
        {/* Title */}

        {/* Questions */}
        <ul className="w-full grid sm:grid-cols-2 gap-8">
          {frequentQuestions.map((question) => (
            <li key={question.id} id={`question-${question.id}`} className="text-dark">
              <MemoizedAccordion
                height={'h-[210px] sm:h-[140px]'}
                title={question.question}
                description={question.answer}
                isOpen={activeAccordion === question.id} // Verificar si este acordeón está abierto
                onToggle={() => handleAccordionToggle(question.id)} // Alternar el estado del acordeón
              />
            </li>
          ))}
        </ul>
        {/* Questions */}
      </div>
      <ButtonContainer position={'items-center justify-center'} distance="mt-20">
        <Button
          variant="primary"
          type="button"
          href={'/sucursales'}
          title={'Ver Sucursales'}
          icon={<FaRegBuilding />}
          width={'w-full sm:w-[240px]'}
          name="Ver Sucursales"
          arialabel="Ver la lista de sucursales"
        />
        <Button
          variant="secondary"
          type="button"
          href={'/#inicio'}
          title={'Inicio'}
          icon={<FaHome />}
          width={'w-full sm:w-[240px]'}
          name="Ir a inicio"
          arialabel="Ir a la página de inicio"
        />
      </ButtonContainer>
    </PageLayout>
  );
};

const MemoizedAccordion = memo(Accordion);

export default PreguntasFrecuentes;
