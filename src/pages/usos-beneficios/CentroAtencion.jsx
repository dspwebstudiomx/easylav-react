import { ParagraphContainer } from 'components';

export const CentroAtencion = () => {
  return (
    <div className="mt-12">
      <ParagraphContainer>
        <h2 className="font-semibold text-secondary_dark dark:text-secondary_light">5. CENTRO DE ATENCIÓN.</h2>
        <div className="flex flex-col gap-8 ml-6">
          <article className="text-lg md:text-xl leading-relaxed text-wrap w-full text-dark dark:text-light">
            5.1. El Programa de “Tarjeta de Recompensa” pone a su disposición los siguientes medios de atención:
            <ul className="mt-6 ml-6 flex flex-col gap-4">
              <li>
                a) El WhatsApp 443 894 7493 de lunes a viernes de 7 a 21 horas, sábados, domingos, y días festivos de 8
                a 20 horas, los 365 días del año para atender temas referentes a su registro, información general del
                Programa, actualización de datos personales, aclaraciones y quejas.
              </li>
              <li>
                b) Redes sociales oficiales del Programa, para atender temas referentes a información general del
                Programa de “Tarjeta de Recompensa”.
              </li>
            </ul>{' '}
          </article>
        </div>
      </ParagraphContainer>
    </div>
  );
};
