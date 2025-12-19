import { Paragraph, ParagraphContainer } from 'components';

export const Cuenta = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">3. CUENTA.</h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            3.1. El uso de su Cuenta y datos que proporcione para la participación en las Mecánicas es responsabilidad
            exclusiva del Usuario, por lo que le recomendamos que mantenga confidencialidad al respecto y no revele la
            información de sus datos registrados.
          </Paragraph>
          <Paragraph>
            3.2. El uso de su Cuenta es personal e intransferible, por lo que el Usuario no se encuentra facultado para
            ceder los datos de acceso al Programa.
          </Paragraph>
          <Paragraph>
            3.3. En caso de robo o pérdida de su “Tarjeta de Recompensa”, es obligación del Usuario informarlo al
            Programa a través de los Canales de Atención.
          </Paragraph>
          <Paragraph>
            3.4. El ingreso a la Cuenta será con una contraseña de un solo uso, la cual será proporcionada por el
            Programa a través de la información capturada al registrarse como cliente.
          </Paragraph>
          <Paragraph>
            3.5. Los puntos acumulados serán para uso y goce exclusivamente de la sucursal a la que acude. No son
            transferibles entre sucursales.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
