import PageLayout from '../../components/layout/PageLayout';
import TitleH1 from '../../components/text/TitleH1';
import { BorderLeft, Paragraph, ParagraphContainer, SEOFriendly, TitleH2, TituloYDescripcion } from 'components';
import { CatedralMorelia as image } from 'assets';

const PoliticaPrivacidad = () => {
  return (
    <>
      <SEOFriendly
        title="Política de Privacidad | Easylav - Lavanderías en Morelia y León"
        description="Conoce nuestra Política de Privacidad en Easylav. Descubre cómo protegemos tus datos personales y garantizamos la seguridad de tu información."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="política de privacidad, privacidad Easylav, protección de datos, seguridad de información, privacidad de usuarios, Easylav privacidad"
        url="https://easylav.mx/politica-privacidad"
        ogImage={image}
        ogImageAlt="Política de Privacidad de Easylav"
        ogType="article"
      />
      <PageLayout>
        <div className="mx-auto mb-20 flex gap-6 flex-col dark:text-light text-lg text-balance">
          <BorderLeft>
            <TitleH1 align="justify-start">Política de Privacidad</TitleH1>
          </BorderLeft>
          <ParagraphContainer>
            <Paragraph>
              En <strong className="dark:text-secondary_light">easylav.mx</strong>, respetamos la privacidad de nuestros
              usuarios y nos comprometemos a proteger su información personal. Esta política de privacidad explica cómo
              recopilamos, usamos y compartimos su información, en cumplimiento con las normativas de protección de
              datos aplicables en México (Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares), Europa (Reglamento General de Protección de Datos, RGPD) y Estados Unidos (California
              Consumer Privacy Act, CCPA, y otras regulaciones estatales).
            </Paragraph>
            <Paragraph>
              Al utilizar nuestro sitio web, aceptas la recopilación y el uso de tu información de acuerdo con esta
              política.
            </Paragraph>
            <TituloYDescripcion title="1. Información que recopilamos">
              <Paragraph>
                Recopilamos diferentes tipos de información personal para ofrecerle el mejor servicio. Esto incluye:
              </Paragraph>
              <ul className="pl-6 flex flex-col gap-6">
                <li>
                  <strong className="dark:text-secondary_light">1.1 Información de contacto:</strong>
                  <br /> Nombre, dirección de correo electrónico, número de teléfono, etc.
                </li>
                <li>
                  <strong className="dark:text-secondary_light">1.2 Información de pago:</strong>
                  <br /> Datos de tarjetas de crédito o débito, información de cuentas bancarias, etc.
                </li>
                <li>
                  <strong className="dark:text-secondary_light">1.3 Información de uso:</strong>
                  <br /> Datos sobre cómo interactúas con nuestro sitio web y servicios, incluyendo direcciones IP, tipo
                  de navegador, páginas visitadas y tiempo dedicado a cada página.
                </li>
              </ul>
            </TituloYDescripcion>
            <TituloYDescripcion title="2. Uso de la información">
              <Paragraph>Utilizamos su información personal para diversas finalidades:</Paragraph>
              <ul className="list-disc pl-12 flex flex-col gap-4">
                <li>Procesar sus pedidos de lavandería y gestionar la entrega y recogida.</li>
                <li>Ofrecer servicios personalizados y mejorar su experiencia en nuestro sitio web.</li>
                <li>Realizar análisis de uso para identificar áreas de mejora.</li>
                <li>Enviar comunicaciones, promociones y ofertas personalizadas.</li>
                <li>Cumplir con obligaciones legales y regulatorias.</li>
              </ul>
            </TituloYDescripcion>
            <TituloYDescripcion title="3. Uso de herramientas de terceros">
              <Paragraph>
                Nuestro sitio web utiliza tecnologías avanzadas para mejorar su experiencia y ayudarnos a entender mejor
                sus necesidades:
              </Paragraph>
              <article className="xl:pl-20 flex flex-col gap-6">
                <TitleH2>¿Qué es Google Analytics?</TitleH2>
                <Paragraph>
                  Google Analytics es una herramienta proporcionada por Google que nos ayuda a entender cómo interactúan
                  los usuarios con nuestro sitio web. Por ejemplo:
                </Paragraph>
                <ul className="list-disc pl-12 flex flex-col gap-4">
                  <li>Nos permite ver cuántas personas visitan nuestro sitio.</li>
                  <li>Identifica las páginas más populares y el tiempo que los usuarios pasan en ellas.</li>
                  <li>Analiza desde qué dispositivos acceden (como teléfonos o computadoras).</li>
                </ul>
                <Paragraph>
                  Google Analytics utiliza cookies y otros identificadores para recopilar esta información. Estos datos
                  son completamente anónimos y no están vinculados directamente a información personal como tu nombre o
                  correo electrónico.
                </Paragraph>
              </article>
              <article className="xl:pl-20 flex flex-col gap-6">
                <TitleH2>¿Qué es Facebook Pixel?</TitleH2>
                <Paragraph>
                  Facebook Pixel es otra herramienta, proporcionada por Meta (la empresa detrás de Facebook), que sirve
                  para analizar y optimizar nuestras campañas publicitarias. Funciona de la siguiente manera:
                </Paragraph>
                <ul className="list-disc pl-6 xl:pl-12 flex flex-col gap-4">
                  <li>
                    Rastrea si los usuarios interactúan con los anuncios que mostramos en plataformas como Facebook o
                    Instagram.
                  </li>
                  <li>Ayuda a personalizar anuncios basados en los intereses del usuario.</li>
                  <li>
                    Nos permite medir el éxito de nuestras campañas publicitarias al saber, por ejemplo, cuántas
                    personas visitaron nuestro sitio después de hacer clic en un anuncio.
                  </li>
                </ul>
                <Paragraph>
                  Facebook Pixel también utiliza cookies y otros métodos de rastreo. Aunque no recolecta datos
                  personales directamente, es posible que vincule tu actividad con tu cuenta de Facebook.
                </Paragraph>
              </article>
            </TituloYDescripcion>
            <Paragraph>
              <strong className="dark:text-secondary_light">Nota: </strong>Puede optar por limitar el uso de estas
              herramientas ajustando las preferencias de cookies en su navegador.
            </Paragraph>
            <TituloYDescripcion title="4. Compartición de la información">
              <Paragraph>Solo compartimos su información en los siguientes casos:</Paragraph>
              <ul className="list-disc pl-6 xl:pl-12 flex flex-col gap-4">
                <li>
                  Con proveedores de servicios que nos ayudan en la operación de nuestro negocio, como herramientas de
                  marketing.
                </li>
                <li>
                  Para cumplir con obligaciones legales, regulaciones gubernamentales o responder a demandas legales.
                </li>
              </ul>
            </TituloYDescripcion>
            <TituloYDescripcion title="5. Seguridad de la información">
              <Paragraph>
                Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger su información
                personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción.
              </Paragraph>
              <Paragraph>
                <strong className="dark:text-secondary_light">Nota: </strong> Sin embargo, ningún método de transmisión
                por Internet o almacenamiento electrónico es 100% seguro. Por lo tanto, no podemos garantizar su
                seguridad absoluta.
              </Paragraph>
            </TituloYDescripcion>
            <TituloYDescripcion title="6. Derechos de los usuarios">
              <Paragraph>Tienes derechos sobre tu información personal, incluyendo:</Paragraph>
              <ul className="list-disc pl-6 xl:pl-12 flex flex-col gap-4">
                <li>
                  {' '}
                  <strong className="dark:text-secondary_light">Acceso: </strong>Puedes solicitar una copia de la
                  información personal que tenemos sobre ti.
                </li>
                <li>
                  <strong className="dark:text-secondary_light">Rectificación: </strong>Si crees que tu información es
                  incorrecta o incompleta, puedes pedirnos que la corrijamos.
                </li>
                <li>
                  <strong className="dark:text-secondary_light">Cancelación: </strong>Puedes solicitar la eliminación de
                  tu información personal en ciertas circunstancias.
                </li>
                <li>
                  <strong className="dark:text-secondary_light">Oposición: </strong>Puedes oponerte al tratamiento de tu
                  información personal en ciertas situaciones.
                </li>
                <li>
                  <strong className="dark:text-secondary_light">Limitación: </strong>Puedes solicitar que limitemos el
                  uso de tu información personal.
                </li>
                <li>
                  <strong className="dark:text-secondary_light">Portabilidad: </strong>Puedes solicitar que te
                  proporcionemos tu información personal en un formato estructurado y de uso común.
                </li>
              </ul>
            </TituloYDescripcion>
            <TituloYDescripcion title="7. Contacto">
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
                  <a href="tel:+524438947493" className="text-dark dark:text-light">
                    +52 443 894 7493
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
          </ParagraphContainer>
        </div>
      </PageLayout>
    </>
  );
};

export default PoliticaPrivacidad;
