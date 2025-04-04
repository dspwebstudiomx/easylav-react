import { Container, Paragraph, ParagraphContainer, Section } from 'components';

const ProgramasDeLealtad = () => {
  return (
    <Section id="quienes-somos" className="bg-light dark:bg-dark h-auto">
      <Container className="mx-auto flex-col gap-20" id="quienes-somos-contenedor">
        {/* <TitleContainer title="Programas de Lealtad" /> */}
        <ParagraphContainer>
          <Paragraph>
            <div className="text-2xl">
              <span className="text-secondary_dark text-3xl font-bold">¡Tu lealtad tiene recompensas!</span> Cada vez
              que uses nuestros servicios, acumulas puntos que puedes canjear por productos o usos de máquinas. Además,
              como cliente fiel, participas en nuestra tómbola especial, donde puedes ganar sorpresas y hasta servicios
              gratis. ¡Únete y deja que te sorprendamos mientras lavas con nosotros!
            </div>
          </Paragraph>
        </ParagraphContainer>
      </Container>
    </Section>
  );
};

export default ProgramasDeLealtad;
