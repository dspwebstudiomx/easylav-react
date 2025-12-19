import { Paragraph, ParagraphContainer } from 'components';

export const UsoTarjetaFisica = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">4. USO DE LA TARJETA FÍSICA.</h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            4.1. Las Tarjetas Físicas son gratuitas solo en la primera ocasión y se proporcionan posterior al registro
            de los datos del cliente. O al solicitar por primera vez si es que ya está dado de alta en la base de la
            sucursal.
          </Paragraph>
          <Paragraph>
            4.2. El Usuario podrá tener una Tarjeta Física, la cuales estará vinculada siempre y cuando coincidan los
            datos proporcionados en el registro correspondiente.
          </Paragraph>
          <Paragraph>
            4.3. Para poder usar Puntos a través de las Tarjetas, el Usuario debe cumplir con un proceso de verificación
            a través de los canales de atención siguientes:
            <ul className="mt-6 ml-12 flex flex-col gap-4">
              <li>a) La tarjeta debe de estar dada de alta y asignada a un solo cliente en específico.</li>
              <li>
                b) Se debe presentar en físico la “Tarjeta de Recompensa” para poder leer la información de la banda
                magnética.
              </li>
              <li>
                c) En caso de reemplazo el cliente deberá realizar el pago previamente de la tarjeta nueva, para que sea
                solicitada y sea vinculada a la cuenta.
              </li>
            </ul>
            <br />
            <span className="ml-6">
              La verificación aplicará tanto para registro de nuevo usuario como para el reemplazo de Tarjeta.
            </span>
          </Paragraph>
          <Paragraph>
            4.4. Las Tarjetas son personales e intransferibles, su uso es responsabilidad del Usuario del Programa de
            lealtad.
          </Paragraph>
          <Paragraph>
            4.5. Es responsabilidad del Usuario mantener y cuidar la banda magnética que contiene su Tarjetas.
          </Paragraph>
          <Paragraph>
            4.6. El Usuario asume la responsabilidad total por uso de su Tarjeta, en caso de robo o extravío deberá
            reportarlo a la sucursal donde fue otorgada. El reporte no implica la liberación de su responsabilidad.
          </Paragraph>
          <Paragraph>
            4.7. La Tarjeta es propiedad exclusiva del Programa de “Tarjeta de Recompensa”, reservándose este último el
            derecho de solicitar su devolución, revocarla o cancelarla en cualquier momento por así convenir a sus
            intereses. El Usuario renuncia expresamente al ejercicio de cualquier acción por tal motivo.
          </Paragraph>
          <Paragraph>
            4.8. El Programa de “Tarjeta de Recompensa” no será responsable en ningún momento de reembolsar al Usuario
            cantidad de Puntos derivada del mal uso que se dé a la Tarjeta.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
