/*
  TerminosCondiciones.jsx - Términos y condiciones de Easylav
  =====================================
  Creado por : Daniel Pérez
  Fecha: 2024-09-02
  Descripción: Este componente muestra los términos y condiciones de uso del sitio web de Easylav. Incluye secciones sobre el uso del sitio, servicios ofrecidos, pagos y reembolsos, modificaciones a los términos y contacto.
  Licencia: Este código es parte del proyecto Easylav y está sujeto a la licencia del proyecto.
*/

// Importaciones
import { CatedralMorelia } from 'assets';
import {
  BorderLeft,
  PageLayout,
  SEOFriendly,
  TitleH1,
  // TituloYDescripcion,
  Paragraph,
  ParagraphContainer,
} from 'components';
import { Glosario } from './Glosario';
import { RegistroPrograma } from './RegistroPrograma';
import { Cuenta } from './Cuenta';
import { UsoTarjetaFisica } from './UsoTarjetaFisica';
import { CentroAtencion } from './CentroAtencion';
import { MediosComunicacion } from './MediosComunicacion';
import { Mecanicas } from './Mecanicas';
import { VigenciaPuntos } from './VigenciaPuntos';
import { FallecimientoUsuario } from './FallecimientoUsuario';
import { ReglasParticipacion } from './ReglasParticipacion';

// Estructura
const TerminosCondiciones = () => {
  return (
    <>
      <SEOFriendly
        title="Programa de Lealtad | Easylav: Tu lavandería ideal"
        description="Descubre los términos y condiciones del Programa de Lealtad de Easylav. Aprende cómo obtener y usar tu Tarjeta de Recompensa para ganar puntos y beneficios exclusivos en nuestras lavanderías en Morelia y León."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="Programa de Lealtad Easylav, Términos y Condiciones, Tarjeta de Recompensa, Lavandería en Morelia, Lavandería en León"
        url="https://easylav.x/terminos-condiciones"
        ogImage={CatedralMorelia}
        ogImageAlt="Catedral de Morelia"
        ogType="website"
      />
      <PageLayout>
        <BorderLeft>
          <TitleH1 className={''} align="left">
            TERMINOS Y CONDICIONES GENERALES DEL PROGRAMA “TARJETA DE LEALTAD” DE EASYLAV®
          </TitleH1>
        </BorderLeft>
        {/* Columna 1 */}
        <article id="terminos-condiciones" className={'mt-12 text-lg'}>
          <ParagraphContainer>
            {/* Introducción */}
            <Paragraph>
              Programa de recompensa de lealtad desarrollado y operado por EASYLAV® con domicilio en Laguna de Parras,
              585 – A Colonia Ventura Puente, Morelia, Michoacán, C. P. 58020. Los presentes términos y condiciones
              generales tienen como objetivo establecer las reglas, términos y condiciones de participación, uso y
              aprovechamiento y restricciones del Programa de lealtad.
            </Paragraph>
            <Paragraph>
              Hacemos de su conocimiento que, al registrar su “Tarjeta de Recompensas”, usted está de acuerdo con
              participar en el mismo y, por ende, se entiende que usted ha leído estos Términos y Condiciones que rigen
              su uso, manifestando así estar enterado y en aceptación de los mismos. Si el Usuario no acepta los
              presentes Términos y Condiciones, deberá abstenerse de participar en el Programa de “Tarjeta de
              Recompensa” a través de su tarjeta física. Por lo anterior, le solicitamos de la manera más atenta revise
              este documento detenidamente.
            </Paragraph>
            <Paragraph>
              El programa de “Tarjeta de Recompensa” podrá realizar libremente, en cualquier momento y sin necesidad de
              previo aviso, modificaciones formales, procedimentales o sustanciales a los presentes Términos y
              Condiciones, estas incluyen, pero no se limitan a realizar correcciones, adiciones, mejoras o
              modificaciones al contenido, presentación, información, bases de datos y demás elementos del Programa de
              lealtad, por mencionar algunos (en adelante las “Actualizaciones”), siendo aplicables los Términos y
              Condiciones publicados en el sitio web{' '}
              <a
                className="font-semibold text-secondary_dark dark:text-secondary"
                href="/terminos-condiciones"
                target="_blank">
                www.easylav.mx/terminos-condiciones
              </a>
            </Paragraph>
            <Paragraph>
              Usted está de acuerdo que aceptará las Actualizaciones, siempre que continúe participando en el Programa
              “Tarjeta de Recompensas”, por lo que no tendrá lugar ni derecho a ninguna reclamación o indemnización, ni
              que lo mismo implique reconocimiento de responsabilidad alguna a favor del Usuario.
            </Paragraph>
            <Paragraph></Paragraph>
            <Glosario />
            <RegistroPrograma />
            <Cuenta />
            <UsoTarjetaFisica />
            <CentroAtencion />
            <MediosComunicacion />
            <Mecanicas />
            <VigenciaPuntos />
            <FallecimientoUsuario />
            <ReglasParticipacion />
            {/* Introducción */}
          </ParagraphContainer>
          <h4 className="text-center w-full mt-12">Última actualización: 24 de abril de 2025</h4>
        </article>
        {/* Columna 1 */}
      </PageLayout>
    </>
  );
};

export default TerminosCondiciones;
