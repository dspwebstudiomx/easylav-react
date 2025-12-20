import { Paragraph, ParagraphContainer } from 'components';

export const EliminacionCuentas = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">12. ELIMINACIÓN DE CUENTAS.</h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            12.1. De Usuarios del Programa.
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>
                a) Podrán ser eliminadas aquellas Cuentas en que el Usuario haya proporcionado información incompleta,
                incorrecta, o en los casos en que no pueda ser verificada durante el proceso de registro o
                actualizaciones posteriores.
              </li>
              <li>
                b) Hayan tenido acciones consideradas fraudulentas o actividades inusuales conforme lo establecido en el
                numeral 17 de los presentes Términos y Condiciones del Programa.
              </li>
              <li>
                c) Podrán ser eliminadas aquellas Cuentas que no hayan tenido al menos una transacción o actividad en
                doce meses.
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            12.2. Usuarios con registros repetidos.
            <br />
            <br />
            En caso de que el Usuario se encuentre en el escenario de contar con 2 o más cuentas, derivado de haber
            realizado más de un registro con datos incompletos, incorrectos, contar con información que no pudo ser
            verificada, o en consecuencia de la actualización de su información genere un segundo registro, así como
            haber realizado 2 registros con un mismo número telefónico:
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>
                12.2.1. El Usuario podrá solicitar la eliminación de la cuenta que no esté asociada, o que ya no se
                encuentre relacionada a su número telefónico, y conservar la cuenta que se encuentre en cumplimiento con
                los presentes Términos y Condiciones.
              </li>
              <li>
                12.2.2. Previa verificación y en cumplimiento a las regulaciones vigentes, el Programa podrá realizar
                las actividades necesarias para la eliminación de los Cuentas repetidas, y mantener solo aquellas
                Cuentas que cumplan con las verificaciones requeridas, incluyendo datos correctos, completos y
                verificables.
              </li>
            </ul>
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
