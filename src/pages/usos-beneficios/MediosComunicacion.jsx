import { Paragraph, ParagraphContainer } from 'components';

export const MediosComunicacion = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">6. MEDIOS DE COMUNICACIÓN.</h2>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            6.1. Las comunicaciones que se le efectúen serán principalmente electrónicas, pudiendo: (i) contactarlo vía
            correo electrónico; (ii) enviarle notificaciones mediante las Plataformas donde el Programa de “Tarjeta de
            Recompensa” tenga presencia; o bien (iii) contactarlo vía mensaje de texto (SMS) y/o WhatsApp.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
