import { Paragraph, ParagraphContainer } from 'components';

export const VigenciaPuntos = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">8. VIGENCIA DE LOS PUNTOS.</h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            8.1. Los Puntos ganados tendrán una vigencia de 1 (un) año contado a partir del día en el que el Usuario los
            ganó, salvo que, en los términos y condiciones de una dinámica o promoción generada por la sucursal,
            cualquiera de las sucursales o en conjunto, se determine una vigencia específica para éstas.
          </Paragraph>
          <Paragraph>
            8.2. Los Puntos no usados dentro de la vigencia establecida se perderán y no serán acumulables o
            reembolsables.
          </Paragraph>
          <Paragraph>
            8.3. En caso de fallas en el sistema del Ecosistema del Programa de “Tarjeta de Recompensa”, se reserva la
            facultad discrecional de ajustar, modificar o compensar de forma enunciativa pero no limitativa: el monto de
            Puntos; vigencia del uso de Puntos; la equivalencia de Puntos a moneda nacional; restricciones; la mecánica,
            dinámica y/o promoción, según corresponda, sin que ello signifique un perjuicio o daño al Usuario, por lo
            que el Usuario renuncia a ejercer cualquier acción legal como demanda, querella o denuncia u otra naturaleza
            relacionados con el presente numeral.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
