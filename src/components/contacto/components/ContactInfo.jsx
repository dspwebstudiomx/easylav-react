import { Paragraph, ParagraphContainer, SocialLinks, TitleH2 } from 'components';
import { scrollToTop } from 'functions';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <section className="animate__animated animate__bounceInLeft animate__slowest grid">
      <div className="mb-12">
        <TitleH2>¿Tienes alguna duda en la que te podemos ayudar? No dudes en llenar el formulario.</TitleH2>
      </div>
      <ParagraphContainer>
        <Paragraph>
          Nuestra forma de contacto es fácil y rápida. Puedes llenar el formulario en línea con tus preguntas y nos
          pondremos en contacto contigo enseguida.
          <br />
          <br />
          <strong>¡Esperamos saber de ti pronto!</strong>
          <br />
          <br />
          <span className="ml-1">Puedes visitar nuestra sección de</span>
          <span className="mx-2 font-semibold italic text-secondary dark:text-primary">
            <Link to={'/preguntas-frecuentes'}>Preguntas Frecuentes</Link>
          </span>
          <span className="">con las preguntas mas solicitadas. </span>
          Si gustas enviar felicitaciones y/o sugerencias no dudes en escribirnos a
          <span className="ml-2 font-semibold italic text-secondary dark:text-primary">
            <Link to="mailto:atnclientes@easylav.mx">Atención a clientes</Link>
          </span>
          .
        </Paragraph>

        <Paragraph>
          Si requieres solicitar una factura puedes visitar nuestra sección
          <span className="ml-2 font-semibold italic text-secondary dark:text-primary">
            <Link to="/facturacion" onClick={() => [scrollToTop()]}>
              Facturación
            </Link>
          </span>
          , llenar los datos completos y mandar la información.
        </Paragraph>
      </ParagraphContainer>
      <div className="mx-auto mb-24 mt-12 sm:mb-24 sm:mt-6 md:mb-0 lg:ml-0 2xl:mt-12 overflow-hidden">
        <SocialLinks color={'text-secondary dark:text-primary'} size={54} gap={'gap-4'} />
      </div>
    </section>
  );
};

export default ContactInfo;
