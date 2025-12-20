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
import { ReglasMonedero } from './ReglasMonedero';
import { EliminacionCuentas } from './EliminacionCuentas';
import { TransferenciaPuntos } from './TransferenciaPuntos';
import { ReposicionTarjeta } from './ReposicionTarjeta';
import { IntroduccionTerminosCondiciones } from './IntroduccionTerminosCondiciones';
import { ObligacionesUsuario } from './ObligacionesUsuario';
import { BajaVoluntaria } from './BajaVoluntaria';
import { SeguridadPrevencionFraudes } from './SeguridadPrevencionFraudes';

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
          <IntroduccionTerminosCondiciones />
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
          <ReglasMonedero />
          <EliminacionCuentas />
          <TransferenciaPuntos />
          <ReposicionTarjeta />
          <ObligacionesUsuario />
          <BajaVoluntaria />
          <SeguridadPrevencionFraudes />
          <h4 className="text-center w-full mt-12 text-lg">Última actualización: 18 de diciembre de 2025</h4>
        </article>
        {/* Columna 1 */}
      </PageLayout>
    </>
  );
};

export default TerminosCondiciones;
