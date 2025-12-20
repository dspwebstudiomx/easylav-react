import { Paragraph, ParagraphContainer } from 'components';

export const SeguridadPrevencionFraudes = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">
            17. SEGURIDAD Y PREVENCIÓN DE FRAUDES.
          </h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            17.1. Todas las transacciones realizadas en el Programa de “Tarjeta de recompensa” son monitoreadas los
            mecanismos antifraude y podrán generar bloqueos automáticos, temporales (al alcanzar el límite máximo del
            Programa para acumular en su Cuenta, o bien, los límites especificados en los Términos y Condiciones de cada
            sucursal) o definitivos a las cuentas en caso de detectar comportamientos fraudulentos confirmados o
            sospechosos de fraude, así como actividades anormales o atípicas. Para efectos del presente numeral, se
            entenderán como Comportamientos Fraudulentos, de forma enunciativa mas no limitativa: acumulación de puntos
            de compras no personales, manipulación de información, aprovechamiento de mecanismos para la acumulación de
            puntos, transferencia de puntos de cuentas con sospecha de fraude.
          </Paragraph>
          <Paragraph>
            17.2. En caso de suspensión temporal o definitiva, el Usuario será contactado vía SMS al número telefónico
            que registró su Cuenta del Programa, en donde se le indicará el Centro de Atención que podrá contactar para
            aclarar su situación.
          </Paragraph>
          <Paragraph>
            17.3. Cada una de las sucursales participantes en el Programa determinará el comportamiento típico de sus
            Clientes para establecer reglas de recurrencia, velocidad, acumulación y uso de Puntos para sus Productos
            y/o Servicios.
          </Paragraph>
          <Paragraph>
            17.4. Una Cuenta de Usuario con estado de bloqueo no podrá acumular ni usar Puntos en el Programa de
            lealtad.
          </Paragraph>
          <Paragraph>
            17.5. Una Cuenta de Usuario bloqueado temporalmente podrá ser suspendida definitivamente a consideración del
            programa en caso de confirmar Comportamientos Fraudulentos.
          </Paragraph>
          <Paragraph>
            17.6. La suspensión definitiva del Usuario ocasionará la cancelación de todos los Puntos acumulados y/o
            pendientes por acumular.
          </Paragraph>
          <Paragraph>
            17.7. Basado en el nivel de riesgo detectado en transacciones de uso o cambio de Puntos, nuestros mecanismos
            antifraude podrían rechazar transacciones y/o bloquear cuentas.
          </Paragraph>
          <Paragraph>
            17.8. Una vez bloqueada la Cuenta de forma definitiva, el Usuario cuenta con 90 (noventa) días naturales
            para la aclaración de su situación en nuestro Centro de Atención. En caso de que la Cuenta no haya sido
            reclamada o el dictamen de esta solicitud sea improcedente, los Puntos acumulados en esta Cuenta serán
          </Paragraph>
          <Paragraph>
            17.8. Una vez bloqueada la Cuenta de forma definitiva, el Usuario cuenta con 90 (noventa) días naturales
            para la aclaración de su situación en nuestro Centro de Atención. En caso de que la Cuenta no haya sido
            reclamada o el dictamen de esta solicitud sea improcedente, los Puntos acumulados en esta Cuenta serán
            expirados.
          </Paragraph>
          <Paragraph>
            17.9. En caso de existir alguna pregunta, queja o aclaración respecto a algún bloqueo generado por nuestros
            mecanismos antifraude el Usuario podrá contactarse al Centro de Atención.
          </Paragraph>
          <Paragraph>
            17.10. “Tarjeta de Recompensa” se reserva el derecho de bloquear o suspender la cuenta de cualquier usuario
            que se descubra utilizando múltiples cuentas de forma indebida o que intente eludir las restricciones del
            servicio del Programa de lealtad mediante la creación de cuentas adicionales.
          </Paragraph>
          <Paragraph>
            17.11. Queda estrictamente prohibido el uso de múltiples cuentas con fines fraudulentos, abusivos o para
            manipular el sistema de cualquier manera.
          </Paragraph>
          <Paragraph>
            17.12. El comportamiento que conlleva a la suspensión o bloqueo de cuentas incluye, pero no se limita a:
            <ul className="mt-6 ml-6 flex flex-col gap-4 mb-6">
              <li>a)La creación de cuentas con información parcial, falsa o engañosa.</li>
              <li>
                b)El uso de múltiples cuentas para eludir cualquier tipo de sanción, suspensión o limitación impuesta en
                una cuenta por conductas atípicas o fraudulentas.
              </li>
              <li>
                c) Intentos de manipulación de servicios o funcionalidades del sistema a través de cuentas duplicadas.
              </li>
              <li>
                d) Cualquier otro comportamiento que sea considerado por Lealtad como fraude, abuso o daño directo o
                indirecto al Programa de lealtad conforme los presentes términos y condiciones.
              </li>
            </ul>
            <span>
              En caso de detectar actividades sospechosas relacionadas con múltiples cuentas, el programa tomará las
              medidas de seguridad y legales necesarias, que pueden incluir la suspensión permanente de todas las
              cuentas involucradas, así como hacerlo responsable del pago de daños y perjuicios ocasionados.
            </span>
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
