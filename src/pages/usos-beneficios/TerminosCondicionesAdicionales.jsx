import { Paragraph, ParagraphContainer } from 'components';

export const TerminosCondicionesAdicionales = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">
            18. TÉRMINOS Y CONDICIONES ADICIONALES.
          </h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            18.1. El Programa de “Tarjeta de Recompensa” podrá aplicar términos y condiciones adicionales para ciertas
            Mecánicas temporales. Estos términos y condiciones adicionales se comunicarán al Usuario mediante las
            Plataformas o según apliquen para cada Usuario.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
