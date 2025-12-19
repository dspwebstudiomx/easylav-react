import { Paragraph, ParagraphContainer } from 'components';

const puntosReglas = [
  {
    id: 1,
    texto:
      '10.1. El Programa de lealtad única y exclusivamente puede utilizarse para que el Usuario pueda consultar y, en su caso, ganar, y/o usar sus Puntos para adquirir Productos y/o Servicios participantes ofrecidos por las sucursales; es por ello que, cualquier otro uso distinto a los establecidos en los presentes Términos y Condiciones se considerará como una violación a estos.',
  },
  {
    id: 2,
    texto:
      '10.2. Cada cliente será el único facultado para tener acceso a la información de su Cuenta del Programa mediante al empleada en turno de la sucursal; para consultas en el Centro de Atención se deberá comunicar desde el teléfono registrado al Programa de “Tarjeta de recompensa”.',
  },
  {
    id: 3,
    texto:
      '10.3. En caso de que el Usuario se comunique al Centro de Atención desde un número celular diferente al registrado en el Programa, se le enviará una autenticación vía SMS o WhatsApp para validar su identidad y que se trata del Usuario registrado en el Programa.',
  },
  {
    id: 4,
    texto:
      '10.4. El programa de “Tarjeta de recompensa” estará facultado para cancelar o restringir a los Usuarios si detecta violación de estos Términos y Condiciones. Entre las conductas indebidas se incluyen de manera enunciativa y no limitativa: (i) Darle al Programa cualquier otro uso distinto al previsto en estos Términos y Condiciones; (ii) Utilizar mecanismos de cualquier naturaleza para de manera directa o indirecta extraer, manipular o eliminar cualquier información contenida en las base de datos; (iii) Alterar el contenido del Programa de lealtad; (iv) Recopilar y/o utilizar las fotografías, descripciones, marcas, lemas o logos de los Productos y/o Servicios, así como cualquier banner promocional que se coloque dentro de las Plataformas y/o redes sociales oficiales del Programa de; y (v) cualquier otra actividad que el Programa considere motivo justo para dar de baja, suspender, cancelar o restringir el uso del Programa de lealtad por parte del Usuario.',
  },
  {
    id: 5,
    texto:
      '10.5. Adicional a lo anterior, el Programa podrá tomar las acciones legales que considere idóneas contra el Usuario para garantizar el correcto funcionamiento del Programa de “Tarjeta de Recompensa”',
  },
];

export const ReglasParticipacion = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">
            10. REGLAS DE PARTICIPACIÓN EN EL PROGRAMA DE LEALTAD.
          </h2>
        </Paragraph>
        <div id="puntos-reglas-participacion" className="flex flex-col gap-8 ml-6">
          {puntosReglas.map((punto) => (
            <Paragraph key={punto.id}>{punto.texto}</Paragraph>
          ))}
        </div>
      </ParagraphContainer>
    </div>
  );
};
