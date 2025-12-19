import { Paragraph, ParagraphContainer } from 'components';

export const FallecimientoUsuario = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">9. FALLECIMIENTO DEL USUARIO.</h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            9.1. Los Puntos del Usuario fallecido se cancelarán y no podrán ser transferidos a ningún otro Usuario. No
            serán válidas las reclamaciones que busquen adjudicarse dichos Puntos, conforme a las reglas pactadas en
            estos Términos y Condiciones.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
