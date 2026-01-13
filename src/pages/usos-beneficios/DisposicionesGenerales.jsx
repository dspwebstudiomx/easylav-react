import { Paragraph, ParagraphContainer } from 'components';

export const DisposicionesGenerales = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">21. DISPOSICIONES GENERALES.</h2>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            21.1. El programa de “Tarjeta de Recompensa” se obliga a cumplir con sus compromisos y obligaciones asumidas
            según estos Términos y Condiciones, siempre y cuando el Usuario cumpla con todos los compromisos y
            obligaciones adquiridos y señalados en el presente documento y en los Términos y Condiciones que se
            comuniquen para cada Mecánica promocional.
          </Paragraph>
          <Paragraph>
            21.2. El programa de “Tarjeta de recompensa” se reserva el derecho, a su exclusiva discreción, y sin
            necesidad de aviso o notificación al Usuario para: (i) eliminar total o parcialmente lo relativo a los
            Términos y Condiciones del Programa de lealtad; y, (ii) descontinuar o dejar de publicar sin responsabilidad
            alguna.
          </Paragraph>
          <Paragraph>
            21.3. La inactividad por parte del programa al ejercicio de cualquier derecho o acción derivados de los
            presentes Términos y Condiciones, en ningún momento deberá interpretarse como renuncia a dichos derechos o
            acciones.
          </Paragraph>
          <Paragraph>
            21.4. Los presentes Términos y Condiciones están sujetos y serán interpretados de acuerdo con la legislación
            aplicable vigente en la República Mexicana.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
