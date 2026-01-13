import { Paragraph, ParagraphContainer } from 'components';

export const Mecanicas = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">7. MECÁNICAS.</h2>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            7.1. Podrán participar en las Mecánicas y/o Dinámicas del Programa las personas físicas mayores de edad (+
            18 años).
          </Paragraph>
          <Paragraph>7.2. Los Puntos no pueden intercambiarse o canjearse por dinero en efectivo.</Paragraph>
          <article className="text-lg md:text-xl leading-relaxed text-wrap w-full text-dark dark:text-light">
            7.3. El Usuario podrá participar en el Programa a través de las siguientes mecánicas:
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>
                a) Mecánica base del Programa de “Tarjeta de Recompensa”: el Usuario podrá ganar y usar Puntos al
                adquirir Productos y/o Servicios de las sucursales participantes, (Aplican restricciones, revisar
                sucursales participantes) a través de sus Canales de Venta físicos.
              </li>
              <li>
                b) La mecánica para que el Usuario gane y use Puntos podrá estar limitada dependiendo a lo establecido
                por cada sucursal en sus términos y condiciones.
              </li>
              <li>
                c) Mecánica de Puntos extra/dobles: de tiempo en tiempo el Programa podrá desarrollar diferentes
                mecánicas para que los Usuarios ganen Puntos adicionales a los de la Mecánica base del Programa de
                lealtad. Estas mecánicas se regirán conforme a sus propios términos y condiciones.
              </li>
              <li>
                d) Mecánicas o dinámicas con causa: el Programa de lealtad podrá desarrollar mecánicas o dinámicas donde
                los usuarios puedan participar para contribuir y colaborar por una causa social.
              </li>
              <li>
                e) Las Mecánicas tendrán la vigencia, términos y condiciones que el Programa de “Tarjeta de recompensa”
                y/o las sucursales determinen para cada una de ellas.
              </li>
            </ul>
          </article>
        </div>
      </ParagraphContainer>
    </div>
  );
};
