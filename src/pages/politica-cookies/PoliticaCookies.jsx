import PageLayout from '../../components/layout/PageLayout';
import { BorderLeft, Paragraph, SEOFriendly, TitleH1, TituloYDescripcion } from 'components';
import { venturapuente as image } from 'assets';

const PoliticaCookies = () => {
  return (
    <>
      <SEOFriendly
        title="Política de Cookies | Easylav - Lavanderías en Morelia y León"
        description="Conoce nuestra Política de Cookies en Easylav. Descubre cómo utilizamos cookies para mejorar tu experiencia, analizar el tráfico y ofrecer contenido personalizado."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="política de cookies, cookies Easylav, cómo usamos cookies, cookies de rendimiento, cookies de funcionalidad, cookies de publicidad, Easylav cookies"
        url="https://easylav.mx/politica-cookies"
        ogImage={image}
        ogImageAlt="Política de Cookies de Easylav"
        ogType="article"
      />
      <PageLayout>
        <BorderLeft>
          <TitleH1 align="">Política de Cookies</TitleH1>
        </BorderLeft>

        <article id="politica-cookies" className="mt-12 text-lg flex flex-col gap-6">
          <Paragraph>
            Esta Política de Cookies explica qué son las cookies y cómo Easylav las utiliza. Al utilizar nuestro sitio
            web, usted acepta el uso de cookies de acuerdo con esta política.
          </Paragraph>
          <Paragraph>
            En <span className="text-secondary_dark dark:text-secondary_light font-semibold">easylav.mx</span>,
            utilizamos cookies y tecnologías similares para mejorar la experiencia de nuestros usuarios, analizar el
            tráfico en nuestro sitio y ofrecer contenido y publicidad personalizados. Estas Políticas de Cookies
            explican qué son las cookies, cómo las usamos y cómo puedes gestionarlas.
          </Paragraph>

          <TituloYDescripcion title="1. ¿Qué son las cookies?">
            <Paragraph>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, tableta o
              teléfono) cuando visitas nuestro sitio web. Las cookies permiten que nuestro sitio reconozca tu
              dispositivo y recuerde información como tus preferencias o acciones realizadas previamente.
            </Paragraph>
          </TituloYDescripcion>

          <TituloYDescripcion title="2. Tipos de cookies que utilizamos">
            <Paragraph>
              En <span className="text-secondary_dark dark:text-secondary_light font-semibold">easylav.mx</span>{' '}
              empleamos los siguientes tipos de cookies:
            </Paragraph>
            <ul className="pl-6 flex flex-col gap-2">
              <li className="mb-2">
                <strong className="dark:text-secondary_light">2.1 Cookies necesarias:</strong>
                <br /> Estas cookies son esenciales para el funcionamiento básico del sitio web y permiten funciones
                como el acceso a áreas seguras o el procesamiento de pedidos. Sin ellas, el sitio no puede funcionar
                correctamente.
              </li>
              <li className="mb-2">
                <strong className="dark:text-secondary_light">2.2 Cookies de rendimiento:</strong> <br /> Estas cookies
                recopilan información sobre cómo los usuarios interactúan con nuestro sitio, como las páginas que
                visitan con más frecuencia y posibles errores que encuentran. Esto nos ayuda a mejorar el rendimiento
                del sitio.
              </li>
              <li className="mb-2">
                <strong className="dark:text-secondary_light">2.3 Cookies de funcionalidad:</strong>
                <br /> Permiten que el sitio recuerde tus preferencias (como el idioma o la región) para ofrecer una
                experiencia más personalizada.
              </li>
              <li className="mb-2">
                <strong className="dark:text-secondary_light">2.4 Cookies de publicidad y analíticas:</strong>
                <br /> Utilizamos herramientas como Google Analytics y Facebook Pixel, que recopilan datos sobre tu
                interacción con nuestro sitio y nos ayudan a:
                <br />
                <br />
                <ul className="list-disc pl-12">
                  <li>Analizar el tráfico y el comportamiento de los usuarios.</li>
                  <li>Ofrecer publicidad personalizada según tus intereses.</li>
                  <li>Entender mejor cómo navegas por nuestro sitio.</li>
                  <li>Medir la efectividad de nuestras campañas publicitarias.</li>
                </ul>
              </li>
            </ul>
          </TituloYDescripcion>

          <TituloYDescripcion title="3. ¿Cómo usamos las cookies?">
            <Paragraph>Las cookies que utilizamos tienen las siguientes finalidades:</Paragraph>
            <ul className="pl-6 flex flex-col gap-2">
              <li className="mb-2">
                <strong className="dark:text-secondary_light">3.1 Mejora de la experiencia del usuario:</strong> Las
                cookies nos permiten recordar tus preferencias y personalizar tu experiencia en nuestro sitio.
              </li>
              <li className="mb-2">
                <strong className="dark:text-secondary_light">3.2 Análisis y estadísticas:</strong> Utilizamos cookies
                para recopilar datos sobre el tráfico y el comportamiento de los usuarios, lo que nos ayuda a mejorar
                nuestro sitio y ofrecer un mejor servicio.
              </li>
              <li className="mb-2">
                <strong className="dark:text-secondary_light">3.3 Publicidad personalizada:</strong> Las cookies nos
                permiten mostrar anuncios relevantes según tus intereses y comportamientos en línea.
              </li>
              <li className="mb-2">
                <strong className="dark:text-secondary_light">3.4 Redes sociales:</strong> Utilizamos cookies para
                permitir la integración con redes sociales y facilitar el uso compartido de contenido.
              </li>
            </ul>
          </TituloYDescripcion>

          <TituloYDescripcion title="4. ¿Cómo gestionar las cookies?">
            <Paragraph>
              Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador. La mayoría de
              los navegadores te permiten:
            </Paragraph>
            <ul className="pl-6 flex flex-col gap-2">
              <li className="mb-2">
                <strong className="dark:text-secondary_light">4.1 Navegador:</strong> Desde la configuración de tu
                navegador, puedes bloquear o eliminar cookies. Las opciones varían según el navegador que utilices
                (Chrome, Firefox, Safari, Edge, etc.).
              </li>
              <li className="mb-2">
                <strong className="dark:text-secondary_light">4.2 Deshabilitar Google Analytics:</strong> Si deseas
                deshabilitar las cookies utilizadas por Google Analytics, puedes instalar el complemento de
                inhabilitación para navegadores disponible{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  className="text-secondary_dark font-semibold dark:text-secondary_light"
                  rel="noopener noreferrer"
                  title="Deshabilitar Google Analytics">
                  aquí
                </a>
                .
              </li>
              <li className="mb-2">
                <strong className="dark:text-secondary_light">4.3 Facebook Pixel:</strong> En el caso de Facebook Pixel,
                puedes gestionar la personalización de anuncios en tu configuración de privacidad de Facebook.
              </li>
            </ul>
            <Paragraph>
              <strong className="text-xl text-secondary_dark dark:text-secondary_light">Nota:</strong> Ten en cuenta que
              si decides desactivar las cookies, es posible que algunas funciones de nuestro sitio no funcionen
              correctamente y tu experiencia de navegación se vea afectada.
            </Paragraph>
          </TituloYDescripcion>

          <TituloYDescripcion title="5. Cookies de terceros">
            <Paragraph>
              Algunas cookies en nuestro sitio pueden ser gestionadas por terceros, como Google y Meta (Facebook), que
              pueden usar estas cookies para sus propios fines, como análisis o publicidad. No tenemos control sobre
              estas cookies de terceros, por lo que te recomendamos revisar las políticas de privacidad y cookies de
              estos proveedores para obtener más información sobre cómo utilizan tus datos.
            </Paragraph>
          </TituloYDescripcion>

          <TituloYDescripcion title="6. Cambios en nuestras Políticas de Cookies">
            <Paragraph>
              Nos reservamos el derecho de actualizar estas Políticas de Cookies para reflejar cambios legales o
              tecnológicos. Te notificaremos de cualquier cambio significativo en esta página.
            </Paragraph>
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
        </article>
      </PageLayout>
    </>
  );
};

export default PoliticaCookies;
