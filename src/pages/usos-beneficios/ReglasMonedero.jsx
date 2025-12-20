import { Paragraph, ParagraphContainer } from 'components';

export const ReglasMonedero = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">
            11. REGLAS APLICABLES AL MONEDERO.{' '}
          </h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            11.1. Reglas para ganar Puntos.
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>
                a) El valor de los Puntos que el Usuario gane dependerá de lo establecido por cada sucursal en sus
                términos y condiciones.
              </li>
              <li>
                b) Los Usuarios tendrán un límite máximo de 5,000 Puntos para acumular en su Cuenta de conformidad con
                los presentes Términos y Condiciones del Programa de lealtad y la legislación aplicable.
              </li>
              <li>
                c) Los Usuarios tendrán un tope máximo para ganar Puntos por compra de Productos y/o Servicios de
                conformidad con los Términos y Condiciones de cada Aliado.
              </li>
              <li>
                d) Los Usuarios tendrán un tope máximo de transacciones diarias para ganar Puntos por compra de
                Productos y/o Servicios de conformidad con los Términos y Condiciones de cada sucursal.
              </li>
              <li>
                e) El Usuario podrá ganar Puntos i) al realizar una compra de los Productos y/o Servicios participantes
                y presentando su tarjeta física del Programa de “Tarjeta de recompensa” en los Canales de Venta de las
                sucursales.
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            11.2. Reglas para usar el Monedero.
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>
                a) El valor de los Puntos para comprar Productos y/o Servicios con cada sucursal será del 2% del total
                del consumo en los productos y/o servicios.
              </li>
              <li>
                b) El Usuario podrá hacer uso de su MONEDERO i) para adquirir Productos y/o Servicios con cada sucursal
                presentando su tarjeta física según sea aplicable con cada sucursal
              </li>
              <li>
                c) El monto del Monedero únicamente podrá ser usados por Productos y/o Servicios participantes con los
                Términos y Condiciones de cada Aliado y la legislación aplicable.
              </li>
              <li>
                d) El Programa podrá realizar de tiempo en tiempo modificaciones y/o cambios sustanciales y/o generales
                al valor y/o Mecánicas del monedero, sin que para esto sea necesario que notifique previamente al
                Usuario. Será la responsabilidad de éste estar al pendiente del valor de los Puntos dentro de las
                Plataformas.
              </li>
            </ul>
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
