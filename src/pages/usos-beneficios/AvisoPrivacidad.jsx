import { Paragraph, ParagraphContainer } from 'components';

export const AvisoPrivacidad = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">19. AVISO DE PRIVACIDAD.</h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            19.1. Para mayor información sobre el tratamiento de sus datos personales, el programa de “tarjeta de
            recompensa” de conformidad con las disposiciones de la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares, y las disposiciones que emanan de ella o se relacionan con la misma, pone a su
            disposición su aviso de privacidad integral en y en sus Plataformas.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
