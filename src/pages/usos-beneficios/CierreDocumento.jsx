import { Paragraph } from 'components';

export const CierreDocumento = () => {
  return (
    <div className="mt-20">
      <Paragraph>
        Cualquier controversia que deba resolverse en virtud del uso del Programa de lealtad y/o los servicios que
        deriven de la misma, deberá someterse a la jurisdicción de los Tribunales de la Ciudad de Morelia, Michoacán.
        renunciando a cualquier otra jurisdicción que pudiese corresponderle a la parte actora por su domicilio presente
        o futuro, o por cualquier otra causa.
      </Paragraph>
      <div className="my-12 flex flex-col gap-8">
        <p>Notas:</p>
        <ul>
          <li className="ml-12">
            1. La primera tarjeta es sin costo, en caso de pérdida, robo o extravío tendrá un costo de $50.00 pesos
            (Cincuenta pesos).
          </li>
        </ul>
      </div>
    </div>
  );
};
