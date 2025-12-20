import {
  Accordion,
  Button,
  ButtonContainer,
  Container,
  Paragraph,
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
      <Container className="mx-auto flex-col gap-20" id="quienes-somos-contenedor">
        <TwoColumnsContainer gridOrder="grid-col-reverse">
          {/* Tarjeta con botón para alternar */}
          <TarjetaBeneficios
            handleFlip={handleFlip}
            showFront={showFront}
            isFlipping={isFlipping}
            flipDuration={flipDuration}
          />

          <ParagraphContainer>
            {/* Descripción corta */}
            <Paragraph>
              <div className="md:text-xl flex flex-col gap-8 items-start justify-start">
                <span className="text-secondary_dark dark:text-secondary_light text-3xl md:text-5xl font-bold block">
                  ¡Tu lealtad tiene recompensas!
                </span>
                <span>
                  <strong>EASYLAV® </strong>
                  recompensa tu lealtad y te regala tu “Tarjeta de Recompensas” para premiar tu preferencia y consumos
                  con puntos y beneficios especialmente para ti, Solo usa tu tarjeta física.
                </span>
              </div>
            </Paragraph>

            {/* Preguntas Programa de Lealtad */}
            <ul className="w-full grid gap-8">
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

            <ButtonContainer position="justify-start w-full" distance="mt-12">
              {/* <Button
                title={showFront ? 'Ver reverso' : 'Ver frente'}
                name="Voltear tarjeta de lealtad"
                width={'w-full md:w-[210px]'}
                onClick={handleFlip}
                variant="secondary"
              /> */}
              <Button
                title="Terminos y Condiciones del Programa de Lealtad"
                name="Terminos y Condiciones del Programa de Lealtad"
                width={'w-full md:w-[240px] lg:w-auto'}
                href="/usos-y-condiciones"
                onClick={() => window.scrollTo(0, 0)}
                variant="primary"
                // icon={<FaRegEye />}
              />
            </ButtonContainer>
          </ParagraphContainer>
        </TwoColumnsContainer>
      </Container>
    </Section>
  );
};
const MemoizedAccordion = memo(Accordion);

export default ProgramasDeLealtad;
