import { ContactForm, Paragraph, SEOFriendly, SocialLinks, Spacing, TitleH2 } from "components";
import { scrollToTop } from "functions";
import { Link } from "react-router-dom";
import { VistaLavanderiaDesdeEntrada_1_640 as image } from "assets";

const Contacto = () => {
  return (
    <>
      <SEOFriendly
        title="Contacto | Easylav - Envíanos tus dudas y sugerencias"
        url="easylav-react.netlify.app/contacto"
        description="Contáctanos fácilmente a través de nuestro formulario en línea. En Easylav estamos aquí para resolver tus dudas, recibir sugerencias y atender tus necesidades."
        author="dspwebstudio"
        publisher="dspwebstudio.com"
        keywords="contacto Easylav, dudas Easylav, sugerencias Easylav, formulario de contacto, atención al cliente Easylav"
        ogImage={image}
        ogImageAlt="Formulario de contacto de Easylav"
        ogType="website"
      />
      <section
        id="contactDescription"
        className="animate__slower grid items-center md:grid-cols-2 md:gap-12 xl:gap-20 w-full justify-center mx-auto"
      >
        <article className="animate__animated animate__bounceInLeft animate__slowest grid gap-0">
          <div className="">
            <TitleH2>
              ¿Tienes alguna duda en la que te podemos ayudar? No dudes en llenar el formulario.
            </TitleH2>
          </div>
          <Spacing distance='h-8' />
          <Paragraph>
            Nuestra forma de contacto es fácil y rápida. Puedes llenar el
            formulario en línea con tus preguntas y nos pondremos
            en contacto contigo enseguida.
            <br />
            <br />
            <strong>¡Esperamos saber de ti pronto!</strong>
            <br />
            <br />
            <span className="ml-1">Puedes visitar nuestra sección de</span>
            <span className="mx-2 font-semibold italic text-secondary dark:text-primary">
              <Link to={"/preguntas-frecuentes"}>Preguntas Frecuentes</Link>
            </span>
            <span className="">con las preguntas mas solicitadas. </span>
            Si gustas enviar felicitaciones y/o sugerencias no dudes en escribirnos a
            <span className="ml-2 font-semibold italic text-secondary dark:text-primary">
              <Link to="mailto:atnclientes@easylav.mx">Atencion a clientes</Link>
            </span>.
          </Paragraph>
          <Spacing distance='h-4' />
          <Paragraph>
            Si requieres solicitar una factura puedes visitar nuestra sección
            <span className="ml-2 font-semibold italic text-secondary dark:text-primary">
              <Link to="/facturacion" onClick={() =>
                [scrollToTop()]
              }>Facturación</Link>
            </span>, llenar los datos completos y mandar la información.
          </Paragraph>
          <div className="mx-auto mb-24 mt-12 sm:mb-24 sm:mt-6 md:mb-0 lg:ml-0 2xl:mt-12">
            <SocialLinks
              color={"text-secondary dark:text-primary"}
              size={54}
              gap={"gap-4"}
            />
          </div>
        </article>
        <div
          id="contactForm"
          className="animate__animated animate__bounceInRight animate__slowest mx-auto w-full"
        >
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contacto;
