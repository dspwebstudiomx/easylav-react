import { Paragraph, ParagraphContainer } from 'components';

export const ObligacionesUsuario = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <Paragraph>
          <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">
            {`15. OBLIGACIONES DEL USUARIO DEL PROGRAMA DE “TARJETA DE RECOMPENSA".`}
          </h2>
        </Paragraph>
        <div className="flex flex-col gap-8 ml-6">
          <Paragraph>
            15.1. El Usuario se obliga a:
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>a) Utilizar el Programa de conformidad con los presentes Términos y Condiciones.</li>
              <li>
                b) Proporcionar información verdadera, exacta y legítima al momento que le sea solicitada y durante su
                participación en el Programa.
              </li>
              <li>c) Abstenerse de proporcionar información de la cual el Usuario no sea titular.</li>
              <li>
                d) Abstenerse de copiar, reenviar, reproducir, reutilizar, vender, transmitir, distribuir, descargar,
                otorgar licencia, modificar, publicar o usar de alguna otra manera el contenido del Programa para fines
                públicos o comerciales.
              </li>
              <li>e) Abstenerse de transferir a terceros su Tarjeta.</li>
              <li>
                f) Abstenerse de acceder y/o usar el Programa para realizar actos contrarios a la moral, al orden
                público, a las buenas costumbres o actos o hechos ilícitos en contra del programa, sus empleados,
                directivos, clientes, proveedores o terceros, así como apegarse al cumplimiento de las disposiciones
                legales aplicables.
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            15.2. Cualquier comportamiento y/o actividad que el Programa detecte y considere irregular o sospechosa,
            dará al Programa la facultad de: (i) suspender o bloquear al Usuario que realice dicho comportamiento y/o
            actividad; (ii) eliminar la posibilidad de seguir participando en el Programa de lealtad o tomar la medida
            necesaria.
          </Paragraph>
        </div>
      </ParagraphContainer>
    </div>
  );
};
