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
const TerminosCondiciones = () => {
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
            Términos y Condiciones
          </TitleH1>
        </BorderLeft>
        {/* Columna 1 */}
        <article id="terminos-condiciones" className={'mt-12 text-lg'}>
          <ParagraphContainer>
            {/* Introducción */}
            <Paragraph>
              {`
              El presente documento regula los términos y condiciones generales (en adelante "TÉRMINOS Y CONDICIONES")
              aplicables al uso de los contenidos, productos y servicios ofrecidos a través del sitio web www.easylav.mx
              (en adelante "SITIO WEB"), cuyo titular es ADOLFO ARMANDO ALONZO OROZCO (en adelante "TITULAR") con nombre
              comercial EASYLAV con actividad de lavado de ropa, con la siguiente dirección: Laguna de Parras 585 - A,
              C. P. 58020, Col. Ventura Puente en Morelia, Michoacán.
              `}
            </Paragraph>
            <Paragraph>
              {`
              Toda persona que pretenda acceder o utilizar el sitio web y los servicios ofrecidos en él, podrá hacerlo únicamente
              sujeto a los TÉRMINOS Y CONDICIONES aquí establecidos, así como a las políticas y principios incorporados en el
              presente documento. En todo caso, aquella persona que no acepte los TÉRMINOS Y CONDICIONES vigentes,
              deberá abstenerse de utilizar el SITIO WEB y/o adquirir los productos y servicios que eventualmente sean ofrecidos
              en el mismo.
              `}
            </Paragraph>
            {/* Introducción */}

            {/* PRIMERA. ALCANCE Y CONDICIONES DE ACCESO. */}
            <TituloYDescripcion title="PRIMERA. ALCANCE Y CONDICIONES DE ACCESO.">
              <Paragraph>
                El propósito de los presentes TÉRMINOS Y CONDICIONES consiste en regular el acceso y el uso del SITIO
                WEB, comprendiendo dentro de este concepto cualquier tipo de contenido, producto o servicio que esté
                disponible para el público en general dentro del dominio www.easylav.mx.
              </Paragraph>
              <Paragraph>
                El TITULAR se reserva expresamente la facultad de realizar modificaciones en cualquier momento y sin
                previo aviso, tanto en la presentación, los contenidos, la funcionalidad, los productos, los servicios y
                la configuración que pudiera estar contenida en el SITIO WEB. En virtud de lo anterior, el USUARIO
                reconoce y acepta que el TITULAR en cualquier momento podrá interrumpir, desactivar o cancelar
                cualquiera de los elementos que conforman el SITIO WEB o el acceso a los mismos.
              </Paragraph>
              <Paragraph>
                El acceso al SITIO WEB por parte del USUARIO se establece como un acceso libre y, en general, gratuito,
                sin que el USUARIO esté obligado a proporcionar una contraprestación para disfrutar del mismo, con
                excepción del costo de la conexión a internet que el propio USUARIO haya contratado con el proveedor de
                servicios de este tipo.
              </Paragraph>
              <Paragraph>
                El ingreso a los contenidos y servicios proporcionados por medio del SITIO WEB no conllevará la
                necesidad de efectuar suscripción o registro alguno.
              </Paragraph>
              <Paragraph>
                El SITIO WEB está dirigido a personas de todas las edades, sin restricción alguna por su edad.
              </Paragraph>
              <Paragraph>
                El SITIO WEB ha sido diseñado principalmente para satisfacer las necesidades de USUARIOS que residen en
                territorio mexicano. Es importante destacar que el TITULAR no puede asegurar que el SITIO WEB cumpla con
                todas las leyes y regulaciones de otros países fuera de México. Si un USUARIO reside en otro país o
                tiene su domicilio fuera de México y decide acceder o utilizar el SITIO WEB, lo hace bajo su propio
                riesgo y responsabilidad. El USUARIO debe asegurarse de que el acceso y uso del SITIO WEB cumplan con
                las leyes y regulaciones locales que le sean aplicables en su país de residencia. El TITULAR no asume
                ninguna responsabilidad por las consecuencias legales o problemas que puedan surgir del acceso o uso del
                SITIO WEB desde ubicaciones fuera de México.
              </Paragraph>
              <Paragraph>
                El TITULAR puede optar por administrar y gestionar el SITIO WEB de manera directa o a través de un
                tercero autorizado. Esta decisión no afectará en ningún aspecto los TÉRMINOS Y CONDICIONES establecidos
                en este contrato. Continuarán aplicándose íntegramente todas las disposiciones aquí estipuladas, sin
                importar la modalidad de administración o gestión que el TITULAR elija. Nada en esta elección modificará
                los derechos y responsabilidades acordados entre el USUARIO y el TITULAR en estos TÉRMINOS Y
                CONDICIONES.
              </Paragraph>
            </TituloYDescripcion>
            {/* PRIMERA. ALCANCE Y CONDICIONES DE ACCESO. */}

            {/* SEGUNDA. USUARIO Y UTILIZACIÓN DEL SITIO WEB. */}
            <TituloYDescripcion title="SEGUNDA. USUARIO Y UTILIZACIÓN DEL SITIO WEB.">
              <Paragraph>
                El acceso o utilización del SITIO WEB, así como de los recursos habilitados para interactuar entre los
                USUARIOS, o entre el USUARIO y el TITULAR tales como medios para realizar publicaciones o comentarios,
                confiere la condición de USUARIO del SITIO WEB, por lo que quedará sujeto a los presentes TÉRMINOS Y
                CONDICIONES, así como a sus ulteriores modificaciones, sin perjuicio de la aplicación de la legislación
                aplicable, por tanto, se tendrán por aceptados desde el momento en el que se accede al SITIO WEB. Dada
                la relevancia de lo anterior, se recomienda al USUARIO revisar las actualizaciones que se realicen a los
                presentes TÉRMINOS Y CONDICIONES.
              </Paragraph>
              <Paragraph>
                El USUARIO asume la responsabilidad de utilizar el SITIO WEB de acuerdo con su diseño y finalidad
                establecida. Queda estrictamente prohibido utilizar cualquier tipo de software que automatice la
                interacción o descarga de los contenidos o servicios proporcionados a través del SITIO WEB. Asimismo, el
                USUARIO se compromete a utilizar la información, contenidos o servicios ofrecidos por el SITIO WEB de
                manera lícita, respetando plenamente los presentes TÉRMINOS Y CONDICIONES, así como los principios de
                moral y orden público. El USUARIO se abstendrá de realizar cualquier acto que pueda afectar los derechos
                de terceros o perjudicar el correcto funcionamiento del SITIO WEB.
              </Paragraph>
              <Paragraph>
                El TITULAR conserva el derecho de eliminar aquellos comentarios y contribuciones que infrinjan la ley,
                atenten contra la dignidad de las personas, sean discriminatorios, afecten los derechos de terceros,
                contravengan el orden público o, a su criterio, no sean adecuados para su publicación.
              </Paragraph>
              <Paragraph>
                En cualquier circunstancia, el TITULAR no será responsable de las opiniones expresadas por los USUARIOS
                mediante comentarios o publicaciones realizadas por estos últimos. El
              </Paragraph>
              <Paragraph>
                El acceso al SITIO WEB no implica el establecimiento de ningún tipo de relación entre el TITULAR y el
                USUARIO.
              </Paragraph>
            </TituloYDescripcion>
            {/* SEGUNDA. USUARIO Y UTILIZACIÓN DEL SITIO WEB. */}

            {/* TERCERA. ACCESO Y NAVEGACIÓN EN EL SITIO WEB */}
            <TituloYDescripcion title="TERCERA. ACCESO Y NAVEGACIÓN EN EL SITIO WEB.">
              <Paragraph>
                El TITULAR no puede garantizar de manera absoluta la continuidad y disponibilidad de los contenidos,
                productos o servicios ofrecidos a través del SITIO WEB. No obstante, el TITULAR se esforzará en la
                medida de lo posible para mantener un funcionamiento adecuado del SITIO WEB, aunque esto no implicará
                responsabilidad alguna por parte del TITULAR.
              </Paragraph>
              <Paragraph>
                Asimismo, el TITULAR no asume responsabilidad ni garantiza que el contenido o software al que se accede
                a través del SITIO WEB esté libre de errores o software malicioso que pueda causar daños al equipo o
                sistema del USUARIO.
              </Paragraph>
              <Paragraph>
                Es importante destacar que el USUARIO es responsable de utilizar el SITIO WEB de manera adecuada y
                cumpliendo con los presentes TÉRMINOS Y CONDICIONES, así como con la normativa vigente. Cualquier uso
                indebido o en contravención de lo establecido en dichos términos será responsabilidad exclusiva del
                USUARIO.
              </Paragraph>
              <Paragraph>
                El TITULAR no será responsable por pérdidas, daños o perjuicios de cualquier tipo que puedan surgir como
                resultado del acceso o utilización del SITIO WEB. El USUARIO asume toda la responsabilidad por cualquier
                consecuencia derivada de su interacción con el SITIO WEB y su contenido.
              </Paragraph>
            </TituloYDescripcion>
            {/* TERCERA. ACCESO Y NAVEGACIÓN EN EL SITIO WEB*/}

            {/* CUARTA. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS. */}
            <TituloYDescripcion title="CUARTA. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS.">
              <Paragraph>
                En estricto cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de
                Particulares en materia de protección de datos personales, el TITULAR asume el compromiso de implementar
                las medidas necesarias para asegurar la privacidad y seguridad de la información recabada, evitando su
                alteración, pérdida o uso no autorizado.
              </Paragraph>
              <Paragraph>
                Conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de
                Particulares, todo dato personal recolectado a través del SITIO WEB será tratado con estricto apego a
                los principios de licitud, calidad, finalidad, lealtad y responsabilidad. El tratamiento de dichos datos
                estará sujeto al consentimiento previo de su titular. En particular, el uso de datos financieros o
                patrimoniales requerirá de una autorización expresa por parte de los titulares, la cual podrá otorgarse
                a través de los mecanismos dispuestos en el SITIO WEB, asegurando en todo momento el cuidado y
                diligencia adecuados para proteger dicha información. Asimismo, lo mismo aplicará para el manejo de
                datos personales sensibles, entendiendo como tales aquellos que, en caso de un uso indebido, puedan
                ocasionar discriminación o representar un riesgo para el titular.
              </Paragraph>
              <Paragraph>
                Conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de
                Particulares, todo dato personal recolectado a través del SITIO WEB será tratado con estricto apego a
                los principios de licitud, calidad, finalidad, lealtad y responsabilidad. El tratamiento de dichos datos
                estará sujeto al consentimiento previo de su titular. En particular, el uso de datos financieros o
                patrimoniales requerirá de una autorización expresa por parte de los titulares, la cual podrá otorgarse
                a través de los mecanismos dispuestos en el SITIO WEB, asegurando en todo momento el cuidado y
                diligencia adecuados para proteger dicha información. Asimismo, lo mismo aplicará para el manejo de
                datos personales sensibles, entendiendo como tales aquellos que, en caso de un uso indebido, puedan
                ocasionar discriminación o representar un riesgo para el titular.
              </Paragraph>
              <Paragraph>
                En todo momento, se garantizará que los datos personales almacenados en las bases de datos o archivos
                pertinentes sean precisos, actualizados y adecuados para los fines específicos para los cuales fueron
                recopilados.
              </Paragraph>
              <Paragraph>
                La utilización de datos personales se restringirá a los propósitos establecidos en el Aviso de
                Privacidad, el cual estará accesible en la siguiente liga:{' '}
                <a href="/politica-privacidad" className="dark:text-secondary_light font-medium">
                  Política de Privacidad
                </a>
              </Paragraph>
              <Paragraph>
                El SITIO WEB podría contener hipervínculos o enlaces que redirijan a páginas web de terceros que no
                pertenecen al TITULAR. Dichos sitios web cuentan con sus propias políticas de privacidad y protección de
                datos, por lo tanto, el TITULAR no se hace responsable por la información que el USUARIO proporcione en
                sitios web diferentes al SITIO WEB.
              </Paragraph>
              <Paragraph>
                El TITULAR se reserva el derecho de modificar su Política de Privacidad según sea necesario o debido a
                cambios en la legislación. Al acceder o utilizar el SITIO WEB después de dichas modificaciones, el
                USUARIO acepta los cambios realizados.
              </Paragraph>
              <Paragraph>
                Asimismo, el acceso al SITIO WEB puede implicar el uso de cookies, que son pequeñas cantidades de
                información almacenadas en el navegador del USUARIO. Estas cookies facilitan la navegación y mejoran la
                experiencia del usuario sin dañar el dispositivo de navegación. Pueden recopilar información sobre el
                acceso al SITIO WEB, las preferencias del USUARIO y su interacción con el mismo, como la fecha y hora
                del acceso, el tiempo de uso, los sitios visitados antes y después, el número de páginas visitadas, la
                dirección IP del usuario, la frecuencia de visitas, etc.
              </Paragraph>
              <Paragraph>
                Esta información se utiliza para mejorar el SITIO WEB, detectar errores y satisfacer las necesidades del
                USUARIO, todo con el objetivo de ofrecer servicios y contenidos de mejor calidad. En todo caso, la
                información recopilada es anónima y no se identifica a usuarios individuales.
              </Paragraph>
              <Paragraph>
                Si el USUARIO no desea que se recopile este tipo de información, puede deshabilitar, rechazar,
                restringir y/o eliminar el uso de cookies en su navegador de internet. Cada navegador puede tener
                procedimientos distintos para llevar a cabo estas acciones, por lo que se recomienda revisar las
                instrucciones proporcionadas por el desarrollador del navegador. Si el USUARIO decide rechazar el uso de
                cookies (total o parcialmente), podrá seguir utilizando el SITIO WEB, aunque algunas funciones podrían
                quedar deshabilitadas.
              </Paragraph>
              <Paragraph>
                Es posible que en el futuro estas políticas con respecto a las cookies cambien o se actualicen, por lo
                que se recomienda revisar las actualizaciones a los presentes TÉRMINOS Y CONDICIONES para estar
                adecuadamente informado sobre el uso de cookies al ingresar o utilizar el SITIO WEB.
              </Paragraph>
            </TituloYDescripcion>
            {/* CUARTA. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS. */}

            {/* QUINTA. ENLACES Y CONTENIDOS EXTERNOS DEL SITIO WEB. */}
            <TituloYDescripcion title="QUINTA. ENLACES Y CONTENIDOS EXTERNOS DEL SITIO WEB.">
              <Paragraph>
                El SITIO WEB puede incluir enlaces, contenidos, servicios o funciones de otros sitios de internet que
                sean propiedad y/o gestionados por terceros, tales como imágenes, videos, comentarios, motores de
                búsqueda, entre otros.
              </Paragraph>
              <Paragraph>
                La utilización de estos enlaces, contenidos, servicios o funciones, tiene por objeto mejorar la
                experiencia del USUARIO al hacer uso del SITIO WEB, sin que pueda considerarse una sugerencia,
                recomendación o invitación para hacer uso de sitios externos.
              </Paragraph>
              <Paragraph>
                El TITULAR en ningún caso revisará o controlará el contenido de los sitios externos, de igual forma, no
                hace propios los productos, servicios, contenidos, y cualquier otro material existente en los referidos
                sitios enlazados; por lo cual, tampoco se garantizará la disponibilidad, exactitud, veracidad, validez o
                legalidad de los sitios externos a los que se pueda tener acceso a través del SITIO WEB. Así mismo, el
                TITULAR no asume ninguna responsabilidad por los daños y perjuicios que pudieran producirse por el
                acceso o uso, de los contenidos, productos o servicios disponibles en los sitios web no gestionados por
                el TITULAR a los que se pueda acceder mediante el SITIO WEB.
              </Paragraph>
              <Paragraph>
                <span className="">
                  Los USUARIOS o terceros que deseen realizar o publicar un enlace web desde una página web externa a
                  este SITIO WEB deben tener en cuenta lo siguiente: Queda prohibida la reproducción total o parcial de
                  los contenidos, productos o servicios disponibles en el SITIO WEB sin la autorización expresa del
                  TITULAR o su titular. Asimismo, no se permitirán manifestaciones falsas, inexactas o incorrectas sobre
                  el SITIO WEB, sus contenidos, productos o servicios, y el TITULAR se reserva el derecho de restringir
                  el acceso a aquellas personas que incurran en este tipo de actos.
                </span>
                <ul className="list-disc pl-6 xl:pl-12 mt-12">
                  <li>
                    Queda prohibida la reproducción total o parcial de los contenidos, productos o servicios disponibles
                    en el SITIO WEB sin la autorización expresa del TITULAR o su titular. Asimismo, no se permitirán
                    manifestaciones falsas, inexactas o incorrectas sobre el SITIO WEB, sus contenidos, productos o
                    servicios, y el TITULAR se reserva el derecho de restringir el acceso a aquellas personas que
                    incurran en este tipo de actos.
                  </li>
                </ul>
              </Paragraph>
              <Paragraph>
                El establecimiento de un enlace al SITIO WEB desde cualquier sitio externo no implicará la existencia de
                una relación entre el TITULAR y el titular del sitio web desde el cual se realiza el enlace. Además,
                esto no implicará el conocimiento por parte del TITULAR de los contenidos, productos o servicios
                ofrecidos en los sitios externos desde los cuales se puede acceder al SITIO WEB.
              </Paragraph>
            </TituloYDescripcion>
            {/* QUINTA. ENLACES Y CONTENIDOS EXTERNOS DEL SITIO WEB. */}

            {/* SEXTA. PROTECCIÓN DE DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL. */}
            <TituloYDescripcion title="SEXTA. PROTECCIÓN DE DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL.">
              <Paragraph>
                El SITIO WEB, incluyendo su código fuente, imágenes, archivos de audio o video, logotipos, marcas,
                combinaciones de colores, estructuras, diseños y otros elementos distintivos, son propiedad del TITULAR
                o han sido debidamente cedidos a su favor, quedando amparados por la legislación mexicana e
                internacional en materia de propiedad intelectual e industrial. En consecuencia, queda estrictamente
                prohibida la reproducción, distribución o difusión de los contenidos del SITIO WEB con fines
                comerciales, en cualquier formato o por cualquier medio, sin la previa autorización expresa del TITULAR.
              </Paragraph>
              <Paragraph>
                El USUARIO se compromete a respetar los derechos de propiedad intelectual e industrial del TITULAR. No
                obstante, se le permite visualizar los elementos del SITIO WEB, y podrá imprimirlos, copiarlos o
                almacenarlos exclusivamente para su uso personal.
              </Paragraph>
              <Paragraph>
                Asimismo, el USUARIO se obliga a no suprimir, alterar o manipular ningún elemento, archivo o contenido
                del SITIO WEB. De igual manera, se abstendrá de llevar a cabo acciones que pongan en riesgo la seguridad
                de los archivos o bases de datos protegidos, ya sea mediante acceso restringido con usuario y contraseña
                o por falta de permisos adecuados.
              </Paragraph>
              <Paragraph>
                <span>
                  Si el USUARIO o algún tercero considera que algún contenido del SITIO WEB vulnera sus derechos de
                  propiedad industrial o intelectual, deberá comunicarlo de manera inmediata al TITULAR utilizando los
                  datos de contacto disponibles en el propio SITIO WEB y/o mediante los siguientes medios de
                  comunicación:
                </span>
                <ul className="list-disc pl-6 xl:pl-12 mt-6">
                  <li>
                    Teléfono:{' '}
                    <a href="tel:+52435200593" className="dark:text-secondary_light font-medium">
                      435 200593
                    </a>
                  </li>
                  <li>
                    Correo electrónico:{' '}
                    <a href="mailto:atnclientes@easylav.mx" className="dark:text-secondary_light font-medium">
                      atnclientes@easylav.mx
                    </a>
                  </li>
                </ul>
              </Paragraph>
            </TituloYDescripcion>
            {/* SEXTA. PROTECCIÓN DE DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL. */}

            {/* SÉPTIMA. EXENCIÓN DE RESPONSABILIDAD POR ERRORES E INEXACTITUDES. */}
            <TituloYDescripcion title="SÉPTIMA. EXENCIÓN DE RESPONSABILIDAD POR ERRORES E INEXACTITUDES.">
              <Paragraph>
                El USUARIO reconoce y acepta que el SITIO WEB y los servicios ofrecidos ocasionalmente pueden contener
                errores tipográficos, inexactitudes u omisiones en relación a las descripciones de productos, precios,
                promociones, ofertas, cargos por envío de productos, tiempos de tránsito y disponibilidad.
              </Paragraph>
              <Paragraph>
                El TITULAR del SITIO WEB se reserva el derecho de corregir cualquier error, inexactitud u omisión sin
                previo aviso, así como de modificar o actualizar la información en el servicio o en cualquier página web
                relacionada, en caso de detectar información inexacta en el servicio o en alguna página web relacionada.
              </Paragraph>
              <Paragraph>
                El USUARIO comprende que el TITULAR no está obligado a actualizar, modificar o aclarar la información en
                el servicio o en cualquier sitio web relacionado, incluyendo, pero no limitándose a, la información de
                precios, excepto cuando lo exija la ley. Cualquier fecha de actualización indicada en el servicio o en
                cualquier sitio web relacionado no debe interpretarse como una indicación de que toda la información en
                el servicio o en cualquier sitio web relacionado ha sido modificada o actualizada.
              </Paragraph>
            </TituloYDescripcion>
            {/* SÉPTIMA. EXENCIÓN DE RESPONSABILIDAD POR ERRORES E INEXACTITUDES. */}

            {/* OCTAVA. PROHIBICIONES DE USO DEL SITIO WEB. */}
            <TituloYDescripcion title="OCTAVA. PROHIBICIONES DE USO DEL SITIO WEB.">
              <Paragraph>
                El USUARIO reconoce y acepta que está estrictamente prohibido utilizar el sitio web y su contenido para
                los siguientes fines, en adición a las restricciones establecidas en los TÉRMINOS Y CONDICIONES:
                <ul className="list-none pl-6 xl:pl-12 my-6">
                  <li>
                    a) Infringir cualquier reglamento, norma, ley u ordenanza local, internacional, federal, provincial
                    o estatal.
                  </li>
                  <li>b) Solicitar a otros que realicen o participen en cualquier acto ilegal.</li>
                  <li>
                    c) Violentar o vulnerar nuestros derechos de propiedad intelectual o los derechos de propiedad
                    intelectual de terceros.
                  </li>
                  <li>d) Cualquier propósito ilegal.</li>
                  <li>
                    e) Realizar actos de acoso, abuso, insulto, daño, difamación, calumnia, denigración, intimidación o
                    discriminación por motivos de género, orientación sexual, religión, etnia, raza, edad, nacionalidad
                    o discapacidad.
                  </li>
                  <li>f) Enviar información falsa o engañosa.</li>
                  <li>
                    g) Cargar o transmitir virus u otro tipo de código dañino que afecte o pueda afectar el
                    funcionamiento del servicio, el sitio web o cualquier otro sitio relacionado, así como de otros
                    sitios web o de Internet.
                  </li>
                  <li>h) Recopilar o rastrear información personal de terceros sin su consentimiento.</li>
                  <li>i) Utilizar el servicio con fines obscenos o inmorales.</li>
                  <li>
                    j) Interferir o eludir las medidas de seguridad del servicio, del sitio web o de otros sitios web o
                    de Internet.
                  </li>
                  <li>
                    k) Enviar correos no deseados o llevar a cabo prácticas como el phishing, pharming, pretexting,
                    spider, tracking o extracción de información.
                  </li>
                </ul>
                El USUARIO comprende y acepta que, en caso de contravenir cualquiera de las prohibiciones mencionadas,
                nos reservamos el derecho de dar por terminado su uso del servicio o de cualquier sitio web relacionado
                sin previo aviso.
              </Paragraph>
            </TituloYDescripcion>
            {/* OCTAVA. PROHIBICIONES DE USO DEL SITIO WEB. */}
          </ParagraphContainer>
        </article>
        {/* Columna 1 */}
      </PageLayout>
    </>
  );
};

export default TerminosCondiciones;
