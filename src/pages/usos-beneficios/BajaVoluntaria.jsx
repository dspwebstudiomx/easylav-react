import { Paragraph, ParagraphContainer } from 'components';

export const BajaVoluntaria = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">16. BAJA VOLUNTARIA.</h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            16.1. En caso de que el Usuario desee dar de baja su Cuenta del Programa, podrá hacerlo por cualquiera de
            las siguientes opciones:
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>
                a) A través del Centro de Contacto, en donde se le autenticará, validando su identidad, para poder
                realizar dicha baja.
              </li>
              <li>
                b) A través del ejercicio del derecho de Cancelación de datos personales: El Usuario podrá solicitar la
                baja de su Cuenta y posterior eliminación/supresión de sus datos personales relacionados, como parte de
                la atención de sus derechos.
              </li>
            </ul>
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
