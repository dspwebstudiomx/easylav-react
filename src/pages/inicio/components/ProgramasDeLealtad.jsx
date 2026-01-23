import {
  Accordion,
  Button,
  // Button,
  ButtonContainer,
  Container,
  ParagraphContainer,
  Section,
  TwoColumnsContainer,
} from 'components';
import { memo, useCallback, useState } from 'react';
import TarjetaBeneficios from './TarjetaBeneficios';
import { loyaltyProgramQuestions } from 'data/loyaltyProgramQuestions';

const ProgramasDeLealtad = () => {
  const [showFront, setShowFront] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const flipDuration = 700; // ms
  const handleFlip = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowFront((prev) => !prev);
      setIsFlipping(false);
    }, flipDuration / 2);
  };

  const [activeAccordion, setActiveAccordion] = useState(null); // Estado para rastrear el acordeón abierto

  const handleAccordionToggle = useCallback((id) => {
    setActiveAccordion((prev) => (prev === id ? null : id)); // Alternar el estado del acordeón
  }, []);

  return (
    <Section id="quienes-somos" className="bg-light dark:bg-dark h-auto">
      <Container className="mx-auto flex-col gap-20" id="quienes-somos-contenedor ">
        <TwoColumnsContainer gridOrder="flex-col-reverse lg:flex-row">
          <div className="mt-20 lg:mt-0">
            <article className="ml-3">
              <TarjetaBeneficios
                handleFlip={handleFlip}
                showFront={showFront}
                isFlipping={isFlipping}
                flipDuration={flipDuration}
              />
            </article>

            <ButtonContainer position="justify-center items-center md:items-start w-full" distance="my-12">
              <Button
                title={showFront ? 'Ver reverso' : 'Ver frente'}
                name="Voltear tarjeta de lealtad"
                width={'w-2/3 md:w-[210px]'}
                onClick={handleFlip}
                variant="secondary"
              />
            </ButtonContainer>
          </div>
          {/* Tarjeta con botón para alternar */}

          <ParagraphContainer>
            {/* Descripción corta */}
            <div className="md:text-xl flex flex-col gap-8 items-start justify-start">
              <div className="flex flex-col gap-8 mb-8">
                <span className=" text-secondary_dark dark:text-secondary_light text-3xl md:text-4xl font-bold block">
                  ¡Tu lealtad tiene recompensas! <br />
                </span>
                <span className="ml-7 text-secondary_dark dark:text-secondary_light text-3xl md:text-4xl font-bold block">
                  ¡Todos tus consumos generan recompensas! <br />
                </span>
                <span className="text-secondary_dark dark:text-secondary_light text-3xl md:text-4xl font-bold block">
                  ¡Entre mas consumas mas ahorras! <br />
                </span>
              </div>
              <span className="text-xl md:text-2xl lg:text-2xl">
                <strong className="dark:text-secondary_light">EASYLAV® </strong>
                recompensa tu lealtad y te regala tu “Tarjeta de Recompensas” para premiar tu preferencia y consumos con
                puntos y beneficios especialmente para ti, Solo usa tu tarjeta física.
              </span>
              <span className="md:mr-6">* Aplican restricciones</span>
            </div>

            {/* Preguntas Programa de Lealtad */}
            <ul className="w-full grid gap-8 mt-12">
              {loyaltyProgramQuestions.map((item) => (
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
          </ParagraphContainer>
        </TwoColumnsContainer>
      </Container>
    </Section>
  );
};
const MemoizedAccordion = memo(Accordion);

export default ProgramasDeLealtad;
