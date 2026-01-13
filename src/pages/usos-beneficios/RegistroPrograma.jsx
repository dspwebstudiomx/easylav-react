import { Paragraph, ParagraphContainer } from 'components';

export const RegistroPrograma = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">
          2. REGISTRO AL PROGRAMA “TARJETA DE RECOMPENSA”.
        </h2>
        <div className="flex flex-col gap-8 ml-6">
          <article className="text-lg md:text-xl leading-relaxed text-wrap w-full text-dark dark:text-light">
            2.1. Los canales actuales para registrarse al Programa son gratuitos y son los siguientes:
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>
                a) En las sucursales de su preferencia es donde se le proporcionará la Tarjeta Física, sujeto a
                disponibilidad. Dicha tarjeta deberá ser verificada para el uso de Puntos como método de pago siguiendo
                el proceso que se establece en el rubro “USO DE LA TARJETA FÍSICA” de los presentes Términos y
                Condiciones.
              </li>
              <li>b) A través de las Sucursales que tengan habilitado el registro en sus Canales de Venta.</li>
            </ul>{' '}
          </article>
          <Paragraph>
            2.2. Al realizar su registro, se entiende que los Usuarios han leído y aceptan los presentes Términos y
            Condiciones, así como el Aviso de Privacidad.
          </Paragraph>
          <article className="text-lg md:text-xl leading-relaxed text-wrap w-full text-dark dark:text-light">
            2.3. Para su registro al Programa, el Usuario deberá proporcionar los datos que se le soliciten de acuerdo
            con el canal de registro, los cuales podrán ser:
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>a) Nombre.</li>
              <li>b) Apellido Paterno y Materno</li>
              <li>c) Número de teléfono celular.</li>
              <li>d) Correo electrónico.</li>
              <li>e) Fecha de nacimiento.</li>
              <li>f) País y Estado de Nacimiento.</li>
              <li>g) Género.</li>
            </ul>
          </article>
          <article className="text-lg md:text-xl leading-relaxed text-wrap w-full text-dark dark:text-light">
            2.4. Impedimentos para su registro:
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>a) Ser menor de edad (-18 años).</li>
              <li>
                b) No proporcionar la información requerida para su registro o proporcionarla de forma incompleta o
                incorrecta.
              </li>
              <li>c) Personas morales.</li>
            </ul>
          </article>
        </div>
      </ParagraphContainer>
    </div>
  );
};
