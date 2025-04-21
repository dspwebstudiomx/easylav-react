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
  TituloYDescripcion,
  Paragraph,
  ParagraphContainer,
} from 'components';

// Estructura
const Franquicias = () => {
  return (
    <>
      <SEOFriendly
        title="Términos y Condiciones | Easylav: Tu lavandería ideal"
        description="Conoce nuestros términos y condiciones para el uso de los servicios de Easylav. Descubre cómo garantizamos la calidad y transparencia en nuestros servicios."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="términos y condiciones Easylav, condiciones de uso Easylav, lavandería ideal, Easylav términos"
        url="https://easylav.x/terminos-condiciones"
        ogImage={CatedralMorelia}
        ogImageAlt="Catedral de Morelia"
        ogType="website"
      />
      <PageLayout>
        <BorderLeft>
          <TitleH1 className={''} align="left">
            Terminos y Condiciones
          </TitleH1>
        </BorderLeft>
        {/* Columna 1 */}
        <article id="terminos-condiciones" className={'mt-12 text-lg'}>
          <ParagraphContainer>
            {/* Introducción */}
            <TituloYDescripcion title="1. Introducción">
              <Paragraph>
                Bienvenido a <strong className="dark:text-secondary_light">Easylav</strong>. Al utilizar nuestro sitio
                web y servicios, aceptas los términos y condiciones descritos en este documento. Por favor, léelos
                detenidamente antes de continuar.
              </Paragraph>
            </TituloYDescripcion>
            {/* Introducción */}

            {/* Uso del sitio web */}
            <TituloYDescripcion title="2. Uso del sitio web">
              <Paragraph>El uso de nuestro sitio web está sujeto a las siguientes condiciones:</Paragraph>
              <ul className="list-disc pl-12 flex flex-col gap-4">
                <li>No debes utilizar el sitio para actividades ilegales o no autorizadas.</li>
                <li>Debes proporcionar información precisa y actualizada al registrarte o realizar pedidos.</li>
                <li>Nos reservamos el derecho de suspender o cancelar tu acceso si incumples estos términos.</li>
              </ul>
            </TituloYDescripcion>
            {/* Uso del sitio web */}

            {/* Servicios ofrecidos */}
            <TituloYDescripcion title="3. Servicios ofrecidos">
              <Paragraph>
                <strong className="dark:text-secondary_light">Easylav</strong> ofrece servicios de lavandería, planchado
                y tintorería. Nos esforzamos por garantizar la calidad de nuestros servicios, pero no nos hacemos
                responsables de:
              </Paragraph>
              <ul className="list-disc pl-12 flex flex-col gap-4">
                <li>Daños causados por el desgaste normal de las prendas.</li>
                <li>Prendas que no cumplan con las instrucciones de cuidado proporcionadas por el fabricante.</li>
                <li>Retrasos causados por circunstancias fuera de nuestro control.</li>
              </ul>
            </TituloYDescripcion>
            {/* Servicios ofrecidos */}

            {/* Pagos y reembolsos */}
            <TituloYDescripcion title="4. Pagos y reembolsos">
              <Paragraph>
                Los pagos deben realizarse en el momento de contratar nuestros servicios. En caso de reembolsos, estos
                se procesarán según nuestra política de devoluciones, disponible en nuestro sitio web.
              </Paragraph>
            </TituloYDescripcion>
            {/* Pagos y reembolsos */}

            {/* Modificaciones a los términos */}
            <TituloYDescripcion title="5. Modificaciones a los términos">
              <Paragraph>
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Te
                recomendamos revisar esta página periódicamente para estar al tanto de los cambios.
              </Paragraph>
            </TituloYDescripcion>
            {/* Modificaciones a los términos */}

            {/* Contacto */}
            <TituloYDescripcion title="6. Contacto">
              <Paragraph>
                Si tienes dudas sobre nuestras Políticas de Cookies o deseas más información, contáctanos en:
              </Paragraph>
              <ul className="pl-6 flex flex-col gap-2 text-dark dark:text-light font-normal text-lg">
                <li className="list-disc pl-2 text-secondary_dark dark:text-secondary_light">
                  <strong className="dark:text-secondary_light">Email: </strong>
                  <a href="mailto:contacto@easylav.mx" className="text-dark dark:text-light">
                    contacto@easylav.mx
                  </a>
                </li>
                <li className="list-disc pl-2 text-secondary_dark dark:text-secondary_light">
                  <strong className="dark:text-secondary_light">Teléfono: </strong>
                  <a href="tel:+524435200593" className="text-dark dark:text-light">
                    +52 44 320 0593
                  </a>
                </li>
                <li className="list-disc pl-2 text-secondary_dark dark:text-secondary_light">
                  <strong className="dark:text-secondary_light">Dirección: </strong>
                  <a
                    href="https://maps.app.goo.gl/cPGL1pq7w5AxUsAe6"
                    target="_blank"
                    title="ver mapa"
                    className="text-dark dark:text-light">
                    Av Francisco I. Madero Ote 2162, Isaac Arriaga, 58210 Morelia, Mich.
                  </a>
                </li>
              </ul>
            </TituloYDescripcion>
            {/* Contacto */}
          </ParagraphContainer>
        </article>
        {/* Columna 1 */}
      </PageLayout>
    </>
  );
};

export default Franquicias;
