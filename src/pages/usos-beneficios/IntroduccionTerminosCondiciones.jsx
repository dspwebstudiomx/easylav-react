import { Paragraph, ParagraphContainer } from 'components';
import { scrollToTop } from 'functions';
import { NavLink } from 'react-router-dom';

export const IntroduccionTerminosCondiciones = () => {
  return (
    <ParagraphContainer>
      {/* Introducción */}
      <Paragraph>
        Programa de recompensa de lealtad desarrollado y operado por EASYLAV® con domicilio en Laguna de Parras, 585 –
        A Colonia Ventura Puente, Morelia, Michoacán, C. P. 58020. Los presentes términos y condiciones generales tienen
        como objetivo establecer las reglas, términos y condiciones de participación, uso y aprovechamiento y
        restricciones del Programa de lealtad.
      </Paragraph>
      <Paragraph>
        Hacemos de su conocimiento que, al registrar su “Tarjeta de Recompensas”, usted está de acuerdo con participar
        en el mismo y, por ende, se entiende que usted ha leído estos Términos y Condiciones que rigen su uso,
        manifestando así estar enterado y en aceptación de los mismos. Si el Usuario no acepta los presentes Términos y
        Condiciones, deberá abstenerse de participar en el Programa de “Tarjeta de Recompensa” a través de su tarjeta
        física. Por lo anterior, le solicitamos de la manera más atenta revise este documento detenidamente.
      </Paragraph>
      <Paragraph>
        El programa de “Tarjeta de Recompensa” podrá realizar libremente, en cualquier momento y sin necesidad de previo
        aviso, modificaciones formales, procedimentales o sustanciales a los presentes Términos y Condiciones, estas
        incluyen, pero no se limitan a realizar correcciones, adiciones, mejoras o modificaciones al contenido,
        presentación, información, bases de datos y demás elementos del Programa de lealtad, por mencionar algunos (en
        adelante las “Actualizaciones”), siendo aplicables los Términos y Condiciones publicados en el sitio web{' '}
        <NavLink
          onClick={scrollToTop}
          className="font-semibold text-secondary_dark dark:text-secondary"
          to="/terminos-condiciones">
          www.easylav.mx/terminos-condiciones
        </NavLink>
      </Paragraph>
      <Paragraph>
        Usted está de acuerdo que aceptará las Actualizaciones, siempre que continúe participando en el Programa
        “Tarjeta de Recompensas”, por lo que no tendrá lugar ni derecho a ninguna reclamación o indemnización, ni que lo
        mismo implique reconocimiento de responsabilidad alguna a favor del Usuario.
      </Paragraph>
      <Paragraph></Paragraph>
      {/* Introducción */}
    </ParagraphContainer>
  );
};
