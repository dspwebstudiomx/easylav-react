import { Container, Paragraph, ParagraphContainer, Section, TitleContainer } from 'components';

const Equipamiento = () => {
  return (
    <Section className="" id="equipamiento">
      <Container className="flex flex-col gap-4 md:gap-8 lg:gap-12">
        <TitleContainer title="Equipamiento" />
        <ParagraphContainer>
          <Paragraph>
            Nuestras lavadoras de última generación están diseñadas para brindarte el mejor cuidado y eficiencia.
            Gracias a su tecnología inteligente, pesan tu ropa y ajustan automáticamente el agua y el tiempo de lavado,
            optimizando el consumo y garantizando una limpieza profunda.
          </Paragraph>
          <Paragraph>
            Además, su potente centrifugado de 1200 rpm reduce la humedad de las prendas, facilitando un secado más
            rápido y delicado. Esto no solo protege las fibras de tu ropa, sino que también prolonga su vida útil,
            manteniéndola en perfectas condiciones por más tiempo.
          </Paragraph>
          <Paragraph>
            <span className="text-secondary_dark dark:text-secondary_light font-bold mr-2">
              Tecnología que cuida tu ropa y el planeta.
            </span>
            ¡Lava con confianza y tranquilidad!
          </Paragraph>
        </ParagraphContainer>
      </Container>
    </Section>
  );
};

export default Equipamiento;
