import { Container, Paragraph, ParagraphContainer, Section } from 'components';

const ProgramasDeLealtad = () => {
  return (
    <Section id="quienes-somos" className="bg-light dark:bg-dark h-auto">
      <Container className="mx-auto flex-col gap-20" id="quienes-somos-contenedor">
        {/* <TitleContainer title="Programas de Lealtad" /> */}
        <ParagraphContainer>
          <Paragraph>
            <div className="text-xl flex flex-col gap-8 items-start justify-start">
              <span className="text-secondary_dark dark:text-secondary_light text-2xl font-bold block">
                ¡Tu lealtad tiene recompensas!
              </span>
              <span>
                Cada vez que uses nuestros servicios, acumulas puntos que puedes canjear por productos o usos de
                máquinas. Además, como cliente fiel, participas en nuestra tómbola especial, donde puedes ganar
                sorpresas y hasta servicios gratis. ¡Únete y deja que te sorprendamos mientras lavas con nosotros!
              </span>
            </div>
          </Paragraph>
        </ParagraphContainer>
      </Container>
    </Section>
  );
};

export default ProgramasDeLealtad;
