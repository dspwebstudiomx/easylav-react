import {
  Button,
  ButtonContainer,
  Container,
  Paragraph,
  ParagraphContainer,
  Section,
  TwoColumnsContainer,
} from 'components';
import { useState } from 'react';
import TarjetaBeneficios from './TarjetaBeneficios';
// import { FaRegEye } from 'react-icons/fa6';

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
            <Paragraph>
              <div className="md:text-xl flex flex-col gap-8 items-start justify-start">
                <span className="text-secondary_dark dark:text-secondary_light text-3xl md:text-5xl font-bold block">
                  ¡Tu lealtad tiene recompensas!
                </span>
                <span>
                  Cada vez que uses nuestros servicios, acumulas puntos que puedes canjear por productos o usos de
                  máquinas. Además, como cliente fiel, participas en nuestra tómbola especial, donde puedes ganar
                  sorpresas y hasta servicios gratis.{' '}
                  <strong>¡Únete y deja que te sorprendamos mientras lavas con nosotros!</strong>
                </span>
              </div>
            </Paragraph>
            <ButtonContainer position="justify-center items-center w-full" distance="mt-12">
              <Button
                title={showFront ? 'Ver reverso' : 'Ver frente'}
                name="Voltear tarjeta de lealtad"
                width={'w-full md:w-[210px]'}
                onClick={handleFlip}
                variant="secondary"
                // icon={<FaRegEye />}
              />
              <Button
                title="Usos y Beneficios"
                name="Usos y Beneficios"
                width={'w-full md:w-[240px] lg:w-[280px]'}
                href="/usos-y-beneficios"
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

export default ProgramasDeLealtad;
