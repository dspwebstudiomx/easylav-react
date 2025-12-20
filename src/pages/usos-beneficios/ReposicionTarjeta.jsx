import { Paragraph, ParagraphContainer } from 'components';

export const ReposicionTarjeta = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">
            14. REPOSICIÓN DE TARJETA DEL PROGAMA DE LEALTAD.
          </h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            14.1. En caso de reposición de Tarjeta física, el Usuario podrá solicitarla con costo en cualquier Sucursal
            participante de la República Mexicana debiendo estar registrado en dicha sucursal.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
