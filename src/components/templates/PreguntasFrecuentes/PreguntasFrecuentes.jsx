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
import { Accordion, BorderLeft, Button, ButtonContainer, TitleH2, TitleH3 } from 'components';
import { FaHome } from 'react-icons/fa';
import { FaRegBuilding } from 'react-icons/fa6';
import { frequentQuestions } from 'data/frequentQuestions'; // Importa las preguntas frecuentes

// <Estructura></Estructura>
const PreguntasFrecuentes = () => {
  const [activeAccordion, setActiveAccordion] = useState(null); // Estado para rastrear el acordeón abierto

  const handleAccordionToggle = useCallback((id) => {
    setActiveAccordion((prev) => (prev === id ? null : id)); // Alternar el estado del acordeón
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="mx-auto mb-[60px] lg:mb-20 flex flex-col gap-4">
          <span className="mb-2 block text-lg font-semibold text-primary">Preguntas Frecuentes</span>
          <BorderLeft>
            <TitleH2 textColor="text-dark dark:text-light" align="items-left">
              Tienes alguna duda?
            </TitleH2>
          </BorderLeft>
          <TitleH3>
            <span className="dark:text-light">Puedes ver las preguntas más frecuentes</span>
          </TitleH3>
        </div>
      </div>
      {/* Title */}

      {/* Questions */}
      <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {frequentQuestions.map((item) => (
          <li key={item.id}>
            <MemoizedAccordion
              question={item.question}
              height=""
              isOpen={activeAccordion === item.id}
              onToggle={() => handleAccordionToggle(item.id)}>
              {item.answer}
            </MemoizedAccordion>
          </li>
        ))}
      </ul>
      {/* Questions */}

      {/* Botones de Ver Sucursales e Inicio */}
      <ButtonContainer position={'items-center justify-center'} distance="mt-20">
        <Button
          variant="primary"
          type="button"
          href={'/sucursales'}
          title={'Ver Sucursales'}
          icon={<FaRegBuilding />}
          width={'w-[250px]'}
          name="Ver Sucursales"
          arialabel="Ver la lista de sucursales"
        />
        <Button
          variant="secondary"
          type="button"
          href={'/#inicio'}
          title={'Ir a Inicio'}
          icon={<FaHome />}
          width={'w-[250px]'}
          name="Ir a inicio"
          arialabel="Ir a la página de inicio"
        />
      </ButtonContainer>
      {/* Botones de Ver Sucursales e Inicio */}
    </>
  );
};

const MemoizedAccordion = memo(Accordion);

export default PreguntasFrecuentes;
